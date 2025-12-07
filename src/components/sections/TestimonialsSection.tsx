import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Clara",
    age: 34,
    location: "São Paulo, SP",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    text: "Em 30 dias perdi 8kg! Nunca imaginei que exercícios tão simples pudessem dar tanto resultado. O melhor é que faço em casa, enquanto as crianças dormem.",
    result: "-8kg em 30 dias",
  },
  {
    name: "Juliana Santos",
    age: 42,
    location: "Rio de Janeiro, RJ",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    text: "Minha postura melhorou 100% e as dores nas costas sumiram. Além disso, emagreci 6kg no primeiro mês. Recomendo demais!",
    result: "-6kg + postura corrigida",
  },
  {
    name: "Fernanda Lima",
    age: 28,
    location: "Belo Horizonte, MG",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
    text: "Eu era super sedentária e achava que não ia conseguir. Mas os treinos são tão curtos que não tem desculpa. Já perdi 10kg!",
    result: "-10kg em 45 dias",
  },
  {
    name: "Patricia Mendes",
    age: 38,
    location: "Curitiba, PR",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    text: "O que mais me surpreendeu foi a rapidez dos resultados. Em 2 semanas já vi diferença na barriga. Estou amando!",
    result: "-5cm de cintura",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Histórias Reais
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Veja Quem Já{" "}
            <span className="text-gradient">Transformou</span> o Corpo
          </h2>
          <p className="text-lg text-muted-foreground">
            Milhares de mulheres já conquistaram o corpo dos sonhos com o ACTIVE. 
            Veja alguns depoimentos:
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-300 border border-border/50"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Result Badge */}
              <div className="inline-block bg-primary/10 text-primary font-semibold text-sm px-3 py-1.5 rounded-full mb-6">
                {testimonial.result}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div>
                  <p className="font-bold text-foreground">
                    {testimonial.name}, {testimonial.age}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { number: "50.000+", label: "Alunas" },
            { number: "4.9", label: "Avaliação" },
            { number: "97%", label: "Satisfação" },
            { number: "-8kg", label: "Média perdida" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl lg:text-4xl font-bold text-primary mb-1">
                {stat.number}
              </p>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
