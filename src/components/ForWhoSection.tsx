import { Building2, School, Briefcase } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const cards = [
  {
    icon: Building2,
    title: "Síndico",
    body: "Painel completo com dashboard, mapa de calor por torre, fila de prioridades e histórico de resoluções. Apresente dados na assembleia com um clique.",
    tags: ["Dashboard", "Mapa de calor", "Relatórios"],
    link: "Ver painel →",
    featured: false,
  },
  {
    icon: School,
    title: "Morador",
    body: "Reporte problemas em 2 minutos pelo celular. Receba protocolo, acompanhe o status e seja notificado quando resolver. Sem WhatsApp, sem esquecimento.",
    tags: ["Formulário rápido", "Protocolo", "Notificação"],
    link: "Ver portal →",
    featured: true,
  },
  {
    icon: Briefcase,
    title: "Administradora",
    body: "Gerencie múltiplos condomínios em um só lugar. Dados de satisfação, tempo de resolução e custo por prestador para prestar contas com transparência.",
    tags: ["Multi-condomínio", "Relatórios", "Prestadores"],
    link: "Saiba mais →",
    featured: false,
  },
];

const ForWhoSection = () => (
  <section id="para-quem" className="section-padding" style={{ backgroundColor: "#F1F5F9" }}>
    <div className="container mx-auto px-4 lg:px-8 text-center">
      <AnimatedSection>
        <p className="text-xs font-semibold uppercase tracking-widest text-cyan mb-4">Para quem é</p>
        <h2 className="text-3xl md:text-[44px] font-bold text-navy leading-tight">
          Uma solução, todos os lados do condomínio.
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
                {c.link}
              </a>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ForWhoSection;
