const { meta, experience, projects, skills } = portfolioData;

  // ── Helpers ───────────────────────────────
  const $    = id  => document.getElementById(id);
  const tags = arr => arr.map(t => `<span class="tag">${t}</span>`).join('');
  const t    = (obj, lang) => typeof obj === 'string' ? obj : (obj[lang] || obj.es);

  // ── Active lang ───────────────────────────
  let currentLang = detectLang();  // from i18n.js

  // ── Fade helper ───────────────────────────
  function withFade(fn) {
    document.querySelectorAll('.lang-fade').forEach(el => el.classList.add('switching'));
    setTimeout(() => {
      fn();
      document.querySelectorAll('.lang-fade').forEach(el => el.classList.remove('switching'));
    }, 180);
  }

  // ── RENDER META ───────────────────────────
  function renderMeta(lang) {
    const tr = i18n[lang];
    document.title     = `${meta.name} — ${meta.title}`;
    document.documentElement.lang = lang;

    // Nav logo + badge
    $('nav-name').innerHTML =
      `${meta.name} <span class="${meta.available ? 'badge-available' : 'badge-unavailable'}">
        ${meta.available ? tr.nav.available : tr.nav.unavailable}
      </span>`;

    // Nav links
    tr.nav.links.forEach((txt, i) => { $(`nl-${i}`).textContent = txt; });
    $('nav-cta').textContent = tr.nav.cta;
    $('nav-cta').href        = `mailto:${meta.email}`;

    // Lang buttons state
    $('btn-es').classList.toggle('active', lang === 'es');
    $('btn-en').classList.toggle('active', lang === 'en');

    // Hero
    $('hero-eyebrow').textContent = tr.hero.eyebrow;
    $('hero-line1').textContent   = tr.hero.line1;
    $('hero-line2').textContent   = tr.hero.italic;
    $('hero-line3').textContent   = tr.hero.line3;
    $('hero-desc').textContent    = tr.hero.desc;
    $('hero-cta1').textContent    = tr.hero.cta1;
    $('hero-cta2').textContent    = tr.hero.cta2;
    $('hero-card-title').textContent = meta.name.toLowerCase().replace(' ', '.') + '.dev';

    // Hero stats
    $('hero-stats').innerHTML = tr.stats.map(s => `
      <div class="stat-row">
        <span class="stat-label">${s.label}</span>
        <span class="stat-value" ${s.sm ? 'style="font-size:.85rem"' : ''}>
          ${interpolate(s.value, meta)}
        </span>
      </div>`).join('');

    // Sections
    $('exp-eyebrow').textContent    = tr.sections.experience.eyebrow;
    $('exp-title').textContent      = tr.sections.experience.title;
    $('exp-count').textContent      = tr.counts.experience(experience.length);

    $('skills-eyebrow').textContent = tr.sections.skills.eyebrow;
    $('skills-title').textContent   = tr.sections.skills.title;
    $('skills-count').textContent   = tr.counts.skills(skills.length);

    $('proj-eyebrow').textContent   = tr.sections.projects.eyebrow;
    $('proj-title').textContent     = tr.sections.projects.title;
    $('proj-count').textContent     = tr.counts.projects(projects.length);

    // Contact
    //$('contact-title-main').textContent = tr.contact.title;
    //$('contact-title-em').textContent   = tr.contact.titleEm;
    //$('contact-desc').textContent       = tr.contact.desc;

    /*$('contact-links').innerHTML = tr.contact.links.map(l => `
      <a class="contact-link" href="${interpolate(l.href, meta)}" target="_blank">
        <span class="contact-link-icon">${l.icon}</span>
        ${interpolate(l.label, meta)}
        <span class="contact-link-arrow">→</span>
      </a>`).join('');

    // Form
    $('lbl-name').textContent        = tr.contact.form.name;
    $('c-name').placeholder          = tr.contact.form.namePh;
    $('lbl-email').textContent       = tr.contact.form.email;
    $('c-email').placeholder         = tr.contact.form.emailPh;
    $('lbl-msg').textContent         = tr.contact.form.message;
    $('c-msg').placeholder           = tr.contact.form.messagePh;
    $('form-submit').textContent     = tr.contact.form.submit;
    $('form-submit').dataset.submit  = tr.contact.form.submit;
    $('form-submit').dataset.sent    = tr.contact.form.submitted;
    */
    // Footer
    $('footer-left').textContent  = interpolate(tr.footer.left, meta);
    $('footer-right').textContent = interpolate(tr.footer.right, meta);
  }

  // ── RENDER EXPERIENCE ─────────────────────
  function renderExperience(lang) {
    $('exp-list').innerHTML = experience.map(e => `
      <div class="exp-item reveal">
        <div>
          <p class="exp-period">${e.period}</p>
          <p class="exp-company">
            ${e.company}
            ${e.companyNote ? `<br><span class="exp-company-note">${t(e.companyNote, lang)}</span>` : ''}
          </p>
        </div>
        <div>
          <div class="exp-role">
            ${t(e.role, lang)}
            <span class="exp-badge badge-${e.badge.style}">${t(e.badge.label, lang)}</span>
          </div>
          <p class="exp-desc">${t(e.description, lang)}</p>
          <div class="exp-tags">${tags(e.tags)}</div>
        </div>
      </div>`).join('');
  }

  // ── RENDER SKILLS ─────────────────────────
  function renderSkills(lang) {
    $('skills-grid').innerHTML = skills.map(g => `
      <div class="skill-group">
        <p class="skill-group-title">${t(g.group, lang)}</p>
        <div class="skill-items">
          ${g.items.map(item => `
            <div class="skill-item">
              <div class="skill-name">
                <span>${item.name}</span>
                <span class="skill-level">${t(item.level, lang)}</span>
              </div>
              <div class="skill-bar">
                <div class="skill-fill ${item.color}" data-width="${item.value}"></div>
              </div>
            </div>`).join('')}
        </div>
      </div>`).join('');
  }

  // ── RENDER PROJECTS ───────────────────────
  function renderProjects(lang) {
    $('projects-grid').innerHTML = projects.map(p => p.featured ? `
      <div class="project-card featured reveal">
        <div style="display:flex;flex-direction:column">
          <div class="project-header">
            <div class="project-icon">${p.icon}</div>
            <div class="project-links">
              <a class="project-link" href="${p.links.live}">↗</a>
            </div>
          </div>
          <div class="project-body">
            <h3 class="project-title">${t(p.title, lang)}</h3>
            <p class="project-desc">${t(p.description, lang)}</p>
            <div class="project-tags">${tags(p.tags)}</div>
          </div>
        </div>
        <div class="project-visual">${p.visual}</div>
      </div>` : `
      <div class="project-card reveal">
        <div class="project-header">
          <div class="project-icon">${p.icon}</div>
          <div class="project-links">
            <a class="project-link" href="${p.links.live}">↗</a>
          </div>
        </div>
        <div class="project-body">
          <h3 class="project-title">${t(p.title, lang)}</h3>
          <p class="project-desc">${t(p.description, lang)}</p>
          <div class="project-tags">${tags(p.tags)}</div>
        </div>
      </div>`).join('');
  }

  // ── OBSERVERS ─────────────────────────────
  function initObservers() {
    const revealObs = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 60);
          revealObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

    const skillObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.skill-fill').forEach((bar, i) => {
            setTimeout(() => { bar.style.width = (bar.dataset.width * 100) + '%'; }, i * 80);
          });
          skillObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    document.querySelectorAll('.skills-grid').forEach(el => skillObs.observe(el));
  }

  // ── FORM ──────────────────────────────────
  function handleSubmit(e) {
    e.preventDefault();
    const btn  = $('form-submit');
    const orig = btn.dataset.submit;
    const sent = btn.dataset.sent;
    btn.textContent    = sent;
    btn.style.cssText  = 'background:#4ade80;color:#000;width:100%;justify-content:center';
    setTimeout(() => {
      btn.textContent   = orig;
      btn.style.cssText = 'width:100%;justify-content:center';
      e.target.reset();
    }, 3000);
  }

  // ── SET LANG (public — llamado por botones) ─
  function setLang(lang) {
    if (lang === currentLang) return;
    currentLang = lang;
    localStorage.setItem('portfolio-lang', lang);

    withFade(() => {
      renderAll(lang);
      // Re-observe nuevos elementos .reveal del DOM
      document.querySelectorAll('.reveal:not(.visible)').forEach(el => {
        el.classList.add('visible');   // muestra inmediatamente en cambio de idioma
      });
    });
  }

  // ── RENDER ALL ────────────────────────────
  function renderAll(lang) {
    renderMeta(lang);
    renderExperience(lang);
    renderSkills(lang);
    renderProjects(lang);
  }

  // ── INIT ──────────────────────────────────
  renderAll(currentLang);
  initObservers();