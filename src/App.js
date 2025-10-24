import React, { useState } from 'react';
import { Menu, X, ChevronDown, Shield, Award, Leaf, Users, Target, Wrench } from 'lucide-react';

const ForteWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  const products = [
    {
      model: 'CAF-200-1',
      volume: '200L',
      features: ['Sistema contra osos', 'Soldadura AWS D1.3', 'NAE-SMA-009-2024']
    },
    {
      model: 'CAF-400-1',
      volume: '400L',
      features: ['Sistema contra osos', 'Soldadura AWS D1.3', 'NAE-SMA-009-2024']
    },
    {
      model: 'CAF-6000-1',
      volume: '6,000L',
      features: ['Sistema contra osos', 'Soldadura AWS D1.3', 'NAE-SMA-009-2024']
    }
  ];

  const values = [
    { icon: <Target className="w-8 h-8" />, title: 'Innovación', color: 'bg-cyan-400' },
    { icon: <Leaf className="w-8 h-8" />, title: 'Responsabilidad Ambiental', color: 'bg-green-500' },
    { icon: <Award className="w-8 h-8" />, title: 'Calidad Técnica', color: 'bg-blue-600' },
    { icon: <Users className="w-8 h-8" />, title: 'Compromiso Social', color: 'bg-cyan-500' },
    { icon: <Shield className="w-8 h-8" />, title: 'Integridad', color: 'bg-slate-700' },
    { icon: <Wrench className="w-8 h-8" />, title: 'Excelencia Operativa', color: 'bg-blue-900' }
  ];

  const scrollToSection = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Navegación */}
      <nav className="bg-slate-900 text-white fixed w-full z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-xl">
                F
              </div>
              <div>
                <div className="text-xl font-bold text-blue-400">FORTE</div>
                <div className="text-xs text-neutral-300">Ingeniería Manufactura</div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['inicio', 'productos', 'nosotros', 'contacto'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize hover:text-blue-400 transition-colors ${
                    activeSection === item ? 'text-blue-400 font-semibold' : ''
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            {['inicio', 'productos', 'nosotros', 'contacto'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-4 py-3 hover:bg-slate-700 capitalize"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Protección de Fauna
                <span className="text-cyan-400"> Certificada</span>
              </h1>
              <p className="text-xl text-neutral-300 mb-8">
                Contenedores anti-fauna manufacturados con los más altos estándares de calidad, 
                cumpliendo con la norma NAE-SMA-009-2024
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection('productos')}
                  className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  Ver Productos
                </button>
                <button
                  onClick={() => scrollToSection('contacto')}
                  className="border-2 border-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  Contactar
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-blue-600 rounded-2xl p-8 shadow-2xl">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-8 h-8 text-cyan-400" />
                    <span className="text-lg">Sistema a prueba de osos</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="w-8 h-8 text-cyan-400" />
                    <span className="text-lg">Soldadura AWS D1.3</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Leaf className="w-8 h-8 text-green-400" />
                    <span className="text-lg">NAE-SMA-009-2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="productos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Contenedores Anti-Fauna
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Diseñados para impedir el acceso de animales como ratas, perros, osos y otros. 
              Manufacturados en acero A36 calibre 16 con estructura interna de PTR.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <div
                key={idx}
                className="bg-neutral-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow border-2 border-neutral-200 hover:border-blue-600"
              >
                <div className="bg-blue-600 text-white rounded-lg p-4 mb-6 text-center">
                  <div className="text-3xl font-bold">{product.volume}</div>
                  <div className="text-sm opacity-90">{product.model}</div>
                </div>
                <ul className="space-y-3">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <ChevronDown className="w-5 h-5 text-green-500 flex-shrink-0 rotate-[-90deg]" />
                      <span className="text-neutral-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-neutral-300">
                  <p className="text-sm text-neutral-600">
                    Acero A36 calibre 16 • Pintura anticorrosiva • Tapa hermética • Cierre seguro
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Especificaciones Técnicas</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Material</h4>
                <p className="text-blue-100">Acero A36 calibre 16 con estructura interna de PTR</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Sistema de Cierre</h4>
                <p className="text-blue-100">Solo permite ingreso de mano humana al bloqueo</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Resistencia</h4>
                <p className="text-blue-100">Soporta embestida de osos de hasta 200 kg</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Recubrimiento</h4>
                <p className="text-blue-100">Pintura anticorrosiva de alto desempeño</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-20 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Nuestra Misión
              </h2>
              <p className="text-lg text-neutral-700 leading-relaxed">
                Diseñar, fabricar e innovar soluciones estructurales y de ingeniería que combinen 
                resistencia, eficiencia y sustentabilidad, cumpliendo con las normativas ambientales 
                y de seguridad más exigentes, como la NAE-SMA-009-2024, para contribuir al manejo 
                responsable de materiales y la protección de la fauna en entornos urbanos y naturales.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Visión 2025</h3>
              <p className="text-blue-100 leading-relaxed">
                Consolidarnos como una empresa líder en manufactura e ingeniería sustentable en México, 
                reconocida por la calidad de nuestros productos, innovación tecnológica y compromiso ambiental.
              </p>
            </div>
          </div>

          <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Nuestros Valores</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className={`${value.color} w-16 h-16 rounded-lg flex items-center justify-center text-white mb-4`}>
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{value.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Contáctanos</h2>
            <p className="text-xl text-neutral-300">
              Estamos listos para desarrollar la solución que necesitas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="bg-slate-800 rounded-lg p-6">
                <h3 className="font-bold text-xl mb-2 text-cyan-400">Email</h3>
                <a
                  href="mailto:forte.ingenieria.manufactura@gmail.com"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  forte.ingenieria.manufactura@gmail.com
                </a>
              </div>
              <div className="bg-slate-800 rounded-lg p-6">
                <h3 className="font-bold text-xl mb-2 text-cyan-400">Teléfono</h3>
                <a
                  href="tel:8441220497"
                  className="text-neutral-300 hover:text-white transition-colors text-2xl"
                >
                  844 122 0497
                </a>
              </div>
              <div className="bg-slate-800 rounded-lg p-6">
                <h3 className="font-bold text-xl mb-2 text-cyan-400">Ubicación</h3>
                <p className="text-neutral-300">Norte de México</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Certificaciones</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <ChevronDown className="w-5 h-5 flex-shrink-0 rotate-[-90deg]" />
                  <span>Soldadura Certificada AWS D1.3</span>
                </li>
                <li className="flex items-start space-x-2">
                  <ChevronDown className="w-5 h-5 flex-shrink-0 rotate-[-90deg]" />
                  <span>Cumplimiento NAE-SMA-009-2024</span>
                </li>
                <li className="flex items-start space-x-2">
                  <ChevronDown className="w-5 h-5 flex-shrink-0 rotate-[-90deg]" />
                  <span>Ingeniería Estructural Certificada</span>
                </li>
                <li className="flex items-start space-x-2">
                  <ChevronDown className="w-5 h-5 flex-shrink-0 rotate-[-90deg]" />
                  <span>Procesos de Manufactura Avanzada</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-neutral-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold">
              F
            </div>
            <div className="text-left">
              <div className="text-white font-bold">FORTE</div>
              <div className="text-xs">Ingeniería Manufactura</div>
            </div>
          </div>
          <p className="text-sm">
            © 2025 FORTE Ingeniería Manufactura. Todos los derechos reservados.
          </p>
          <p className="text-xs mt-2">
            Diseño, fabricación e innovación en soluciones estructurales sustentables
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ForteWebsite;
