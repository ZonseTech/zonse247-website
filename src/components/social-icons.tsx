import type { ComponentType, ReactNode } from "react";
import { SOCIAL_LINKS } from "@/lib/site";
import { cn } from "@/lib/utils";

const icon = (path: ReactNode) =>
  function SocialIcon({ className }: { className?: string }) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
        {path}
      </svg>
    );
  };

const XGlyph = icon(<path d="M17.8 3h3.3l-7.2 8.2L22.3 21h-6.6l-5.2-6.8L4.6 21H1.3l7.7-8.8L1 3h6.8l4.7 6.2zm-1.2 16.1h1.8L7.5 4.8H5.6z" />);

const FacebookGlyph = icon(
  <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z" />,
);

const InstagramGlyph = icon(
  <path d="M12 2.2c3.2 0 3.6 0 4.8.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-3.3-.1-4.8-1.7-4.9-4.9-.1-1.3-.1-1.6-.1-4.8s0-3.6.1-4.8C2.4 4 4 2.4 7.2 2.3c1.2-.1 1.6-.1 4.8-.1zm0 4.7a5.1 5.1 0 1 0 0 10.2 5.1 5.1 0 0 0 0-10.2zm0 8.4a3.3 3.3 0 1 1 0-6.6 3.3 3.3 0 0 1 0 6.6zm5.3-9.8a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4z" />,
);

const LinkedInGlyph = icon(
  <path d="M20.4 2H3.6A1.6 1.6 0 0 0 2 3.6v16.8A1.6 1.6 0 0 0 3.6 22h16.8a1.6 1.6 0 0 0 1.6-1.6V3.6A1.6 1.6 0 0 0 20.4 2zM8 19H5V9.5h3zM6.5 8.2a1.7 1.7 0 1 1 0-3.5 1.7 1.7 0 0 1 0 3.5zM19 19h-3v-4.6c0-1.1 0-2.5-1.5-2.5S12.8 13 12.8 14.3V19h-3V9.5h2.8v1.3a3.1 3.1 0 0 1 2.8-1.5c3 0 3.6 2 3.6 4.6z" />,
);

const SOCIAL: { name: string; key: keyof typeof SOCIAL_LINKS; Glyph: ComponentType<{ className?: string }> }[] = [
  { name: "X", key: "x", Glyph: XGlyph },
  { name: "Facebook", key: "facebook", Glyph: FacebookGlyph },
  { name: "Instagram", key: "instagram", Glyph: InstagramGlyph },
  { name: "LinkedIn", key: "linkedin", Glyph: LinkedInGlyph },
];

export function SocialLinks({ className }: { className?: string }) {
  return (
    <ul className={cn("flex items-center gap-3.5", className)}>
      {SOCIAL.map(({ name, key, Glyph }) => {
        const href = SOCIAL_LINKS[key];
        return (
          <li key={key}>
            {href ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Zonse247 on ${name}`}
                className="transition-colors hover:text-white"
              >
                <Glyph className="size-4" />
              </a>
            ) : (
              <span title={name}>
                <Glyph className="size-4" />
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
