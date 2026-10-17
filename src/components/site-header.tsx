import { DesktopNav } from "./desktop-nav";
import { HeaderShell } from "./header-shell";
import { MobileNav } from "./mobile-nav";
import { SiteLogo } from "./site-logo";
import { SocialLinks } from "./social-icons";

export function SiteHeader() {
  return (
    <HeaderShell>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-4 transition-[height] duration-300 group-data-[scrolled=true]/header:h-16 sm:px-6">
        <SiteLogo />
        <DesktopNav />
        <div className="flex items-center gap-4">
          <SocialLinks className="hidden text-white/80 sm:flex" />
          <MobileNav />
        </div>
      </div>
    </HeaderShell>
  );
}
