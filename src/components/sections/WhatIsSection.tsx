import appMockup from "@/assets/app-mockup.png";

const WhatIsSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Image */}
          <div className="flex-1 relative">
            <div className="absolute -inset-8 bg-gradient-cta/10 rounded-full blur-3xl" />
            <img
              src={appMockup}
              alt="Aplicativo Active"
              className="relative w-full max-w-md mx-auto animate-float"
            />
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Conheça o Método
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              O Que É o{" "}
              <span className="text-gradient">ACTIVE</span>?
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              O <strong className="text-foreground">ACTIVE</strong> é um programa completo de 
              <strong className="text-primary"> Pilates na Parede</strong> desenvolvido 
              especialmente para mulheres que querem emagrecer e fortalecer o corpo no 
              conforto de casa.
            </p>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Através de exercícios simples e guiados, você vai trabalhar 
              <strong className="text-foreground"> abdômen, glúteos, postura e muito mais</strong> — 
              tudo isso usando apenas uma parede como suporte.
            </p>

            <div className="space-y-4">
              {[
                "Perfeito para iniciantes ou quem está voltando a treinar",
                "Melhora a postura e elimina dores nas costas",
                "Aumenta a disposição e autoconfiança",
                "Resultados visíveis em poucas semanas",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
