import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/sections/CTASection";
import FAQSection from "@/components/sections/FAQSection";
import { CheckCircle2, Clock, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Processus",
  description:
    "De la découverte au lancement — découvrez comment je travaille sur chaque projet digital avec rigueur et clarté.",
};

const steps = [
  {
    step: "01",
    label: "PHASE 01",
    duration: "1 à 2 semaines",
    title: "Immersion & Cadrage",
    subtitle: "Comprendre le problème avant d'aligner le code",
    description:
      "Chaque grand projet débute par une écoute approfondie. Nous définissons vos objectifs stratégiques, analysons vos utilisateurs cibles, vos contraintes techniques et formalisons le périmètre fonctionnel exact.",
    deliverables: [
      "Cahier des charges fonctionnel & technique",
      "Cartographie des parcours utilisateurs",
      "Benchmark concurrentiel & opportunités",
      "Planning prévisionnel détaillé",
    ],
  },
  {
    step: "02",
    label: "PHASE 02",
    duration: "1 à 3 semaines",
    title: "Architecture & Design",
    subtitle: "Traduire la stratégie en interface vivante et robuste",
    description:
      "Conception du Design System, maquettage haute fidélité sous Figma et définition de l'architecture logicielle : schéma de base de données PostgreSQL, flux de données, APIs et choix technologiques adaptés.",
    deliverables: [
      "Maquettes desktop & mobile haute fidélité",
      "Design System complet (tokens, composants)",
      "Modélisation de la base de données relationnelle",
      "Validation mutuelle avant développement",
    ],
  },
  {
    step: "03",
    label: "PHASE 03",
    duration: "2 à 6 semaines",
    title: "Développement & Tests",
    subtitle: "Rigueur d'ingénierie, typage strict et sprints itératifs",
    description:
      "Développement en cycles courts avec des points d'avancement réguliers. Code TypeScript rigoureux, intégration d'APIs tierces, gestion d'état soignée et tests approfondis sur tous types d'écrans.",
    deliverables: [
      "Environnement de pré-production accessible 24/7",
      "Code source documenté & typé",
      "Audit de performance & optimisation SEO",
      "Tests d'assurance qualité cross-devices",
    ],
  },
  {
    step: "04",
    label: "PHASE 04",
    duration: "En continu",
    title: "Déploiement & Évolution",
    subtitle: "Lancement sans stress, suivi des métriques et pérennité",
    description:
      "Mise en production sécurisée avec CDN global, configuration des domaines, monitoring d'erreurs en temps réel, passation technique complète et accompagnement post-lancement.",
    deliverables: [
      "Déploiement production sur infrastructure cloud",
      "Formation à la prise en main du dashboard",
      "Documentation de passation technique",
      "Garantie de stabilité & support réactif",
    ],
  },
];

export default function ProcessPage() {
  return (
    <>
      <Header />
      {/* 32. Internal Hero Spacing: padding-top 140px, padding-bottom 80px */}
      <main className="internal-hero-py">
        <div className="container-wide">
          {/* Header */}
          <div className="mb-16 lg:mb-24">
            <p className="text-xs font-semibold text-[#6F737A] uppercase tracking-[0.2em] mb-4">
              MÉTHODOLOGIE
            </p>
            <h1 className="text-[clamp(44px,6vw,84px)] font-bold text-[#080B12] leading-[1.0] tracking-tight max-w-4xl">
              De l&apos;idée brute au{" "}
              <span className="text-[#9CA3AF]">produit abouti.</span>
            </h1>
            <p className="mt-6 text-[#6F737A] text-[17px] sm:text-[19px] max-w-2xl leading-relaxed">
              Un processus transparent, itératif et orienté résultats pour garantir que chaque livraison respecte les plus hauts standards techniques et visuels.
            </p>
          </div>

          {/* 40. Process Cards: padding 32px (p-8 sm:p-12), clear hierarchy, responsive stack */}
          <div className="space-y-8 mb-24 lg:mb-32">
            {steps.map((item) => (
              <div
                key={item.step}
                className="p-8 sm:p-12 rounded-[24px] bg-[#FAFAFA] border border-[#E5E7EB] hover:border-[#D9DDE2] transition-colors"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  {/* Left Column: Number, Phase, Duration (4 cols) */}
                  <div className="lg:col-span-4">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#080B12] bg-white border border-[#D9DDE2] px-3.5 py-1 rounded-full">
                        {item.label}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs text-[#6F737A]">
                        <Clock size={13} />
                        {item.duration}
                      </span>
                    </div>

                    <div className="text-[clamp(48px,5vw,72px)] font-bold text-[#080B12]/15 leading-none mb-3">
                      {item.step}
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold text-[#080B12] tracking-tight mb-2">
                      {item.title}
                    </h2>
                    <p className="text-sm font-medium text-[#6F737A]">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Right Column: Narrative & Deliverables (8 cols) */}
                  <div className="lg:col-span-8 space-y-6">
                    <p className="text-[#4A4E56] text-[16px] sm:text-[17px] leading-relaxed">
                      {item.description}
                    </p>

                    <div className="pt-6 border-t border-[#E5E7EB]">
                      <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#080B12] mb-4 flex items-center gap-2">
                        <ShieldCheck size={16} className="text-[#080B12]" />
                        <span>Livrables concrets de la phase</span>
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        {item.deliverables.map((deliv) => (
                          <div
                            key={deliv}
                            className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#4A4E56] bg-white p-3.5 rounded-[14px] border border-[#E5E7EB]"
                          >
                            <CheckCircle2 size={15} className="text-[#080B12] shrink-0 mt-0.5" />
                            <span>{deliv}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick CTA Box */}
          <div className="p-8 sm:p-12 rounded-[24px] bg-[#050812] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-24 lg:mb-32">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
                Vous avez un projet à cadrer ?
              </h3>
              <p className="text-sm text-white/70 max-w-xl">
                Échangeons sur vos objectifs et établissons ensemble la feuille de route idéale.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 min-h-[52px] h-[52px] px-8 rounded-full bg-white text-[#080B12] text-sm font-bold hover:bg-[#F3F4F6] transition-all hover:scale-[1.02] shrink-0"
            >
              <span>Démarrer le cadrage</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
