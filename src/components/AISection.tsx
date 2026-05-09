import { CheckCircle2 } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const features = [
  "Detecta chamados similares por torre e área",
  "Agrupa por localização e descrição",
  "Escala prioridade automaticamente",
  "Notifica todos os moradores da torre ao resolver",
  "Reduz 80% do volume de chamados duplicados",
];

const citizens = [
  { initials: "MC", name: "Maria Costa", address: "Rua Cel Jardim Lopes, 145", sim: 98 },
  { initials: "PL", name: "Pedro Lima", address: "Rua Fernandes Altares, 178", sim: 97 },
  { initials: "JS", name: "João Silva", address: "Rua Joaquim, 230", sim: 95 },
  { initials: "CM", name: "Carla Mendes", address: "Av. São Pedro de Lima, 201", sim: 94 },
  { initials: "AF", name: "Ana Ferreira", address: "Av. Central, 89", sim: 92 },
];

const AISection = () => (
  <section id="recursos" className="bg-navy section-padding">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-10">
        {/* Left */}
        <div className="lg:w-[48%] w-full">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-cyan mb-4">
              Inteligência Artificial
            </p>
            <h2 className="text-3xl md:text-[44px] font-bold text-white leading-tight">
              Cinco moradores, um problema, uma solução.
            </h2>
            <p className="text-white/70 text-base mt-5 max-w-[440px] leading-relaxed">
              Quando vários moradores reportam o mesmo problema na mesma torre, nossa IA identifica automaticamente, agrupa os chamados e escala a prioridade — sem criar ruído para o síndico.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="mt-7 space-y-3.5">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-[18px] h-[18px] text-cyan shrink-0" />
                  <span className="text-white text-[15px]">{f}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Right - Card */}
        <div className="lg:w-[48%] w-full">
          <AnimatedSection delay={0.2}>
            <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-7">
              <h3 className="text-[15px] font-bold text-navy mb-3">
                Elevador parado — Torre B, Bloco 3
              </h3>
              <div className="flex gap-2 mb-5">
                <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-blue-100 text-blue-700">
                  Iluminação Pública
                </span>
                <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-red-500 text-white">
                  5 pessoas
                </span>
              </div>

              <div className="divide-y divide-border">
                {citizens.map((c) => (
                  <div key={c.initials} className="flex items-center py-2.5 gap-3">
                    <div className="w-9 h-9 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center text-xs font-bold shrink-0">
                      {c.initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-navy truncate">{c.name}</p>
                      <p className="text-[11px] text-muted-foreground truncate">{c.address}</p>
                    </div>
                    <span className="text-sm font-bold text-green-600 shrink-0">{c.sim}%</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 bg-amber-400 text-white font-bold text-[13px] px-4 py-2.5 rounded-lg text-center">
                ▲ Prioridade escalada para Alta automaticamente
              </div>

              <button className="mt-3 w-full bg-cyan text-white font-bold text-sm py-3.5 rounded-lg hover:bg-cyan/90 transition-colors">
                Atribuir como grupo →
              </button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  </section>
);

export default AISection;
