import Link from "next/link";

const navLinks = [
  { href: "/", label: "Portfolio" },
  { href: "/about", label: "À propos" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projets" },
  { href: "/process", label: "Processus" },
  { href: "/contact", label: "Contact" },
];

function WhatsappIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export const socialLinks = [
  {
    label: "WhatsApp",
    href: "https://wa.me/yourphonenumber",
    icon: WhatsappIcon,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/yourprofile",
    icon: LinkedinIcon,
  },
  {
    label: "GitHub",
    href: "https://github.com/yourprofile",
    icon: GithubIcon,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/yourprofile",
    icon: InstagramIcon,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    // 30. Footer: padding-top 90px-110px, padding-bottom 50px
    <footer className="bg-[#050812] text-white pt-[100px] pb-[50px]">
      <div className="container-wide">
        {/* 31. Footer Grid: Desktop Brand 40%, Navigation 20%, Contact 20%, Social 20%, Gap 48px */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-14 border-b border-white/10">
          {/* Brand Column (40% on desktop) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Brand: 28px-32px */}
              <Link
                href="/"
                className="text-[28px] sm:text-[30px] font-bold tracking-tight text-white hover:opacity-85 transition-opacity"
              >
                Johnny F T Rene.
              </Link>
              {/* Description: 14px-16px */}
              <p className="mt-4 text-white/60 text-[14px] sm:text-[15px] leading-relaxed max-w-sm">
                Développeur full-stack spécialisé dans la création de produits digitaux modernes, de plateformes web et de systèmes sur mesure.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
              <span className="text-[13px] sm:text-[14px] font-medium text-white/80">
                Disponible pour de nouveaux projets
              </span>
            </div>
          </div>

          {/* Nav, Contact, Social Columns (60% divided into 3 cols = 20% each) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10">
            {/* Navigation: 14px-15px, links padding 6px 0 */}
            <div>
              <p className="text-[12px] font-semibold text-white/40 uppercase tracking-[0.2em] mb-4">
                Navigation
              </p>
              <ul className="space-y-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-block py-1.5 text-[14px] sm:text-[15px] text-white/70 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact: 14px-15px, links padding 6px 0 */}
            <div>
              <p className="text-[12px] font-semibold text-white/40 uppercase tracking-[0.2em] mb-4">
                Contact
              </p>
              <ul className="space-y-1">
                <li>
                  <a
                    href="mailto:hello@johnnyftrene.com"
                    className="inline-block py-1.5 text-[14px] sm:text-[15px] text-white/70 hover:text-white transition-colors break-all"
                  >
                    hello@johnnyftrene.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/yourphonenumber"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 py-1.5 text-[14px] sm:text-[15px] text-white/70 hover:text-white transition-colors"
                  >
                    <span>WhatsApp</span>
                    <span className="text-white/40">→</span>
                  </a>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 py-1.5 text-[14px] sm:text-[15px] text-white/70 hover:text-white transition-colors"
                  >
                    <span>Formulaire</span>
                    <span className="text-white/40">→</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social: 40px-44px circular icons */}
            <div>
              <p className="text-[12px] font-semibold text-white/40 uppercase tracking-[0.2em] mb-4">
                Social
              </p>
              <div className="flex flex-wrap gap-2.5">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-[42px] h-[42px] rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/15 hover:border-white/30 transition-all duration-200"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[13px] text-white/40">
          <p>© {year} Johnny F T Rene. Tous droits réservés.</p>
          <p>Portfolio conçu & développé avec Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
