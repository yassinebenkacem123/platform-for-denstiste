export type Service = {
  title: string;
  description: string;
  icon: string;
  iconSize?: number;
};

export const navigation = [
  ["Accueil", "#home"],
  ["À propos", "#about"],
  ["Informations patients", "#patient-information"],
  ["Services", "#services"],
  ["Avis", "#reviews"],
  ["Contact", "#contact"],
] as const;

export const featuredServices = [
  "Soins préventifs",
  "Soins restaurateurs",
  "Dentisterie esthétique",
] as const;

export const services: Service[] = [
  { title: "Soins préventifs", description: "Bilans réguliers et traitements au fluorure pour prévenir les caries et les maladies des gencives.", icon: "/images/service-preventive.png" },
  { title: "Soins restaurateurs", description: "Plombages, couronnes, bridges et prothèses pour restaurer les dents abîmées ou manquantes.", icon: "/images/service-restorative.png" },
  { title: "Soins orthodontiques", description: "Appareils dentaires et aligneurs transparents pour redresser les dents et corriger les problèmes d'occlusion.", icon: "/images/service-orthodontic.png" },
  { title: "Chirurgie buccale", description: "Extractions, ablation des dents de sagesse et autres interventions chirurgicales.", icon: "/images/service-surgery.png" },
  { title: "Dentisterie esthétique", description: "Blanchiment dentaire, facettes et autres soins pour améliorer l'apparence de vos dents.", icon: "/images/service-cosmetic.png", iconSize: 34 },
  { title: "Implants dentaires", description: "Les implants dentaires sont une solution populaire et efficace pour remplacer les dents manquantes.", icon: "/images/service-implant.png" },
];

export const socialLinks = [
  { name: "Facebook", href: "#", icon: "facebook" },
  { name: "Instagram", href: "#", icon: "instagram" },
  { name: "YouTube", href: "#", icon: "youtube" },
  { name: "Twitter", href: "#", icon: "twitter" },
] as const;
