import { useState } from 'react';
import { X, CheckCircle, Shield, Wrench, Award } from 'lucide-react';

const ProductModal = ({ isOpen, onClose, product }) => {
  const [selectedColor, setSelectedColor] = useState('#2563eb'); // Color azul por defecto

  const colors = [
    { name: 'Azul', value: '#2563eb' },
    { name: 'Gris', value: '#6b7280' },
    { name: 'Naranja', value: '#F54927' },
    { name: 'Negro', value: '#000000' },
    { name: 'Rojo', value: '#ef4444' },
    { name: 'Verde', value: '#22c55e' }
  ];

  if (!isOpen || !product) return null;

  return (
    <div className="modal-fixed inset-0 z-[9999] overflow-y-auto animate-fadeIn">
      {/* Backdrop */}
      <div
        className="modal-fixed inset-0 bg-black bg-opacity-70 backdrop-blur-md animate-fadeIn"
        onClick={onClose}
        onKeyDown={(e) => e.key === 'Escape' && onClose()}
        role="button"
        tabIndex={0}
        aria-label="Cerrar modal"
      />

      {/* Modal Container */}
      <div className="flex min-h-screen items-center justify-center p-4">
        {/* Modal Content */}
        <div className="modal-absolute bg-white rounded-3xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden animate-scaleIn">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="bg-white text-blue-600 rounded-xl p-4 shadow-lg">
                  <span className="text-3xl font-bold">{product.volume}</span>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">{product.model}</h2>
                  <p className="text-blue-100 text-lg">Contenedor Anti-Fauna</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="text-white hover:text-blue-200 transition-colors p-2 hover:bg-white hover:bg-opacity-20 rounded-full"
                aria-label="Cerrar modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-10 overflow-y-auto max-h-[calc(90vh-120px)] bg-gray-50">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Column - Product Image and Features */}
              <div>
                {/* Product Image */}
                <div className="mb-8">
                  {/* Image Container with Color Overlay */}
                  <div className="relative modal-padding overflow-hidden">
                    <img
                      src={product.image}
                      alt={`${product.model} - Contenedor Anti-Fauna`}
                      className="relative w-full h-96 object-contain rounded-lg z-10"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    {/* Overlay de color para pintar el contenedor completamente */}
                    <div
                      className="absolute inset-0 z-20 pointer-events-none"
                      style={{
                        backgroundColor: selectedColor,
                        mixBlendMode: 'color',
                        opacity: 0.3,
                      }}
                    />
                    <div
                      className="w-full h-72 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-lg font-semibold relative"
                      style={{display: 'none'}}
                    >
                      Imagen: {product.model}
                    </div>
                  </div>

                </div>

                {/* Customization */}
                <div className="mt-8 p-6 bg-gray-50 rounded-xl shadow-lg">
                  <h4 className="font-bold text-gray-900 mb-4 text-lg">Personalización</h4>

                  {/* Color Picker */}
                  <div className="mb-4">
                    <h5 className="text-sm font-semibold text-gray-700 mb-3">Seleccionar Color</h5>
                    <div className="flex gap-3 flex-wrap">
                      {colors.map((color) => (
                        <button
                          key={color.value}
                          onClick={() => setSelectedColor(color.value)}
                          className={`w-10 h-10 rounded-full transition-all ${
                            selectedColor === color.value
                              ? 'ring-4 ring-blue-300 scale-110'
                              : 'hover:scale-110'
                          }`}
                          style={{ backgroundColor: color.value }}
                          title={color.name}
                          aria-label={`Seleccionar color ${color.name}`}
                        />
                      ))}
                    </div>
                  </div>

                  <p className="text-sm text-gray-700">
                    El contenedor puede ser rotulado con el diseño, logotipo o texto que se requiera,
                    ya sea para identificación, señalización o imagen corporativa.
                  </p>
                </div>

                {/* Key Features */}
                <div className="mt-8 space-y-4 bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Características Principales</h3>
                  {product.features.map((feature) => (
                    <div key={feature} className="flex items-start space-x-3 py-2">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-lg font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Diseño Personalizado */}
                <div className="mt-8 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl shadow-lg border border-blue-200">
                  <h4 className="text-lg font-bold text-blue-900 mb-4 flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-blue-600" />
                    Diseño Personalizado
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-base">Rotulación personalizada</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-base">Logotipo corporativo</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-base">Colores a elegir</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-base">Texto personalizado</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-sm text-gray-600 italic">
                    Personaliza tu contenedor según tus necesidades de identificación y marca.
                  </p>
                </div>


                {/* Certifications */}
                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Certificaciones</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Award className="w-4 h-4 text-blue-600" />
                      <span className="text-sm text-blue-800">Soldadura Certificada AWS D1.3</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Shield className="w-4 h-4 text-blue-600" />
                      <span className="text-sm text-blue-800">Cumplimiento NAE-SMA-009-2024</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Wrench className="w-4 h-4 text-blue-600" />
                      <span className="text-sm text-blue-800">Modelo Reforzado PTR</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Specifications and Details */}
              <div>
                {/* Description */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Descripción</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Technical Specifications */}
                <div className="mb-6 bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Especificaciones Técnicas</h3>
                  <div className="space-y-4">
                    {product.specifications.map((spec) => (
                      <div key={spec.label} className="flex justify-between py-3 border-b border-gray-200">
                        <span className="font-semibold text-gray-800 text-lg">{spec.label}</span>
                        <span className="text-gray-700 text-lg">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
