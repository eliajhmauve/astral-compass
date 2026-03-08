import StarfieldBg from "@/components/layout/StarfieldBg";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/portal/HeroSection";
import ToolGrid from "@/components/portal/ToolGrid";
import FeatureSection from "@/components/portal/FeatureSection";
import AboutSection from "@/components/portal/AboutSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <StarfieldBg />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <ToolGrid />
        <FeatureSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
