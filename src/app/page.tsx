import Link from "next/link";
import { ArrowRight, ArrowUpRight, Code2, Layers, Cpu, Compass, CheckCircle2 } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProjectCard from "@/components/projects/ProjectCard";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import TechnologiesSection from "@/components/sections/TechnologiesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import { projects } from "@/data/projects";

const heroTags = [
  "FULL-STACK DEVELOPMENT",
  "WEB APPS",
  "SAAS",
  "DASHBOARDS",
  "AUTOMATION",
];

const aboutCompetencies = [
  {
    icon: Code2,
    title: "Web Development",
    desc: "Sites vitrines & corporate haut de gamme, SEO technique, architectures rapides et fluides.",
  },
  {
    icon: Layers,
    title: "Full-Stack Engineering",
    desc: "Développement front-end moderne, APIs sécurisées, gestion de bases de données relationnelles.",
  },
  {
    icon: Cpu,
    title: "SaaS & Platforms",
    desc: "Plateformes modulaires et scalables, systèmes d'authentification et gestion multi-utilisateurs.",
  },
  {
    icon: Compass,
    title: "Digital Products & UX",
    desc: "Conception centrée utilisateur, clarté d'interface et systèmes de composants réutilisables.",
  },
];

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        {/* ===== 1. HERO SECTION ===== */}
        <section className="hero-py bg-white border-b border-[#F3F4F6]">
          <div className="container-custom">
            {/* Eyebrow */}
            <p className="text-[11px] lg:text-xs font-semibold text-[#6F737A] uppercase tracking-[0.25em] mb-6 md:mb-8">
              JOHNNY F T RENE
            </p>

            {/* H1 Main Headline: clamp(64px, 7vw, 112px), line-height 0.92, max-width 1000px, margin-bottom 28px-36px */}
            <h1 className="text-[clamp(64px,7vw,112px)] font-bold text-[#080B12] max-w-[1000px] leading-[0.92] tracking-tight mb-7 sm:mb-8">
              Je transforme <br className="hidden sm:inline" />
              les idées <br className="hidden sm:inline" />
              en <span className="text-[#9CA3AF]">expériences digitales</span> <br className="hidden sm:inline" />
              qui font la différence.
            </h1>

            {/* Description: font-size 16px-18px, line-height 1.5, max-width 620px, margin-bottom 28px-32px */}
            <p className="text-[16px] sm:text-[18px] text-[#6F737A] leading-[1.5] max-w-[620px] mb-7 sm:mb-8">
              Développeur full-stack spécialisé dans la création de sites web, applications, plateformes et systèmes sur mesure.
            </p>

            {/* Action CTA Group: gap 12px-16px, 54-56px height, padding-inline 24px-28px, margin-bottom 28px-32px */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-7 sm:mb-8">
              <Link
                href="#projects-preview"
                className="group inline-flex items-center justify-center min-h-[54px] sm:min-h-[56px] h-[54px] sm:h-[56px] px-7 bg-[#080B12] text-white text-[15px] font-medium rounded-full hover:bg-[#1a1f2e] transition-all hover:scale-[1.02] active:scale-[0.98] shadow-sm"
              >
                <span>Voir mes projets</span>
                <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
              </Link>

              <Link
                href="/contact"
                className="group inline-flex items-center justify-center min-h-[54px] sm:min-h-[56px] h-[54px] sm:h-[56px] px-7 bg-white text-[#080B12] text-[15px] font-medium rounded-full border border-[#D9DDE2] hover:bg-[#F3F4F6] hover:border-[#080B12] transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Discutons ensemble</span>
                <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>

            {/* Specialty Tags: clean floating pills without interfering border line, gap 10px-14px */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 leading-[1.4]">
              {heroTags.map((tag) => (
                <span
                  key={tag}
                  className="text-[12px] sm:text-[13px] font-semibold tracking-wider text-[#4A4E56] border border-[#E5E7EB] px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#FAFAFA] shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 4. PROJECT SECTION (Container-wide, gap 28px-32px, 120px space) ===== */}
        <section id="projects-preview" className="section-py bg-white">
          <div className="container-wide">
            {/* Section Header: Section label mb-2 (8px), Heading mb-8 to mb-10 (32px-40px) */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8 md:mb-10">
              <div>
                <p className="text-xs font-semibold text-[#6F737A] uppercase tracking-[0.2em] mb-2">
                  SELECTED WORKS
                </p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#080B12] leading-tight tracking-tight">
                  Projets sélectionnés
                </h2>
              </div>

              <div>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 text-[14px] sm:text-[15px] font-semibold text-[#080B12] hover:text-[#6F737A] transition-colors group min-h-[44px]"
                >
                  <span>Consulter tous les projets</span>
                  <ArrowUpRight
                    size={18}
                    className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </Link>
              </div>
            </div>

            {/* Project Grid: 2 columns, gap 28px-32px */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-8">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  index={index}
                />
              ))}
            </div>

            {/* 9. Project Footer Link */}
            <div className="mt-8 sm:mt-10 text-center">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2.5 py-3 text-[13px] sm:text-[14px] font-semibold text-[#080B12] hover:text-[#4A4E56] transition-colors border-b border-[#080B12] hover:border-[#4A4E56] min-h-[44px]"
              >
                <span>Voir tous les projets en détail</span>
                <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        </section>

        {/* ===== 10 & 11. ABOUT SECTION (120px desktop padding, grid gap 64px-80px) ===== */}
        <section id="about" className="section-py bg-[#F5F6F7] border-t border-[#E5E7EB]/50">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
              {/* Text 60% */}
              <div className="lg:col-span-7">
                <p className="text-xs font-semibold text-[#6F737A] uppercase tracking-[0.2em] mb-4">
                  À PROPOS
                </p>
                <h2 className="text-[clamp(36px,4.5vw,54px)] font-bold text-[#080B12] leading-tight tracking-tight mb-8">
                  Je construis des produits digitaux avec une vision qui va{" "}
                  <span className="text-[#9CA3AF]">au-delà du code.</span>
                </h2>

                <div className="space-y-6 text-[16px] sm:text-[18px] text-[#6F737A] leading-[1.6]">
                  <p>
                    Je suis <strong className="font-semibold text-[#080B12]">Johnny F T Rene</strong>, développeur full-stack spécialisé dans la conception et le développement de solutions digitales modernes.
                  </p>
                  <p>
                    Mon travail consiste à concevoir et coder des plateformes web fiables, performantes et scalables, tout en accordant une attention méticuleuse à l&apos;ergonomie, à la clarté de l&apos;interface et à l&apos;expérience client.
                  </p>
                  <p>
                    Que vous lanciez un nouveau produit SaaS, une application d&apos;entreprise ou une refonte stratégique, j&apos;interviens comme partenaire technique dédié pour transformer vos idées en solutions concrètes et génératrices de valeur.
                  </p>
                </div>

                {/* 13. About CTA */}
                <div className="mt-8 pt-2">
                  <Link
                    href="/about"
                    className="group inline-flex items-center gap-2 py-2.5 text-[14px] sm:text-[15px] font-semibold text-[#080B12] border-b-2 border-[#080B12] hover:text-[#6F737A] hover:border-[#6F737A] transition-colors min-h-[44px]"
                  >
                    <span>Découvrir mon parcours complet</span>
                    <span className="w-1" />
                    <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* 12. EXPERTISE CARD (padding 28px-36px, items padding 12px-14px, separators 1px solid #E5E7EB) */}
              <div className="lg:col-span-5 bg-white p-7 sm:p-9 rounded-[24px] border border-[#E5E7EB] shadow-sm">
                <div className="pb-4 border-b border-[#E5E7EB]">
                  <p className="text-xs font-semibold text-[#6F737A] uppercase tracking-[0.16em]">
                    DOMAINES D&apos;EXPERTISE
                  </p>
                </div>

                <div className="divide-y divide-[#E5E7EB]">
                  {aboutCompetencies.map((comp) => {
                    const Icon = comp.icon;
                    return (
                      <div
                        key={comp.title}
                        className="py-3.5 sm:py-4 flex items-start gap-3.5 group"
                      >
                        <div className="w-9 h-9 rounded-full bg-[#FAFAFA] border border-[#E5E7EB] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#080B12] group-hover:border-[#080B12] transition-colors">
                          <Icon size={18} className="text-[#080B12] group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <h3 className="font-bold text-[14px] sm:text-[15px] text-[#080B12] mb-1">
                            {comp.title}
                          </h3>
                          <p className="text-[12px] sm:text-[13px] text-[#6F737A] leading-relaxed">
                            {comp.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="pt-5 border-t border-[#E5E7EB] flex items-center justify-between text-xs text-[#6F737A]">
                  <span className="inline-flex items-center gap-1.5 font-medium">
                    <CheckCircle2 size={15} className="text-emerald-500" />
                    Architecture & Code Moderne
                  </span>
                  <span className="font-medium text-[#080B12]">
                    Next.js & Supabase
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 14–18. SERVICES SECTION (Editorial table on white) ===== */}
        <ServicesSection />

        {/* ===== 19–21. PROCESS SECTION (Dark section #050812) ===== */}
        <ProcessSection />

        {/* ===== 22. TECHNOLOGIES SECTION (Minimalist horizontal on white) ===== */}
        <TechnologiesSection />

        {/* ===== 23–24. TESTIMONIALS SECTION (Editorial on #F5F6F7) ===== */}
        <TestimonialsSection />

        {/* ===== 25–27. FAQ SECTION (Max-width 960px on white) ===== */}
        <FAQSection />

        {/* ===== 28–29. CTA SECTION (Max-width 1100px) ===== */}
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
