/**
 * Tipos y interfaces para el sitio web de FORTE Ingeniería Manufactura
 * Este archivo sirve como documentación de tipos para el proyecto
 */

/**
 * @typedef {Object} Product
 * @property {string} model - Modelo del producto (ej: 'CAF-200-1')
 * @property {string} volume - Volumen del contenedor (ej: '200L')
 * @property {string[]} features - Características del producto
 */

/**
 * @typedef {Object} CompanyValue
 * @property {string} icon - Nombre del icono de Lucide React
 * @property {string} title - Título del valor
 * @property {string} color - Clase CSS para el color de fondo
 */

/**
 * @typedef {Object} ContactInfo
 * @property {string} email - Email de contacto
 * @property {string} phone - Teléfono de contacto
 * @property {string} location - Ubicación de la empresa
 */

/**
 * @typedef {Object} TechnicalSpec
 * @property {string} title - Título de la especificación
 * @property {string} description - Descripción de la especificación
 */

/**
 * @typedef {Object} NavigationItem
 * @property {string} id - ID de la sección
 * @property {string} label - Etiqueta para mostrar
 * @property {string} href - Enlace de la sección
 */

/**
 * @typedef {Object} MenuState
 * @property {boolean} isMenuOpen - Estado del menú móvil
 * @property {Function} setIsMenuOpen - Función para cambiar el estado del menú
 * @property {Function} toggleMenu - Función para alternar el menú
 * @property {Function} closeMenu - Función para cerrar el menú
 */

/**
 * @typedef {Object} NavigationState
 * @property {string} activeSection - Sección activa actual
 * @property {Function} setActiveSection - Función para cambiar la sección activa
 * @property {Function} scrollToSection - Función para hacer scroll a una sección
 */

/**
 * @typedef {Object} ThemeState
 * @property {string} theme - Tema actual ('light' | 'dark')
 * @property {Function} setTheme - Función para cambiar el tema
 * @property {Function} toggleTheme - Función para alternar el tema
 */

/**
 * @typedef {Object} WindowDimensions
 * @property {number} width - Ancho de la ventana
 * @property {number} height - Alto de la ventana
 */

/**
 * @typedef {Object} AnimationClasses
 * @property {string} fadeIn - Clase para animación fade in
 * @property {string} slideInLeft - Clase para animación slide in left
 * @property {string} slideInRight - Clase para animación slide in right
 * @property {string} slideInUp - Clase para animación slide in up
 * @property {string} slideInDown - Clase para animación slide in down
 * @property {string} bounce - Clase para animación bounce
 * @property {string} pulse - Clase para animación pulse
 */

/**
 * @typedef {Object} Breakpoints
 * @property {string} sm - Breakpoint small (640px)
 * @property {string} md - Breakpoint medium (768px)
 * @property {string} lg - Breakpoint large (1024px)
 * @property {string} xl - Breakpoint extra large (1280px)
 * @property {string} '2xl' - Breakpoint 2x large (1536px)
 */

/**
 * @typedef {Object} ComponentProps
 * @property {React.ReactNode} children - Elementos hijos del componente
 * @property {string} className - Clases CSS adicionales
 * @property {Object} style - Estilos inline
 */

/**
 * @typedef {Object} ButtonProps
 * @property {string} variant - Variante del botón ('primary' | 'secondary' | 'outline')
 * @property {string} size - Tamaño del botón ('sm' | 'md' | 'lg')
 * @property {boolean} disabled - Si el botón está deshabilitado
 * @property {Function} onClick - Función a ejecutar al hacer click
 */

/**
 * @typedef {Object} IconProps
 * @property {string} name - Nombre del icono de Lucide React
 * @property {number} size - Tamaño del icono
 * @property {string} color - Color del icono
 * @property {string} className - Clases CSS adicionales
 */

/**
 * @typedef {Object} SectionProps
 * @property {string} id - ID de la sección
 * @property {string} title - Título de la sección
 * @property {string} subtitle - Subtítulo de la sección
 * @property {React.ReactNode} children - Contenido de la sección
 * @property {string} className - Clases CSS adicionales
 * @property {string} backgroundColor - Color de fondo de la sección
 */

/**
 * @typedef {Object} FormFieldProps
 * @property {string} label - Etiqueta del campo
 * @property {string} name - Nombre del campo
 * @property {string} type - Tipo del campo ('text' | 'email' | 'tel' | 'textarea')
 * @property {string} placeholder - Placeholder del campo
 * @property {boolean} required - Si el campo es requerido
 * @property {string} value - Valor del campo
 * @property {Function} onChange - Función a ejecutar al cambiar el valor
 * @property {string} error - Mensaje de error
 */

/**
 * @typedef {Object} CardProps
 * @property {string} title - Título de la tarjeta
 * @property {string} subtitle - Subtítulo de la tarjeta
 * @property {React.ReactNode} children - Contenido de la tarjeta
 * @property {string} className - Clases CSS adicionales
 * @property {Function} onClick - Función a ejecutar al hacer click
 * @property {boolean} hoverable - Si la tarjeta tiene efecto hover
 */
