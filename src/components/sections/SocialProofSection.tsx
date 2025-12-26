const transformations = [
  {
    id: 1,
    image: "/transformacao-2-antes.jpg",
    name: "Maria Silva",
    result: "-12kg em 30 dias"
  },
  {
    id: 2,
    image: "/transformacao-3-antes.jpg",
    name: "Ana Costa",
    result: "-8kg em 45 dias"
  },
  {
    id: 3,
    image: "/transformacao-4-antes.jpg",
    name: "Juliana Santos",
    result: "-10kg em 60 dias"
  },
  {
    id: 4,
    image: "/transformacao-5-antes.jpg",
    name: "Patricia Lima",
    result: "-15kg em 90 dias"
  },
  {
    id: 5,
    image: "/transformacao-6-antes.jpg",
    name: "Fernanda Oliveira",
    result: "-7kg em 30 dias"
  }
];

const SocialProofSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-secondary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-active-light/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Resultados Reais
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            Transformações{" "}
            <span className="text-gradient">Comprovadas</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja os resultados reais de mulheres que transformaram seus corpos 
            com o método ACTIVE de Pilates na Parede
          </p>
        </div>

        {/* Transformations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {transformations.map((transformation) => (
            <div
              key={transformation.id}
              className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 border border-border/50 group"
            >
              {/* Before/After Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={transformation.image}
                  alt={`${transformation.name} - Transformação`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-foreground">{transformation.name}</h3>
                  <div className="bg-primary/10 text-primary font-semibold text-sm px-3 py-1 rounded-full">
                    {transformation.result}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Resultado verificado</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Você também pode ter resultados como essas mulheres
          </p>
          <button
            onClick={() => {
              const planosSection = document.getElementById('planos');
              if (planosSection) {
                planosSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }
            }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-active-light text-white px-8 py-4 rounded-xl font-bold text-lg shadow-button hover:shadow-glow hover:-translate-y-1 transition-all duration-300"
          >
            Quero Minha Transformação
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;

