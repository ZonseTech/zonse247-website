import { Mail, MapPin, MessageCircle, Phone, type LucideIcon } from "lucide-react";
import { Suspense, type CSSProperties } from "react";
import { CONTACT } from "@/lib/site";
import { ContactForm } from "./contact-form";

const STEPS = ["We get back to you", "We plan it together", "We deliver and support"];

function channels() {
  const list: { label: string; value: string; href?: string; Icon: LucideIcon }[] = [];
  if (CONTACT.whatsapp) list.push({ label: "WhatsApp", value: `+${CONTACT.whatsapp}`, href: `https://wa.me/${CONTACT.whatsapp}`, Icon: MessageCircle });
  if (CONTACT.phone) list.push({ label: "Call", value: CONTACT.phone, href: `tel:${CONTACT.phone.replace(/\s/g, "")}`, Icon: Phone });
  if (CONTACT.email) list.push({ label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}`, Icon: Mail });
  list.push({ label: "Based in", value: CONTACT.location, Icon: MapPin });
  return list;
}

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="dark relative isolate overflow-clip bg-slate-950 pb-24 text-white sm:pb-32">
      <div
        aria-hidden
        className="absolute right-0 bottom-0 -z-10 h-[36rem] w-[48rem] bg-[radial-gradient(ellipse_at_bottom_right,rgb(14_165_233/0.12),transparent_65%)]"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-14 border-t border-white/10 pt-16 sm:pt-20 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
          <div>
            <p className="flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-sky-400 uppercase">
              <span aria-hidden className="h-0.5 w-10 bg-amber-400" />
              Contact
            </p>
            <h2 id="contact-title" className="mt-5 font-heading text-4xl leading-tight font-bold text-balance sm:text-5xl">
              Let&apos;s build what&apos;s next
            </h2>
            <p className="mt-5 max-w-md text-lg text-white/60">Tell us what you need and we&apos;ll get back to you.</p>

            <ul className="mt-10 divide-y divide-white/10 border-y border-white/10">
              {channels().map(({ label, value, href, Icon }) => {
                const body = (
                  <>
                    <span className="grid size-10 shrink-0 place-items-center border border-sky-400/30 bg-sky-400/10 text-sky-400 transition-colors group-hover:border-sky-400 group-hover:bg-sky-400 group-hover:text-slate-950">
                      <Icon className="size-4 stroke-[1.75]" aria-hidden />
                    </span>
                    <span>
                      <span className="block text-xs tracking-wider text-white/45 uppercase">{label}</span>
                      <span className="mt-0.5 block font-medium">{value}</span>
                    </span>
                  </>
                );
                return (
                  <li key={label}>
                    {href ? (
                      <a href={href} className="group flex items-center gap-4 py-4 transition-colors hover:text-sky-300">
                        {body}
                      </a>
                    ) : (
                      <div className="group flex items-center gap-4 py-4">{body}</div>
                    )}
                  </li>
                );
              })}
            </ul>

            <p className="mt-10 text-xs font-semibold tracking-[0.2em] text-white/45 uppercase">What happens next</p>
            <ol className="mt-5 space-y-4">
              {STEPS.map((step, i) => (
                <li key={step} style={{ "--i": i } as CSSProperties} className="reveal-stagger flex items-center gap-4">
                  <span className="grid size-8 shrink-0 place-items-center border border-white/15 font-mono text-xs text-sky-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-white/80">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="reveal relative border border-white/10 bg-linear-to-br from-white/[0.05] to-transparent p-6 sm:p-10">
            <span aria-hidden className="absolute inset-x-0 top-0 h-0.5 bg-linear-to-r from-sky-500 to-amber-400" />
            <Suspense fallback={<div className="min-h-96" />}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
}
