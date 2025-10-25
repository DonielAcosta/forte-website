/**
 * Configuración de assets para el sitio web de FORTE
 */

// Rutas de imágenes
export const imagePaths = {
  logo: '/src/assets/images/FORTE_Ingenieria_Manufactura.svg',
  logoWhite: '/assets/images/logo-white.png',
  hero: '/assets/images/hero-bg.jpg',
  product1: '/assets/images/product-200l.jpg',
  product2: '/assets/images/product-400l.jpg',
  product3: '/assets/images/product-6000l.jpg',
  about: '/assets/images/about-us.jpg',
  contact: '/assets/images/contact-bg.jpg',
  placeholder: '/assets/images/placeholder.jpg',
};

// Rutas de iconos
export const iconPaths = {
  favicon: '/assets/icons/favicon.ico',
  appleTouchIcon: '/assets/icons/apple-touch-icon.png',
  androidChrome192: '/assets/icons/android-chrome-192x192.png',
  androidChrome512: '/assets/icons/android-chrome-512x512.png',
};

// Configuración de imágenes
export const imageConfig = {
  formats: ['webp', 'jpg', 'png'],
  sizes: {
    thumbnail: '150x150',
    small: '300x300',
    medium: '600x600',
    large: '1200x1200',
    xlarge: '1920x1920',
  },
  quality: 85,
};

// Configuración de iconos
export const iconConfig = {
  sizes: [16, 32, 48, 64, 96, 128, 192, 256, 512],
  formats: ['ico', 'png', 'svg'],
};

// Metadatos de imágenes
export const imageMetadata = {
  logo: {
    alt: 'Logo de FORTE Ingeniería Manufactura',
    width: 200,
    height: 60,
  },
  hero: {
    alt: 'Contenedores anti-fauna FORTE',
    width: 1920,
    height: 1080,
  },
  product1: {
    alt: 'Contenedor CAF-200-1 de 200 litros',
    width: 400,
    height: 400,
  },
  product2: {
    alt: 'Contenedor CAF-400-1 de 400 litros',
    width: 400,
    height: 400,
  },
  product3: {
    alt: 'Contenedor CAF-6000-1 de 6,000 litros',
    width: 400,
    height: 400,
  },
};

// Configuración de fuentes
export const fontConfig = {
  primary: 'Inter',
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
  weights: [300, 400, 500, 600, 700, 800, 900],
  display: 'swap',
};

// Configuración de colores
export const colorConfig = {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#1e40af',
    700: '#1d4ed8',
    800: '#1e3a8a',
    900: '#1e3a8a',
  },
  secondary: {
    50: '#f0fdfa',
    100: '#ccfbf1',
    200: '#99f6e4',
    300: '#5eead4',
    400: '#2dd4bf',
    500: '#06b6d4',
    600: '#0891b2',
    700: '#0e7490',
    800: '#155e75',
    900: '#164e63',
  },
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
  },
};

// Configuración de animaciones
export const animationConfig = {
  duration: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
    slower: '1000ms',
  },
  easing: {
    linear: 'linear',
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
  },
  delays: {
    none: '0ms',
    short: '100ms',
    medium: '200ms',
    long: '300ms',
  },
};

// Configuración de breakpoints
export const breakpointConfig = {
  xs: '475px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
  '3xl': '1920px',
};

// Configuración de espaciado
export const spacingConfig = {
  px: '1px',
  0: '0px',
  0.5: '0.125rem',
  1: '0.25rem',
  1.5: '0.375rem',
  2: '0.5rem',
  2.5: '0.625rem',
  3: '0.75rem',
  3.5: '0.875rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  7: '1.75rem',
  8: '2rem',
  9: '2.25rem',
  10: '2.5rem',
  11: '2.75rem',
  12: '3rem',
  14: '3.5rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  28: '7rem',
  32: '8rem',
  36: '9rem',
  40: '10rem',
  44: '11rem',
  48: '12rem',
  52: '13rem',
  56: '14rem',
  60: '15rem',
  64: '16rem',
  72: '18rem',
  80: '20rem',
  96: '24rem',
};
