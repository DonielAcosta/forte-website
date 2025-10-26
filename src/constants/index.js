// Datos de productos
export const products = [
  {
    model: 'CAF-200-1',
    volume: '200L',
    features: ['Sistema contra osos', 'Soldadura AWS D1.3', 'NAE-SMA-009-2024'],
    image: '/contenedor-antifauna-200.webp',
    price: 31320,
    specifications: [
      { label: 'Volumen Interior', value: '200 Litros' },
      { label: 'Material', value: 'Acero A36 Calibre 16' },
      { label: 'Estructura Interna', value: 'PTR Reforzado' },
      { label: 'Ancho Principal', value: '450 mm' },
      { label: 'Profundidad Principal', value: '452 mm' },
      { label: 'Altura Principal', value: '1200 mm' },
      { label: 'Ancho Base', value: '504 mm' },
      { label: 'Profundidad Base', value: '550 mm' },
      { label: 'Altura Total', value: '1475 mm' },
      { label: 'Recubrimiento', value: 'Pintura Anticorrosiva' },
      { label: 'Sistema de Cierre', value: 'Solo mano humana' },
      { label: 'Resistencia', value: 'Hasta 200 kg' }
    ],
    description: 'Contenedor metálico con sistema anti-fauna, especialmente diseñado para impedir el acceso de animales como osos, ratas, perros, etc. Fabricado en acero A36 y recubierto con pintura anticorrosiva.'
  },
  {
    model: 'CAF-400-1',
    volume: '400L',
    features: ['Sistema contra osos', 'Soldadura AWS D1.3', 'NAE-SMA-009-2024'],
    image: '/contenedor-antifauna-400.webp',
    price: 42000,
    specifications: [
      { label: 'Volumen Interior', value: '400 Litros' },
      { label: 'Material', value: 'Acero A36 Calibre 16' },
      { label: 'Estructura Interna', value: 'PTR Reforzado' },
      { label: 'Ancho Principal', value: '622 mm' },
      { label: 'Profundidad Principal', value: '680 mm' },
      { label: 'Altura Principal', value: '920 mm' },
      { label: 'Ancho Base', value: '688 mm' },
      { label: 'Profundidad Base', value: '1020 mm' },
      { label: 'Altura Total', value: '1332 mm' },
      { label: 'Altura hasta Abertura', value: '950 mm' },
      { label: 'Profundidad Abertura', value: '382 mm' },
      { label: 'Altura Base', value: '30 mm' },
      { label: 'Recubrimiento', value: 'Pintura Anticorrosiva' },
      { label: 'Sistema de Cierre', value: 'Solo mano humana' },
      { label: 'Resistencia', value: 'Hasta 200 kg' }
    ],
    description: 'Contenedor metálico con sistema anti-fauna de mayor capacidad, especialmente diseñado para impedir el acceso de animales como osos, ratas, perros, etc. Fabricado en acero A36 y recubierto con pintura anticorrosiva, cuenta con tapa hermética y cierre seguro que evitan la entrada de fauna y la emisión de olores.'
  },
  {
    model: 'CAF-6000-1',
    volume: '6,000L',
    features: ['Sistema contra osos', 'Soldadura AWS D1.3', 'NAE-SMA-009-2024', 'Multi-compartimento'],
    image: '/contenedor-antifauna-6000.webp',
    price: 53875,
    specifications: [
      { label: 'Volumen Interior', value: '6,000 Litros' },
      { label: 'Material', value: 'Acero A36 Calibre 16' },
      { label: 'Estructura Interna', value: 'PTR Reforzado' },
      { label: 'Compartimentos', value: '6 (3 superiores + 3 inferiores)' },
      { label: 'Ancho Principal', value: '2,900 mm' },
      { label: 'Profundidad Principal', value: '1,815 mm' },
      { label: 'Altura Principal', value: '1,200 mm' },
      { label: 'Ancho Base', value: '2,967 mm' },
      { label: 'Profundidad Base', value: '2,050 mm' },
      { label: 'Altura Total', value: '1,702 mm' },
      { label: 'Altura Tapa Inclinada', value: '1,251 mm' },
      { label: 'Altura Abertura Frontal', value: '452 mm' },
      { label: 'Altura Base', value: '51 mm' },
      { label: 'Recubrimiento', value: 'Pintura Anticorrosiva' },
      { label: 'Sistema de Cierre', value: 'Solo mano humana' },
      { label: 'Resistencia', value: 'Hasta 500 kg' }
    ],
    description: 'Contenedor industrial de gran capacidad con sistema anti-fauna para instalaciones de alto volumen. Cuenta con 6 compartimentos (3 superiores con tapa y 3 inferiores con puerta) para máxima capacidad de almacenamiento. Fabricado en acero A36 con estructura interna de PTR reforzado y sistema de bloqueo que solo permite acceso manual.'
  }
];

