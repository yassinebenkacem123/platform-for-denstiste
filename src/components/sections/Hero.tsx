import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Reveal } from "@/components/ui/Reveal";
import { featuredServices, socialLinks } from "@/data/site-data";

export function Hero() {
  return (
    <section id="home" className="site-shell relative min-h-[880px] overflow-hidden pt-28 max-lg:pb-20 lg:pt-0">
      <Header />
      <div className="ice-gradient absolute -right-10 -top-14 hidden h-[556px] w-[50.5%] lg:block" />
      <Reveal className="relative z-10 px-[var(--page-pad)] pt-10 lg:absolute lg:left-0 lg:top-[142px] lg:w-[42%] lg:pt-0">
        <h1 className="display text-[clamp(3.35rem,5.22vw,6rem)] leading-[1.19] lg:whitespace-nowrap">Treat yourself<br />with beautiful,<br /><span className="text-brand">white</span> smile.</h1>
      </Reveal>
      <Reveal className="relative mx-[var(--page-pad)] mt-10 aspect-[1.25] overflow-hidden sm:aspect-[1.6] lg:absolute lg:left-[33.91%] lg:top-24 lg:mx-0 lg:mt-0 lg:h-[712px] lg:w-[62.6%]" delay={.12}>
        <Image src="/images/hero.png" alt="Smiling patient with a healthy smile" fill priority sizes="(min-width: 1024px) 63vw, 92vw" className="object-cover" />
        <Image src="/images/hero-overlays.svg" alt="" fill sizes="(min-width: 1024px) 63vw, 92vw" className="object-fill" />
      </Reveal>
      <div className="relative z-20 mx-[var(--page-pad)] mt-0 grid bg-white py-5 sm:grid-cols-3 lg:absolute lg:left-16 lg:top-[528px] lg:mx-0 lg:h-[136px] lg:w-[848px] lg:py-0">
        {featuredServices.map((service, index) => <article key={service} className="px-4 py-3 lg:pt-[19px]"><p className="text-2xl font-bold tracking-[-.01em] text-brand">0{index + 1}.</p><h2 className="mt-0.5 text-[21px] tracking-[.03em]">{service}</h2><Link href="#services" className="mt-2 inline-flex items-center gap-4 text-lg tracking-[.07em] text-muted hover:text-brand">Learn More <Image src="/images/arrow.svg" alt="" width={9} height={8} /></Link></article>)}
      </div>
      <div className="absolute right-6 top-40 hidden flex-col gap-10 lg:flex">{socialLinks.map(item => <Link key={item.name} href={item.href} aria-label={item.name}><Image src={`/images/social-${item.icon}.svg`} alt="" width={20} height={20} className="max-h-5 w-5 object-contain" /></Link>)}</div>
      <div className="absolute right-[26px] top-[600px] z-20 hidden flex-col gap-4 lg:flex">
        <Link href="#home" aria-label="Scroll to the top" className="grid h-14 w-4 place-items-center"><Image src="/images/arrow-up.svg" alt="" width={56} height={8} className="max-w-none -rotate-90" /></Link>
        <Link href="#about" aria-label="Scroll to the next section" className="grid h-14 w-4 place-items-center"><Image src="/images/arrow-down.svg" alt="" width={56} height={8} className="max-w-none rotate-90" /></Link>
      </div>
    </section>
  );
}
