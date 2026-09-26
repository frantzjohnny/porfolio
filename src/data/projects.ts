export interface Project {
  slug: string;
  title: string;
  category: string;
  subcategory: string;
  year: number;
  shortDescription: string;
  description: string;
  challenge: string;
  solution: string;
  result: string;
  technologies: string[];
  coverImage: string;
  gallery: string[];
  featured: boolean;
  link?: string;
}

export const projects: Project[] = [
  {
    slug: "global-axis",
    title: "Global Axis",
    category: "Immigration & Digital Services",
    subcategory: "Web Platform",
    year: 2024,
    shortDescription:
      "Plateforme digitale complète pour les services d'immigration, de visa et d'accompagnement international.",
    description:
      "Global Axis est une plateforme web complète dédiée aux services d'immigration et aux démarches digitales pour les particuliers et les entreprises souhaitant s'établir à l'international. La plateforme centralise la gestion des dossiers, le suivi des demandes et la communication avec les conseillers.",
    challenge:
      "Le client avait besoin d'une solution capable de gérer des flux complexes de documents, de coordonner plusieurs parties prenantes et de fournir une expérience utilisateur claire dans un domaine intrinsèquement complexe.",
    solution:
      "J'ai conçu et développé une architecture robuste avec un dashboard administratif avancé, un système de gestion de documents, un suivi en temps réel des dossiers et une interface cliente intuitive. L'accent a été mis sur la simplicité du parcours utilisateur malgré la complexité des processus sous-jacents.",
    result:
      "Une plateforme fonctionnelle et évolutive qui a permis de réduire le temps de traitement des dossiers et d'améliorer significativement la satisfaction des clients.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
      "Framer Motion",
    ],
    coverImage: "/projects/global-axis.jpg",
    gallery: ["/projects/global-axis.jpg"],
    featured: true,
  },
  {
    slug: "votepulse",
    title: "VotePulse",
    category: "Voting & Interactive Platform",
    subcategory: "Web Application",
    year: 2024,
    shortDescription:
      "Application web interactive de vote en temps réel pour événements, sondages et consultations.",
    description:
      "VotePulse est une application web de vote interactif permettant de créer et gérer des sondages, votes et consultations en temps réel. Conçue pour les organisations, événements et communautés qui souhaitent impliquer leur audience de manière dynamique.",
    challenge:
      "Créer un système de vote fiable, sécurisé et capable de gérer un grand nombre de participants simultanés tout en garantissant l'intégrité des résultats et une expérience fluide pour tous les utilisateurs.",
    solution:
      "Architecture en temps réel avec WebSockets pour des mises à jour instantanées, système d'authentification robuste pour garantir l'unicité des votes, interface visuelle claire pour présenter les résultats de manière engageante.",
    result:
      "Une plateforme utilisée lors d'événements avec des centaines de participants simultanés, offrant une expérience de vote transparente et engageante.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Supabase",
      "Real-time",
      "Tailwind CSS",
    ],
    coverImage: "/projects/votepulse.jpg",
    gallery: ["/projects/votepulse.jpg"],
    featured: true,
  },
  {
    slug: "patizan-records",
    title: "Patizan Records",
    category: "Music & Digital Experience",
    subcategory: "Web Platform",
    year: 2023,
    shortDescription:
      "Plateforme digitale premium pour un label musical indépendant — artistes, releases et expérience musicale.",
    description:
      "Patizan Records est la présence digitale d'un label musical indépendant. La plateforme présente les artistes, les albums et les nouvelles sorties dans une expérience éditoriale soignée qui reflète l'identité artistique du label.",
    challenge:
      "Créer une expérience digitale qui rivalise avec les grandes plateformes tout en préservant l'identité unique et indépendante du label, avec une navigation fluide entre les différents artistes et projets musicaux.",
    solution:
      "Design éditorial premium avec un player musical intégré, galeries d'artistes, pages d'albums dédiées et système de releases. Une attention particulière à l'expérience mobile pour les fans.",
    result:
      "Une plateforme qui renforce l'image du label et améliore l'engagement des fans avec une expérience immersive et premium.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Framer Motion",
      "Tailwind CSS",
      "Supabase",
    ],
    coverImage: "/projects/patizan-records.jpg",
    gallery: ["/projects/patizan-records.jpg"],
    featured: true,
  },
  {
    slug: "kiskeya",
    title: "Kiskeya",
    category: "Restaurant & Digital Experience",
    subcategory: "Website",
    year: 2023,
    shortDescription:
      "Site web premium pour un restaurant gastronomique avec système de réservation en ligne intégré.",
    description:
      "Kiskeya est le site web d'un restaurant gastronomique mettant en valeur la cuisine caribéenne et créole. Le site combine photographie culinaire d'exception, présentation du menu et système de réservation en ligne pour offrir une expérience digitale à la hauteur de l'expérience en salle.",
    challenge:
      "Créer une présence digitale qui transmette la chaleur, l'authenticité et la sophistication du restaurant tout en offrant un parcours de réservation simple et intuitif.",
    solution:
      "Design éditorial axé sur la photographie avec un système de réservation intégré, menu interactif et présentation de l'équipe et de l'histoire du restaurant. Mobile-first pour les clients qui réservent depuis leur téléphone.",
    result:
      "Une augmentation significative des réservations en ligne et un renforcement de l'image de marque du restaurant.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "REST API",
    ],
    coverImage: "/projects/kiskeya.jpg",
    gallery: ["/projects/kiskeya.jpg"],
    featured: false,
  },
  {
    slug: "kouran",
    title: "Kouran",
    category: "Currency & Financial Platform",
    subcategory: "Web Application",
    year: 2024,
    shortDescription:
      "Plateforme fintech de change de devises avec suivi des taux en temps réel et gestion de transactions.",
    description:
      "Kouran est une plateforme financière permettant le change de devises avec des taux en temps réel, un historique des transactions et un dashboard de gestion des comptes. Conçue pour les particuliers et les petites entreprises qui effectuent des transactions internationales régulièrement.",
    challenge:
      "Construire une interface financière qui inspire confiance, gère des données sensibles en sécurité et présente des informations complexes de manière claire et accessible.",
    solution:
      "Architecture sécurisée avec intégration d'APIs de taux de change, dashboard intuitif avec visualisations des données, système d'authentification robuste et interface claire pour la gestion des transactions.",
    result:
      "Une plateforme fonctionnelle qui simplifie les opérations de change pour ses utilisateurs avec une interface claire et professionnelle.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "REST APIs",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    coverImage: "/projects/kouran.jpg",
    gallery: ["/projects/kouran.jpg"],
    featured: true,
  },
  {
    slug: "lottery-platform",
    title: "Lottery Platform",
    category: "Lottery Results Platform",
    subcategory: "Web Application",
    year: 2023,
    shortDescription:
      "Plateforme de résultats de loterie avec mises à jour en temps réel et gestion des jackpots.",
    description:
      "Plateforme web complète pour la diffusion des résultats de loterie en temps réel. Les utilisateurs peuvent consulter les derniers tirages, suivre les jackpots, vérifier leurs tickets et s'inscrire à des alertes personnalisées.",
    challenge:
      "Gérer des mises à jour de données très fréquentes avec de nombreux utilisateurs simultanés tout en maintenant une interface claire, engageante et facile à utiliser.",
    solution:
      "Architecture orientée temps réel avec mise en cache intelligente, interface visuelle attractive pour la présentation des numéros et résultats, système d'alertes et calendrier des prochains tirages.",
    result:
      "Une plateforme stable et performante qui attire et fidélise les utilisateurs grâce à une expérience claire et actualisée en temps réel.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Real-time",
      "REST APIs",
      "Tailwind CSS",
    ],
    coverImage: "/projects/lottery-platform.jpg",
    gallery: ["/projects/lottery-platform.jpg"],
    featured: false,
  },
];

export const getFeaturedProjects = () => projects.filter((p) => p.featured);
export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);
