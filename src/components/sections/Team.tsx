import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";

export function Team() {
  return (
    <section id="team" className="site-shell relative min-h-[760px] py-[var(--section-space)] lg:py-0">
      <Reveal className="relative mx-[var(--page-pad)] aspect-[.814] lg:absolute lg:left-[7.83%] lg:top-[-72px] lg:mx-0 lg:h-[688px] lg:w-[30.43%]">
        <div className="absolute inset-0 translate-x-8 translate-y-8 border border-brand/50" />
        <Image src="/images/doctor.png" alt="Dr. Giovanni, dental specialist" fill sizes="(min-width: 1024px) 31vw, 92vw" className="object-cover" />
      </Reveal>
      <Reveal className="relative mx-[var(--page-pad)] mt-16 lg:absolute lg:left-[50.38%] lg:top-[132px] lg:mx-0 lg:mt-0 lg:w-[35%]" delay={.1}>
        <h2 className="display text-[clamp(2.8rem,3.48vw,4rem)]">Professionals you can trust. Period.</h2>
        <p className="copy mt-8">Dr. Giovanni is prominent dental specialist, who knows how to treat every problem. 10+ years of experience translates into bespoke treatment of every pacient.</p>
        <ButtonLink href="#contact" className="mt-10 w-[216px]">Read more about Dr. Giovanni</ButtonLink>
      </Reveal>
    </section>
  );
}
