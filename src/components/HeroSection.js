import { Shield, Award, Leaf, Palette } from 'lucide-react';

const HeroSection = ({ scrollToSection }) => {
  return (
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
                <div className="flex items-center space-x-3">
                  <Palette className="w-8 h-8 text-purple-400" />
                  <span className="text-lg">Diseño personalizado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
