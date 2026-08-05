import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { Reveal } from "@/components/ui/Reveal";

export function Appointment() {
  return (
    <section id="appointment" className="ice-gradient site-shell relative scroll-mt-8 overflow-hidden px-[var(--page-pad)] py-[clamp(5rem,8vw,9rem)]">
      <div className="absolute -right-24 -top-24 size-[360px] border border-brand/30" aria-hidden="true" />
      <div className="absolute -right-8 -top-8 size-[210px] bg-white/35" aria-hidden="true" />
      <div className="relative grid items-start gap-14 lg:grid-cols-[.78fr_1.22fr] lg:gap-[8vw]">
        <Reveal>
          <p className="mb-5 text-xs font-bold uppercase tracking-[.16em] text-brand">Demander une visite</p>
          <h2 className="display max-w-[560px] text-[clamp(2.8rem,3.48vw,4rem)]">Planifions votre sourire le plus sain.</h2>
          <p className="copy mt-8 max-w-[520px] text-[#758084]">Dites-nous comment nous pouvons vous aider et quand vous souhaitez venir. Notre équipe examinera votre demande et vous contactera pour confirmer un rendez-vous disponible.</p>
          <p className="mt-8 max-w-[480px] border-l-2 border-brand pl-5 text-sm leading-7 tracking-[.03em] text-[#596568]">La soumission de ce formulaire ne confirme pas un rendez-vous. Veuillez appeler directement la clinique si vous avez besoin de soins dentaires urgents.</p>
        </Reveal>
        <Reveal className="relative border border-brand/35 bg-white/45 p-5 shadow-[24px_24px_0_rgba(91,163,187,.12)] sm:p-8 lg:p-10" delay={.1}>
          <AppointmentForm />
        </Reveal>
      </div>
    </section>
  );
}
