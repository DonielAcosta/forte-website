import { useState } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ProductsSection from './components/ProductsSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const ForteWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  const scrollToSection = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      <Navigation
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      <HeroSection scrollToSection={scrollToSection} />

      <ProductsSection />

      <AboutSection />

      <ContactSection />

      <Footer />
    </div>
  );
};

export default ForteWebsite;
