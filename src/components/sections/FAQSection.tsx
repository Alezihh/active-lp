import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quanto tempo por dia preciso dedicar?",
    answer: "Os treinos do ACTIVE variam de 8 a 15 minutos por dia. É perfeito para quem tem uma rotina corrida e precisa de eficiência. Mesmo com poucos minutos, você terá resultados incríveis!",
  },
  {
    question: "Funciona para iniciantes?",
    answer: "Sim! O ACTIVE foi desenvolvido especialmente pensando em iniciantes. Todos os exercícios são demonstrados passo a passo com animações claras, e o nível de dificuldade evolui gradualmente conforme você progride.",
  },
  {
    question: "Precisa de algum equipamento?",
    answer: "Não! Você só precisa de uma parede e disposição. Sem equipamentos, sem academia, sem desculpas. É o método perfeito para treinar em casa.",
  },
  {
    question: "Como recebo o acesso ao programa?",
    answer: "Assim que o pagamento for confirmado, você receberá um e-mail com suas credenciais de acesso (login e senha) para entrar no aplicativo ACTIVE. O acesso é imediato e vitalício.",
  },
  {
    question: "E se eu não gostar do programa?",
    answer: "Oferecemos garantia incondicional de 7 dias. Se por qualquer motivo você não ficar satisfeita, basta solicitar o reembolso e devolvemos 100% do seu investimento, sem perguntas.",
  },
  {
    question: "O acesso é vitalício mesmo?",
    answer: "Sim! Você paga uma única vez e tem acesso para sempre ao aplicativo ACTIVE e a todas as atualizações futuras. Sem mensalidades ou taxas escondidas.",
  },
  {
    question: "Posso acessar pelo celular?",
    answer: "Sim! O ACTIVE funciona em qualquer dispositivo: celular, tablet ou computador. Você pode treinar onde e quando quiser.",
  },
  {
    question: "O método é indicado para todas as idades?",
    answer: "Sim! O Pilates na Parede é um exercício de baixo impacto, seguro para mulheres de todas as idades. Se você tiver alguma condição de saúde específica, recomendamos consultar seu médico.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Dúvidas Frequentes
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Perguntas{" "}
            <span className="text-gradient">Frequentes</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Tire suas dúvidas sobre o programa ACTIVE.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-2xl border border-border/50 px-6 shadow-soft overflow-hidden"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-6 text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
