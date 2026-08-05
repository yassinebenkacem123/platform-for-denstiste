import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

export function Reviews() {
  return (
    <section id="reviews" className="site-shell relative min-h-[1080px] px-[var(--page-pad)] py-20 lg:py-0">
      <Reveal className="relative aspect-[.7] overflow-hidden sm:w-[45%] lg:absolute lg:left-[11.3%] lg:top-36 lg:h-[800px] lg:w-[30.43%]">
        <Image src="/images/review-woman.png" alt="Smiling DentaPro patient" fill sizes="(min-width: 1024px) 31vw, 92vw" className="object-cover" />
      </Reveal>
      <Reveal className="relative z-10 mt-10 sm:absolute sm:left-[44%] sm:top-20 sm:mt-0 lg:left-[45%] lg:top-16" delay={.08}><h2 className="display text-[clamp(2.8rem,3.48vw,4rem)]">Be featured.<br /><span className="text-brand">#happysmile</span></h2></Reveal>
      <Reveal className="relative mt-10 aspect-[.814] overflow-hidden sm:ml-auto sm:w-[45%] lg:absolute lg:left-[58.26%] lg:top-0 lg:mt-0 lg:h-[688px] lg:w-[30.43%]" delay={.14}>
        <Image src="/images/review-man.png" alt="Smiling DentaPro patient wearing glasses" fill sizes="(min-width: 1024px) 31vw, 92vw" className="object-cover" />
      </Reveal>
      <Reveal className="relative mx-auto mt-16 max-w-[760px] lg:absolute lg:left-[51.9%] lg:top-[750px] lg:mt-0 lg:w-[38%]" delay={.2}>
        <span aria-hidden="true" className="absolute -left-14 -top-16 font-serif text-[12rem] leading-none text-ice">“</span>
        <blockquote className="relative font-serif text-[clamp(1.7rem,1.9vw,2.2rem)] italic leading-[1.32] text-brand">Dr. Giovanni is a genius! Treatment went well and now my smile shines! Thank YOU!</blockquote>
        <p className="mt-3 text-right text-[23px] italic">~ Anna Marie</p>
      </Reveal>
    </section>
  );
}
