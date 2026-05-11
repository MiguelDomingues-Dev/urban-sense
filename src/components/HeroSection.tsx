import AnimatedSection from "./AnimatedSection";
import { Button } from "@/components/ui/button";
import HeroDashboardMockup from "./HeroDashboardMockup";

const gridPatternSvg = `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 0H0v40' fill='none' stroke='%230A2540' stroke-opacity='0.05' stroke-width='0.5'/%3E%3C/svg%3E")`;

const HeroSection = () => (
  <section
    className="min-h-screen flex items-center pt-20 section-padding"
    style={{ backgroundImage: gridPatternSvg }}
  >
    <div className="container mx-auto px-4 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
        {/* Left */}
        <div className="lg:w-[55%] w-full">
          <AnimatedSection>
            <span className="inline-block bg-cyan text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
              🏢 Gestão Inteligente para Condomínios
            </span>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h1 className="text-4xl md:text-[56px] font-extrabold leading-[1.1] tracking-tight" style={{ color: "#2C3E47" }}>
              Seu condomínio organizado.
              <br />
              Seus moradores <span style={{ color: "#B8975A" }}>satisfeitos.</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="mt-5 text-lg text-body-muted max-w-[520px] leading-relaxed">
              UrbanSense conecta moradores e síndicos com dados em tempo real — chamados organizados por prioridade, IA que agrupa problemas similares e dashboard que mostra onde agir primeiro.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="flex flex-wrap gap-4 mt-8">
              <Button className="bg-cyan text-primary-foreground hover:bg-cyan/90 h-12 px-8 text-base font-semibold rounded-lg">
                Quero para meu condomínio →
              </Button>
              <Button
                variant="outline"
                className="h-12 px-8 text-base font-semibold text-navy border-navy/20 hover:bg-navy/5 rounded-lg"
              >
                Ver como funciona
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="flex flex-wrap items-center gap-4 mt-7 text-xs text-body-muted">
              <span>🏢 216 unidades no piloto</span>
              <span className="hidden sm:inline">·</span>
              <span>🏗️ 4 torres monitoradas</span>
              <span className="hidden sm:inline">·</span>
              <span>✅ Gratuito para começar</span>
            </div>
          </AnimatedSection>
        </div>

        {/* Right */}
        <div className="lg:w-[45%] w-full">
          <AnimatedSection delay={0.3}>
            <HeroDashboardMockup />
          </AnimatedSection>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
