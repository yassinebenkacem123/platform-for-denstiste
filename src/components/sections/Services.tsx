import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/data/site-data";

export function Services() {
  return (
    <section id="services" className="ice-gradient site-shell min-h-[744px] px-[var(--page-pad)] py-24 lg:flex lg:items-start lg:gap-[3vw] lg:py-[132px]">
      <Reveal className="lg:w-[30%]"><h2 className="display max-w-[516px] text-[clamp(2.8rem,3.48vw,4rem)]">Everything you need in one place.</h2></Reveal>
      <div className="mt-14 grid gap-x-[6vw] gap-y-12 sm:grid-cols-2 lg:mt-2 lg:flex-1 lg:grid-cols-3 lg:gap-y-11">
        {services.map((service, index) => <Reveal key={service.title} delay={(index % 3) * .08}><article><Image src={service.icon} alt="" width={service.iconSize ?? 40} height={service.iconSize ?? 40} className="object-contain" /><h3 className="mt-4 text-[21px] tracking-[.03em]">{service.title}</h3><p className="mt-3 max-w-[275px] text-lg leading-9 tracking-[.07em] text-muted">{service.description}</p></article></Reveal>)}
      </div>
    </section>
  );
}
