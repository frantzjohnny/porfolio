import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProjectCard from "@/components/projects/ProjectCard";
import CTASection from "@/components/sections/CTASection";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projets",
  description:
    "Sélection de projets, plateformes et applications conçues par Johnny F T Rene.",
};

export default function ProjectsPage() {
  return (
    <>
      <Header />
      {/* 32. Internal Hero Spacing: padding-top 140px, padding-bottom 80px */}
      <main className="internal-hero-py pb-0">
        <div className="container-wide">
          {/* Header */}
          <div className="mb-14 sm:mb-16">
            <p className="text-xs font-semibold text-[#6F737A] uppercase tracking-[0.2em] mb-4">
              SELECTED WORKS & ARCHITECTURE
            </p>
            <h1 className="text-[clamp(44px,6vw,84px)] font-bold text-[#080B12] leading-[1.0] tracking-tight max-w-4xl">
              Quelques projets sur lesquels{" "}
              <span className="text-[#9CA3AF]">j&apos;ai travaillé.</span>
            </h1>
            <p className="mt-6 text-[#6F737A] text-[17px] sm:text-[18px] max-w-2xl leading-relaxed">
              Une sélection de plateformes, d&apos;applications et d&apos;expériences web conçues pour répondre à des problématiques métier concrètes.
            </p>
          </div>

          {/* Grid - container-wide 2 columns with generous 28-32px gap */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-8 mb-24 lg:mb-32">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
