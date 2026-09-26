import Link from "next/link";
import { ArrowRight, MessageCircle, Mail } from "lucide-react";

export default function CTASection() {
  return (
    <section className="bg-[#F3F4F6] section-py border-t border-[#E5E7EB]/60">
      {/* 28. Container max-width: 1100px */}
      <div className="container-cta">
        <div>
          {/* Eyebrow */}
          <p className="text-xs font-semibold text-[#6F737A] uppercase tracking-[0.2em] mb-4 sm:mb-5">
            VOUS AVEZ UNE IDÉE ?
          </p>

          {/* 20. Heading: clamp(48px, 6vw, 80px), max-width: 900px */}
          <h2 className="text-[clamp(48px,5.8vw,80px)] font-bold text-[#080B12] leading-[0.95] tracking-tight max-w-[900px]">
            Construisons quelque chose{" "}
            <span className="text-[#9CA3AF]">
              d&apos;utile et mémorable.
            </span>
          </h2>

          {/* Description: 16px-18px */}
          <p className="mt-6 sm:mt-7 text-[#6F737A] text-[16px] sm:text-[18px] leading-relaxed max-w-2xl">
            Discutons de vos besoins, de vos ambitions techniques et voyons ensemble
            comment concrétiser votre vision dans les meilleures conditions.
          </p>

          {/* 20. CTA Buttons: height: 52px-56px, gap: 12px, social/contact: 48px */}
          <div className="flex flex-wrap items-center gap-3 mt-8">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 min-h-[54px] sm:min-h-[56px] h-[54px] sm:h-[56px] px-8 bg-[#080B12] text-white text-[15px] font-medium rounded-full hover:bg-[#1a1f2e] transition-all hover:scale-[1.02] active:scale-[0.98] shadow-sm"
            >
              <span>Discutons ensemble</span>
              <ArrowRight size={17} className="ml-1 transform group-hover:translate-x-1 transition-transform duration-200" />
            </Link>

            <a
              href="https://wa.me/yourphonenumber"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 min-h-[48px] h-[48px] px-5 sm:px-6 rounded-full bg-white border border-[#D9DDE2] text-[14px] sm:text-[15px] font-medium text-[#080B12] hover:bg-[#080B12] hover:text-white hover:border-[#080B12] transition-all duration-200 shadow-sm"
            >
              <MessageCircle size={18} />
              <span>WhatsApp</span>
            </a>

            <a
              href="mailto:hello@johnnyftrene.com"
              className="inline-flex items-center gap-2 min-h-[48px] h-[48px] px-5 sm:px-6 rounded-full bg-white border border-[#D9DDE2] text-[14px] sm:text-[15px] font-medium text-[#080B12] hover:bg-[#080B12] hover:text-white hover:border-[#080B12] transition-all duration-200 shadow-sm"
            >
              <Mail size={18} />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
