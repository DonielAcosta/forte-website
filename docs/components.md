# Documentación de Componentes

## Navigation Component

### Descripción
Componente de navegación principal que incluye el logo de la empresa, menú de navegación y funcionalidad para dispositivos móviles.

### Props
| Prop | Tipo | Descripción |
|------|------|-------------|
| `isMenuOpen` | `boolean` | Estado del menú móvil |
| `setIsMenuOpen` | `function` | Función para cambiar el estado del menú |
| `activeSection` | `string` | Sección activa actual |
| `scrollToSection` | `function` | Función para hacer scroll a una sección |

### Uso
```jsx
<Navigation 
  isMenuOpen={isMenuOpen}
  setIsMenuOpen={setIsMenuOpen}
  activeSection={activeSection}
  scrollToSection={scrollToSection}
/>
```

### Características
- Logo corporativo con inicial "F"
- Menú responsivo (desktop/móvil)
- Navegación suave entre secciones
- Indicador de sección activa

---

## HeroSection Component

### Descripción
Sección principal del sitio web que presenta el mensaje clave de la empresa y call-to-action buttons.

### Props
| Prop | Tipo | Descripción |
|------|------|-------------|
| `scrollToSection` | `function` | Función para hacer scroll a una sección |

### Uso
```jsx
<HeroSection scrollToSection={scrollToSection} />
```

### Características
- Título principal con gradiente
- Descripción de servicios
- Botones de acción (Ver Productos, Contactar)
- Tarjeta con características destacadas
- Iconos de certificaciones

---

## ProductsSection Component

### Descripción
Muestra los productos disponibles de la empresa con especificaciones técnicas detalladas.

### Props
No requiere props externos, utiliza datos de `constants/index.js`.

### Uso
```jsx
<ProductsSection />
```

### Características
- Grid responsivo de productos
- Tarjetas con información de cada producto
- Especificaciones técnicas destacadas
- Efectos hover en tarjetas
- Iconos de características

---

## AboutSection Component

### Descripción
Sección que presenta la misión, visión y valores de la empresa.

### Props
No requiere props externos, utiliza datos de `constants/index.js`.

### Uso
```jsx
<AboutSection />
```

### Características
- Misión y visión de la empresa
- Grid de valores corporativos
- Iconos dinámicos para cada valor
- Colores personalizados por valor
- Diseño responsivo

---

## ContactSection Component

### Descripción
Sección de contacto con información de la empresa y certificaciones.

### Props
No requiere props externos, utiliza datos de `constants/index.js`.

### Uso
```jsx
<ContactSection />
```

### Características
- Información de contacto (email, teléfono, ubicación)
- Enlaces funcionales (mailto, tel)
- Lista de certificaciones
- Diseño en dos columnas
- Colores corporativos

---

## Footer Component

### Descripción
Pie de página con información de copyright y detalles de la empresa.

### Props
No requiere props externos.

### Uso
```jsx
<Footer />
```

### Características
- Logo corporativo
- Información de copyright
- Descripción de la empresa
- Diseño centrado y minimalista

---

## Estilos y Clases CSS

### Clases Personalizadas
- `.animate-fade-in` - Animación de entrada
- `.animate-slide-in-*` - Animaciones de deslizamiento
- `.forte-gradient-text` - Texto con gradiente corporativo

### Colores Corporativos
- `forte-blue` - Azul principal (#1e40af)
- `forte-cyan` - Cian secundario (#06b6d4)
- `forte-slate` - Gris oscuro (#0f172a)

### Breakpoints Responsivos
- `xs` - 475px
- `sm` - 640px
- `md` - 768px
- `lg` - 1024px
- `xl` - 1280px
- `2xl` - 1536px

---

## Mejores Prácticas

### Accesibilidad
- Usar `alt` en todas las imágenes
- Implementar navegación por teclado
- Mantener contraste de colores adecuado
- Usar etiquetas semánticas HTML

### Performance
- Lazy loading para imágenes
- Optimización de bundle
- Minificación de CSS
- Compresión de assets

### SEO
- Metadatos apropiados
- Estructura semántica HTML
- URLs amigables
- Sitemap XML

### Mantenibilidad
- Componentes reutilizables
- Separación de responsabilidades
- Documentación clara
- Testing automatizado
