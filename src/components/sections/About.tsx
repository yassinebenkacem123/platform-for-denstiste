import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section id="about" className="site-shell relative py-[var(--section-space)] lg:min-h-[904px] lg:py-0">
      <span id="patient-information" className="absolute -top-20" aria-hidden="true" />
      <div className="ice-gradient absolute left-0 top-0 hidden h-[688px] w-[29.2%] lg:block" />
      <Reveal className="relative mx-[var(--page-pad)] aspect-[1.02] overflow-hidden lg:absolute lg:left-16 lg:top-[72px] lg:mx-0 lg:h-[688px] lg:w-[38.3%]">
        <Image src="/images/about.jpg" alt="Dentist examining a young patient" fill className="object-cover" />
      </Reveal>
      <Reveal className="relative mx-[var(--page-pad)] mt-12 lg:absolute lg:left-[50.43%] lg:top-[132px] lg:mx-0 lg:mt-0 lg:w-[34.8%]" delay={.1}>
        <p className="mb-2 text-xs font-bold uppercase tracking-[.18em] text-brand">À propos du Dr. Mansouri</p>
        <h2 className="display text-[clamp(2.8rem,3.48vw,4rem)]">Des soins dentaires experts pour toute la famille.</h2>
        <p className="copy mt-8">Sous la direction du Dr. Mansouri, notre cabinet médical vous accueille dans un cadre moderne et chaleureux à Casablanca. Les bilans réguliers, les nettoyages et les examens dentaires sont essentiels pour maintenir une bonne santé bucco-dentaire. Nous proposons une gamme complète de soins préventifs et esthétiques adaptés à tous vos besoins.</p>
        <div className="mt-12 flex flex-wrap items-center gap-12"><ButtonLink href="#team" className="w-[168px]">Découvrir le Dr. Mansouri</ButtonLink><a href="#services" className="border-b-2 border-brand py-1 text-[10px] font-bold uppercase tracking-[.07em] text-brand">En savoir plus</a></div>
      </Reveal>
    </section>
  );
}
