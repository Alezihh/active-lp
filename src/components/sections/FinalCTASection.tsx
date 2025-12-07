import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-premium relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-active-glow rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-primary-foreground rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground mb-8 leading-tight">
            Sua Transformação
            <br />
            Começa <span className="text-active-glow">Agora</span>
          </h2>

          {/* Emotional Text */}
          <p className="text-xl text-primary-foreground/80 mb-6 max-w-2xl mx-auto leading-relaxed">
            Você merece se sentir bem no seu próprio corpo. Você merece acordar 
            com energia, olhar no espelho com orgulho e viver a sua melhor versão.
          </p>

          <p className="text-lg text-primary-foreground/70 mb-10 max-w-2xl mx-auto">
            Dê o primeiro passo hoje. Milhares de mulheres já fizeram. 
            Agora é a sua vez.
          </p>

          {/* CTA Button */}
          <Button 
            variant="hero" 
            size="xl" 
            className="text-lg px-12 py-8 h-auto group"
            onClick={() => {
              const planosSection = document.getElementById('planos');
              if (planosSection) {
                planosSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }
            }}
          >
            QUERO COMEÇAR MEU ACTIVE AGORA
            <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>

          {/* Sub CTA Text */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-primary-foreground/60 text-sm">
            <span>✓ Acesso imediato</span>
            <span className="hidden sm:inline">•</span>
            <span>✓ Garantia de 7 dias</span>
            <span className="hidden sm:inline">•</span>
            <span>✓ Pagamento seguro</span>
          </div>

          {/* Urgency */}
          <div className="mt-12 inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-6 py-3 border border-primary-foreground/20">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-active-glow opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-active-glow"></span>
            </span>
            <span className="text-primary-foreground font-medium">
              Oferta especial válida por tempo limitado
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
