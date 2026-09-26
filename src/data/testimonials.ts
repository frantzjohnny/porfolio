export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  project: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Johnny a su comprendre nos besoins rapidement et livrer une plateforme qui dépasse nos attentes. Son approche centrée sur l'utilisateur et sa rigueur technique ont fait toute la différence.",
    author: "Alex M.",
    role: "CEO",
    company: "Global Axis",
    project: "Plateforme d'immigration",
  },
  {
    id: 2,
    quote:
      "Travailler avec Johnny a été une expérience remarquable. Il ne se contente pas de développer — il comprend le produit, pose les bonnes questions et propose des solutions intelligentes.",
    author: "Marie D.",
    role: "Fondatrice",
    company: "Startup SaaS",
    project: "Application web personnalisée",
  },
  {
    id: 3,
    quote:
      "La qualité du design et du code est exceptionnelle. Notre site reflète exactement l'image que nous voulions projeter. Je recommande Johnny sans hésitation.",
    author: "Jean-Pierre K.",
    role: "Directeur Marketing",
    company: "Kiskeya",
    project: "Site restaurant premium",
  },
];
