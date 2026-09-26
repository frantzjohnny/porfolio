"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/sections/CTASection";
import { insights, insightCategories } from "@/data/insights";
import { ArrowUpRight } from "lucide-react";

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const filtered =
    activeCategory === "Tous"
      ? insights
      : insights.filter((i) => i.category === activeCategory);

  return (
    <>
      <Header />
      {/* 32. Internal Hero Spacing: padding-top 140px, padding-bottom 80px */}
      <main className="internal-hero-py pb-0">
        <div className="container-wide">
          {/* Header */}
          <div className="mb-14 sm:mb-16">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs font-semibold text-[#6F737A] uppercase tracking-[0.2em] mb-4"
            >
              INSIGHTS & PUBLICATIONS
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(44px,6vw,84px)] font-bold text-[#080B12] leading-[1.0] tracking-tight max-w-4xl"
            >
              Ce que{" "}
              <span className="text-[#9CA3AF]">je partage.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-6 text-[#6F737A] text-[17px] sm:text-[18px] max-w-2xl leading-relaxed"
            >
              Réflexions, retours d&apos;expérience et analyses sur le développement web, l&apos;architecture logicielle et la création de produits digitaux performants.
            </motion.p>
          </div>

          {/* Category filters */}
          <div ref={ref} className="flex flex-wrap gap-2.5 mb-12">
            {insightCategories.map((cat, i) => (
              <motion.button
                key={cat}
                initial={{ opacity: 0, y: 8 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.03, duration: 0.4 }}
                onClick={() => setActiveCategory(cat)}
                className={`py-[10px] px-5 text-[13px] font-semibold tracking-wider rounded-full border transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#080B12] text-white border-[#080B12] shadow-sm"
                    : "bg-white text-[#6F737A] border-[#E5E7EB] hover:border-[#080B12] hover:text-[#080B12]"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          {/* 36. Articles grid: gap 24px, editorial cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24 lg:mb-32">
            {filtered.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: index * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="group flex flex-col justify-between bg-white border border-[#E5E7EB] rounded-[22px] overflow-hidden hover:border-[#080B12] transition-all duration-300 shadow-sm"
              >
                <div>
                  {/* Visual Editorial Cover */}
                  <div className="aspect-[16/10] bg-[#0A0D17] p-6 flex flex-col justify-between relative overflow-hidden border-b border-[#232733]">
                    <div className="flex items-center justify-between z-10">
                      <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/90 bg-white/10 px-3 py-1 rounded-full border border-white/10">
                        {post.category}
                      </span>
                      <span className="text-[11px] font-medium text-white/60">
                        {post.readTime}
                      </span>
                    </div>

                    <div className="z-10">
                      <span className="text-3xl font-black text-white/10 tracking-widest block select-none">
                        0{index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-7">
                    {/* Meta: 12px */}
                    <div className="text-[12px] text-[#9CA3AF] mb-2 font-medium">
                      {new Date(post.date).toLocaleDateString("fr-FR", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </div>

                    {/* Title: 18px-22px */}
                    <h2 className="text-[19px] sm:text-[20px] font-bold text-[#080B12] leading-snug mb-3 group-hover:text-[#4A4E56] transition-colors">
                      {post.title}
                    </h2>

                    {/* Description: 14px-15px */}
                    <p className="text-[14px] sm:text-[15px] text-[#6F737A] leading-[1.5] line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Footer with Circular 44px Icon Button */}
                <div className="px-7 pb-7 pt-2 flex items-center justify-between border-t border-[#F3F4F6]">
                  <span className="text-[13px] font-semibold text-[#080B12] uppercase tracking-[0.1em] group-hover:underline underline-offset-4">
                    Lire l&apos;article
                  </span>
                  <div className="w-[44px] h-[44px] rounded-full border border-[#D9DDE2] flex items-center justify-center group-hover:bg-[#080B12] group-hover:border-[#080B12] transition-all duration-300">
                    <ArrowUpRight
                      size={16}
                      className="text-[#080B12] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                    />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
