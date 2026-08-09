import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";

export function Team() {
  return (
    <section id="team" className="site-shell relative py-[var(--section-space)] lg:min-h-[760px] lg:py-0">
      <Reveal className="relative mx-[var(--page-pad)] aspect-[.814] lg:absolute lg:left-[7.83%] lg:top-[-72px] lg:mx-0 lg:h-[688px] lg:w-[30.43%]">
        <div className="absolute inset-0 translate-x-8 translate-y-8 border border-brand/50" />
        <Image src="/images/doctor.jpg" alt="Dr. Giovanni, dental specialist" fill sizes="(min-width: 1024px) 31vw, 92vw" className="object-cover" />
      </Reveal>
      <Reveal className="relative mx-[var(--page-pad)] mt-16 lg:absolute lg:left-[50.38%] lg:top-[132px] lg:mx-0 lg:mt-0 lg:w-[35%]" delay={.1}>
        <h2 className="display text-[clamp(2.8rem,3.48vw,4rem)]">Des professionnels en qui vous pouvez avoir confiance.</h2>
        <p className="copy mt-8">Le Dr Giovanni est un spécialiste dentaire reconnu, qui sait traiter chaque problème avec précision. Plus de 10 ans d&apos;expérience se traduisent par un traitement sur mesure pour chaque patient.</p>
        <ButtonLink href="#contact" className="mt-10 w-[216px]">En savoir plus sur le Dr Giovanni</ButtonLink>
      </Reveal>
    </section>
  );
}
