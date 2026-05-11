import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const CTASection = () => {
  const [email, setEmail] = useState("");

  return (
    <section
      className="section-padding"
      style={{
        background: "linear-gradient(45deg, #2C3E47 0%, #B8975A 100%)",
      }}
    >
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <AnimatedSection>
          <h2 className="text-3xl md:text-[52px] font-bold text-white leading-tight">
            Seu condomínio merece uma gestão melhor.
          </h2>
          <p className="text-white/75 text-lg mt-4">
            Entre para o piloto. Gratuito. Sem instalação. Funciona no navegador.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-3 mt-9 max-w-[480px] mx-auto">
            <input
              type="email"
              placeholder="e-mail do síndico ou administradora"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white rounded-lg px-5 py-3.5 text-sm text-navy placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="bg-white text-navy font-bold text-sm px-7 py-3.5 rounded-lg hover:bg-white/90 transition-colors shrink-0">
              Quero participar
            </button>
          </div>

          <p className="text-white/60 text-[13px] mt-3">
            Sem spam · Dados protegidos · Resposta em 24h
          </p>

          <a
            href="mailto:contato@urbansense.app"
            className="inline-block text-white underline text-sm mt-5 hover:text-white/80 transition-colors"
          >
            Síndico, morador ou administradora? Fale com a gente →
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTASection;
