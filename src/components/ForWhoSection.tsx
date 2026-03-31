import { Building2, School, Briefcase } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const cards = [
  {
    icon: Building2,
    title: "Prefeituras",
    body: "Gerencie ocorrências urbanas de toda a cidade. Mapa de calor, priorização por bairro e relatórios para cada secretaria responsável.",
    tags: ["Iluminação", "Pavimentação", "Saneamento"],
    featured: false,
  },
  {
    icon: School,
    title: "Escolas",
    body: "Reporte problemas de infraestrutura e segurança. A direção vê tudo em um painel e age antes que vire crise.",
    tags: ["Manutenção", "Segurança", "Infraestrutura"],
    featured: true,
  },
  {
    icon: Briefcase,
    title: "Empresas",
    body: "Canal interno para facilities e RH. Cada departamento com seu dashboard e SLA definido.",
    tags: ["Facilities", "RH", "Gestão predial"],
    featured: false,
  },
];

const ForWhoSection = () => (
  <section id="para-quem" className="section-padding" style={{ backgroundColor: "#F1F5F9" }}>
    <div className="container mx-auto px-4 lg:px-8 text-center">
      <AnimatedSection>
        <p className="text-xs font-semibold uppercase tracking-widest text-cyan mb-4">Para quem é</p>
        <h2 className="text-3xl md:text-[44px] font-bold text-navy leading-tight">
          Uma plataforma, múltiplos contextos.
        </h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-6 mt-14">
        {cards.map((c, i) => (
          <AnimatedSection key={i} delay={i * 0.15}>
            <div
              className={`bg-white rounded-2xl p-8 text-left transition-all duration-200 hover:-translate-y-1 group ${
                c.featured
                  ? "border-2 border-cyan shadow-lg"
                  : "border hover:border-cyan"
              }`}
              style={{ borderColor: c.featured ? undefined : "#E2E8F0" }}
            >
              <div className="w-12 h-12 rounded-full bg-cyan/10 flex items-center justify-center mb-5">
                <c.icon className="w-6 h-6 text-cyan" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{c.body}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {c.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-cyan/10 text-cyan"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a href="#" className="text-sm font-medium text-cyan hover:underline">
                Ver caso de uso →
              </a>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ForWhoSection;
