"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type { FormEvent, ReactNode } from "react";
import { useState } from "react";
import {
  appointmentServices,
  appointmentTimes,
  hasAppointmentErrors,
  normalizeAppointment,
  validateAppointment,
  type AppointmentApiResponse,
  type AppointmentErrors,
  type AppointmentField,
  type AppointmentValues,
} from "@/lib/appointment";

const initialValues: AppointmentValues = {
  fullName: "",
  email: "",
  phone: "",
  appointmentDate: "",
  preferredTime: "",
  service: "",
  message: "",
  website: "",
};

type FormState = "idle" | "loading" | "success" | "error";

function isApiResponse(value: unknown): value is AppointmentApiResponse {
  return typeof value === "object" && value !== null && typeof (value as { ok?: unknown }).ok === "boolean" && typeof (value as { message?: unknown }).message === "string";
}

export function AppointmentForm() {
  const [values, setValues] = useState<AppointmentValues>(initialValues);
  const [errors, setErrors] = useState<AppointmentErrors>({});
  const [state, setState] = useState<FormState>("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const reducedMotion = useReducedMotion();

  function update(field: keyof AppointmentValues, value: string) {
    setValues(current => ({ ...current, [field]: value }));
    if (field !== "website") setErrors(current => ({ ...current, [field]: undefined }));
    if (state !== "loading") setState("idle");
  }

  function validateField(field: AppointmentField) {
    const normalized = normalizeAppointment(values);
    const nextError = validateAppointment(normalized)[field];
    setErrors(current => ({ ...current, [field]: nextError }));
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state === "loading") return;
    const normalized = normalizeAppointment(values);
    const clientErrors = validateAppointment(normalized);
    if (hasAppointmentErrors(clientErrors)) {
      setErrors(clientErrors);
      setState("error");
      setStatusMessage("Veuillez corriger les champs mis en évidence et réessayer.");
      return;
    }

    setState("loading");
    setStatusMessage("Envoi de votre demande de rendez-vous en cours.");
    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(normalized),
      });
      const payload: unknown = await response.json();
      if (!isApiResponse(payload)) throw new Error("Unexpected response");
      if (!response.ok || !payload.ok) {
        setErrors(payload.errors ?? {});
        setState("error");
        setStatusMessage(payload.message);
        return;
      }
      setValues(initialValues);
      setErrors({});
      setState("success");
      setStatusMessage(payload.message);
    } catch {
      setState("error");
      setStatusMessage("Nous n'avons pas pu envoyer votre demande. Veuillez vérifier votre connexion et réessayer.");
    }
  }

  const inputClass = "min-h-12 w-full border border-[#b9d3dc] bg-white/75 px-4 text-base text-ink placeholder:text-[#8d9699] transition focus:border-brand focus:bg-white focus:outline-none disabled:cursor-not-allowed disabled:opacity-60";

  return (
    <form onSubmit={submit} noValidate className="grid gap-x-5 gap-y-5 sm:grid-cols-2" aria-describedby="appointment-form-status">
      <FormField label="Nom complet" htmlFor="fullName" error={errors.fullName}>
        <input id="fullName" name="fullName" autoComplete="name" required maxLength={100} placeholder="Votre nom complet" value={values.fullName} onChange={event => update("fullName", event.target.value)} onBlur={() => validateField("fullName")} aria-invalid={Boolean(errors.fullName)} aria-describedby={errors.fullName ? "fullName-error" : undefined} disabled={state === "loading"} className={inputClass} />
      </FormField>
      <FormField label="Adresse e-mail" htmlFor="email" error={errors.email}>
        <input id="email" name="email" type="email" autoComplete="email" required maxLength={254} placeholder="vous@exemple.fr" value={values.email} onChange={event => update("email", event.target.value)} onBlur={() => validateField("email")} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} disabled={state === "loading"} className={inputClass} />
      </FormField>
      <FormField label="Numéro de téléphone" htmlFor="phone" error={errors.phone}>
        <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" required maxLength={25} placeholder="05 22 20 00 00" value={values.phone} onChange={event => update("phone", event.target.value)} onBlur={() => validateField("phone")} aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? "phone-error" : undefined} disabled={state === "loading"} className={inputClass} />
      </FormField>
      <FormField label="Date de rendez-vous souhaitée" htmlFor="appointmentDate" error={errors.appointmentDate}>
        <input id="appointmentDate" name="appointmentDate" type="date" required value={values.appointmentDate} onChange={event => update("appointmentDate", event.target.value)} onBlur={() => validateField("appointmentDate")} aria-invalid={Boolean(errors.appointmentDate)} aria-describedby={errors.appointmentDate ? "appointmentDate-error" : undefined} disabled={state === "loading"} className={inputClass} />
      </FormField>
      <FormField label="Créneau horaire souhaité" htmlFor="preferredTime" error={errors.preferredTime}>
        <select id="preferredTime" name="preferredTime" required value={values.preferredTime} onChange={event => update("preferredTime", event.target.value)} onBlur={() => validateField("preferredTime")} aria-invalid={Boolean(errors.preferredTime)} aria-describedby={errors.preferredTime ? "preferredTime-error" : undefined} disabled={state === "loading"} className={inputClass}>
          <option value="">Choisir un créneau</option>
          {appointmentTimes.map(time => <option key={time} value={time}>{time}</option>)}
        </select>
      </FormField>
      <FormField label="Service souhaité" htmlFor="service" error={errors.service}>
        <select id="service" name="service" required value={values.service} onChange={event => update("service", event.target.value)} onBlur={() => validateField("service")} aria-invalid={Boolean(errors.service)} aria-describedby={errors.service ? "service-error" : undefined} disabled={state === "loading"} className={inputClass}>
          <option value="">Choisir un service</option>
          {appointmentServices.map(service => <option key={service} value={service}>{service}</option>)}
        </select>
      </FormField>
      <FormField label="Message ou notes supplémentaires" htmlFor="message" error={errors.message} className="sm:col-span-2">
        <textarea id="message" name="message" rows={4} maxLength={1000} placeholder="Dites-nous tout ce qui pourrait nous aider à préparer votre visite." value={values.message} onChange={event => update("message", event.target.value)} onBlur={() => validateField("message")} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : "message-help"} disabled={state === "loading"} className={`${inputClass} resize-y py-3`} />
        <p id="message-help" className="mt-1.5 text-xs tracking-wide text-[#697477]">Optionnel · jusqu’à 1 000 caractères</p>
      </FormField>
      <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" value={values.website} onChange={event => update("website", event.target.value)} />
      </div>
      <div className="sm:col-span-2">
        <SubmitButton loading={state === "loading"} />
        <AnimatePresence mode="wait">
          {statusMessage && (
            <motion.p key={`${state}-${statusMessage}`} id="appointment-form-status" role="status" aria-live="polite" initial={reducedMotion ? false : { opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={reducedMotion ? undefined : { opacity: 0 }} className={`mt-4 border-l-2 px-4 py-2 text-sm leading-6 ${state === "success" ? "border-brand bg-white/60 text-[#315f6e]" : state === "error" ? "border-[#a64a4a] bg-white/60 text-[#7f2929]" : "border-brand text-[#536064]"}`}>
              {statusMessage}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}

function FormField({ label, htmlFor, error, className = "", children }: { label: string; htmlFor: AppointmentField; error?: string; className?: string; children: ReactNode }) {
  const reducedMotion = useReducedMotion();
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-semibold tracking-[.04em] text-ink">{label}</label>
      {children}
      <AnimatePresence>
        {error && <motion.p id={`${htmlFor}-error`} role="alert" initial={reducedMotion ? false : { opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={reducedMotion ? undefined : { opacity: 0 }} className="mt-1.5 text-sm text-[#8c3030]">{error}</motion.p>}
      </AnimatePresence>
    </div>
  );
}

function SubmitButton({ loading }: { loading: boolean }) {
  return (
    <button type="submit" disabled={loading} className="inline-flex min-h-12 min-w-[220px] items-center justify-center gap-3 bg-brand px-7 text-[11px] font-bold uppercase tracking-[.1em] text-white transition hover:bg-[#478da5] active:scale-[.98] disabled:cursor-wait disabled:bg-[#7fb5c7]">
      {loading && <span className="size-4 animate-spin rounded-full border-2 border-white/40 border-t-white" aria-hidden="true" />}
      {loading ? "Envoi en cours…" : "Demander un rendez-vous"}
    </button>
  );
}
