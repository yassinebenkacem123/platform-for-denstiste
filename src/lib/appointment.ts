export const appointmentServices = [
  "Preventive Care",
  "Restorative Care",
  "Orthodontic Care",
  "Oral Surgery",
  "Cosmetic Dentistry",
  "Dental Implants",
] as const;

export const appointmentTimes = [
  "Morning (8:00 AM – 11:00 AM)",
  "Midday (11:00 AM – 2:00 PM)",
  "Afternoon (2:00 PM – 5:00 PM)",
] as const;

export type AppointmentService = (typeof appointmentServices)[number];
export type AppointmentTime = (typeof appointmentTimes)[number];

export type AppointmentValues = {
  fullName: string;
  email: string;
  phone: string;
  appointmentDate: string;
  preferredTime: string;
  service: string;
  message: string;
  website: string;
};

export type AppointmentField = Exclude<keyof AppointmentValues, "website">;
export type AppointmentErrors = Partial<Record<AppointmentField, string>>;

export type AppointmentApiResponse = {
  ok: boolean;
  message: string;
  errors?: AppointmentErrors;
};

const limits: Record<AppointmentField, number> = {
  fullName: 100,
  email: 254,
  phone: 25,
  appointmentDate: 10,
  preferredTime: 60,
  service: 60,
  message: 1000,
};

function normalizeText(value: unknown): string {
  if (typeof value !== "string") return "";
  return value
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export function normalizeAppointment(input: unknown): AppointmentValues {
  const source = typeof input === "object" && input !== null ? input as Record<string, unknown> : {};
  return {
    fullName: normalizeText(source.fullName),
    email: normalizeText(source.email).toLowerCase(),
    phone: normalizeText(source.phone),
    appointmentDate: normalizeText(source.appointmentDate),
    preferredTime: normalizeText(source.preferredTime),
    service: normalizeText(source.service),
    message: normalizeText(source.message),
    website: normalizeText(source.website),
  };
}

export function validateAppointment(values: AppointmentValues): AppointmentErrors {
  const errors: AppointmentErrors = {};
  if (values.fullName.length < 2) errors.fullName = "Enter your full name.";
  else if (values.fullName.length > limits.fullName) errors.fullName = "Keep your name under 100 characters.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email) || values.email.length > limits.email) errors.email = "Enter a valid email address.";
  if (!/^[+()\d\s.-]{7,25}$/.test(values.phone)) errors.phone = "Enter a valid phone number.";
  if (!/^\d{4}-\d{2}-\d{2}$/.test(values.appointmentDate)) {
    errors.appointmentDate = "Choose a preferred appointment date.";
  } else if (values.appointmentDate < new Date().toISOString().slice(0, 10)) {
    errors.appointmentDate = "The appointment date cannot be in the past.";
  }
  if (!appointmentTimes.includes(values.preferredTime as AppointmentTime)) errors.preferredTime = "Choose a preferred time.";
  if (!appointmentServices.includes(values.service as AppointmentService)) errors.service = "Choose a service.";
  if (values.message.length > limits.message) errors.message = "Keep notes under 1,000 characters.";
  return errors;
}

export function hasAppointmentErrors(errors: AppointmentErrors): boolean {
  return Object.keys(errors).length > 0;
}
