// ═══════════════════════════════════════════════
//  i18n.js — Internationalization
//  Traducciones ES / EN + detección de idioma
// ═══════════════════════════════════════════════

const i18n = {

  es: {
    // NAV
    nav: {
      available:    'disponible',
      unavailable:  'no disponible',
      links: ['Exp.', 'Skills', 'Proyectos', 'Contacto'],
      cta:          'Contáctame →'
    },

    // HERO
    hero: {
      eyebrow:  'Full Stack Developer',
      line1:    'Construyo',
      line2:    'interfaces que',
      line3:    'escalan.',
      italic:   'interfaces',
      desc:     '+7 años de experiencia en Angular, Java/Spring Boot. Especializado en arquitecturas enterprise para banca, telecom y e-commerce.',
      cta1:     'Ver proyectos',
      cta2:     'Hablemos',
    },

    // HERO CARD STATS
    stats: [
      { label: 'Experiencia',    value: '7+ años' },
      { label: 'Stack principal',value: '<span class="stat-tag">Angular</span>' },
      { label: 'Backend',        value: '<span class="stat-tag">Spring Boot</span>' },
      { label: 'Ubicación',      value: '{location} 🇲🇽',       sm: true },
      { label: 'Modalidad',      value: '<span style="color:#4ade80">Remote-ready ✓</span>', sm: true }
    ],

    // SECTIONS
    sections: {
      experience: { eyebrow: '02 — Trayectoria', title: 'Experiencia' },
      skills:     { eyebrow: '03 — Tecnologías', title: 'Skills' },
      projects:   { eyebrow: '04 — Trabajo',     title: 'Proyectos' },
    },

    // COUNTS
    counts: {
      experience: n => `${n} empresas`,
      skills:     n => `${n} áreas`,
      projects:   n => `${n} proyectos`,
    },

    // CONTACT
    contact: {
      title:   'Hablemos de tu',
      titleEm: 'próximo proyecto.',
      desc:    'Disponible para posiciones remotas en empresas enterprise. Abierto a roles de Senior Frontend, Full Stack o arquitectura Angular.',
      links: [
        { icon: '✉️', label: '{email}',                         href: 'mailto:{email}' },
        { icon: '💼', label: 'linkedin.com/in/ogluisdavid',    href: '{linkedin}' },
        { icon: '🐙', label: 'github.com/luisdavidog',         href: '{github}' },
        { icon: '📄', label: 'Descargar CV',                    href: '{cv}' }
      ],
      form: {
        name:        'Nombre',
        namePh:      'Tu nombre',
        email:       'Email',
        emailPh:     'tu@empresa.com',
        message:     'Mensaje',
        messagePh:   'Cuéntame sobre el proyecto o posición...',
        submit:      'Enviar mensaje →',
        submitted:   '✓ Mensaje enviado'
      }
    },

    // FOOTER
    footer: {
      left:  '© 2026 {name} — {location}',
      right: '{university} · Senior Full Stack'
    }
  },

  // ─────────────────────────────────────────────
  en: {
    nav: {
      available:    'available',
      unavailable:  'unavailable',
      links: ['Exp.', 'Skills', 'Projects', 'Contact'],
      cta:          'Contact me →'
    },

    hero: {
      eyebrow:  'Full Stack Developer',
      line1:    'I build',
      line2:    'digital',
      line3:    'solutions.',
      italic:   'solutions',
      desc:     '7+ years of experience in Angular, Java/Spring Boot and SAP Hybris Spartacus. Specialized in enterprise architectures for banking, telecom and e-commerce.',
      cta1:     'View projects',
      cta2:     "Let's talk",
    },

    stats: [
      { label: 'Experience',     value: '7+ years' },
      { label: 'Main stack',     value: '<span class="stat-tag">Angular</span>' },
      { label: 'Backend',        value: '<span class="stat-tag">Spring Boot</span>' },
      { label: 'Location',       value: '{location} 🇲🇽',       sm: true },
      { label: 'Work mode',      value: '<span style="color:#4ade80">Remote-ready ✓</span>', sm: true }
    ],

    sections: {
      experience: { eyebrow: '02 — Journey',     title: 'Experience' },
      skills:     { eyebrow: '03 — Technologies', title: 'Skills' },
      projects:   { eyebrow: '04 — Work',         title: 'Projects' },
    },

    counts: {
      experience: n => `${n} companies`,
      skills:     n => `${n} areas`,
      projects:   n => `${n} projects`,
    },

    contact: {
      title:   "Let's talk about your",
      titleEm: 'next project.',
      desc:    'Available for remote positions at enterprise companies. Open to Senior Frontend, Full Stack or Angular architecture roles.',
      links: [
        { icon: '✉️', label: '{email}',                         href: 'mailto:{email}' },
        { icon: '💼', label: 'linkedin.com/in/ogluisdavid',    href: '{linkedin}' },
        { icon: '🐙', label: 'github.com/luisdavidog',         href: '{github}' },
        { icon: '📄', label: 'Download CV',                     href: '{cv}' }
      ],
      form: {
        name:        'Name',
        namePh:      'Your name',
        email:       'Email',
        emailPh:     'you@company.com',
        message:     'Message',
        messagePh:   'Tell me about the project or position...',
        submit:      'Send message →',
        submitted:   '✓ Message sent'
      }
    },

    footer: {
      left:  '© 2026 {name} — {location}',
      right: '{university} · Senior Full Stack'
    }
  }
};

// ── DETECCIÓN AUTOMÁTICA ──────────────────────
// Lee el idioma del navegador y lo normaliza a 'es' | 'en'
function detectLang() {
  const saved = localStorage.getItem('portfolio-lang');
  if (saved) return saved;

  const browser = (navigator.language || navigator.userLanguage || 'es').slice(0, 2).toLowerCase();
  return browser === 'en' ? 'en' : 'es';
}

// ── INTERPOLACIÓN ─────────────────────────────
// Reemplaza {token} con valores del objeto meta
function interpolate(str, meta) {
  return str
    .replace('{name}',       meta.name)
    .replace('{location}',   meta.location)
    .replace('{email}',      meta.email)
    .replace('{linkedin}',   meta.linkedin)
    .replace('{github}',     meta.github)
    .replace('{cv}',         meta.cv)
    .replace('{university}', meta.university);
}
