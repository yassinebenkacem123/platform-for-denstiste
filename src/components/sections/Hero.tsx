import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Reveal } from "@/components/ui/Reveal";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { featuredServices, socialLinks } from "@/data/site-data";

export function Hero() {
  return (
    <section id="home" className="site-shell relative overflow-hidden pb-16 pt-28 max-lg:min-h-0 lg:min-h-[880px] lg:pt-0">
      <Header />
      <div className="ice-gradient absolute -right-10 -top-14 hidden h-[556px] w-[50.5%] lg:block" />
      <Reveal className="relative z-10 px-[var(--page-pad)] pt-10 lg:absolute lg:left-0 lg:top-[125px] lg:w-[44%] lg:pt-0">
        <p className="mb-3 text-xs font-bold uppercase tracking-[.2em] text-brand">Cabinet Dentaire Dr. Mansouri</p>
        <h1 className="display text-[clamp(2.5rem,4.8vw,5.5rem)] leading-[1.15] lg:whitespace-nowrap">Offrez-vous<br />un sourire beau,<br /><span className="text-brand">éclatant</span> et blanc.</h1>
        <p className="copy mt-6 max-w-[420px]">Bienvenue au cabinet du Dr. Mansouri à Casablanca. Des soins dentaires d&apos;excellence et sur mesure pour toute la famille.</p>
      </Reveal>
      <Reveal className="relative mx-[var(--page-pad)] mt-10 aspect-[1.25] overflow-hidden sm:aspect-[1.6] lg:absolute lg:left-[33.91%] lg:top-24 lg:mx-0 lg:mt-0 lg:h-[712px] lg:w-[62.6%]" delay={.12}>
        <Image src="/images/hero.png" alt="Patient souriant avec un beau sourire sain" fill priority sizes="(min-width: 1024px) 63vw, 92vw" className="object-cover" />
        <Image src="/images/hero-overlays.svg" alt="" fill sizes="(min-width: 1024px) 63vw, 92vw" className="object-fill" />
      </Reveal>
      <div className="relative z-20 mx-[var(--page-pad)] mt-4 grid divide-y divide-gray-100 bg-white sm:divide-x sm:divide-y-0 sm:grid-cols-3 lg:absolute lg:left-16 lg:top-[528px] lg:mx-0 lg:h-[136px] lg:w-[848px] lg:py-0">
        {featuredServices.map((service, index) => <article key={service} className="px-4 py-3 lg:pt-[19px]"><p className="text-2xl font-bold tracking-[-.01em] text-brand">0{index + 1}.</p><h2 className="mt-0.5 text-[21px] tracking-[.03em]">{service}</h2><Link href="#services" className="mt-2 inline-flex items-center gap-4 text-lg tracking-[.07em] text-muted hover:text-brand">En savoir plus <Image src="/images/arrow.svg" alt="" width={9} height={8} /></Link></article>)}
      </div>

      {/* Floating social media links on the right */}
      <div className="absolute right-6 top-36 hidden flex-col gap-3.5 lg:flex">
        {socialLinks.map(item => (
          <Link
            key={item.name}
            href={item.href}
            aria-label={item.name}
            className="group flex size-10 items-center justify-center rounded-full border border-brand/20 bg-white/90 text-ink shadow-xs backdrop-blur-xs transition-all duration-300 hover:-translate-x-1 hover:border-brand hover:bg-brand hover:text-white hover:shadow-md active:scale-95"
          >
            <SocialIcon name={item.icon} className="size-4 fill-current transition-transform duration-300 group-hover:scale-110" />
          </Link>
        ))}
      </div>

      {/* Navigation scroll arrows on the right */}
      <div className="absolute right-6 top-[590px] z-20 hidden flex-col gap-3 lg:flex">
        <Link
          href="#home"
          aria-label="Revenir en haut"
          className="group flex size-10 items-center justify-center rounded-full border border-brand/20 bg-white/90 text-ink shadow-xs backdrop-blur-xs transition-all duration-300 hover:border-brand hover:bg-brand hover:text-white hover:shadow-md active:scale-95"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:-translate-y-0.5"><path d="m18 15-6-6-6 6"/></svg>
        </Link>
        <Link
          href="#about"
          aria-label="Aller à la section suivante"
          className="group flex size-10 items-center justify-center rounded-full border border-brand/20 bg-white/90 text-ink shadow-xs backdrop-blur-xs transition-all duration-300 hover:border-brand hover:bg-brand hover:text-white hover:shadow-md active:scale-95"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-y-0.5"><path d="m6 9 6 6 6-6"/></svg>
        </Link>
      </div>
    </section>
  );
}
