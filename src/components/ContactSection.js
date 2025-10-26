import { ChevronDown, Mail, MapPin, Phone } from 'lucide-react';
import { SocialIcon } from 'react-social-icons';
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

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-6">
            {/* WhatsApp */}
            <div className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <SocialIcon
                    network="whatsapp"
                    style={{ height: 40, width: 40 }}
                    bgColor="#25D366"
                    fgColor="#ffffff"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-xl mb-2 text-green-400">WhatsApp</h3>
                  <a
                    href="https://api.whatsapp.com/send/?phone=528135536847&text=Saludos%21%20Me%20interesa%20conocer%20más%20sobre%20sus%20contenedores%20anti-fauna&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-300 hover:text-green-400 transition-colors text-lg font-medium"
                  >
                    +52 81 3553 6847
                  </a>
                  <p className="text-sm text-neutral-400 mt-1">Respuesta inmediata</p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <Mail className="w-10 h-10 text-cyan-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-xl mb-2 text-cyan-400">Email</h3>
                  <a
                    href={`mailto:${contactInfo.email}?subject=Consulta%20sobre%20Contenedores%20Anti-Fauna&body=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20productos.%20Gracias.`}
                    className="text-neutral-300 hover:text-cyan-400 transition-colors break-all"
                  >
                    {contactInfo.email}
                  </a>
                  <p className="text-sm text-neutral-400 mt-1">Respuesta en 24 horas</p>
                </div>
              </div>
            </div>

            {/* Teléfono */}
            <div className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <Phone className="w-10 h-10 text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-xl mb-2 text-blue-400">Teléfono</h3>
                  <a
                    href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                    className="text-neutral-300 hover:text-blue-400 transition-colors text-lg font-medium"
                  >
                    {contactInfo.phone}
                  </a>
                  <p className="text-sm text-neutral-400 mt-1">Lunes a Viernes 8:00 - 18:00</p>
                </div>
              </div>
            </div>

            {/* Ubicación */}
            <div className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <MapPin className="w-10 h-10 text-orange-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-xl mb-2 text-orange-400">Ubicación</h3>
                  <a
                    href="https://maps.google.com/?q=Monterrey+Nuevo+León+México"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-300 hover:text-orange-400 transition-colors"
                  >
                    {contactInfo.location}
                  </a>
                  <p className="text-sm text-neutral-400 mt-1">Ver en Google Maps</p>
                </div>
              </div>
            </div>

            {/* Instagram */}
            <div className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <SocialIcon
                    network="instagram"
                    style={{ height: 40, width: 40 }}
                    bgColor="#E4405F"
                    fgColor="#ffffff"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-xl mb-2 text-pink-400">Instagram</h3>
                  <a
                    href="https://instagram.com/forte.contenedores"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-300 hover:text-pink-400 transition-colors text-lg font-medium"
                  >
                    @forte.contenedores
                  </a>
                  <p className="text-sm text-neutral-400 mt-1">Síguenos para ver nuestros productos</p>
                </div>
              </div>
            </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-8 h-full">
            <h3 className="text-2xl font-bold mb-4">Certificaciones</h3>
            <ul className="space-y-3">
              {certifications.map((cert) => (
                <li key={cert} className="flex items-start space-x-2">
                  <ChevronDown className="w-5 h-5 flex-shrink-0 rotate-[-90deg]" />
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
