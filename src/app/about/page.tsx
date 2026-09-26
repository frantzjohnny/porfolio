import { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer, { socialLinks } from "@/components/layout/Footer";
import CTASection from "@/components/sections/CTASection";
import TechnologiesSection from "@/components/sections/TechnologiesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import { Zap, Target, Shield, Compass, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Développeur full-stack passionné par les produits digitaux — découvrez le parcours de Johnny F T Rene.",
};

const timeline = [
  {
    year: "2021",
    title: "Développement web & Intégration",
    description:
      "Premiers projets professionnels — architectures front-end modernes, intégrations d'APIs et maîtrise des fondamentaux du web réactif.",
  },
  {
    year: "2022",
    title: "Applications web & Plateformes",
    description:
      "Conception d'architectures d'applications complexes, modélisation de bases de données relationnelles et travail sur la performance réseau.",
  },
  {
    year: "2023",
    title: "SaaS & Systèmes sur mesure",
    description:
      "Développement complet de solutions SaaS, dashboards administratifs d'entreprise et plateformes interactives à fort engagement.",
  },
  {
    year: "2024",
    title: "Architecture produit & Performance",
    description:
      "Spécialisation dans la création de produits digitaux scalables avec Next.js, Supabase, TypeScript et intégration d'automatisations fiables.",
  },
  {
    year: "2025",
    title: "Solutions digitales d'envergure",
    description:
      "Accompagnement d'entreprises et de fondateurs dans le déploiement de plateformes performantes avec un haut standard d'expérience utilisateur.",
  },
];

