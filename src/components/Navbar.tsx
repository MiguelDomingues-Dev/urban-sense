import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const GridIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <rect x="2" y="2" width="10" height="10" rx="2" fill="hsl(193,100%,42%)" />
    <rect x="16" y="2" width="10" height="10" rx="2" fill="hsl(193,100%,42%)" />
    <rect x="2" y="16" width="10" height="10" rx="2" fill="hsl(193,100%,42%)" />
    <rect x="16" y="16" width="10" height="10" rx="2" fill="hsl(193,100%,42%)" opacity="0.5" />
  </svg>
);

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
          ? "bg-white/80 backdrop-blur-lg border-b border-border shadow-sm"
          : "bg-white border-b border-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <GridIcon />
          <span className="text-lg font-bold text-navy">UrbanSense</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-navy/70 hover:text-navy transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" className="text-navy text-sm font-medium">
            Acessar painel
          </Button>
          <Button className="bg-cyan text-primary-foreground hover:bg-cyan/90 text-sm font-semibold px-5">
            Quero testar
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-navy"
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
        <div className="md:hidden bg-white border-t border-border px-4 pb-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block py-3 text-sm font-medium text-navy/70"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <div className="flex flex-col gap-2 mt-3">
            <Button variant="ghost" className="text-navy text-sm justify-start">
              Acessar painel
            </Button>
            <Button className="bg-cyan text-primary-foreground text-sm font-semibold">
              Quero testar
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
