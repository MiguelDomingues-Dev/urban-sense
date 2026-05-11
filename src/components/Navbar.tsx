import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import logoImg from "@/assets/logo-urbansense.png";

const links = [
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Para quem é", href: "#para-quem" },
  { label: "Piloto", href: "#piloto" },
  { label: "Contato", href: "mailto:contato@urbansense.app" },
];

const NAV_BG = "#2C3E47";
const GOLD = "#B8975A";

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setVisible(y < lastY.current || y < 80);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openForm = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSfzgU7f1UQ-e5hHaKYW-vfjPn_Gh9ZmqeL9v03k-2DLYuyxzA/viewform",
      "_blank"
    );
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{ backgroundColor: NAV_BG, borderBottom: "1px solid rgba(255,255,255,0.08)" }}
    >
      <div className="container mx-auto flex items-center justify-between h-20 px-4 lg:px-8">
        {/* Logo */}
        <a href="#" className="shrink-0 flex flex-col items-start leading-tight">
          <img
            src={logoImg}
            alt="UrbanSense"
            className="h-11 w-auto object-contain"
            style={{ borderRadius: "4px", boxShadow: "0 2px 8px rgba(0,0,0,0.25)" }}
          />
          <span className="text-[11px] mt-1" style={{ color: GOLD }}>
            Gestão inteligente de chamados para condomínios
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium transition-colors"
              style={{ color: "rgba(255,255,255,0.75)", fontSize: "14px" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = GOLD)}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="outline"
            className="text-sm font-medium rounded-lg bg-transparent"
            style={{ color: GOLD, borderColor: GOLD }}
          >
            Acessar painel
          </Button>
          <Button
            className="text-sm font-semibold px-5 text-white rounded-lg hover:opacity-90"
            style={{ backgroundColor: GOLD }}
            onClick={openForm}
          >
            Quero testar
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2"
          style={{ color: "#FFFFFF" }}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden px-4 pb-4"
          style={{ backgroundColor: NAV_BG, borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block py-3 text-sm font-medium"
              style={{ color: "rgba(255,255,255,0.75)" }}
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <div className="flex flex-col gap-2 mt-3">
            <Button
              variant="outline"
              className="text-sm justify-start bg-transparent"
              style={{ color: GOLD, borderColor: GOLD }}
            >
              Acessar painel
            </Button>
            <Button
              className="text-sm font-semibold text-white"
              style={{ backgroundColor: GOLD }}
              onClick={openForm}
            >
              Quero testar
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
