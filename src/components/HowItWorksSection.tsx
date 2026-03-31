import { Pencil, Sparkles, BarChart3 } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import HowItWorksMockup from "./HowItWorksMockup";

const steps = [
  {
    num: "01",
    icon: Pencil,
    title: "Cidadão reporta",
    body: "Formulário simples pelo celular ou computador. Foto, localização e categoria em menos de 2 minutos.",
  },
  {
    num: "02",
    icon: Sparkles,
    title: "IA organiza e prioriza",
    body: "Nossa IA agrupa chamados similares do mesmo bairro, elimina duplicatas e escala a prioridade automaticamente.",
  },
  {
    num: "03",
    icon: BarChart3,
    title: "Gestor age com dados",
    body: "Painel em tempo real com mapa, dashboard e fila priorizada. Sabe exatamente onde agir primeiro.",
  },
];

const HowItWorksSection = () => (
  <section id="como-funciona" className="bg-off-white section-padding">
    <div className="container mx-auto px-4 lg:px-8 text-center">
      <AnimatedSection>
        <p className="text-xs font-semibold uppercase tracking-widest text-cyan mb-4">Como funciona</p>
        <h2 className="text-3xl md:text-[44px] font-bold text-navy leading-tight">
          Simples para o cidadão.
          <br />
          Poderoso para o gestor.
        </h2>
      </AnimatedSection>

      {/* Steps */}
      <div className="relative mt-16 grid md:grid-cols-3 gap-10 md:gap-6">
        {/* Dashed connector line */}
        <div className="hidden md:block absolute top-10 left-[20%] right-[20%] h-0 border-t-2 border-dashed border-cyan/40" />

        {steps.map((s, i) => (
          <AnimatedSection key={i} delay={i * 0.15} className="relative flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-cyan flex items-center justify-center text-white text-sm font-bold mb-4 relative z-10">
              {s.num}
            </div>
            <s.icon className="w-6 h-6 text-cyan mb-3" />
            <h3 className="text-navy font-bold text-base mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm max-w-[220px] leading-relaxed">{s.body}</p>
          </AnimatedSection>
        ))}
      </div>

      {/* Mockup */}
      <AnimatedSection delay={0.3}>
        <div className="mt-14 mx-auto max-w-4xl">
          <HowItWorksMockup />
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default HowItWorksSection;
