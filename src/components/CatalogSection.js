

import { Download } from 'lucide-react';

const CatalogSection = () => {
  const handleDownload = () => {
    // Crear un enlace temporal para descargar
    const link = document.createElement('a');
    link.href = '/catalogo-forte.pdf'; // Ruta del archivo del catálogo
    link.download = 'catalogo-forte-productos.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="catalogo" className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Descarga Nuestro Catálogo
            </h2>
            <p className="text-xl text-neutral-600 mb-8">
              Explora todos nuestros productos de ingeniería y manufactura en nuestro catálogo completo.
              Descubre las especificaciones técnicas, precios y opciones de personalización.
            </p>

            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-3 px-10 py-5 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Download className="w-6 h-6" />
              Descargar Catálogo PDF
            </button>

            <p className="text-sm text-neutral-500 mt-4">
              Catálogo actualizado 2025 • Formatos disponibles: PDF
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;
