# Checklist: Reestructuración anwarsanchez.com

## Resumen del Proyecto

Transformar el portfolio actual (single-page) en un sitio web de marketing para agencia web.

**Estado:** Fase 5 completada - Pendiente Fase 6 (Pulido y Testing)
**Última actualización:** 2026-07-03

---

## Información del Cliente

| Campo | Valor |
|-------|-------|
| **Nombre** | Anwar Sánchez |
| **Servicio Principal** | Agencia web / Mejora de marca |
| **Público Objetivo** | Empresas tradicionales, PyMEs |
| **Mercado Geográfico** | Costa Rica |
| **Tono de Voz** | Profesional pero amigable |
| **Lead Magnet** | Consultoría gratuita (30 min) |
| **Testimonios** | Placeholders (pendiente reales) |

**Servicios:**
- Diseño y desarrollo web
- Branding completo (logo, identidad visual)
- SEO y Marketing digital
- Desarrollo a medida

**Redes Sociales:**
- GitHub: https://github.com/zleypner
- LinkedIn: https://www.linkedin.com/in/anwardev/
- Instagram: https://instagram.com/anwar.zl
- X/Twitter: https://x.com/anwar_zlcr

---

## Estructura de URLs

| URL | Descripción | Estado |
|-----|-------------|--------|
| `/` | Home - Landing page de agencia | [x] Completado |
| `/sobre-mi` | Historia personal/profesional | [x] Completado |
| `/proyectos` | Portafolio de trabajos | [x] Completado |
| `/recursos` | Herramientas y descargas | [x] Completado |
| `/articulos` | Blog con artículos SEO | [x] Completado |
| `/precios` | Planes y servicios | [x] Completado |
| `/resume` | Portfolio actual (sin cambios) | [x] Completado |

---

## Fase 1: Fundación

- [x] **1.1** Crear archivo `CHECKLIST.md` en el proyecto
- [x] **1.2** Crear carpeta `app/(marketing)/`
- [x] **1.3** Crear carpeta `app/(resume)/`
- [x] **1.4** Crear carpeta `components/marketing/`
- [x] **1.5** Crear carpeta `lib/data/`
- [x] **1.6** Mover `app/page.tsx` → `app/(resume)/resume/page.tsx`
- [x] **1.7** Crear `app/(resume)/layout.tsx` (wrapper minimal)
- [x] **1.8** Actualizar `app/layout.tsx` (solo fonts + GA)
- [x] **1.9** Agregar estilos de marketing a `globals.css`

---

## Fase 2: Componentes Core

- [x] **2.1** Crear `components/marketing/Header.tsx`
- [x] **2.2** Crear `components/marketing/MobileMenu.tsx` (integrado en Header)
- [x] **2.3** Crear `components/marketing/MarketingFooter.tsx`
- [x] **2.4** Crear `app/(marketing)/layout.tsx`
- [x] **2.5** Crear `components/marketing/Hero.tsx`
- [x] **2.6** Crear `components/marketing/CTASection.tsx`

---

## Fase 3: Home Page

- [x] **3.1** Crear `lib/data/services.ts`
- [x] **3.2** Crear `components/marketing/ServiceCard.tsx`
- [x] **3.3** Crear `components/marketing/Services.tsx`
- [x] **3.4** Crear `lib/data/testimonials.ts`
- [x] **3.5** Crear `components/marketing/TestimonialCard.tsx`
- [x] **3.6** Crear `components/marketing/Testimonials.tsx`
- [x] **3.7** Crear `app/(marketing)/page.tsx` (Home)

---

## Fase 4: Páginas Secundarias

- [x] **4.1** Crear `app/(marketing)/sobre-mi/page.tsx`
- [x] **4.2** Crear `app/(marketing)/proyectos/page.tsx`
- [x] **4.3** Crear `lib/data/pricing.ts`
- [x] **4.4** Crear `components/marketing/PricingCard.tsx`
- [ ] **4.5** Crear `components/marketing/PricingTable.tsx` (opcional)
- [x] **4.6** Crear `app/(marketing)/precios/page.tsx`
- [ ] **4.7** Crear `components/marketing/ContactForm.tsx` (pendiente)

---

## Fase 5: Recursos y Blog

