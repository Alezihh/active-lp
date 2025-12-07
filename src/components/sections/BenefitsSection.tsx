import { 
  Scale, 
  Dumbbell, 
  Clock, 
  Sparkles, 
  Home, 
  Heart 
} from "lucide-react";

const benefits = [
  {
    icon: Scale,
    title: "Perca Peso Rapidamente",
    description: "Emagreça de forma saudável e segura com exercícios que queimam gordura de verdade.",
  },
  {
    icon: Dumbbell,
    title: "Fortaleça Abdômen e Glúteos",
    description: "Tonifique os músculos mais desejados sem precisar de academia ou equipamentos.",
  },
  {
    icon: Clock,
    title: "Treinos Curtos e Eficientes",
    description: "Apenas 8 a 15 minutos por dia são suficientes para transformar seu corpo.",
  },
  {
    icon: Sparkles,
    title: "Melhora Postura e Reduz Dores",
    description: "Diga adeus às dores nas costas e ganhe uma postura elegante e saudável.",
  },
  {
    icon: Home,
    title: "Treine Sem Equipamentos",
    description: "Tudo que você precisa é de uma parede. Simples assim!",
  },
  {
    icon: Heart,
    title: "Aumente Sua Autoconfiança",
    description: "Sinta-se bem consigo mesma e eleve sua disposição para a vida.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Benefícios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Por Que o ACTIVE{" "}
            <span className="text-gradient">Funciona?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Descubra todos os benefícios que o método Pilates na Parede pode trazer 
            para sua saúde e bem-estar.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-2 border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-cta flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-cta/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
