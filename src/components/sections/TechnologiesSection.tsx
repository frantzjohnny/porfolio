const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Supabase",
  "PostgreSQL",
  "Node.js",
  "Vercel",
  "Git & GitHub",
];

export default function TechnologiesSection() {
  return (
    <section className="section-py bg-white border-t border-[#F3F4F6]">
      <div className="container-custom">
        {/* Heading */}
        <div className="mb-8 text-center sm:text-left">
          <p className="text-xs font-semibold text-[#6F737A] uppercase tracking-[0.2em] mb-2">
            STACK TECHNIQUE
          </p>
          <h3 className="text-[20px] sm:text-[23px] font-bold text-[#080B12] tracking-tight">
            Technologies & Environnements maîtrisés
          </h3>
        </div>

        {/* Technology Pills Container */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center justify-center min-h-[44px] sm:min-h-[46px] h-[44px] sm:h-[46px] px-4 sm:px-5 rounded-full border border-[#E1E4E8] bg-[#FAFAFA] text-[13px] sm:text-[14px] font-semibold text-[#080B12] hover:bg-[#080B12] hover:text-white hover:border-[#080B12] transition-colors duration-200 cursor-default shadow-sm text-center"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
