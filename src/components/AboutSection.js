import { Target, Leaf, Award, Users, Shield, Wrench, CheckCircle } from 'lucide-react';
import { values, missionVision, strategicObjectives } from '../constants';

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
        {/* Header Corporativo */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
            FORTE Ingeniería Manufactura
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-8">
            Identidad Corporativa 2025
          </h2>
        </div>

        {/* Misión y Visión */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Misión
            </h2>
            <p className="text-lg text-neutral-700 leading-relaxed">
              {missionVision.mission}
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-8 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Visión</h3>
            <p className="text-blue-100 leading-relaxed text-lg">
              {missionVision.vision}
            </p>
          </div>
        </div>

        {/* Valores Institucionales */}
        <div className="mb-16">
          <h3 className="text-4xl font-bold text-slate-900 mb-8 text-center">Valores Institucionales</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => {
              const IconComponent = iconComponents[value.icon];
              return (
                <div
                  key={value.title}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`${value.color} w-16 h-16 rounded-lg flex items-center justify-center text-white flex-shrink-0`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900">{value.title}</h4>
                  </div>
                  <p className="text-neutral-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Objetivos Estratégicos */}
        <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-2xl p-8 text-white">
          <h3 className="text-3xl font-bold mb-8 text-center">Objetivos Estratégicos</h3>
          <div className="grid md:grid-cols-1 gap-4">
            {strategicObjectives.map((objective) => (
              <div key={objective.substring(0, 30)} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <p className="text-blue-100 leading-relaxed">{objective}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
