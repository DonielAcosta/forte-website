# FORTE Ingeniería Manufactura - Sitio Web

## 📋 Descripción

Sitio web profesional para FORTE Ingeniería Manufactura, especializada en la fabricación de contenedores anti-fauna certificados. El sitio web presenta los productos, servicios y valores de la empresa con un diseño moderno y responsivo.

## 🚀 Características

- **Diseño Responsivo**: Optimizado para dispositivos móviles, tablets y desktop
- **Componentes Modulares**: Arquitectura basada en componentes reutilizables
- **Tailwind CSS**: Framework de utilidades para estilos consistentes
- **Iconos Lucide**: Iconografía moderna y consistente
- **Navegación Suave**: Scroll automático entre secciones
- **SEO Optimizado**: Metadatos y estructura semántica
- **Accesibilidad**: Cumple con estándares de accesibilidad web
- **Modal de Productos**: Ventana emergente con detalles completos de cada contenedor
- **Selector de Colores**: Visualiza los contenedores en diferentes colores
- **Diseño Personalizado**: Opciones de personalización con rotulación, logotipo y texto
- **Descarga de Catálogo**: Descarga el catálogo completo en PDF

## ⚡ Optimización de Imágenes

Se aplicaron mejoras para acelerar el renderizado y el LCP:

- `loading="lazy"` en imágenes no críticas para diferir su carga.
- `decoding="async"` para decodificar sin bloquear el hilo principal.
- `fetchPriority="high"` en imágenes críticas de primer pantallazo.

Ubicaciones relevantes:
- `src/components/Logo.js` → `fetchPriority="high"`, `decoding="async"`.
- `src/components/ProductModal.js` → `fetchPriority="high"`, `decoding="async"`.
- `src/components/ProductsSection.js` → `loading="lazy"`, `decoding="async"`.
- `src/components/Footer.js` → `loading="lazy"`, `decoding="async"`.

Recomendaciones adicionales (opcionales):
- Convertir imágenes a WebP/AVIF y servir variantes con `srcSet`/`sizes`.
- Definir `width` y `height` cuando sea posible para evitar CLS.
- Comprimir assets en `public/` antes del build.

## 🛠️ Tecnologías

- **React 19**: Biblioteca de interfaz de usuario
- **Tailwind CSS 3**: Framework de CSS utilitario
- **Lucide React**: Biblioteca de iconos
- **ESLint**: Linter para JavaScript
- **Prettier**: Formateador de código
- **PostCSS**: Procesador de CSS

## 📁 Estructura del Proyecto

```
forte-website/
├── public/                 # Archivos públicos
│   ├── catalogo-forte.pdf  # Catálogo descargable
│   └── ...                 # Otros archivos públicos
├── src/
│   ├── components/         # Componentes React
│   │   ├── Navigation.js
│   │   ├── Logo.js
│   │   ├── HeroSection.js
│   │   ├── ProductsSection.js
│   │   ├── ProductModal.js # Modal de detalles de producto
│   │   ├── CatalogSection.js # Sección de catálogo
│   │   ├── AboutSection.js
│   │   ├── ContactSection.js
│   │   └── Footer.js
│   ├── constants/          # Constantes y datos
│   │   └── index.js
│   ├── hooks/             # Hooks personalizados
│   │   └── index.js
│   ├── utils/             # Utilidades
│   │   └── index.js
│   ├── types/             # Tipos y documentación
│   │   └── index.js
│   ├── assets/            # Configuración de assets
│   │   └── index.js
│   ├── styles/            # Estilos personalizados
│   ├── services/          # Servicios y APIs
│   ├── contexts/          # Contextos de React
│   ├── App.js             # Componente principal
│   ├── index.js           # Punto de entrada
│   └── index.css          # Estilos globales
├── docs/                  # Documentación
├── tests/                 # Pruebas
├── scripts/               # Scripts de build
├── .eslintrc.js           # Configuración ESLint
├── .prettierrc            # Configuración Prettier
├── .gitignore             # Archivos ignorados por Git
├── tailwind.config.js     # Configuración Tailwind
├── postcss.config.js      # Configuración PostCSS
└── package.json           # Dependencias y scripts
```

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js >= 16.0.0
- npm >= 8.0.0

### Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/forte-ingenieria/website.git
cd forte-website
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm start
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📜 Scripts Disponibles

### Desarrollo
- `npm start` - Inicia el servidor de desarrollo
- `npm run dev` - Alias para npm start

### Build
- `npm run build` - Construye la aplicación para producción
- `npm run build:prod` - Build optimizado para producción
- `npm run preview` - Previsualiza el build de producción

### Testing
- `npm test` - Ejecuta las pruebas
- `npm run test:coverage` - Ejecuta pruebas con cobertura
- `npm run test:ci` - Pruebas para CI/CD

### Linting y Formato
- `npm run lint` - Ejecuta ESLint y corrige errores
- `npm run lint:check` - Verifica errores de ESLint
- `npm run format` - Formatea código con Prettier
- `npm run format:check` - Verifica formato de código

### Utilidades
- `npm run analyze` - Analiza el tamaño del bundle
- `npm run clean` - Limpia archivos de build y node_modules
- `npm run reinstall` - Reinstala dependencias
- `npm run validate` - Valida código, formato y pruebas

### Seguridad
- `npm run security:audit` - Auditoría de seguridad
- `npm run security:fix` - Corrige vulnerabilidades

### Dependencias
- `npm run deps:update` - Actualiza dependencias
- `npm run deps:outdated` - Muestra dependencias desactualizadas

## 🎨 Componentes

### Navigation
Componente de navegación principal con menú responsivo.

**Props:**
- `isMenuOpen`: Estado del menú móvil
- `setIsMenuOpen`: Función para cambiar el estado del menú
- `activeSection`: Sección activa actual
- `scrollToSection`: Función para hacer scroll a una sección

### Logo
Componente de logo clicable que navega al inicio.

**Props:**
- `size`: Tamaño del logo ('sm', 'md', 'lg', 'xl')
- `showText`: Muestra el texto del logo
- `onClick`: Función para navegar al inicio

### HeroSection
Sección principal con información destacada y call-to-action.

**Características destacadas:**
- Sistema a prueba de osos
- Soldadura AWS D1.3
- NAE-SMA-009-2024
- Diseño personalizado

**Props:**
- `scrollToSection`: Función para hacer scroll a una sección

### ProductsSection
Muestra los productos disponibles con especificaciones técnicas.

**Props:**
- `onProductClick`: Función para abrir el modal del producto

### ProductModal
Modal que muestra detalles completos del producto seleccionado.

**Props:**
- `isOpen`: Estado de apertura del modal
- `onClose`: Función para cerrar el modal
- `product`: Datos del producto a mostrar

**Características:**
- Visualizador de imágenes con overlay de colores
- Selector de 6 colores (Azul, Gris, Naranja, Negro, Rojo, Verde)
- Especificaciones técnicas completas
- Características principales y certificaciones
- Sección de Diseño Personalizado con opciones de personalización:
  - Rotulación personalizada
  - Logotipo corporativo
  - Colores a elegir
  - Texto personalizado

### CatalogSection
Sección de descarga del catálogo en PDF.

### AboutSection
Información sobre la empresa, misión, visión y valores.

### ContactSection
Información de contacto y certificaciones.

### Footer
Pie de página con información de la empresa.

## 🎯 Hooks Personalizados

### useMenu
Maneja el estado del menú móvil.

```javascript
const { isMenuOpen, setIsMenuOpen, toggleMenu, closeMenu } = useMenu();
```

### useNavigation
Maneja la navegación y sección activa.

```javascript
const { activeSection, setActiveSection, scrollToSection } = useNavigation();
```

### useTheme
Maneja el tema de la aplicación (preparado para futuras implementaciones).

```javascript
const { theme, setTheme, toggleTheme } = useTheme();
```

### useFadeIn
Maneja animaciones de entrada.

