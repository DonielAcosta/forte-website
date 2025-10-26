const Footer = () => {
  return (
    <footer className="bg-slate-950 text-neutral-400 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center space-x-3 mb-4">
          {/* Logo PNG Oficial */}
          <div className="h-10 flex-shrink-0">
            <img
              src="/forte-logo.png"
              alt="FORTE INGENIERIA MANUFACTURA"
              className="h-full w-auto object-contain"
            />
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
  );
};

export default Footer;
