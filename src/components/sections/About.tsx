import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section id="about" className="site-shell relative py-[var(--section-space)] lg:min-h-[904px] lg:py-0">
      <span id="patient-information" className="absolute -top-20" aria-hidden="true" />
      <div className="ice-gradient absolute left-0 top-0 hidden h-[688px] w-[29.2%] lg:block" />
      <Reveal className="relative mx-[var(--page-pad)] aspect-[1.02] overflow-hidden lg:absolute lg:left-16 lg:top-[72px] lg:mx-0 lg:h-[688px] lg:w-[38.3%]">
        <Image src="/images/about.png" alt="Dentist examining a young patient" fill sizes="(min-width: 1024px) 39vw, 92vw" className="object-cover" />
      </Reveal>
      <Reveal className="relative mx-[var(--page-pad)] mt-12 lg:absolute lg:left-[50.43%] lg:top-[132px] lg:mx-0 lg:mt-0 lg:w-[34.8%]" delay={.1}>
        <h2 className="display text-[clamp(2.8rem,3.48vw,4rem)]">Des soins dentaires experts pour toute la famille.</h2>
        <p className="copy mt-8">Les bilans réguliers, les nettoyages et les examens dentaires sont essentiels pour maintenir une bonne santé bucco-dentaire. Nous proposons une gamme complète de soins préventifs, notamment des traitements au fluorure, des scellants dentaires et des dépistages du cancer buccal. Notre page d&apos;informations pour les nouveaux patients fournit des informations utiles sur ce à quoi s&apos;attendre lors de votre première visite et ce qu&apos;il faut apporter.</p>
        <div className="mt-12 flex flex-wrap items-center gap-12"><ButtonLink href="#team" className="w-[168px]">Découvrir l&apos;équipe</ButtonLink><a href="#services" className="border-b-2 border-brand py-1 text-[10px] font-bold uppercase tracking-[.07em] text-brand">En savoir plus</a></div>
      </Reveal>
    </section>
  );
}
