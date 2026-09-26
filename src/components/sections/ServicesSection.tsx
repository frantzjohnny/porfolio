import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Développement Web",
    description:
      "Création de sites web ultra-rapides, élégants et optimisés SEO. Du site vitrine haut de gamme aux plateformes interactives modernes.",
  },
  {
    number: "02",
    title: "Applications Web",
    description:
      "Conception et développement d'applications web réactives et modulaires, axées sur une expérience utilisateur fluide et une logique robuste.",
  },
  {
    number: "03",
    title: "SaaS & Platforms",
    description:
      "Architecture de plateformes SaaS évolutives, systèmes d'abonnements, gestion multi-tenants et intégrations cloud complètes.",
  },
  {
    number: "04",
    title: "Dashboards",
    description:
      "Tableaux de bord sur mesure et interfaces d'administration pour piloter vos données, métriques et opérations clés en toute clarté.",
  },
  {
    number: "05",
    title: "UI/UX",
    description:
      "Direction artistique soignée, design d'interfaces épuré, wireframing et parcours utilisateurs pensés pour maximiser l'engagement.",
  },
  {
    number: "06",
    title: "Automation",
    description:
      "Optimisation de processus métier, connexions d'APIs tierces, webhooks et automatisations de flux de données sans friction.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section-py bg-white border-t border-[#F3F4F6]">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-10 md:mb-12">
          <p className="text-xs font-semibold text-[#6F737A] uppercase tracking-[0.2em] mb-3">
            SERVICES
          </p>
          <h2 className="text-[clamp(44px,5.2vw,64px)] font-bold text-[#080B12] leading-tight tracking-tight max-w-2xl">
            Ce que je fais
          </h2>
        </div>

        {/* Editorial Services Table Rows */}
        <div className="divide-y divide-[#E5E7EB]">
          {services.map((service) => (
            <div key={service.number}>
              <Link
                href="/services"
                className="group min-h-[86px] sm:min-h-[92px] py-5 flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-7 lg:gap-8 hover:bg-[#FAFAFA] -mx-4 sm:-mx-6 px-4 sm:px-6 rounded-[18px] transition-all duration-200"
              >
                {/* 1. Number: 48px */}
                <div className="w-[40px] sm:w-[48px] flex-shrink-0">
                  <span className="text-[13px] font-mono font-bold text-[#9CA3AF] group-hover:text-[#080B12] transition-colors">
                    {service.number}
                  </span>
                </div>

                {/* 2. Title: 220px */}
                <div className="md:w-[220px] flex-shrink-0">
                  <h3 className="text-[19px] sm:text-[20px] font-bold text-[#080B12] group-hover:text-[#4A4E56] transition-colors leading-snug">
                    {service.title}
                  </h3>
                </div>

                {/* 3. Description: 1fr, 14px-15px, line-height 1.45-1.55 */}
                <div className="flex-1 min-w-0 pr-0 md:pr-4">
                  <p className="text-[14px] sm:text-[15px] text-[#6F737A] leading-[1.5]">
                    {service.description}
                  </p>
                </div>

                {/* 4. Action Arrow */}
                <div className="hidden md:flex items-center justify-center w-[44px] flex-shrink-0">
                  <div className="w-[44px] h-[44px] rounded-full border border-[#D9DDE2] bg-white flex items-center justify-center transition-all duration-200 group-hover:bg-[#080B12] group-hover:border-[#080B12] shadow-sm">
                    <ArrowUpRight
                      size={18}
                      strokeWidth={1.8}
                      className="text-[#080B12] transition-all duration-200 group-hover:text-white group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
                    />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Services Section Bottom spacing */}
        <div className="pt-10 flex justify-end">
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-[14px] font-semibold text-[#080B12] hover:text-[#6F737A] transition-colors min-h-[44px]"
          >
            <span>Explorer tous les détails des services</span>
            <span className="text-sm">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
