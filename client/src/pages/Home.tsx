/*
 * ÓTICA VICTORY — Home Page
 * Design: Bold Geometric Modernism
 * All sections assembled in order
 */

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CatalogSection from "@/components/CatalogSection";
import ExamSection from "@/components/ExamSection";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <Header />
      <HeroSection />
      <CatalogSection />
      <ExamSection />
      <AboutSection />
      <CTASection />
      <LocationSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