// Valores institucionales de la empresa
export const values = [
  {
    icon: 'Target',
    title: 'Innovación',
    color: 'bg-cyan-400',
    description: 'Buscamos constantemente nuevas formas de mejorar la funcionalidad y durabilidad de cada producto.'
  },
  {
    icon: 'Leaf',
    title: 'Responsabilidad Ambiental',
    color: 'bg-green-500',
    description: 'Cumplimos con las normas ecológicas y promovemos prácticas sostenibles en todos nuestros procesos.'
  },
  {
    icon: 'Award',
    title: 'Calidad Técnica',
    color: 'bg-blue-600',
    description: 'Aplicamos ingeniería de precisión, soldadura certificada y materiales de alta resistencia.'
  },
  {
    icon: 'Users',
    title: 'Compromiso Social',
    color: 'bg-cyan-500',
    description: 'Trabajamos por la seguridad y bienestar de la comunidad, protegiendo la fauna y el entorno urbano.'
  },
  {
    icon: 'Shield',
    title: 'Integridad',
    color: 'bg-slate-700',
    description: 'Operamos con transparencia, ética y respeto hacia nuestros clientes, proveedores y colaboradores.'
  },
  {
    icon: 'Wrench',
    title: 'Excelencia Operativa',
    color: 'bg-blue-900',
    description: 'Cada diseño y fabricación es un reto para superar los estándares de calidad establecidos.'
  }
];

// Información de contacto
export const contactInfo = {
  email: 'forte.ingenieria.manufactura@gmail.com',
  phone: '+52 81 3553 6847',
  location: 'Monterrey, Nuevo León'
};

// Certificaciones
export const certifications = [
  'Soldadura Certificada AWS D1.3',
  'Cumplimiento NAE-SMA-009-2024',
  'Ingeniería Estructural Certificada',
  'Procesos de Manufactura Avanzada'
];

// Especificaciones técnicas
export const technicalSpecs = [
  {
    title: 'Material',
    description: 'Acero A36 calibre 16 con estructura interna de PTR'
  },
  {
    title: 'Sistema de Cierre',
    description: 'Solo permite ingreso de mano humana al bloqueo'
  },
  {
    title: 'Resistencia',
    description: 'Soporta embestida de osos de hasta 200 kg'
  },
  {
    title: 'Recubrimiento',
    description: 'Pintura anticorrosiva de alto desempeño'
  }
];

// Objetivos estratégicos
export const strategicObjectives = [
  'Desarrollar productos innovadores de ingeniería estructural y manufactura avanzada adaptados a las necesidades ambientales actuales.',
  'Garantizar cumplimiento normativo total en cada proyecto (NAE-SMA-009-2024 y equivalentes).',
  'Expandir la presencia comercial en el norte y centro de México, estableciendo relaciones sólidas con instituciones públicas y privadas.',
  'Optimizar procesos de manufactura mediante tecnología de soldadura certificada (AWS D1.3) y materiales sustentables.',
  'Fomentar la educación ambiental y técnica, promoviendo la conciencia sobre el manejo responsable de residuos y la protección de la fauna.'
];

// Misión y Visión completas
export const missionVision = {
  mission: 'Diseñar, fabricar e innovar soluciones estructurales y de ingeniería que combinen resistencia, eficiencia y sustentabilidad, cumpliendo con las normativas ambientales y de seguridad más exigentes, como la NAE-SMA-009-2024, para contribuir al manejo responsable de materiales y la protección de la fauna en entornos urbanos y naturales.',
  vision: 'Consolidarnos como una empresa líder en manufactura e ingeniería sustentable en México, reconocida por la calidad de nuestros productos, innovación tecnológica y compromiso ambiental, siendo un referente en diseño y fabricación de contenedores anti-fauna y soluciones industriales que protejan tanto al entorno como a las personas.'
};

// Navegación
export const navigationItems = ['inicio', 'productos', 'nosotros', 'contacto'];
