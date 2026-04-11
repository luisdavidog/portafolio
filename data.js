// ═══════════════════════════════════════════════
//  data.js — Portfolio data source (bilingual)
//  Cada entrada tiene { es, en } donde aplica
// ═══════════════════════════════════════════════

const portfolioData = {

  // ── META (sin traducción, datos fijos) ────────
  meta: {
    name:       'Luis Ortega',
    title:      'Full Stack Developer',
    location:   'Monterrey, México',
    available:  true,
    university: 'UANL · B.Eng. IT',
    email:      'ortega.garza93@gmail.com',
    linkedin:   'https://www.linkedin.com/in/ogluisdavid/',
    github:     'https://github.com/luisdavidog',
    cv:         '#'
  },

  // ── EXPERIENCE ────────────────────────────────
  experience: [
    {
      id:          'exp-002',
      period:      '2025 — 2026',
      company:     'Global Hitss',
      companyNote: { es: 'Consulting para Telcel', en: 'Consulting for Telcel' },
      badge:       { label: { es: 'Telecom', en: 'Telecom' }, style: 'blue' },
      role: {
        es: 'Full Stack Developer',
        en: 'Full Stack Developer'
      },
      description: {
        es: 'Consultoría técnica para Telcel en desarrollo de plataformas internas. Construcción de microservicios con Java/Spring Boot e interfaces Angular para gestión de procesos operativos a gran escala.',
        en: 'Technical consulting for Telcel on internal platform development. Built microservices with Java/Spring Boot and Angular interfaces for large-scale operational process management.'
      },
      tags: ['Angular', 'Java', 'Spring Boot', 'Hibernate', 'Microservicios', 'REST APIs']
    },
    {
      id:      'exp-003',
      period:  '2020 — 2024',
      company: 'Banregio',
      badge:   { label: { es: 'Banca', en: 'Banking' }, style: 'muted' },
      role: {
        es: 'Full Stack Developer',
        en: 'Full StackDeveloper'
      },
      description: {
        es: 'Desarrollo frontend para plataformas bancarias digitales. Implementación de componentes accesibles, optimización de rendimiento e integración con APIs de core bancario bajo estrictos estándares de seguridad.',
        en: 'Frontend development for digital banking platforms. Implementation of accessible components, performance optimization and integration with core banking APIs under strict security standards.'
      },
      tags: ['Angular', 'TypeScript', 'RxJS', 'JPA', 'CI/CD', 'Git']
    },
    {
      id:      'exp-001',
      period:  '2017 — 2020',
      company: 'Accenture',
      badge:   { label: { es: 'Actual', en: 'Current' }, style: 'accent' },
      role: {
        es: 'Java Jr Developer',
        en: 'Java Jr Developer'
      },
      description: {
        es: 'Desarrollo de soluciones enterprise en Angular 12+ y SAP Hybris Spartacus para clientes del sector retail y e-commerce. Liderazgo técnico de frontend, definición de arquitectura de componentes y revisión de código en equipos distribuidos.',
        en: 'Development of enterprise solutions in Angular 12+ and SAP Hybris Spartacus for retail and e-commerce clients. Technical frontend leadership, component architecture definition and code review in distributed teams.'
      },
      tags: ['Angular 14+', 'TypeScript', 'NgRx', 'SAP Spartacus', 'RxJS', 'Spring Boot']
    }
  ],

  // ── PROJECTS ──────────────────────────────────
  projects: [
    {
      id:       'proj-001',
      featured: true,
      icon:     '⚡',
      visual:   '⚡',
      title: {
        es: 'E-commerce Motos Eléctricas',
        en: 'Electric Motorcycle E-commerce'
      },
      description: {
        es: 'Plataforma de e-commerce para motocicletas eléctricas con WooCommerce. Inserción masiva de productos vía SQL directo, gestión de inventario y catálogo dinámico con variantes de productos.',
        en: 'E-commerce platform for electric motorcycles built with WooCommerce. Bulk product insertion via direct SQL, inventory management and dynamic catalog with product variants.'
      },
      tags:  ['WooCommerce', 'SQL', 'WordPress', 'PHP'],
      links: { github: '#', live: '#' }
    },
    {
      id:       'proj-002',
      featured: false,
      icon:     '🎨',
      title: {
        es: 'Mini Design System',
        en: 'Mini Design System'
      },
      description: {
        es: 'Sistema de diseño minimalista con tokens semánticos, dark/light mode y componentes reutilizables. HTML + CSS puro, sin dependencias.',
        en: 'Minimalist design system with semantic tokens, dark/light mode and reusable components. Pure HTML + CSS, zero dependencies.'
      },
      tags:  ['HTML', 'CSS', 'Design Tokens'],
      links: { github: '#', live: '#' }
    },
    {
      id:       'proj-003',
      featured: false,
      icon:     '🏦',
      title: {
        es: 'Plataforma Bancaria Digital',
        en: 'Digital Banking Platform'
      },
      description: {
        es: 'Módulos frontend para banca digital en Banregio. Componentes accesibles, integración con APIs de core bancario y optimización de rendimiento.',
        en: 'Frontend modules for digital banking at Banregio. Accessible components, core banking API integration and performance optimization.'
      },
      tags:  ['Angular', 'NgRx', 'RxJS', 'REST'],
      links: { github: '#', live: '#' }
    }
  ],

  // ── SKILLS (sin traducción — nombres técnicos universales) ──
  skills: [
    {
      group: { es: 'Frontend',       en: 'Frontend' },
      items: [
        { name: 'Angular 12+',    level: { es: 'Experto',    en: 'Expert'       }, value: 0.95, color: 'accent' },
        { name: 'TypeScript',     level: { es: 'Avanzado',   en: 'Advanced'     }, value: 0.95, color: 'accent' },
        { name: 'RxJS',           level: { es: 'Avanzado',   en: 'Advanced'     }, value: 0.88, color: 'accent' },
        { name: 'NgRx',           level: { es: 'Avanzado',   en: 'Advanced'     }, value: 0.85, color: 'accent' },
        { name: 'SAP Spartacus',  level: { es: 'Avanzado',   en: 'Advanced'     }, value: 0.82, color: 'accent' }
      ]
    },
    {
      group: { es: 'Backend',        en: 'Backend' },
      items: [
        { name: 'Java / Spring Boot', level: { es: 'Avanzado',   en: 'Advanced'  }, value: 0.88, color: 'blue' },
        { name: 'NestJS',    level: { es: 'intermedio',   en: 'Intermediate'  }, value: 0.70, color: 'blue' },
        { name: 'REST APIs',          level: { es: 'Experto',    en: 'Expert'    }, value: 0.92, color: 'blue' },
        { name: 'Microservicios',     level: { es: 'Avanzado',   en: 'Advanced'  }, value: 0.80, color: 'blue' },
        { name: 'SQL / PostgreSQL',   level: { es: 'Avanzado',   en: 'Advanced'  }, value: 0.82, color: 'blue' }
      ]
    },
    {
      group: { es: 'DevOps & Tools',  en: 'DevOps & Tools' },
      items: [
        { name: 'Git / GitHub',       level: { es: 'Experto',      en: 'Expert'       }, value: 0.92, color: '' },
        { name: 'Docker / K8s',       level: { es: 'Intermedio',   en: 'Intermediate' }, value: 0.70, color: '' },
        { name: 'GitHub Actions',     level: { es: 'Intermedio',   en: 'Intermediate' }, value: 0.72, color: '' },
        { name: 'GitHub Copilot',     level: { es: 'Avanzado',     en: 'Certified'     }, value: 0.88, color: '' },
        { name: 'Prompt Engineering', level: { es: 'Certificado',  en: 'Certified'    }, value: 0.88, color: '' }
      ]
    }
  ]
};
