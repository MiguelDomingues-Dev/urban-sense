import AnimatedSection from "./AnimatedSection";

const stats = [
  { value: "78%", desc: "dos chamados em condomínios chegam por WhatsApp sem nenhum registro formal" },
  { value: "3x", desc: "mais tempo gasto com chamados duplicados do que com a resolução em si" },
  { value: "12 dias", desc: "tempo médio de resolução sem um sistema de priorização" },
];

const ProblemSection = () => (
  <section id="problema" className="bg-navy section-padding">
    <div className="container mx-auto px-4 lg:px-8 text-center">
      <AnimatedSection>
        <p className="text-xs font-semibold uppercase tracking-widest text-cyan mb-4">O Problema</p>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">
          O síndico está sobrecarregado.
        </h2>
        <p className="text-white/70 text-base md:text-lg max-w-[580px] mx-auto leading-relaxed">
          Chamados chegam por WhatsApp, ligação e bilhete — sem registro, sem prioridade, sem histórico. O síndico não sabe o que resolver primeiro e os moradores ficam sem resposta.
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