const values = [
  {
    icon: Zap,
    title: "Performance",
    description: "Code optimisé, temps de chargement ultra-rapides et fiabilité technique éprouvée.",
  },
  {
    icon: Target,
    title: "Précision",
    description: "Attention méticuleuse aux détails d'interface, typographie et alignements parfaits.",
  },
  {
    icon: Shield,
    title: "Robustesse",
    description: "Architectures typées, sécurité des flux de données et code maintenable sur le long terme.",
  },
  {
    icon: Compass,
    title: "Vision Produit",
    description: "Compréhension profonde des enjeux business et de la valeur délivrée à l'utilisateur.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      {/* 32. Internal Hero Spacing: padding-top 140px, padding-bottom 80px */}
      <main className="internal-hero-py">
        <div className="container-custom">
          {/* 38. Hero & Profile Block */}
          <div className="mb-24 lg:mb-32">
            <p className="text-xs font-semibold text-[#6F737A] uppercase tracking-[0.2em] mb-4">
              À PROPOS
            </p>
            <h1 className="text-[clamp(44px,5.5vw,76px)] font-bold text-[#080B12] leading-[1.0] tracking-tight max-w-4xl">
              Je construis des produits digitaux avec une vision{" "}
              <span className="text-[#9CA3AF]">qui va au-delà du code.</span>
            </h1>

            <div className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Profile Card (5 cols) */}
              <div className="lg:col-span-5">
                <div className="rounded-[24px] bg-[#0A0D17] text-white relative overflow-hidden border border-[#232733] flex flex-col">
                  {/* Photo with low-starting subtle dark gradient: chin, mouth and beard remain 100% visible */}
                  <div className="relative w-full h-[400px] sm:h-[410px] lg:h-[420px] overflow-hidden bg-[#121624]">
                    <Image
                      src="/images/johnny-profile.jpg"
                      alt="Johnny F T Rene - Développeur Full-Stack & Concepteur Digital"
                      fill
                      priority
                      className="object-cover object-[center_8%]"
                      sizes="(max-width: 1024px) 100vw, 480px"
                    />
                    {/* Subtle dark gradient overlay: starts at 75% depth, smoothly blending only lower t-shirt into card */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(to bottom, transparent 75%, rgba(10, 13, 23, 0.3) 88%, #0A0D17 100%)",
                      }}
                    />
                  </div>

                  {/* Card Details */}
                  <div className="p-6 sm:p-7 pt-4">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/50 block mb-1.5">
                        PROFIL PROFESSIONNEL
                      </span>
                      <h3 className="text-2xl sm:text-[26px] font-bold tracking-tight text-white">
                        Johnny F T Rene
                      </h3>
                      <p className="text-sm text-white/70 mt-1 mb-4">
                        Développeur Full-Stack & Concepteur Digital
                      </p>
                    </div>

                    <div className="pt-3.5 border-t border-white/10 space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-white/50">Localisation</span>
                        <span className="font-semibold text-white">Brasil / Remote</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-white/50">Disponibilité</span>
                        <span className="inline-flex items-center gap-1.5 text-emerald-400 font-semibold">
                          <span className="w-2 h-2 rounded-full bg-emerald-400" />
                          Disponible pour projets
                        </span>
                      </div>
                    </div>

                    {/* Reused Social Icons from Footer */}
                    <div className="pt-3.5 mt-3.5 border-t border-white/10 flex items-center gap-2">
                      {socialLinks.map((social) => {
                        const Icon = social.icon;
                        return (
                          <a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.label}
                            className="w-9 h-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/15 hover:border-white/30 transition-all duration-200"
                          >
                            <Icon size={16} />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bio & Approach (7 cols) */}
              <div className="lg:col-span-7 flex flex-col justify-between h-full">
                <div className="space-y-6 text-[#4A4E56] text-[17px] sm:text-[18px] leading-relaxed">
                  <p className="text-[#080B12] font-medium text-[20px] sm:text-[22px] leading-snug">
                    Je suis développeur full-stack passionné par la création de solutions digitales où la rigueur technique rencontre l&apos;élégance de l&apos;expérience utilisateur.
                  </p>
                  <p>
                    Mon approche repose sur une conviction simple : une application ne doit pas seulement fonctionner sans bug, elle doit être fluide, évidente et agréable à utiliser à chaque seconde.
                  </p>
                  <p className="text-[#6F737A]">
                    J&apos;interviens aux côtés d&apos;entrepreneurs, d&apos;agences et d&apos;entreprises pour concevoir des plateformes web, des SaaS robustes et des dashboards administratifs pensés pour durer.
                  </p>
                </div>

                {/* Values / Approach Grid */}
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {values.map((v) => {
                    const IconComponent = v.icon;
                    return (
                      <div
                        key={v.title}
                        className="p-5 sm:p-6 bg-[#FAFAFA] rounded-[20px] border border-[#E5E7EB] hover:border-[#D9DDE2] transition-colors"
                      >
                        <div className="w-10 h-10 rounded-full bg-white border border-[#E5E7EB] flex items-center justify-center mb-3">
                          <IconComponent size={18} className="text-[#080B12]" strokeWidth={1.8} />
                        </div>
                        <h4 className="text-[15px] font-bold text-[#080B12] mb-1">
                          {v.title}
                        </h4>
                        <p className="text-xs text-[#6F737A] leading-relaxed">
                          {v.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Block */}
          <div className="mb-24 lg:mb-32">
            <p className="text-xs font-semibold text-[#6F737A] uppercase tracking-[0.2em] mb-4">
              MON PARCOURS
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#080B12] leading-tight tracking-tight mb-14">
              Une progression{" "}
              <span className="text-[#9CA3AF]">constante & ciblée.</span>
            </h2>

            <div className="relative border-l border-[#E5E7EB] ml-4 sm:ml-28 pl-6 sm:pl-10 space-y-10">
              {timeline.map((item) => (
                <div key={item.year} className="relative group">
                  <span className="sm:absolute sm:-left-36 sm:w-24 text-right text-sm font-bold text-[#080B12] block mb-2 sm:mb-0">
                    {item.year}
                  </span>

                  <span className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-[#080B12] bg-white group-hover:bg-[#080B12] transition-colors" />

                  <div className="bg-[#FAFAFA] group-hover:bg-[#F5F6F7] border border-[#E5E7EB] rounded-[18px] p-6 sm:p-7 transition-colors">
                    <h3 className="text-base sm:text-lg font-bold text-[#080B12] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-[15px] text-[#6F737A] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 ml-4 sm:ml-28 pl-6 sm:pl-10">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 text-[15px] font-bold text-[#080B12] hover:text-[#4A4E56] transition-colors"
              >
                <span>Prêt à concevoir votre prochain produit digital ?</span>
                <span className="w-9 h-9 rounded-full bg-[#080B12] text-white flex items-center justify-center group-hover:bg-[#1a1f2e] group-hover:translate-x-1 transition-all">
                  <ArrowRight size={15} />
                </span>
              </Link>
            </div>
          </div>
        </div>

        <TechnologiesSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
