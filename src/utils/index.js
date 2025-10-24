/**
 * Utilidades para el sitio web de FORTE Ingeniería Manufactura
 */

/**
 * Formatea un número de teléfono para mostrar
 * @param {string} phone - Número de teléfono sin formato
 * @returns {string} Número de teléfono formateado
 */
export const formatPhoneNumber = (phone) => {
  if (!phone) return '';
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return phone;
};

/**
 * Valida un email
 * @param {string} email - Email a validar
 * @returns {boolean} True si el email es válido
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Debounce function para optimizar llamadas a funciones
 * @param {Function} func - Función a ejecutar
 * @param {number} wait - Tiempo de espera en ms
 * @returns {Function} Función debounced
 */
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Throttle function para limitar la frecuencia de ejecución
 * @param {Function} func - Función a ejecutar
 * @param {number} limit - Límite de tiempo en ms
 * @returns {Function} Función throttled
 */
export const throttle = (func, limit) => {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

/**
 * Genera un ID único
 * @returns {string} ID único
 */
export const generateId = () => {
  return Math.random().toString(36).substr(2, 9);
};

/**
 * Capitaliza la primera letra de una cadena
 * @param {string} str - Cadena a capitalizar
 * @returns {string} Cadena capitalizada
 */
export const capitalize = (str) => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Formatea texto para mostrar en UI
 * @param {string} text - Texto a formatear
 * @returns {string} Texto formateado
 */
export const formatText = (text) => {
  if (!text) return '';
  return text
    .split(' ')
    .map(word => capitalize(word))
    .join(' ');
};

/**
 * Obtiene las dimensiones de la ventana
 * @returns {Object} Objeto con width y height
 */
export const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
};

/**
 * Verifica si el dispositivo es móvil
 * @returns {boolean} True si es móvil
 */
export const isMobile = () => {
  return window.innerWidth < 768;
};

/**
 * Verifica si el dispositivo es tablet
 * @returns {boolean} True si es tablet
 */
export const isTablet = () => {
  return window.innerWidth >= 768 && window.innerWidth < 1024;
};

/**
 * Verifica si el dispositivo es desktop
 * @returns {boolean} True si es desktop
 */
export const isDesktop = () => {
  return window.innerWidth >= 1024;
};

/**
 * Scroll suave a un elemento
 * @param {string} elementId - ID del elemento
 * @param {number} offset - Offset adicional
 */
export const smoothScrollTo = (elementId, offset = 0) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

/**
 * Clase CSS para animaciones
 */
export const animationClasses = {
  fadeIn: 'animate-fade-in',
  slideInLeft: 'animate-slide-in-left',
  slideInRight: 'animate-slide-in-right',
  slideInUp: 'animate-slide-in-up',
  slideInDown: 'animate-slide-in-down',
  bounce: 'animate-bounce',
  pulse: 'animate-pulse'
};

/**
 * Breakpoints para responsive design
 */
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
};
