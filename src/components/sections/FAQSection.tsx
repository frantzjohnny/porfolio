"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

interface FAQItemData {
  question: string;
  answer: string;
}

const faqData: FAQItemData[] = [
  {
    question: "Quels types de projets développez-vous ?",
    answer:
      "Je conçois et développe des sites web professionnels, des applications web interactives, des plateformes SaaS modulaires, des dashboards administratifs, ainsi que des automatisations de flux de travail. Chaque projet bénéficie d'une attention sur mesure en termes d'architecture, d'ergonomie et de performance.",
  },
  {
    question: "Travaillez-vous avec des clients à l'international ?",
    answer:
      "Oui, absolument. Je collabore régulièrement avec des clients basés en France, en Amérique du Nord, dans les Caraïbes et à l'international. Les outils de travail modernes (Slack, Loom, Google Meet, GitHub) permettent une coordination fluide quelle que soit la distance ou le fuseau horaire.",
  },
  {
    question: "Quels sont les délais habituels de réalisation ?",
    answer:
      "Un site vitrine ou portfolio haut de gamme est généralement livré en 2 à 4 semaines. Pour une application web plus complexe, un MVP ou une plateforme SaaS, comptez entre 4 et 10 semaines selon l'envergure. Un calendrier précis avec des jalons de validation clairs est convenu dès le départ.",
  },
  {
    question: "Pouvez-vous intervenir sur un projet existant ?",
    answer:
      "Oui. J'effectue des audits de code, des refactorisations d'architectures, des refontes d'interfaces ou l'intégration de nouvelles fonctionnalités sur des applications déjà en production afin d'en améliorer la maintenabilité et la vitesse.",
  },
  {
    question: "Comment se déroule le premier échange ?",
    answer:
      "Nous commençons par un échange informel (visio ou message) afin de comprendre vos objectifs, vos contraintes et vos délais. Je vous soumets ensuite une proposition détaillée avec une estimation chiffrée et un calendrier de mise en œuvre sans aucun engagement.",
  },
];

function FAQAccordionItem({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: FAQItemData;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-[#E5E7EB]">
      {/* Clickable area occupies full width, min-height 64-72px, padding 20px 0 */}
      <button
        type="button"
        id={`faq-trigger-${index}`}
        aria-controls={`faq-panel-${index}`}
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between text-left py-5 min-h-[66px] gap-6 group cursor-pointer"
      >
        {/* Question: 16px-18px font-bold */}
        <span className="text-[17px] sm:text-[18px] font-bold text-[#080B12] group-hover:text-[#4A4E56] transition-colors leading-snug">
          {item.question}
        </span>

        {/* Chevron: 20px, rotate 180deg */}
        <div className="w-[40px] h-[40px] rounded-full border border-[#D9DDE2] bg-white flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:bg-[#080B12] group-hover:border-[#080B12] shadow-sm">
          <ChevronDown
            size={20}
            strokeWidth={1.8}
            className={`text-[#080B12] transition-transform duration-200 ease-out group-hover:text-white ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      </button>

      {/* Answer when open */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-panel-${index}`}
            role="region"
            aria-labelledby={`faq-trigger-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-[15px] sm:text-[16px] text-[#6F737A] leading-[1.6] max-w-3xl">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-py bg-white border-t border-[#F3F4F6]">
      <div className="container-faq">
        {/* Header */}
        <div className="mb-10 sm:mb-12">
          <p className="text-xs font-semibold text-[#6F737A] uppercase tracking-[0.2em] mb-3">
            FAQ
          </p>
          <h2 className="text-[clamp(38px,4.5vw,52px)] font-bold text-[#080B12] leading-tight tracking-tight">
            Questions <span className="text-[#9CA3AF]">fréquentes.</span>
          </h2>
          <p className="mt-3 text-[15px] sm:text-[16px] text-[#6F737A] leading-relaxed">
            Une question qui n&apos;est pas abordée ici ?{" "}
            <Link
              href="/contact"
              className="text-[#080B12] font-semibold underline underline-offset-4 hover:text-[#6F737A] transition-colors"
            >
              Écrivez-moi directement
            </Link>
            .
          </p>
        </div>

        {/* Accordion List with border-bottom between items */}
        <div>
          {faqData.map((item, index) => (
            <FAQAccordionItem
              key={index}
              index={index}
              item={item}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
