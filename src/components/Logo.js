const Logo = ({ className = "", showText = true, size = "md" }) => {
  const sizeClasses = {
    sm: "h-8",
    md: "h-12",
    lg: "h-16",
    xl: "h-20"
  };

  const textSizeClasses = {
    sm: "text-sm",
    md: "text-lg",
    lg: "text-xl",
    xl: "text-2xl"
  };

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Logo PNG Oficial */}
      <div className={`${sizeClasses[size]} flex-shrink-0`}>
        <img
          src="/forte-logo.png"
          alt="FORTE INGENIERIA MANUFACTURA"
          className="h-full w-auto object-contain"
        />
      </div>

      {/* Texto del logo */}
      {showText && (
        <div className="flex flex-col">
          <div className={`font-bold text-blue-400 ${textSizeClasses[size]}`}>FORTE</div>
          <div className={`text-xs text-neutral-300 ${size === 'sm' ? 'text-xs' : 'text-xs'}`}>
            Ingeniería Manufactura
          </div>
        </div>
      )}
    </div>
  );
};

export default Logo;
