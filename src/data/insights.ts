export interface InsightPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  featured: boolean;
}

export const insights: InsightPost[] = [
  {
    slug: "construire-plateforme-web-moderne",
    title: "Comment construire une plateforme web moderne en 2025",
    excerpt:
      "Les fondements techniques, les choix d'architecture et les bonnes pratiques pour créer une plateforme web performante et évolutive.",
    category: "Development",
    readTime: "8 min",
    date: "2025-01-15",
    featured: true,
  },
  {
    slug: "experience-utilisateur-produit-digital",
    title: "Pourquoi l'expérience utilisateur est cruciale dans un produit digital",
    excerpt:
      "L'UX ne se résume pas à des boutons bien placés — c'est une stratégie complète qui impacte directement la rétention et la croissance.",
    category: "Design",
    readTime: "6 min",
    date: "2025-02-03",
    featured: true,
  },
  {
    slug: "dashboard-administratif-efficace",
    title: "Construire un dashboard administratif efficace",
    excerpt:
      "Les principes de design et d'architecture pour créer un tableau de bord qui simplifie vraiment la gestion des opérations.",
    category: "Development",
    readTime: "7 min",
    date: "2025-02-20",
    featured: false,
  },
  {
    slug: "supabase-applications-modernes",
    title: "Supabase pour les applications web modernes",
    excerpt:
      "Pourquoi Supabase est devenu mon backend de choix pour les projets SaaS et les applications à forte vélocité de développement.",
    category: "SaaS",
    readTime: "5 min",
    date: "2025-03-10",
    featured: false,
  },
  {
    slug: "nextjs-performance-portfolio",
    title: "Next.js et la performance — retour d'expérience",
    excerpt:
      "Les techniques concrètes pour obtenir un score Lighthouse proche du parfait avec Next.js et une architecture bien pensée.",
    category: "Development",
    readTime: "9 min",
    date: "2025-03-28",
    featured: true,
  },
  {
    slug: "automatisation-processus-business",
    title: "L'automatisation au service des petites entreprises",
    excerpt:
      "Comment les intégrations et automatisations peuvent libérer des heures de travail hebdomadaires et améliorer la qualité des livrables.",
    category: "Business",
    readTime: "6 min",
    date: "2025-04-15",
    featured: false,
  },
];

export const insightCategories = ["Tous", "Development", "Design", "SaaS", "Product", "Business", "AI"];

export const getInsightBySlug = (slug: string) =>
  insights.find((i) => i.slug === slug);
