import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const items = [
  "Acesso completo ao aplicativo Active",
  "Exercícios guiados com animações profissionais",
  "Protocolos de treino de 8 a 15 minutos",
  "Planejamento semanal estruturado",
  "Sistema de evolução e progressão",
  "Suporte via comunidade exclusiva",
  "Atualizações gratuitas de conteúdo",
  "Acesso vitalício ao programa",
];

const WhatYouGetSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Content */}
          <div className="flex-1">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Seu Acesso
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              O Que Você{" "}
              <span className="text-gradient">Recebe</span> Hoje
            </h2>

            <p className="text-lg text-muted-foreground mb-10">
              Ao se inscrever no ACTIVE, você terá acesso imediato a tudo que precisa 
              para começar sua transformação agora mesmo.
            </p>

            {/* Checklist */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-card rounded-xl p-4 shadow-soft"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>

            <Button 
              variant="hero" 
              size="lg"
              onClick={() => {
                const planosSection = document.getElementById('planos');
                if (planosSection) {
                  planosSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
              }}
            >
              Quero Meu Acesso Agora
            </Button>
          </div>

          {/* Visual */}
          <div className="flex-1">
            <div className="relative">
              {/* Main Card */}
              <div className="bg-gradient-premium rounded-3xl p-8 lg:p-10 text-primary-foreground shadow-glow">
                <div className="text-center">
                  <span className="inline-block bg-active-glow/20 rounded-full px-4 py-1 text-sm font-medium text-active-glow mb-4">
                    Programa Completo
                  </span>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold mb-6">
                    ACTIVE
                  </h3>

                  <div className="space-y-3 text-left mb-8">
                    {[
                      "App exclusivo com todos os treinos",
                      "Animações detalhadas",
                      "Evolução personalizada",
                      "Bônus especiais inclusos",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-active-glow flex items-center justify-center">
                          <Check className="w-3 h-3 text-accent" />
                        </div>
                        <span className="text-primary-foreground/90">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-primary-foreground/20 pt-6">
                    <p className="text-sm text-primary-foreground/60 mb-2">
                      Investimento único
                    </p>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-primary-foreground/50 line-through text-lg">
                        R$ 500,00
                      </span>
                      <span className="text-4xl font-bold text-active-glow">
                        R$ 29,90
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-active-glow text-accent font-bold text-sm px-4 py-2 rounded-full shadow-lg animate-pulse-slow">
                94% OFF
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGetSection;
