# Zonse247 Group of Companies website

The company website for Zonse247: IT and electronics supply, software and systems development, data, AI and emerging tech, IT advisory and support, plus the Zonse247 POS, Marketplace and Business Automation products.

Built with Next.js 16 (App Router), React 19, Tailwind CSS 4, shadcn/ui and Three.js.

- [Local development](#local-development)
- [How deployment works](#how-deployment-works)
- [Step 1: Prepare the server](#step-1-prepare-the-server)
- [Step 2: Configure Nginx and HTTPS](#step-2-configure-nginx-and-https)
- [Step 3: Set up GitHub](#step-3-set-up-github)
- [Step 4: First deploy](#step-4-first-deploy)
- [Everyday releases](#everyday-releases)
- [Rolling back](#rolling-back)
- [Environment variables](#environment-variables)
- [Troubleshooting](#troubleshooting)

## Local development

Requirements: Node.js 22 (see `.nvmrc`) and npm.

```bash
npm ci
npm run dev
```

Open http://localhost:3000.

Before opening a pull request, run the same checks as CI:

```bash
npx next typegen
npx tsc --noEmit
npm run lint
npm run build
```

To test the enquiry form locally, create `.env.local` with `ENQUIRY_WEBHOOK_URL` (see [Environment variables](#environment-variables)).

## How deployment works

Every merge to `main` deploys automatically. Two GitHub Actions workflows handle it:

| Workflow | Runs on | What it does |
|---|---|---|
| `ci.yml` | Every pull request | Type check, lint, build and a security audit |
| `deploy.yml` | Every push to `main`, or manually | Runs CI, then releases the build to the server |

A release goes like this:

1. **Build once in CI.** The site is built as a self-contained bundle (`output: "standalone"`) and packaged as `web.tar.gz`. The server never runs `npm install` or `next build`.
2. **Upload.** The bundle is copied to the server over SSH.
3. **Unpack.** It is extracted into its own folder, `/var/www/web/releases/<commit>`, and linked to the shared `.env.production`.
4. **Pre-flight.** The new release is started on a private port (3102) and must respond before anything else happens. If it fails, the deploy stops and the live site is untouched.
5. **Switch.** The `/var/www/web/current` link is swapped to the new release in one atomic step, and PM2 reloads its two instances one at a time, so there is no downtime.
6. **Health check.** If the live site does not respond after the switch, it rolls back to the previous release automatically.
7. **Clean up.** The last five releases are kept; older ones are deleted.

Server layout:

```
/var/www/web/
├── current -> releases/<commit>     the live release
├── releases/<commit>/               one folder per deploy (last 5 kept)
├── incoming/                        temporary upload folder
└── shared/
    ├── .env.production              secrets, never in git
    └── logs/                        PM2 and pre-flight logs
```

The site runs under PM2 as `web`, listening on `127.0.0.1:3002`. Nginx sits in front and serves it on ports 80 and 443. The API runs separately on port 3001 and is not affected.

## Step 1: Prepare the server

These steps assume Ubuntu 22.04 or 24.04. Do them once, logged in as a user with `sudo`.

### 1.1 Create the deploy user

Use a dedicated user for deployments. If the API already uses a deploy user on this server, you can reuse it and skip to 1.2.

```bash
sudo adduser --disabled-password --gecos "" deploy
```

### 1.2 Install Node.js 22 and PM2

Install Node.js system-wide so it is on the `PATH` for non-interactive SSH sessions, which is how GitHub Actions connects. Avoid nvm here: it only loads in interactive shells.

```bash
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install -g pm2
node --version   # v22.x
pm2 --version
```

### 1.3 Create the app folders

```bash
sudo mkdir -p /var/www/web/shared/logs
sudo chown -R deploy:deploy /var/www/web
```

### 1.4 Add the environment file

```bash
sudo -u deploy nano /var/www/web/shared/.env.production
```

Add the variables from [Environment variables](#environment-variables), for example:

```
ENQUIRY_WEBHOOK_URL=https://hooks.example.com/zonse247-enquiries
```

Then lock it down:

```bash
sudo chmod 600 /var/www/web/shared/.env.production
```

### 1.5 Start PM2 on boot

```bash
sudo -u deploy pm2 startup systemd -u deploy --hp /home/deploy
```

PM2 prints a `sudo env PATH=... pm2 startup ...` command. Copy and run it exactly as printed. Each deploy runs `pm2 save`, so the site comes back automatically after a reboot.

### 1.6 Set up the deploy key

On your own computer, create a key used only for deployments:

```bash
ssh-keygen -t ed25519 -C "github-actions-zonse247-website" -f zonse247-website-deploy -N ""
```

This creates two files:

- `zonse247-website-deploy.pub` (public key): add it to the server.
- `zonse247-website-deploy` (private key): goes into GitHub in [Step 3](#step-3-set-up-github).

On the server, authorise the public key for the deploy user:

```bash
sudo -u deploy mkdir -p /home/deploy/.ssh
sudo -u deploy nano /home/deploy/.ssh/authorized_keys   # paste the .pub contents on a new line
sudo chmod 700 /home/deploy/.ssh
sudo chmod 600 /home/deploy/.ssh/authorized_keys
```

Check it works from your computer:

```bash
ssh -i zonse247-website-deploy deploy@YOUR_SERVER_IP "node --version && pm2 --version"
```

### 1.7 Firewall

Only SSH and web traffic should be open. Port 3002 is bound to localhost and must not be exposed.

```bash
sudo ufw allow OpenSSH
sudo ufw allow "Nginx Full"
sudo ufw enable
```

## Step 2: Configure Nginx and HTTPS

Run these blocks in order, in the same terminal session, since later steps use the variables from 2.2. Every block is safe to re-run.

### 2.1 Install Nginx

Skip this if the API already uses Nginx on this server.

```bash
sudo apt-get install -y nginx
```

### 2.2 Set your domain

```bash
DOMAIN=zonse247.com
SITE=/etc/nginx/sites-available/zonse247-website
```

Replace `zonse247.com` with your domain.

### 2.3 Check for conflicts

```bash
sudo grep -rn "server_name" /etc/nginx/sites-enabled/
```

If another site already lists your domain, stop and resolve it first. Two sites can't own the same domain.

### 2.4 Create the site

```bash
sudo tee "$SITE" > /dev/null <<'EOF'
server {
    listen 80;
    server_name __DOMAIN__ www.__DOMAIN__;

    location /_next/static/ {
        proxy_pass http://127.0.0.1:3002;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }

    location / {
        proxy_pass http://127.0.0.1:3002;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
EOF
sudo sed -i "s/__DOMAIN__/$DOMAIN/g" "$SITE"
grep server_name "$SITE"
```

The last line should print `server_name zonse247.com www.zonse247.com;` with your domain.

The quotes around `'EOF'` matter: they stop the shell from swallowing Nginx's own variables such as `$host`. `sed` then fills in your domain.

### 2.5 Enable, test and reload

```bash
sudo ln -sfn "$SITE" /etc/nginx/sites-enabled/zonse247-website
sudo nginx -t && sudo systemctl reload nginx
systemctl status nginx --no-pager | head -5
```

`nginx -t` must show `syntax is ok` and `test is successful`, and the status should be `active (running)`. If the test fails, Nginx keeps running on its previous config. Fix the error it reports, then re-run this block.

### 2.6 Check the site answers

```bash
curl -sI -H "Host: $DOMAIN" http://127.0.0.1 | head -1
```

| Result | Meaning |
|---|---|
| `HTTP/1.1 502 Bad Gateway` | Expected before the first deploy. Nginx works; the app isn't running yet. |
| `HTTP/1.1 200 OK` | Expected after the first deploy. |
| `404` or the Nginx welcome page | Another site is answering. Recheck 2.3 and `ls /etc/nginx/sites-enabled/`. |

### 2.7 Point the domain at the server

At your DNS provider, create `A` records for your domain and `www` pointing to the server's IP address. Then check:

```bash
curl -s https://api.ipify.org; echo "  <- this server"
getent hosts "$DOMAIN" "www.$DOMAIN"
```

Both domain lines must show the server's IP. If they don't, wait a few minutes for DNS to update. HTTPS in the next step fails until they match.

### 2.8 Turn on HTTPS

```bash
sudo apt-get install -y certbot python3-certbot-nginx
sudo certbot --nginx -d "$DOMAIN" -d "www.$DOMAIN" --redirect
```

`--redirect` sends all `http://` traffic to `https://`. Certbot renews the certificate automatically.

### 2.9 Check HTTPS and renewal

```bash
sudo certbot certificates | grep -E "Domains|Expiry"
sudo certbot renew --dry-run | tail -2
curl -sI "http://$DOMAIN" | grep -iE "^HTTP|^location"
```

| Check | Expected |
|---|---|
| Certificate | Both domains listed, expiring in about 90 days |
| Renewal | `Congratulations, all simulated renewals succeeded` |
| Redirect | A `301` with `location: https://...` |

If anything goes wrong, see what Nginx is complaining about:

```bash
sudo tail -n 30 /var/log/nginx/error.log
sudo nginx -T 2>/dev/null | grep -n "server_name"
```

## Step 3: Set up GitHub

All of this is in the `ZonseTech/zonse247-website` repository settings.

### 3.1 Create the production environment

Go to **Settings → Environments → New environment** and name it exactly `production`.

Optional but recommended: under **Deployment protection rules**, add **Required reviewers** so someone must approve each deploy.

### 3.2 Add the secrets

Go to **Settings → Secrets and variables → Actions → New repository secret** and add:

| Secret | Value |
|---|---|
| `DEPLOY_HOST` | The server's IP address or hostname |
| `DEPLOY_USER` | `deploy` (or the user you chose in 1.1) |
| `DEPLOY_SSH_KEY` | The full contents of the private key file `zonse247-website-deploy`, including the `-----BEGIN` and `-----END` lines |
| `DEPLOY_HOST_FINGERPRINT` | Recommended. The server's SSH fingerprint, so GitHub refuses to connect to an impostor server |

To get the fingerprint, run this from your computer:

```bash
ssh-keyscan -t ecdsa YOUR_SERVER_IP 2>/dev/null | ssh-keygen -lf -
```

Copy the part that starts with `SHA256:`.

After adding the private key to GitHub, delete `zonse247-website-deploy` from your computer, or store it in your password manager.

### 3.3 Protect the main branch

Go to **Settings → Branches → Add branch ruleset** for `main` and:

- Require a pull request before merging.
- Require status checks to pass, and select **Lint, type check and build** and **Security audit**.

This guarantees nothing reaches production without passing CI.

## Step 4: First deploy

1. Merge the pull request containing the CI/CD files into `main`, or go to **Actions → Deploy → Run workflow** and choose `main`.
2. Watch the run in the **Actions** tab. The **Release to production** job ends with `✅ Released <commit>`.
3. Check on the server:

   ```bash
   sudo -u deploy pm2 status         # "web" with 2 instances, online
   readlink /var/www/web/current     # the commit just released
   curl -I http://127.0.0.1:3002     # HTTP/1.1 200 OK
   ```

4. Open https://zonse247.com in a browser.

## Everyday releases

1. Create a branch and make your changes.
2. Open a pull request. CI runs automatically.
3. Merge when CI is green. The site deploys on its own within a few minutes.

To redeploy without code changes, for example after editing `.env.production`, go to **Actions → Deploy → Run workflow**.

## Rolling back

**Automatic.** If a release fails the pre-flight or the health check, nothing changes or it rolls back on its own. The run is marked failed in GitHub.

**Preferred manual rollback.** Revert the bad commit on GitHub and merge the revert. It deploys like any release and keeps `main` matching production.

**Emergency rollback on the server.** Use this when you need the previous version back immediately.

```bash
sudo -iu deploy
cd /var/www/web
ls -1t releases                                  # newest first; pick the one to restore
ln -sfn releases/<commit> current.next && mv -Tf current.next current
pm2 reload web
exit
```

Then revert the bad commit on GitHub, or the next deploy will release it again.

## Environment variables

Production values live in `/var/www/web/shared/.env.production` on the server, never in git. After changing them, apply them with `sudo -u deploy pm2 reload web`.

| Variable | Required | Purpose |
|---|---|---|
| `ENQUIRY_WEBHOOK_URL` | For the contact form | Where enquiries are sent. Each enquiry is POSTed as JSON with `name`, `contact`, `interest`, `interestLabel`, `message`, `source` and `receivedAt`. Any endpoint that accepts JSON works: Zapier, Make, Slack, or an API endpoint. Without it, the form tells visitors that enquiries are not connected yet. |

Contact details shown on the site (WhatsApp, phone, email) and company figures are set in `src/lib/site.ts`, not in environment variables.

## Troubleshooting

| Problem | Check |
|---|---|
| Deploy fails at **Upload release to server** | Wrong `DEPLOY_HOST`, `DEPLOY_USER` or `DEPLOY_SSH_KEY`, or the public key is missing from `authorized_keys`. With a fingerprint set, a mismatch also fails here: re-run the `ssh-keyscan` command and update the secret. |
| `pm2: command not found` or `node: command not found` | Node or PM2 is not on the system `PATH`. Reinstall with [1.2](#12-install-nodejs-22-and-pm2) rather than nvm. |
| `failed pre-flight; production untouched` | The new build could not start. Read `/var/www/web/shared/logs/preflight.log`, fix the cause, and merge again. |
| `unhealthy after switch` | Read `sudo -u deploy pm2 logs web --lines 100`. The previous release has already been restored. |
| Site shows **502 Bad Gateway** | The app is not running. Check `sudo -u deploy pm2 status` and `pm2 logs web`. Restart with `sudo -u deploy pm2 reload web`. |
| Contact form says enquiries aren't connected | `ENQUIRY_WEBHOOK_URL` is missing from `.env.production`. Add it, then reload PM2. |
| Site is down after a server reboot | Repeat [1.5](#15-start-pm2-on-boot), then run the Deploy workflow once. |

Useful commands on the server:

```bash
sudo -u deploy pm2 status                 # running processes
sudo -u deploy pm2 logs web               # live logs
sudo -u deploy pm2 monit                  # CPU and memory
ls -1t /var/www/web/releases              # available releases
tail -f /var/www/web/shared/logs/err.log  # error log
```
