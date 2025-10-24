# Guía de Despliegue

## Opciones de Despliegue

### 1. Netlify (Recomendado)

#### Configuración Automática
1. Conecta tu repositorio de GitHub a Netlify
2. Configura las siguientes opciones:
   - **Build command**: `npm run build`
   - **Publish directory**: `build`
   - **Node version**: `18`

#### Variables de Entorno
```bash
REACT_APP_ENVIRONMENT=production
REACT_APP_API_URL=https://api.forte-ingenieria.com
```

#### Configuración de Redirección
Crea un archivo `public/_redirects`:
```
/*    /index.html   200
```

### 2. Vercel

#### Configuración
1. Conecta tu repositorio a Vercel
2. Configuración automática detectada
3. Variables de entorno opcionales

#### Archivo `vercel.json`
```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "build"
      }
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

### 3. GitHub Pages

#### Configuración
1. Instala `gh-pages`:
```bash
npm install --save-dev gh-pages
```

2. Agrega scripts al `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  },
  "homepage": "https://forte-ingenieria.github.io/website"
}
```

3. Despliega:
```bash
npm run deploy
```

### 4. AWS S3 + CloudFront

#### Configuración S3
1. Crea un bucket S3
2. Configura hosting estático
3. Sube archivos del directorio `build/`

#### Configuración CloudFront
1. Crea distribución CloudFront
2. Configura origen S3
3. Configura redirecciones para SPA

#### Script de Despliegue
```bash
#!/bin/bash
npm run build
aws s3 sync build/ s3://forte-website --delete
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
```

## Optimizaciones de Producción

### 1. Compresión
- Habilitar gzip/brotli en el servidor
- Minificar CSS y JavaScript
- Optimizar imágenes

### 2. Caching
- Configurar headers de cache apropiados
- Usar CDN para assets estáticos
- Implementar service workers

### 3. Monitoreo
- Configurar Google Analytics
- Implementar error tracking (Sentry)
- Monitorear performance (Web Vitals)

## Variables de Entorno

### Desarrollo
```bash
REACT_APP_ENVIRONMENT=development
REACT_APP_API_URL=http://localhost:3001
REACT_APP_DEBUG=true
```

### Producción
```bash
REACT_APP_ENVIRONMENT=production
REACT_APP_API_URL=https://api.forte-ingenieria.com
REACT_APP_DEBUG=false
```

## Checklist de Despliegue

### Pre-despliegue
- [ ] Ejecutar `npm run validate`
- [ ] Verificar que todas las pruebas pasen
- [ ] Revisar el build localmente
- [ ] Verificar responsive design
- [ ] Probar en diferentes navegadores

### Post-despliegue
- [ ] Verificar que el sitio carga correctamente
- [ ] Probar todas las funcionalidades
- [ ] Verificar SEO y metadatos
- [ ] Probar velocidad de carga
- [ ] Verificar certificados SSL

## Troubleshooting

### Problemas Comunes

#### Error 404 en rutas
- Verificar configuración de redirección
- Asegurar que todas las rutas apunten a `index.html`

#### Assets no cargan
- Verificar rutas relativas en `package.json`
- Configurar `homepage` correctamente

#### Variables de entorno no funcionan
- Verificar prefijo `REACT_APP_`
- Reconstruir después de cambios

### Logs y Debugging
- Usar herramientas de desarrollador del navegador
- Verificar Network tab para errores 404
- Revisar Console para errores JavaScript
