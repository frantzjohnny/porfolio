import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <Header />
      {/* 41. 404 with intentional generous whitespace and balanced elements */}
      <main className="min-h-[80vh] flex items-center justify-center pt-32 pb-24">
        <div className="container-custom text-center py-12 sm:py-20">
          <p className="text-xs font-semibold text-[#6F737A] uppercase tracking-[0.25em] mb-6">
            ERREUR 404 — PAGE INTROUVABLE
          </p>

          <h1 className="text-[clamp(90px,16vw,190px)] font-black text-[#080B12] leading-none tracking-tighter select-none mb-6">
            404
          </h1>

          <h2 className="text-2xl sm:text-3xl font-bold text-[#080B12] tracking-tight mb-4">
            Page introuvable.
          </h2>

          <p className="text-[#6F737A] text-[16px] sm:text-[18px] max-w-md mx-auto leading-relaxed mb-10 sm:mb-12">
            La page que vous recherchez n&apos;existe pas, a été déplacée ou son URL est incorrecte.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2.5 min-h-[56px] h-[56px] px-8 rounded-full bg-[#080B12] text-white text-[15px] font-semibold hover:bg-[#1a1f2e] transition-all hover:scale-[1.02] active:scale-[0.98] shadow-sm w-full sm:w-auto"
            >
              <Home size={18} />
              <span>Retour à l&apos;accueil</span>
            </Link>

            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2.5 min-h-[56px] h-[56px] px-8 rounded-full border border-[#D9DDE2] text-[#080B12] text-[15px] font-semibold hover:bg-[#F5F6F7] hover:border-[#080B12] transition-all w-full sm:w-auto"
            >
              <ArrowLeft size={18} />
              <span>Consulter les projets</span>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
