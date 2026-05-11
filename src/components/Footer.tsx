import logoImg from "@/assets/logo-urbansense.png";

const navLinks = [
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Para quem é", href: "#para-quem" },
  { label: "Piloto", href: "#piloto" },
  { label: "Contato", href: "mailto:contato@urbansense.app" },
  { label: "Privacidade", href: "#" },
];

const socials = [
  { label: "Li", href: "#" },
  { label: "In", href: "#" },
  { label: "Gh", href: "#" },
];

const Footer = () => (
  <footer style={{ backgroundColor: "#1E2D35" }}>
    <div className="container mx-auto px-4 lg:px-20">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 py-10">
        {/* Logo */}
        <div>
          <img src={logoImg} alt="UrbanSense" className="h-10 w-auto object-contain mb-1" />
          <p className="text-xs" style={{ color: "#B8975A" }}>Gestão inteligente de chamados para condomínios</p>
        </div>

        {/* Nav */}
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} className="text-white/60 text-sm hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        {/* Social */}
        <div className="flex gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="w-9 h-9 rounded-full border flex items-center justify-center text-white/60 text-xs hover:text-white transition-colors"
              style={{ borderColor: "rgba(184,151,90,0.3)" }}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-white/[0.08] py-5 text-center">
        <p className="text-white/35 text-[13px]">
          Projeto em validação — 2025 · UrbanSense · Sorocaba/SP
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
