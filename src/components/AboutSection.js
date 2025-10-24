import { Target, Leaf, Award, Users, Shield, Wrench } from 'lucide-react';
import { values } from '../constants';

const AboutSection = () => {
  const iconComponents = {
    Target,
    Leaf,
    Award,
    Users,
    Shield,
    Wrench
  };

  return (
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
          {values.map((value, idx) => {
            const IconComponent = iconComponents[value.icon];
            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className={`${value.color} w-16 h-16 rounded-lg flex items-center justify-center text-white mb-4`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{value.title}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
