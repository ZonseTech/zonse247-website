import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";

export function SiteLogo() {
  return (
    <Link href="/" className="group flex shrink-0 items-center gap-2" aria-label="Zonse247 Group of Companies home">
      <Image
        src={logo}
        alt=""
        width={36}
        height={36}
        preload
        className="size-9 transition-transform duration-300 ease-out motion-safe:group-hover:-rotate-12"
      />
      <span className="flex flex-col leading-none">
        <span className="font-heading text-2xl font-bold tracking-tight text-white">
          Zonse<span className="text-amber-400">247</span>
        </span>
        <span className="mt-0.5 text-[0.6rem] font-semibold tracking-[0.2em] text-white/60 uppercase">Group of Companies</span>
      </span>
    </Link>
  );
}
