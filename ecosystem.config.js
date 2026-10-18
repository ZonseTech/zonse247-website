module.exports = {
  apps: [
    {
      name: "web",
      script: "server.js",
      cwd: "/var/www/web/current",
      instances: 2,
      exec_mode: "cluster",
      env_production: {
        NODE_ENV: "production",
        PORT: 3002,
        HOSTNAME: "127.0.0.1",
      },
      max_memory_restart: "400M",
      autorestart: true,
      watch: false,
      time: true,
      merge_logs: true,
      out_file: "/var/www/web/shared/logs/out.log",
      error_file: "/var/www/web/shared/logs/err.log",
      log_date_format: "YYYY-MM-DD HH:mm Z",
    },
  ],
};
