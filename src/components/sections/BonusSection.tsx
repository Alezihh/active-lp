import { Gift, Utensils, Brain, Flame } from "lucide-react";

const bonuses = [
  {
    icon: Utensils,
    title: "20 Receitas de Doces Fits",
    description: "Mate a vontade de doce sem sair da dieta. Receitas deliciosas e saudáveis para você se permitir sem culpa.",
    value: "R$ 47",
  },
  {
    icon: Flame,
    title: "Monjaro de Pobre",
    description: "O segredo das celebridades ao seu alcance. Estratégias naturais para acelerar seu metabolismo.",
    value: "R$ 67",
  },
  {
    icon: Brain,
    title: "Guia Anti-Ansiedade Alimentar",
    description: "Aprenda a controlar a compulsão e a ansiedade por comida. Técnicas comprovadas que funcionam.",
    value: "R$ 57",
  },
  {
    icon: Flame,
    title: "Redutor de Barriga em 7 Dias",
    description: "Protocolo intensivo para desinchar e reduzir medidas abdominais em apenas uma semana.",
    value: "R$ 47",
  },
];

const BonusSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-primary font-medium mb-4">
            <Gift className="w-5 h-5" />
            <span>Bônus Exclusivos</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            E Tem{" "}
            <span className="text-gradient">Mais!</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Além do programa completo, você recebe 4 bônus especiais que 
            vão acelerar ainda mais sua transformação.
          </p>
        </div>

        {/* Bonus Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {bonuses.map((bonus, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-2 border border-border/50 overflow-hidden"
            >
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-cta/5 rounded-bl-full" />

              <div className="relative">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-cta flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <bonus.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-muted-foreground">Valor:</span>
                    <p className="text-lg font-bold text-foreground line-through opacity-50">
                      {bonus.value}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {bonus.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {bonus.description}
                </p>

                {/* Free Badge */}
                <div className="mt-4 inline-flex items-center gap-2 bg-primary/10 text-primary font-semibold text-sm px-3 py-1.5 rounded-full">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  Grátis hoje
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Total Value */}
        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground mb-2">
            Valor total dos bônus:
          </p>
          <p className="text-3xl font-bold text-foreground">
            <span className="line-through opacity-50">R$ 218</span>
            <span className="text-primary ml-4">GRÁTIS</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
