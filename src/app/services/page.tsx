import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProcessSection from "@/components/sections/ProcessSection";
import CTASection from "@/components/sections/CTASection";
import TechnologiesSection from "@/components/sections/TechnologiesSection";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Développement web, applications, SaaS, dashboards, UI/UX et automation — découvrez les services proposés par Johnny F T Rene.",
};

const serviceDetails = [
  {
    number: "01",
    title: "Développement Web",
    subtitle: "Sites vitrines d'exception, landing pages & plateformes",
    description:
      "Conception et développement de sites web ultra-rapides, élégants et optimisés SEO. Chaque interface est construite avec un code propre, une typographie soignée et des animations fluides au service de votre message.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    deliverables: ["Score Lighthouse 95+", "Design responsive fluide", "SEO technique & sémantique", "Animations micro-interactives"],
  },
  {
    number: "02",
    title: "Applications Web",
    subtitle: "Applications interactives, modulaires et robustes",
    description:
      "Développement d'applications web réactives centrées sur l'utilisateur. De la gestion de formulaires avancés aux calculs en temps réel, l'accent est mis sur la réactivité instantanée et la fiabilité technique.",
    technologies: ["React", "Next.js", "TypeScript", "State Management", "REST APIs"],
    deliverables: ["Parcours utilisateur fluide", "Architecture typée & sécurisée", "Intégration d'APIs tierces", "Tests & optimisation"],
  },
  {
    number: "03",
    title: "SaaS & Plateformes",
    subtitle: "Produits scalables, abonnements & architectures cloud",
    description:
      "Création complète d'architectures SaaS : authentification sécurisée, gestion multi-utilisateurs, gestion des abonnements Stripe et modélisation de base de données relationnelles haute performance.",
    technologies: ["Next.js", "Supabase", "PostgreSQL", "Stripe", "Node.js"],
    deliverables: ["Authentification & rôles", "Billing & Webhooks Stripe", "Base PostgreSQL optimisée", "Dashboard client & admin"],
  },
  {
    number: "04",
    title: "Dashboards & Outils Métier",
    subtitle: "Interfaces de pilotage décisionnel et opérationnel",
    description:
      "Tableaux de bord sur mesure permettant de visualiser vos métriques clés, filtrer des données volumineuses et automatiser des opérations quotidiennes en toute simplicité.",
    technologies: ["TypeScript", "Recharts", "Data Tables", "Supabase", "Export CSV/PDF"],
    deliverables: ["Visualisation de données", "Filtres temps réel", "Gestion des droits d'accès", "Exports automatisés"],
  },
  {
    number: "05",
    title: "Direction UI/UX & Design System",
    subtitle: "Identité visuelle moderne, ergonomie et clarté",
    description:
      "Design d'interfaces minimalistes et soignées. Wireframing, prototypage haute fidélité et élaboration de Design Systems cohérents garantissant une harmonie visuelle sans faille sur tous les écrans.",
    technologies: ["Figma", "Design Systems", "Design Tokens", "Accessibilité WCAG"],
    deliverables: ["Composants réutilisables", "Typographie & palette calibrées", "Prototypes interactifs", "Directives de développement"],
  },
  {
    number: "06",
    title: "Automation & Intégrations",
    subtitle: "Connectivité d'outils, webhooks et flux sans friction",
    description:
      "Automatisation des flux de travail récurrents pour éliminer les tâches manuelles. Connexion entre vos outils de CRM, bases de données, notifications et systèmes de facturation.",
    technologies: ["Webhooks", "Node.js", "APIs REST", "Supabase Edge Functions"],
    deliverables: ["Synchronisation bidirectionnelle", "Alertes automatisées", "Réduction des erreurs manuelles", "Documentation technique"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      {/* 32. Internal Hero Spacing: padding-top 140px, padding-bottom 80px */}
      <main className="internal-hero-py">
        <div className="container-wide">
          {/* Header */}
          <div className="mb-16 lg:mb-24">
            <p className="text-xs font-semibold text-[#6F737A] uppercase tracking-[0.2em] mb-4">
              OFFRE & EXPERTISE
            </p>
            <h1 className="text-[clamp(44px,6vw,84px)] font-bold text-[#080B12] leading-[1.0] tracking-tight max-w-4xl">
              Ce que je construis pour{" "}
              <span className="text-[#9CA3AF]">votre produit.</span>
            </h1>
            <p className="mt-6 text-[#6F737A] text-[17px] sm:text-[19px] max-w-2xl leading-relaxed">
              Une gamme de services pensés pour transformer vos besoins techniques et produit en plateformes fiables, performantes et désirables.
            </p>
          </div>

          {/* 39. Large Editorial Service Rows */}
          <div className="space-y-8 sm:space-y-10 mb-24 lg:mb-32">
            {serviceDetails.map((service) => (
              <div
                key={service.number}
                className="group p-8 sm:p-12 rounded-[24px] bg-[#FAFAFA] hover:bg-[#F5F6F7] border border-[#E5E7EB] transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  {/* Left Column: Number & Titles (5 cols) */}
                  <div className="lg:col-span-5">
                    <span className="text-[12px] font-mono font-bold text-[#9CA3AF] uppercase tracking-[0.2em] block mb-3">
                      SERVICE {service.number}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#080B12] tracking-tight mb-2">
                      {service.title}
                    </h2>
                    <p className="text-[14px] font-medium text-[#6F737A] mb-6">
                      {service.subtitle}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((t) => (
                        <span
                          key={t}
                          className="text-[12px] font-semibold text-[#080B12] bg-white border border-[#D9DDE2] px-3.5 py-1.5 rounded-full"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Narrative & Deliverables (7 cols) */}
                  <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-6">
                    <p className="text-[#4A4E56] text-[16px] sm:text-[17px] leading-relaxed">
                      {service.description}
                    </p>

                    <div className="pt-6 border-t border-[#E5E7EB]">
                      <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#080B12] mb-3">
                        Livrables inclus
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.deliverables.map((item) => (
                          <div key={item} className="flex items-center gap-2 text-xs sm:text-[13px] text-[#6F737A]">
                            <CheckCircle2 size={15} className="text-[#080B12] shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 flex justify-end">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-3 text-[13px] font-bold uppercase tracking-[0.15em] text-[#080B12] hover:text-[#4A4E56] transition-colors"
                      >
                        <span>Démarrer ce projet</span>
                        <div className="w-[42px] h-[42px] rounded-full bg-white border border-[#D9DDE2] group-hover:bg-[#080B12] group-hover:border-[#080B12] flex items-center justify-center transition-all shadow-sm">
                          <ArrowUpRight size={16} className="text-[#080B12] group-hover:text-white transition-colors" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <TechnologiesSection />
        <ProcessSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