```javascript
const isVisible = useFadeIn(500); // Delay de 500ms
```

## 🛠️ Utilidades

### Formateo
- `formatPhoneNumber(phone)` - Formatea números de teléfono
- `formatText(text)` - Formatea texto para UI
- `capitalize(str)` - Capitaliza la primera letra

### Validación
- `isValidEmail(email)` - Valida emails

### Optimización
- `debounce(func, wait)` - Debounce para funciones
- `throttle(func, limit)` - Throttle para funciones

### Detección de Dispositivos
- `isMobile()` - Detecta dispositivos móviles
- `isTablet()` - Detecta tablets
- `isDesktop()` - Detecta desktop

### Scroll
- `smoothScrollTo(elementId, offset)` - Scroll suave a elemento

## 🎨 Estilos y Temas

### Colores Personalizados
- `forte-primary`: Paleta de azules corporativos
- `forte-secondary`: Paleta de cianes
- `forte-neutral`: Paleta de grises

### Animaciones
- `fade-in`: Animación de entrada
- `slide-in-*`: Animaciones de deslizamiento
- `bounce-slow`: Rebote lento
- `pulse-slow`: Pulso lento

### Breakpoints
- `xs`: 475px
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px
- `3xl`: 1920px

## 📱 Responsive Design

El sitio web está optimizado para:
- **Móviles**: < 768px
- **Tablets**: 768px - 1024px
- **Desktop**: > 1024px

## ♿ Accesibilidad

- Navegación por teclado
- Textos alternativos en imágenes
- Contraste de colores adecuado
- Estructura semántica HTML
- ARIA labels donde es necesario

## 🚀 Despliegue

### Build de Producción
```bash
npm run build:prod
```

### Variables de Entorno
Crea un archivo `.env` con:
```
REACT_APP_API_URL=https://api.forte-ingenieria.com
REACT_APP_ENVIRONMENT=production
```

### Servidores Recomendados
- **Netlify**: Para despliegue automático
- **Vercel**: Para aplicaciones React
- **GitHub Pages**: Para hosting estático
- **AWS S3**: Para hosting empresarial

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📦 Productos

El sitio web muestra tres modelos de contenedores anti-fauna:

### CAF-200-1 (200 Litros)
- Dimensiones: 450 x 452 x 1200 mm
- Altura Total: 1475 mm
- Precio: $31,320 MXN

### CAF-400-1 (400 Litros)
- Dimensiones: 622 x 680 x 920 mm
- Altura Total: 1332 mm
- Precio: $42,000 MXN

### CAF-6000-1 (6,000 Litros)
- Dimensiones: 2900 x 1815 x 1200 mm
- Altura Total: 1702 mm
- Compartimentos: 6 (3 superiores + 3 inferiores)
- Precio: $53,875 MXN

Todos los contenedores incluyen:
- Material: Acero A36 Calibre 16
- Estructura Interna: PTR Reforzado
- Recubrimiento: Pintura Anticorrosiva
- Sistema de Cierre: Solo mano humana
- Certificaciones: Soldadura AWS D1.3, NAE-SMA-009-2024
- Diseño Personalizado: Con opciones de rotulación, logotipo corporativo, colores y texto

## 📄 Catálogo

El catálogo completo está disponible para descarga en formato PDF:
- Ubicación: `/public/catalogo-forte.pdf`
- Tamaño: 2.8 MB
- Actualización: 2025

## 📞 Contacto

**FORTE Ingeniería Manufactura**
- Email: forte.ingenieria.manufactura@gmail.com
- Teléfono: +52 81 3553 6847
- Ubicación: Monterrey, Nuevo León

## 🙏 Agradecimientos

- [React](https://reactjs.org/) - Biblioteca de UI
- [Tailwind CSS](https://tailwindcss.com/) - Framework de CSS
- [Lucide React](https://lucide.dev/) - Iconos
- [Create React App](https://create-react-app.dev/) - Herramientas de desarrollo

---

**Desarrollado con ❤️ para FORTE Ingeniería Manufactura**

**Autor:** Doniel Acosta
