import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/sections/CTASection";
import { projects, getProjectBySlug } from "@/data/projects";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return { title: "Projet non trouvé" };

  return {
    title: project.title,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} — Johnny F T Rene`,
      description: project.shortDescription,
      images: [{ url: project.coverImage, width: 1200, height: 630 }],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Header />
      {/* 32. Internal Hero Spacing: padding-top 140px, padding-bottom 80px */}
      <main className="internal-hero-py pb-0">
        <div className="container-wide">
          {/* Back Navigation */}
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-[14px] font-semibold text-[#6F737A] hover:text-[#080B12] transition-colors mb-10"
          >
            <ArrowLeft size={16} className="transform group-hover:-translate-x-1 transition-transform" />
            <span>Tous les projets</span>
          </Link>

          {/* Heading Header */}
          <div className="mb-14 lg:mb-16">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6F737A]">
                {project.category}
              </span>
              <span className="text-[#C5C7CC]">•</span>
              <span className="text-xs font-semibold text-[#9CA3AF]">
                {project.year}
              </span>
            </div>
            <h1 className="text-[clamp(44px,6vw,84px)] font-bold text-[#080B12] leading-[1.0] tracking-tight">
              {project.title}
            </h1>
            <p className="mt-6 text-[#6F737A] text-[18px] sm:text-[20px] max-w-3xl leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          {/* 37. Hero image: Large aspect ratio 16/9, rounded-24px, mb-20 */}
          <div className="relative aspect-[16/9] w-full rounded-[24px] overflow-hidden bg-[#F3F4F6] border border-[#E5E7EB]/50 mb-20 shadow-sm">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              priority
              sizes="(max-width: 1400px) 100vw, 1400px"
              className="object-cover"
            />
          </div>

          {/* 37. Project Details: Content max-width 760px & metadata grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-28 items-start">
            {/* Main Narrative (8 cols, max-w-[760px]) */}
            <div className="lg:col-span-8 space-y-10 max-w-[760px]">
              <section className="p-8 sm:p-10 rounded-[22px] bg-[#FAFAFA] border border-[#E5E7EB]">
                <h2 className="text-xs font-bold text-[#080B12] uppercase tracking-[0.2em] mb-4">
                  01 / CONTEXTE & VISION
                </h2>
                <p className="text-[#4A4E56] text-[16px] sm:text-[17px] leading-relaxed">
                  {project.description}
                </p>
              </section>

              <section className="p-8 sm:p-10 rounded-[22px] bg-white border border-[#E5E7EB]">
                <h2 className="text-xs font-bold text-[#080B12] uppercase tracking-[0.2em] mb-4">
                  02 / LE DÉFI TECHNIQUE
                </h2>
                <p className="text-[#6F737A] text-[16px] sm:text-[17px] leading-relaxed">
                  {project.challenge}
                </p>
              </section>

              <section className="p-8 sm:p-10 rounded-[22px] bg-white border border-[#E5E7EB]">
                <h2 className="text-xs font-bold text-[#080B12] uppercase tracking-[0.2em] mb-4">
                  03 / ARCHITECTURE & SOLUTION
                </h2>
                <p className="text-[#6F737A] text-[16px] sm:text-[17px] leading-relaxed">
                  {project.solution}
                </p>
              </section>

              <section className="p-8 sm:p-10 rounded-[22px] bg-[#080B12] text-white">
                <h2 className="text-xs font-bold text-white/50 uppercase tracking-[0.2em] mb-4">
                  04 / RÉSULTAT & IMPACT
                </h2>
                <p className="text-white/80 text-[16px] sm:text-[17px] leading-relaxed mb-6">
                  {project.result}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-2.5 text-xs text-white/90">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                    <span>Architecture modulaire & scalable</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-white/90">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                    <span>Sécurité & typage TypeScript strict</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-white/90">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                    <span>Performances web & optimisation UX</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-white/90">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                    <span>Code maintenable & documenté</span>
                  </div>
                </div>
              </section>
            </div>

            {/* Sidebar (4 cols) */}
            <div className="lg:col-span-4 sticky top-28 space-y-6">
              <div className="bg-[#FAFAFA] rounded-[22px] p-7 sm:p-8 border border-[#E5E7EB] space-y-6">
                <div>
                  <p className="text-xs font-bold text-[#080B12] uppercase tracking-[0.2em] mb-3">
                    Technologies utilisées
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-semibold text-[#080B12] bg-white border border-[#D9DDE2] px-3.5 py-1.5 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-[#E5E7EB] space-y-4 text-sm">
                  <div>
                    <p className="text-xs text-[#6F737A] mb-1">Catégorie</p>
                    <p className="font-semibold text-[#080B12]">{project.category}</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#6F737A] mb-1">Type d&apos;application</p>
                    <p className="font-semibold text-[#080B12]">{project.subcategory}</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#6F737A] mb-1">Année de livraison</p>
                    <p className="font-semibold text-[#080B12]">{project.year}</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#E5E7EB]">
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 w-full min-h-[52px] h-[52px] bg-[#080B12] text-white text-[14px] font-semibold rounded-full hover:bg-[#1a1f2e] transition-all hover:scale-[1.02] active:scale-[0.98] shadow-sm"
                  >
                    <span>Lancer un projet similaire</span>
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* 37. Visual Gallery / Autres réalisations: Section spacing 100px-140px */}
          <div className="pt-20 pb-28 border-t border-[#E5E7EB]">
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
              <div>
                <p className="text-xs font-semibold text-[#6F737A] uppercase tracking-[0.2em] mb-2">
                  EXPLORATION
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#080B12] tracking-tight">
                  Autres réalisations
                </h2>
              </div>
              <Link
                href="/projects"
                className="text-xs font-bold uppercase tracking-[0.15em] text-[#080B12] hover:text-[#6F737A] transition-colors"
              >
                Voir toute la sélection →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {projects
                .filter((p) => p.slug !== project.slug)
                .slice(0, 2)
                .map((other) => (
                  <Link
                    key={other.slug}
                    href={`/projects/${other.slug}`}
                    className="group block"
                  >
                    <div className="relative aspect-[16/10] w-full rounded-[22px] overflow-hidden bg-[#F3F4F6] border border-[#E5E7EB]/60 mb-5">
                      <Image
                        src={other.coverImage}
                        alt={other.title}
                        fill
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 650px"
                        className="object-cover group-hover:scale-[1.02] transition-transform duration-300 ease-out"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#6F737A] block mb-1">
                          {other.category}
                        </span>
                        <h3 className="text-lg font-bold text-[#080B12] group-hover:text-[#4A4E56] transition-colors">
                          {other.title}
                        </h3>
                      </div>
                      <div className="w-[44px] h-[44px] rounded-full border border-[#D9DDE2] flex items-center justify-center group-hover:bg-[#080B12] group-hover:border-[#080B12] transition-colors">
                        <ArrowUpRight size={18} className="text-[#080B12] group-hover:text-white transition-colors" />
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
