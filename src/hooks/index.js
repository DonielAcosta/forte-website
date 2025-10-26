import { useState, useEffect } from 'react';

/**
 * Hook personalizado para manejar el estado del menú móvil
 * @returns {Object} Objeto con estado y funciones para manejar el menú
 */
export const useMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return {
    isMenuOpen,
    setIsMenuOpen,
    toggleMenu,
    closeMenu
  };
};

/**
 * Hook personalizado para manejar la navegación y sección activa
 * @returns {Object} Objeto con estado y funciones para navegación
 */
export const useNavigation = () => {
  const [activeSection, setActiveSection] = useState('inicio');

  const scrollToSection = (section) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Detectar sección activa basada en scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'productos', 'nosotros', 'contacto'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return {
    activeSection,
    setActiveSection,
    scrollToSection
  };
};

/**
 * Hook personalizado para manejar el tema (preparado para futuras implementaciones)
 * @returns {Object} Objeto con estado y funciones para el tema
 */
export const useTheme = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return {
    theme,
    setTheme,
    toggleTheme
  };
};

/**
 * Hook personalizado para manejar animaciones de entrada
 * @param {number} delay - Delay en milisegundos para la animación
 * @returns {boolean} Estado de si el elemento debe ser visible
 */
export const useFadeIn = (delay = 0) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return isVisible;
};
