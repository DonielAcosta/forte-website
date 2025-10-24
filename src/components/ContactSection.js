import { ChevronDown } from 'lucide-react';
import { contactInfo, certifications } from '../constants';

const ContactSection = () => {
  return (
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
                href={`mailto:${contactInfo.email}`}
                className="text-neutral-300 hover:text-white transition-colors"
              >
                {contactInfo.email}
              </a>
            </div>
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="font-bold text-xl mb-2 text-cyan-400">Teléfono</h3>
              <a
                href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                className="text-neutral-300 hover:text-white transition-colors text-2xl"
              >
                {contactInfo.phone}
              </a>
            </div>
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="font-bold text-xl mb-2 text-cyan-400">Ubicación</h3>
              <p className="text-neutral-300">{contactInfo.location}</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Certificaciones</h3>
            <ul className="space-y-3">
              {certifications.map((cert, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <ChevronDown className="w-5 h-5 flex-shrink-0 rotate-[-90deg]" />
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
