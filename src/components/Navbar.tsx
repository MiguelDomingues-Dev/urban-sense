import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import logoImg from "@/assets/logo-urbansense.png";

const links = [
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Para quem é", href: "#problema" },
  { label: "Recursos", href: "#recursos" },
  { label: "Piloto", href: "#piloto" },
];

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setVisible(y < lastY.current || y < 80);
      setScrolled(y > 20);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      } ${
        scrolled
          ? "bg-white/80 backdrop-blur-lg shadow-sm"
          : "bg-white"
      }`}
      style={{ borderBottom: "1px solid #E2E8F0" }}
    >
      <div className="container mx-auto flex items-center justify-between h-20 px-4 lg:px-8">
        {/* Logo */}
        <a href="#" className="shrink-0 flex items-center">
          <img src={logoImg} alt="UrbanSense" className="h-12 w-auto object-contain" />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium transition-colors hover:opacity-70"
              style={{ color: "#0A2540", fontSize: "14px" }}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="outline"
            className="text-sm font-medium rounded-lg"
            style={{ color: "#0A2540", borderColor: "#0A2540" }}
          >
            Acessar painel
          </Button>
          <Button
            className="text-sm font-semibold px-5 text-white rounded-lg"
            style={{ backgroundColor: "#00B4D8" }}
          >
            Quero testar
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2"
          style={{ color: "#0A2540" }}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white px-4 pb-4" style={{ borderTop: "1px solid #E2E8F0" }}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block py-3 text-sm font-medium"
              style={{ color: "#0A2540" }}
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <div className="flex flex-col gap-2 mt-3">
            <Button variant="outline" className="text-sm justify-start" style={{ color: "#0A2540", borderColor: "#0A2540" }}>
              Acessar painel
            </Button>
            <Button className="text-sm font-semibold text-white" style={{ backgroundColor: "#00B4D8" }}>
              Quero testar
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
