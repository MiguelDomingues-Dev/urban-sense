import { useEffect, useRef, useState } from "react";
import AnimatedSection from "./AnimatedSection";

const useCountUp = (end: number, duration = 1500) => {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const step = (now: number) => {
            const t = Math.min((now - start) / duration, 1);
            const ease = 1 - Math.pow(1 - t, 3);
            setValue(Math.round(ease * end));
            if (t < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [end, duration]);

  return { ref, value };
};

const metrics = [
  { end: 150, suffix: "", label: "usuários no piloto" },
  { end: 6, suffix: "", label: "cidades monitoradas" },
  { end: 0, suffix: "", prefix: "R$ ", label: "custo para as prefeituras" },
];

const logos = ["Prefeitura", "Escola", "Empresa", "Universidade", "ONG"];

const PilotSection = () => (
  <section id="piloto" className="bg-white section-padding">
    <div className="container mx-auto px-4 lg:px-8 text-center">
      <AnimatedSection>
        <p className="text-xs font-semibold uppercase tracking-widest text-cyan mb-4">Projeto Piloto</p>
        <h2 className="text-3xl md:text-[44px] font-bold text-navy leading-tight">
          Testado. Aprovado. Em expansão.
        </h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-5 mt-14">
        {metrics.map((m, i) => (
          <AnimatedSection key={i} delay={i * 0.12}>
            <MetricCard {...m} />
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={0.3}>
        <div className="bg-navy rounded-2xl p-8 md:p-10 mt-10 max-w-[680px] mx-auto text-left">
          <p className="text-white italic text-lg leading-relaxed">
            "Uma ferramenta que finalmente coloca o dado certo na mão de quem decide."
          </p>
          <p className="text-cyan text-sm mt-4">— Equipe UrbanSense</p>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.4}>
        <p className="text-muted-foreground text-sm mt-12 mb-5">Sendo validado com</p>
        <div className="flex flex-wrap justify-center gap-4">
          {logos.map((name) => (
            <div
              key={name}
              className="w-[120px] h-[40px] rounded-lg bg-muted flex items-center justify-center text-xs text-muted-foreground font-medium"
            >
              {name}
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

const MetricCard = ({ end, prefix, label }: { end: number; suffix: string; prefix?: string; label: string }) => {
  const { ref, value } = useCountUp(end);
  return (
    <div ref={ref} className="rounded-2xl p-8" style={{ backgroundColor: "#E0F7FA" }}>
      <p className="text-4xl md:text-[56px] font-bold text-navy leading-none mb-2">
        {prefix}
        {value}
      </p>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};

export default PilotSection;
