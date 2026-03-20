import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaSection from "@/components/CtaSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <div id="sobre">
          <AboutSection />
        </div>
        <div id="serviços">
          <ServicesSection />
        </div>
        <div id="portfólio">
          <GallerySection />
        </div>
        
        <CtaSection />
        <div id="contato">
          <LocationSection />
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Index;
