import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <section className="section-py bg-[#F5F6F7] border-t border-[#E5E7EB]/50">
      <div className="container-wide">
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <p className="text-xs font-semibold text-[#6F737A] uppercase tracking-[0.2em] mb-3">
            TÉMOIGNAGES & RETOURS
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#080B12] leading-tight tracking-tight max-w-2xl">
              Collaborons sur votre{" "}
              <span className="text-[#9CA3AF]">prochain projet.</span>
            </h2>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-[14px] sm:text-[15px] font-semibold text-[#080B12] hover:text-[#6F737A] transition-colors min-h-[44px]"
            >
              <span>Démarrer une collaboration</span>
              <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Testimonials grid: 3 cards, min-height 230px-260px */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-[22px] p-7 sm:p-8 flex flex-col justify-between shadow-sm border border-[#E5E7EB] hover:border-[#D9DDE2] transition-colors min-h-[235px] sm:min-h-[250px]"
            >
              {/* Quote Block */}
              <div>
                <Quote size={22} className="text-[#D1D5DB] mb-4 stroke-[1.5]" />
                <p className="text-[#080B12] text-[16px] sm:text-[17px] leading-[1.5] font-medium">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>

              {/* Author, Role & Project */}
              <div className="pt-5 mt-5 border-t border-[#F3F4F6] flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-[#080B12] text-[14px]">
                      {testimonial.author}
                    </p>
                    <p className="text-[#6F737A] text-[13px] mt-0.5">
                      {testimonial.role} · {testimonial.company}
                    </p>
                  </div>

                  <span className="text-[12px] font-semibold tracking-wider text-[#4A4E56] bg-[#FAFAFA] border border-[#E5E7EB] px-3 py-1 rounded-full">
                    {testimonial.project}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
