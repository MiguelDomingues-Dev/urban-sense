import AnimatedSection from "./AnimatedSection";

const stats = [
  { value: "68%", desc: "dos chamados nunca recebem resposta formal" },
  { value: "4x", desc: "mais chamados duplicados que ocorrências únicas em média" },
  { value: "23 dias", desc: "tempo médio de resolução sem sistema de priorização" },
];

const ProblemSection = () => (
  <section id="problema" className="bg-navy section-padding">
    <div className="container mx-auto px-4 lg:px-8 text-center">
      <AnimatedSection>
        <p className="text-xs font-semibold uppercase tracking-widest text-cyan mb-4">O Problema</p>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">
          As prefeituras estão cegas.
        </h2>
        <p className="text-white/70 text-base md:text-lg max-w-[580px] mx-auto leading-relaxed">
          Chamados duplicados, planilhas desorganizadas e falta de priorização fazem com que problemas simples demorem semanas — enquanto a população perde a confiança.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-5 mt-14">
        {stats.map((s, i) => (
          <AnimatedSection key={i} delay={i * 0.15}>
            <div className="border border-white/20 rounded-2xl p-7 md:p-9 bg-white/5">
              <p className="text-4xl md:text-[52px] font-bold text-cyan leading-none mb-3">{s.value}</p>
              <p className="text-white/70 text-sm leading-relaxed">{s.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={0.5}>
        <p className="text-cyan text-lg font-medium mt-12">
          O UrbanSense resolve os três.
        </p>
      </AnimatedSection>
    </div>
  </section>
);

export default ProblemSection;
