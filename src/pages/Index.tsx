import HeroSection from "@/components/sections/HeroSection";
import WhatIsSection from "@/components/sections/WhatIsSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import TransformationSection from "@/components/sections/TransformationSection";
import MethodSection from "@/components/sections/MethodSection";
import WhatYouGetSection from "@/components/sections/WhatYouGetSection";
import BonusSection from "@/components/sections/BonusSection";
import OfferSection from "@/components/sections/OfferSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <WhatIsSection />
      <BenefitsSection />
      <TransformationSection />
      <MethodSection />
      <WhatYouGetSection />
      <BonusSection />
      <OfferSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
};

export default Index;