- [ ] **5.1** Crear `components/marketing/ResourceCard.tsx` (inline en página)
- [x] **5.2** Crear `app/(marketing)/recursos/page.tsx`
- [x] **5.3** Crear `lib/data/articles.ts`
- [ ] **5.4** Crear `components/marketing/ArticleCard.tsx` (inline en página)
- [x] **5.5** Crear `app/(marketing)/articulos/page.tsx`
- [x] **5.6** Crear `app/(marketing)/articulos/[slug]/page.tsx`

---

## Fase 6: Pulido y Testing

- [ ] **6.1** Probar navegación entre páginas
- [ ] **6.2** Verificar que `/resume` funciona correctamente
- [ ] **6.3** Probar responsive en móvil
- [ ] **6.4** Optimizar imágenes
- [x] **6.5** Agregar metadata SEO a cada página
- [ ] **6.6** Configurar formulario de contacto
- [x] **6.7** `npm run build` sin errores

---

## Estructura de Archivos

```
app/
├── (marketing)/
│   ├── layout.tsx
│   ├── page.tsx                    # Home
│   ├── sobre-mi/page.tsx
│   ├── proyectos/page.tsx
│   ├── recursos/page.tsx
│   ├── articulos/page.tsx
│   ├── articulos/[slug]/page.tsx
│   └── precios/page.tsx
├── (resume)/
│   ├── layout.tsx
│   └── resume/page.tsx
├── layout.tsx
└── globals.css

components/
├── marketing/
│   ├── Header.tsx
│   ├── MarketingFooter.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── ServiceCard.tsx
│   ├── Testimonials.tsx
│   ├── TestimonialCard.tsx
│   ├── PricingCard.tsx
│   └── CTASection.tsx
└── [componentes existentes sin cambios]

lib/data/
├── services.ts
├── pricing.ts
├── testimonials.ts
└── articles.ts
```

---

## Copy de Contenido

### HOME (/)

**Hero:**
- Título: "Sitios web que convierten visitantes en clientes"
- Subtítulo: "Diseño web profesional para negocios que quieren crecer en la era digital"
- CTA Primario: "Agenda tu consulta gratis"
- CTA Secundario: "Ver proyectos"

**Servicios:**
1. Diseño Web - Sitios modernos y responsivos
2. Branding Digital - Identidad visual coherente
3. SEO y Marketing - Posicionamiento en Google
4. Desarrollo a Medida - Aplicaciones personalizadas

**Testimonios (Placeholders):**
1. María Rodríguez, Restaurante El Sabor
2. Carlos Jiménez, Ferretería Central
3. Laura Mora, Clínica Dental Sonrisas

**CTA Final:**
- "¿Listo para impulsar tu negocio?"
- "Agenda una llamada gratuita de 30 minutos"

---

### SOBRE MÍ (/sobre-mi)

- Título: "Hola, soy Anwar"
- Subtítulo: "Ingeniero de software y consultor digital"
- Secciones: Mi Historia, Por qué PyMEs, Mi Enfoque

---

### PRECIOS (/precios)

| Plan | Precio | Características |
|------|--------|-----------------|
| Básico | $499 | 5 páginas, diseño responsivo, SEO básico |
| Profesional | $999 | 10 páginas, blog, analytics, 3 meses soporte |
| Premium | $2,499 | Diseño custom, e-commerce, 6 meses soporte |
| Empresarial | Cotización | Desarrollo a medida, consultoría |

---

### RECURSOS (/recursos)

1. Checklist de Sitio Web (PDF)
2. Guía SEO Básica (PDF)
3. Plantilla de Brief (DOCX)

---

### ARTÍCULOS (/articulos)

1. "5 errores comunes en sitios web de PyMEs"
2. "Por qué tu negocio necesita un sitio web en 2025"
3. "SEO local: cómo aparecer en Google Maps"

---

### FOOTER

- Columnas: Anwar Sánchez, Servicios, Enlaces, Contacto
- Email: hola@anwarsanchez.com
- Legal: Política de Privacidad, Términos de Uso

---

## Comandos de Verificación

```bash
# Desarrollo
npm run dev

# Verificar build
npm run build

# URLs a probar
http://localhost:3000/          # Nuevo home
http://localhost:3000/resume    # Portfolio original
http://localhost:3000/sobre-mi
http://localhost:3000/proyectos
http://localhost:3000/recursos
http://localhost:3000/articulos
http://localhost:3000/precios
```

---

## Notas

- NO modificar contenido de `/resume` - debe quedar idéntico al actual
- Usar CSS variables existentes (--navy, --green, --slate)
- Mantener Roboto Mono como fuente
- Responsive breakpoints: 968px, 768px, 480px
