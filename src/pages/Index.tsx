import ParticleBackground from "@/components/ParticleBackground";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import ResonanceAlchemySection from "@/components/ResonanceAlchemySection";
import InteractionCodeSection from "@/components/InteractionCodeSection";
import StrategicBonusesSection from "@/components/StrategicBonusesSection";
import TrainingCycleMap from "@/components/TrainingCycleMap";
import ProductOfferSection from "@/components/ProductOfferSection";
import CheckoutSection from "@/components/CheckoutSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <ParticleBackground />
      <div className="relative z-10">
        <HeroSection />
        <ProblemSection />
        <ResonanceAlchemySection />
        <InteractionCodeSection />
        <StrategicBonusesSection />
        <TrainingCycleMap />
        <ProductOfferSection />
        <CheckoutSection />
        <FooterSection />
      </div>
    </div>
  );
};

export default Index;
