import { ChevronDown } from 'lucide-react';
import { products, technicalSpecs } from '../constants';

const ProductsSection = ({ onProductClick }) => {
  return (
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
          {products.map((product) => (
            <div
              key={product.model}
              onClick={() => onProductClick(product)}
              onKeyDown={(e) => e.key === 'Enter' && onProductClick(product)}
              role="button"
              tabIndex={0}
              aria-label={`Ver detalles del contenedor ${product.model} de ${product.volume}`}
              className="bg-neutral-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-neutral-200 hover:border-blue-600 cursor-pointer transform hover:scale-105"
            >
              <div className="bg-blue-600 text-white rounded-lg p-4 mb-6 flex items-center justify-between">
                <div className="text-center flex-1">
                  <div className="text-3xl font-bold">{product.volume}</div>
                  <div className="text-sm opacity-90">{product.model}</div>
                </div>
                {/* Imagen del contenedor sin fondo */}
                <div className="flex justify-center">
                  <img
                    src={product.image}
                    alt={`Contenedor ${product.model}`}
                    className="h-32 w-auto object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              <ul className="space-y-3">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start space-x-2">
                    <ChevronDown className="w-5 h-5 text-green-500 flex-shrink-0 rotate-[-90deg]" />
                    <span className="text-neutral-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-neutral-300">
                <p className="text-sm text-neutral-600">
                  Acero A36 calibre 16 • Pintura anticorrosiva • Tapa hermética • Cierre seguro
                </p>
                <p className="text-sm text-blue-600 font-semibold mt-2 text-center">
                  Haz clic para ver detalles →
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Especificaciones Técnicas</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {technicalSpecs.map((spec) => (
              <div key={spec.title}>
                <h4 className="font-semibold mb-2">{spec.title}</h4>
                <p className="text-blue-100">{spec.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
