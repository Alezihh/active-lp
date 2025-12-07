import { Play, Timer, Lock, TrendingUp } from "lucide-react";

const pillars = [
  {
    icon: Play,
    number: "01",
    title: "Exercícios Animados",
    description: "Vídeos e animações mostrando cada movimento passo a passo. Você nunca vai ter dúvidas sobre como executar.",
  },
  {
    icon: Timer,
    number: "02",
    title: "Tempos Automáticos",
    description: "O app controla os tempos de execução e descanso automaticamente. É só seguir e confiar no processo.",
  },
  {
    icon: Lock,
    number: "03",
    title: "Acesso Exclusivo",
    description: "Login e senha únicos para você acessar todo o conteúdo a qualquer hora, de qualquer lugar.",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Evolução Guiada",
    description: "Sistema de progressão que adapta os treinos ao seu nível, garantindo evolução constante.",
  },
];

const MethodSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-hero relative overflow-hidden">
      {/* Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary-foreground rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-active-glow rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-active-glow font-semibold text-sm uppercase tracking-wider mb-4">
            O Método
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Como Funciona o ACTIVE?
          </h2>
          <p className="text-lg text-primary-foreground/80">
            Um sistema completo dividido em 4 pilares fundamentais para sua transformação.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="group relative bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-all duration-300"
            >
              {/* Number */}
              <span className="absolute top-4 right-4 text-5xl font-bold text-primary-foreground/10 group-hover:text-primary-foreground/20 transition-colors">
                {pillar.number}
              </span>

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-active-glow/20 flex items-center justify-center mb-6 group-hover:bg-active-glow/30 transition-colors">
                <pillar.icon className="w-7 h-7 text-active-glow" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-primary-foreground mb-3">
                {pillar.title}
              </h3>
              <p className="text-primary-foreground/70 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
