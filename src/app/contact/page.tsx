"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowUpRight, Check } from "lucide-react";

const projectTypes = [
  "Site Web",
  "Application",
  "SaaS",
  "Dashboard",
  "UI/UX",
  "E-commerce",
];

const budgetRanges = [
  "< $1,000",
  "$1,000 – $3,000",
  "$3,000 – $7,000",
  "$7,000 – $15,000",
  "> $15,000",
  "À discuter",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "Site Web",
    budget: "$3,000 – $7,000",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setLoading(false);
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      company: "",
      projectType: "Site Web",
      budget: "$3,000 – $7,000",
      message: "",
    });
    setSubmitted(false);
  };

  return (
    <div className="bg-white text-[#080B12]">
      {/* 03. Global Header */}
      <Header />

      <main className="w-full">
        {/* 04. Hero Section — Centralized Editorial Intro */}
        {/* Header clearance: pt-[140px] to pt-[160px] ensures text never hides under fixed 72px-84px header */}
        <section className="pt-[140px] sm:pt-[150px] lg:pt-[160px] pb-[50px] sm:pb-[60px]">
          <div className="container-contact-hero text-center">
            {/* 05. Eyebrow */}
            <p className="text-[11px] sm:text-[12px] font-semibold text-[#737373] uppercase tracking-[0.20em] mb-5">
              CONTACT & COLLABORATION
            </p>

            {/* 06. H1 */}
            <h1 className="text-[clamp(44px,7vw,92px)] font-bold text-[#080B12] leading-[0.92] tracking-[-0.055em] max-w-[850px] mx-auto text-center">
              <span>Parlez-moi de </span>
              <br />
              <span className="text-[#A5AAB3]">votre projet.</span>
            </h1>

            {/* 07. Hero Description */}
            <p className="mt-6 text-[17px] sm:text-[18px] leading-[1.55] text-[#737373] max-w-[650px] mx-auto text-center font-normal">
              Vous avez une idée de produit, un projet à concrétiser ou une refonte stratégique ?
              Remplissez ce formulaire et je vous réponds sous 24h ouvrées.
            </p>
          </div>
        </section>

        {/* 08, 09, 10. Form Container — Editorial, Narrow, Directly on White Canvas */}
        {/* Rhythm: mt: 64px–80px, pb: 80px–120px before footer */}
        <section className="mt-16 sm:mt-20 pb-24 sm:pb-28 lg:pb-32">
          <div className="container-contact-form">
            {submitted ? (
              /* Success Confirmation */
              <div className="py-16 sm:py-20 text-center border-b border-[#DDE1E6] pb-16">
                <div className="w-14 h-14 rounded-full bg-[#080B12] text-white flex items-center justify-center mx-auto mb-6">
                  <Check size={26} strokeWidth={2} />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#080B12] tracking-tight mb-3">
                  Message transmis avec succès.
                </h2>
                <p className="text-[16px] sm:text-[17px] text-[#737373] max-w-lg mx-auto leading-relaxed mb-8">
                  Merci pour votre confiance. J&apos;analyse votre demande avec soin et reviens vers vous sous 24h ouvrées.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center justify-center h-[48px] px-6 rounded-full border border-[#DDE1E6] text-[13px] font-semibold text-[#080B12] hover:bg-[#F3F4F6] transition-colors cursor-pointer"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              /* 11-23. Minimal Editorial Form */
              <form onSubmit={handleSubmit} className="space-y-8 sm:space-y-10">
                {/* 15. Name + Email: 2 columns on desktop (50%/50%, gap 32px), 1 col on mobile */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {/* Name Field */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="name"
                      className="text-[12px] sm:text-[13px] font-semibold text-[#171717] mb-2"
                    >
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jean Dupont"
                      className="w-full h-[56px] px-0 bg-transparent border-0 border-b border-[#DDE1E6] rounded-none text-[16px] text-[#080B12] placeholder:text-[#A5AAB3] focus:outline-none focus:ring-0 focus:border-[#080B12] transition-colors duration-200"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="email"
                      className="text-[12px] sm:text-[13px] font-semibold text-[#171717] mb-2"
                    >
                      Adresse Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jean@exemple.com"
                      className="w-full h-[56px] px-0 bg-transparent border-0 border-b border-[#DDE1E6] rounded-none text-[16px] text-[#080B12] placeholder:text-[#A5AAB3] focus:outline-none focus:ring-0 focus:border-[#080B12] transition-colors duration-200"
                    />
                  </div>
                </div>

                {/* 16. Company / Organisation: full width */}
                <div className="flex flex-col">
                  <label
                    htmlFor="company"
                    className="text-[12px] sm:text-[13px] font-semibold text-[#171717] mb-2"
                  >
                    Entreprise ou Organisation
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Nom de votre entreprise (optionnel)"
                    className="w-full h-[56px] px-0 bg-transparent border-0 border-b border-[#DDE1E6] rounded-none text-[16px] text-[#080B12] placeholder:text-[#A5AAB3] focus:outline-none focus:ring-0 focus:border-[#080B12] transition-colors duration-200"
                  />
                </div>

                {/* 17 & 18. Type de projet: Title + Pills */}
                <div>
                  <label className="block text-[12px] sm:text-[13px] font-semibold text-[#171717] mb-3">
                    Type de projet
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {projectTypes.map((type) => {
                      const isSelected = formData.projectType === type;
                      return (
                        <button
                          type="button"
                          key={type}
                          onClick={() => setFormData({ ...formData, projectType: type })}
                          className={`inline-flex items-center justify-center h-[38px] sm:h-[40px] px-3.5 sm:px-4 rounded-full text-[13px] font-medium transition-all duration-200 cursor-pointer ${
                            isSelected
                              ? "bg-[#080B12] text-white border border-[#080B12]"
                              : "bg-white text-[#080B12] border border-[#DDE1E6] hover:border-[#080B12]"
                          }`}
                        >
                          {type}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 19 & 20. Budget estimé: Title + Dollar Pills */}
                <div>
                  <label className="block text-[12px] sm:text-[13px] font-semibold text-[#171717] mb-3">
                    Budget estimé
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {budgetRanges.map((range) => {
                      const isSelected = formData.budget === range;
                      return (
                        <button
                          type="button"
                          key={range}
                          onClick={() => setFormData({ ...formData, budget: range })}
                          className={`inline-flex items-center justify-center h-[38px] sm:h-[40px] px-3.5 sm:px-4 rounded-full text-[13px] font-medium transition-all duration-200 cursor-pointer ${
                            isSelected
                              ? "bg-[#080B12] text-white border border-[#080B12]"
                              : "bg-white text-[#080B12] border border-[#DDE1E6] hover:border-[#080B12]"
                          }`}
                        >
                          {range}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 21. Details du projet (Message): Minimal Textarea */}
                <div className="flex flex-col">
                  <label
                    htmlFor="message"
                    className="text-[12px] sm:text-[13px] font-semibold text-[#171717] mb-2"
                  >
                    Détails du projet *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Parlez-moi de votre projet, vos objectifs, fonctionnalités clés et contraintes..."
                    className="w-full min-h-[160px] py-3 px-0 bg-transparent border-0 border-b border-[#DDE1E6] rounded-none text-[16px] leading-[1.5] text-[#080B12] placeholder:text-[#A5AAB3] focus:outline-none focus:ring-0 focus:border-[#080B12] transition-colors duration-200 resize-y"
                  />
                </div>

                {/* 23. Submit Button — Left Aligned, Pill Shape, Clean */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center justify-center gap-2 h-[52px] sm:h-[56px] px-6 sm:px-7 rounded-full bg-[#080B12] text-white text-[14px] font-semibold hover:bg-[#1a1f2e] active:scale-[0.98] transition-all duration-200 cursor-pointer disabled:opacity-60"
                  >
                    <span>{loading ? "Envoi en cours..." : "Envoyer le message"}</span>
                    <ArrowUpRight size={18} strokeWidth={2} />
                  </button>
                </div>
              </form>
            )}

            {/* 24. Contact Information — Minimalist Editorial Details Below Form */}
            <div className="mt-20 pt-10 border-t border-[#E5E7EB]">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/yourphonenumber"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block pb-4 border-b border-[#DDE1E6] sm:border-b-0 hover:opacity-75 transition-opacity"
                >
                  <p className="text-[11px] font-semibold text-[#737373] uppercase tracking-[0.16em] mb-1">
                    WhatsApp
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-[14px] sm:text-[15px] font-medium text-[#080B12]">
                      Message direct
                    </span>
                    <ArrowUpRight size={14} className="text-[#A5AAB3] group-hover:text-[#080B12] transition-colors" />
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:hello@johnnyftrene.com"
                  className="group block pb-4 border-b border-[#DDE1E6] sm:border-b-0 hover:opacity-75 transition-opacity"
                >
                  <p className="text-[11px] font-semibold text-[#737373] uppercase tracking-[0.16em] mb-1">
                    Email
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-[14px] sm:text-[15px] font-medium text-[#080B12]">
                      hello@johnnyftrene.com
                    </span>
                    <ArrowUpRight size={14} className="text-[#A5AAB3] group-hover:text-[#080B12] transition-colors" />
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block pb-4 border-b border-[#DDE1E6] sm:border-b-0 hover:opacity-75 transition-opacity"
                >
                  <p className="text-[11px] font-semibold text-[#737373] uppercase tracking-[0.16em] mb-1">
                    LinkedIn
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-[14px] sm:text-[15px] font-medium text-[#080B12]">
                      Johnny F T Rene
                    </span>
                    <ArrowUpRight size={14} className="text-[#A5AAB3] group-hover:text-[#080B12] transition-colors" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 25. Global Footer */}
      <Footer />
    </div>
  );
}
