const steps = [
  {
    number: "01",
    indicator: "01 / 04",
    title: "Discovery",
    description:
      "Immersion dans vos objectifs, compréhension fine des problématiques utilisateurs et cadrage précis de la vision produit.",
  },
  {
    number: "02",
    indicator: "02 / 04",
    title: "Strategy",
    description:
      "Définition de l'architecture technique, conception UX des parcours, choix de la stack technologique et feuille de route détaillée.",
  },
  {
    number: "03",
    indicator: "03 / 04",
    title: "Build",
    description:
      "Développement itératif, code propre et performant, intégration continue et points d'étape réguliers pour une visibilité totale.",
  },
  {
    number: "04",
    indicator: "04 / 04",
    title: "Launch",
    description:
      "Tests rigoureux, optimisations des performances, déploiement sécurisé en production et accompagnement post-mise en ligne.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-28 lg:py-32 bg-[#050812] text-white">
      <div className="container-wide">
        {/* Header */}
        <div className="mb-12 lg:mb-14">
          <p className="text-xs font-semibold text-white/40 uppercase tracking-[0.2em] mb-4">
            PROCESSUS
          </p>
          <h2 className="text-[clamp(40px,5vw,60px)] font-bold text-white leading-tight tracking-tight max-w-2xl">
            De l&apos;idée <span className="text-white/40">au produit.</span>
          </h2>
        </div>

        {/* Steps Grid: repeat(4, 1fr), gap 20px-24px, min-height 230px-260px */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative p-7 sm:p-8 rounded-[22px] bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between hover:bg-white/[0.05] min-h-[235px] sm:min-h-[250px]"
            >
              <div>
                {/* Step header: STEP 11px-12px, margin-bottom: 24px */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                  <span className="text-[12px] font-mono font-bold tracking-wider text-white/80">
                    STEP {step.number}
                  </span>
                  <span className="text-[11px] font-mono text-white/40 uppercase tracking-widest">
                    {step.indicator}
                  </span>
                </div>

                {/* Title: 20px-22px, margin-bottom: 16px */}
                <h3 className="text-[21px] sm:text-[22px] font-bold text-white mb-4 leading-snug">
                  {step.title}
                </h3>

                {/* Description: 13px-14px, line-height 1.5 */}
                <p className="text-[13px] sm:text-[14px] text-white/60 leading-[1.5]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
