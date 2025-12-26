import { Button } from "@/components/ui/button";
import { Check, Clock, Home } from "lucide-react";
import { useRef, useEffect } from "react";

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const highlights = [
    { icon: Home, text: "Emagreça em casa" },
    { icon: Clock, text: "Treinos de 8 a 15 minutos" },
    { icon: Check, text: "Sem equipamentos" },
  ];

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      video.play().catch((err) => {
        console.log("Erro ao reproduzir:", err);
      });
    };

    const handleError = (e: Event) => {
      console.error("Erro ao carregar vídeo:", e);
      // Tenta recarregar o vídeo
      setTimeout(() => {
        if (video) {
          video.load();
        }
      }, 1000);
    };

    const handleLoadedData = () => {
      video.play().catch((err) => {
        console.log("Autoplay não permitido:", err);
      });
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);
    video.addEventListener('loadeddata', handleLoadedData);
    
    // Forçar carregamento do vídeo
    video.load();
    
    // Tentar reproduzir imediatamente se já estiver pronto
    if (video.readyState >= 3) {
      video.play().catch((err) => {
        console.log("Erro ao reproduzir:", err);
      });
    }

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
      video.removeEventListener('loadeddata', handleLoadedData);
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-hero">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-active-glow rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-active-light rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-12 lg:py-0">
        <div className="flex min-h-screen flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left pt-8 lg:pt-0 order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-primary-foreground leading-tight mb-6 animate-slideUp">
              Transforme Seu Corpo
              <br />
              <span className="text-active-glow">Em Casa</span> Com
              <br />
              Pilates na Parede
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto lg:mx-0 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
              Descubra o método que está revolucionando o emagrecimento feminino. 
              Treinos simples, rápidos e altamente eficazes que você pode fazer 
              usando apenas uma parede.
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10 animate-fadeIn" style={{ animationDelay: "0.4s" }}>
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 text-primary-foreground backdrop-blur-sm"
                >
                  <item.icon className="h-5 w-5 text-active-glow" />
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start animate-scaleIn" style={{ animationDelay: "0.6s" }}>
              <Button 
                variant="hero" 
                size="xl" 
                className="w-full sm:w-auto"
                onClick={() => {
                  const planosSection = document.getElementById('planos');
                  if (planosSection) {
                    planosSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }
                }}
              >
                Quero Começar Agora
              </Button>
              <p className="text-primary-foreground/60 text-sm">
                ✓ Acesso imediato • ✓ Garantia de 7 dias
              </p>
            </div>
          </div>

          {/* Hero Video */}
          <div className="flex-1 relative animate-float order-1 lg:order-2">
            {/* Badge acima do vídeo */}
            <div className="flex justify-center lg:justify-start mb-6 animate-fadeIn">
              <div className="inline-flex items-center gap-2 rounded-full bg-active-dark px-4 py-2 text-white text-sm font-medium shadow-lg">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-active-glow opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-active-glow"></span>
                </span>
                Método comprovado por milhares de mulheres
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-active-glow/20 rounded-3xl blur-2xl" />
              <video
                ref={videoRef}
                src="/hero-pilates.mp4"
                autoPlay
                loop
                playsInline
                preload="auto"
                className="relative rounded-3xl shadow-2xl w-full max-w-lg mx-auto object-cover"
                aria-label="Mulher praticando pilates na parede"
              />
              
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 shadow-card animate-scaleIn" style={{ animationDelay: "0.8s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-cta flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-lg">+</span>
                  </div>
                  <div>
                    <p className="font-bold text-foreground">50.000+</p>
                    <p className="text-sm text-muted-foreground">Alunas transformadas</p>
                  </div>
                </div>
              </div>

              {/* Results Badge */}
              <div className="absolute -top-4 -right-4 glass rounded-2xl p-4 shadow-card animate-scaleIn" style={{ animationDelay: "1s" }}>
                <p className="text-2xl font-bold text-primary">-12kg</p>
                <p className="text-xs text-muted-foreground">Média em 30 dias</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-primary-foreground/50" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
