export type Service = {
  title: string;
  description: string;
  icon: string;
  iconSize?: number;
};

export const navigation = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Patient Information", "#patient-information"],
  ["Services", "#services"],
  ["Blog", "#reviews"],
  ["Contact", "#contact"],
] as const;

export const featuredServices = [
  "Preventive Care",
  "Restorative Care",
  "Cosmetic Dentistry",
] as const;

export const services: Service[] = [
  { title: "Preventive Care", description: "Regular check-ups and fluoride treatments to prevent tooth decay and gum disease.", icon: "/images/service-preventive.png" },
  { title: "Restorative Care", description: "Fillings, crowns, bridges, and dentures to restore damaged or missing teeth.", icon: "/images/service-restorative.png" },
  { title: "Orthodontic Care", description: "Braces and clear aligners to straighten teeth and correct bite issues.", icon: "/images/service-orthodontic.png" },
  { title: "Oral Surgery", description: "Extractions, wisdom teeth removal, and other surgical procedures.", icon: "/images/service-surgery.png" },
  { title: "Cosmetic Dentistry", description: "Teeth whitening, veneers, and other procedures to improve the appearance of teeth.", icon: "/images/service-cosmetic.png", iconSize: 34 },
  { title: "Dental Implants", description: "Dental implants are a popular and effective way to replace missing teeth.", icon: "/images/service-implant.png" },
];

export const socialLinks = [
  { name: "Facebook", href: "#", icon: "facebook" },
  { name: "Instagram", href: "#", icon: "instagram" },
  { name: "YouTube", href: "#", icon: "youtube" },
  { name: "Twitter", href: "#", icon: "twitter" },
] as const;
