import { Button } from "@/components/ui/button";
import { Shield, Clock, Smartphone, CheckCircle, Star } from "lucide-react";

const plans = [
  {
    name: "Basic",
    description: "Perfeito para começar",
    originalPrice: "R$ 197,00",
    price: "R$ 9,99",
    installments: "ou 6x de R$ 1,67",
    popular: false,
    link: "https://pay.kirvano.com/b5e2d108-6394-406c-94a1-59ab7470b670",
    features: [
      "Exercícios com animações",
      "Protocolos de 8 a 15 minutos",
      "Acesso por 6 meses",
    ],
    notIncluded: [
      "Bônus exclusivos",
      "Planejamento semanal",
      "Suporte prioritário",
      "Acesso ao aplicativo Active",
    ],
  },
  {
    name: "Pro",
    description: "Mais completo e recomendado",
    originalPrice: "R$ 500,00",
    price: "R$ 29,90",
    installments: "ou 12x de R$ 2,49",
    popular: true,
    link: "https://pay.kirvano.com/cdfa0972-1266-4ada-b3a2-7d88a39ccfb9",
    features: [
      "Acesso completo ao aplicativo Active",
      "Exercícios guiados com animações profissionais",
      "Protocolos de treino de 8 a 15 minutos",
      "Planejamento semanal",
      "Sistema de evolução e progressão",
      "Suporte via comunidade exclusiva",
      "Atualizações gratuitas de conteúdo",
      "Acesso vitalício ao programa",
      "Suporte prioritário",
    ],
    notIncluded: [],
  },
];

const OfferSection = () => {
  return (
    <section id="planos" className="py-20 lg:py-32 bg-gradient-hero relative overflow-hidden">
      {/* Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-active-glow rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-primary-foreground rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-primary-foreground/10 text-active-glow font-semibold text-sm px-4 py-2 rounded-full mb-4 backdrop-blur-sm border border-primary-foreground/20">
            Oferta Especial por Tempo Limitado
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Escolha Seu Plano
          </h2>
          
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Selecione o plano ideal para sua transformação e comece hoje mesmo.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-card rounded-3xl p-8 shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                plan.popular ? "ring-4 ring-active-glow animate-pulse-ring" : ""
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-active-glow text-accent font-bold text-sm px-6 py-2 rounded-full shadow-lg flex items-center gap-2">
                  <Star className="w-4 h-4 fill-current" />
                  Mais Popular
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-8 pt-4">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Plano {plan.name}
                </h3>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="text-center mb-8">
                <p className="text-muted-foreground text-sm mb-1">De</p>
                <p className="text-xl text-muted-foreground line-through mb-1">
                  {plan.originalPrice}
                </p>
                <p className="text-muted-foreground text-sm mb-2">Por apenas</p>
                <p className="text-5xl font-extrabold text-primary mb-2">
                  {plan.price}
                </p>
                <p className="text-muted-foreground text-sm">{plan.installments}</p>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
                {plan.notIncluded.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 opacity-50">
                    <div className="w-5 h-5 rounded-full border-2 border-muted-foreground flex-shrink-0" />
                    <span className="text-muted-foreground line-through">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button
                variant={plan.popular ? "cta" : "outline"}
                size="lg"
                className="w-full"
                onClick={() => {
                  // Meta Pixel - Track conversion (dispara para ambos os pixels)
                  if (typeof window !== 'undefined' && window.fbq) {
                    window.fbq('track', 'Lead', {
                      content_name: `Plano ${plan.name}`,
                      value: plan.price.replace('R$ ', '').replace(',', '.'),
                      currency: 'BRL'
                    });
                  }
                  window.open(plan.link, '_blank');
                }}
              >
                {plan.popular ? "QUERO O PLANO PRO" : "QUERO O PLANO BASIC"}
              </Button>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="bg-card rounded-2xl p-6 max-w-3xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center justify-center gap-3 p-4">
              <Shield className="w-8 h-8 text-primary" />
              <div className="text-left">
                <p className="font-semibold text-foreground text-sm">Garantia de 7 Dias</p>
                <p className="text-xs text-muted-foreground">Risco zero</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-3 p-4">
              <Smartphone className="w-8 h-8 text-primary" />
              <div className="text-left">
                <p className="font-semibold text-foreground text-sm">Acesso Imediato</p>
                <p className="text-xs text-muted-foreground">Via app</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-3 p-4">
              <Clock className="w-8 h-8 text-primary" />
              <div className="text-left">
                <p className="font-semibold text-foreground text-sm">Pagamento Seguro</p>
                <p className="text-xs text-muted-foreground">100% protegido</p>
              </div>
            </div>
          </div>
        </div>

        {/* Guarantee Section */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20">
            <Shield className="w-12 h-12 text-active-glow" />
            <div className="text-left">
              <h3 className="font-bold text-primary-foreground text-lg">
                Garantia Incondicional de 7 Dias
              </h3>
              <p className="text-primary-foreground/80 text-sm">
                Se não gostar, devolvemos 100% do seu dinheiro. Sem perguntas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
