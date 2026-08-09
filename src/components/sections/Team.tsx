import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";

export function Team() {
  return (
    <section id="team" className="site-shell relative py-[var(--section-space)] lg:min-h-[760px] lg:py-0">
      <Reveal className="relative mx-[var(--page-pad)] aspect-[.814] lg:absolute lg:left-[7.83%] lg:top-[-72px] lg:mx-0 lg:h-[688px] lg:w-[30.43%]">
        <div className="absolute inset-0 translate-x-8 translate-y-8 border border-brand/50" />
        <Image src="/images/doctor.jpg" alt="Dr. Mansouri, chirurgien-dentiste" fill sizes="(min-width: 1024px) 31vw, 92vw" className="object-cover" />
      </Reveal>
      <Reveal className="relative mx-[var(--page-pad)] mt-16 lg:absolute lg:left-[50.38%] lg:top-[132px] lg:mx-0 lg:mt-0 lg:w-[35%]" delay={.1}>
        <p className="mb-2 text-xs font-bold uppercase tracking-[.18em] text-brand">Chirurgien-Dentiste Fondateur</p>
        <h2 className="display text-[clamp(2.8rem,3.48vw,4rem)]">Dr. Mansouri</h2>
        <p className="copy mt-8">Le Dr. Mansouri est un chirurgien-dentiste passionné et expérimenté à Casablanca, dédié à la santé bucco-dentaire et au bien-être de ses patients. Plus de 15 ans d&apos;expertise garantissent des soins précis, indolores et adaptés à chaque besoin.</p>
        <ButtonLink href="#appointment" className="mt-10 min-w-[240px]">RDV avec le Dr. Mansouri</ButtonLink>
      </Reveal>
    </section>
  );
}
