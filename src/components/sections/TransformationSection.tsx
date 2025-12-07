import { Button } from "@/components/ui/button";
import appMockup from "@/assets/app-mockup.png";

const TransformationSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-active-light/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Sua Transformação
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 leading-tight">
              Imagine Você{" "}
              <span className="text-gradient">Acordando Mais Leve</span>,
              <br />
              Firme e Confiante
            </h2>

            <div className="space-y-6 mb-10">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Com apenas alguns minutos por dia, seu corpo começa a mudar. 
                Você sentirá a diferença na sua energia, na sua roupa e 
                principalmente no seu espelho.
              </p>

              <blockquote className="relative pl-6 border-l-4 border-primary italic text-lg text-foreground">
                "A verdadeira transformação acontece quando você decide cuidar 
                de si mesma todos os dias."
              </blockquote>

              <p className="text-lg text-muted-foreground leading-relaxed">
                O ACTIVE foi criado para mulheres reais, com rotinas cheias, 
                que precisam de resultados práticos e efetivos.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => {
                  const planosSection = document.getElementById('planos');
                  if (planosSection) {
                    planosSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
              >
                Começar Minha Transformação
              </Button>
            </div>
          </div>

          {/* App Mockups */}
          <div className="flex-1 relative">
            <div className="relative flex justify-center items-center">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-cta/20 rounded-full blur-3xl scale-75" />
              
              {/* Main Phone */}
              <div className="relative z-10">
                <img
                  src={appMockup}
                  alt="App Active"
                  className="w-full max-w-sm mx-auto drop-shadow-2xl"
                />
              </div>

              {/* Feature Cards */}
              <div className="absolute top-10 -left-4 lg:-left-8 glass rounded-xl p-4 shadow-card max-w-[180px]">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-foreground">Rápido</span>
                </div>
                <p className="text-xs text-muted-foreground">Treinos de apenas 8-15 min</p>
              </div>

              <div className="absolute bottom-10 -right-4 lg:-right-8 glass rounded-xl p-4 shadow-card max-w-[180px]">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-foreground">Guiado</span>
                </div>
                <p className="text-xs text-muted-foreground">Animações passo a passo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
