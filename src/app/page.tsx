import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Services />
      </main>
    </>
  );
}
