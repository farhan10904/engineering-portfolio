/* Renders the editable project catalogue. No frameworks or build step required. */
(function () {
  "use strict";
  const source = window.FARHAN_PORTFOLIO;
  if (!source || !Array.isArray(source.projects)) return;
  const onProjectPage = location.pathname.indexOf("/projects/") !== -1;
  const base = onProjectPage ? "../" : "";
  const projects = source.projects.filter(p => p.visible !== false);
  const cats = source.categories;
  const esc = value => String(value == null ? "" : value).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const safe = url => {
    if (typeof url !== "string" || !url.trim()) return "";
    const u = url.trim();
    if (/^https:\/\/[^\s]+$/i.test(u) || /^(?:assets\/|projects\/)[\w./-]+$/.test(u)) return u;
    return "";
  };
  const pageURL = p => {
    if (p.page && safe(p.page)) return base + p.page;
    if (p.ready) return base + "project.html?id=" + encodeURIComponent(p.id);
    return "";
  };
  const externalLinks = p => [["github","GitHub"],["medium","Medium article"],["report","Technical report"]].filter(x => safe(p[x[0]])).map(([key,label]) => '<a href="' + esc(p[key]) + '" target="_blank" rel="noopener noreferrer" class="button outline">' + label + ' ↗</a>').join("");
  const nav = document.querySelector("#menu > ul");
  if (nav) {
    const catHtml = cats.map(cat => {
      const sub = projects.filter(p => p.category === cat.id);
      if (!sub.length) return "";
      return '<li><span class="opener">' + esc(cat.label) + '</span><ul>' +
        sub.map(p => '<li>' + (pageURL(p) ? '<a href="' + esc(pageURL(p)) + '">' + esc(p.sidebarTitle || p.title) + '</a>' : '<span class="portfolio-muted-nav">' + esc(p.sidebarTitle || p.title) + '</span>') + '</li>').join("") +
      '</ul></li>';
    }).join("");
    nav.innerHTML = '<li><a href="' + base + 'index.html">Overview</a></li><li><a href="' + base + 'index.html#featured">Featured projects</a></li>' +
      catHtml + '<li><a href="' + base + 'index.html#technical-skills">Technical skills</a></li><li><a href="' + base + 'index.html#writing">Technical writing</a></li><li><a href="' + base + 'index.html#contact">Contact & links</a></li>';
  }
  const featured = document.querySelector("#featured .portfolio-grid");
  if (featured) {
    // Reuse the existing original SVG artwork for the four established projects.
    const artwork = {};
    featured.querySelectorAll(".project-card").forEach(card => {
      const a = card.querySelector(".project-cover");
      const id = a && (a.getAttribute("href") || "").match(/projects\/([\w-]+)\.html/);
      if (id) artwork[id[1]] = a.querySelector("svg") ? a.querySelector("svg").outerHTML : "";
    });
    const chosen = projects.filter(p => p.featured);
    featured.innerHTML = chosen.map(p => {
      const cat = cats.find(c => c.id === p.category);
      const target = pageURL(p);
      const visual = safe(p.image) ? '<img src="' + esc(base+p.image) + '" alt="' + esc(p.title) + '" loading="lazy" />' : artwork[p.id] || '<div class="portfolio-placeholder"><span>' + esc(p.label || cat?.label || "ENGINEERING PROJECT") + '</span><strong>' + esc(p.title) + '</strong></div>';
      const tag = '<span class="project-cover-tag">' + esc(p.label || cat?.label || "") + '</span>';
      const cover = target ? '<a href="' + esc(target) + '" class="project-cover">' + visual + tag + '</a>' : '<div class="project-cover">' + visual + tag + '</div>';
      const title = target ? '<a href="' + esc(target) + '">' + esc(p.title) + '</a>' : esc(p.title);
      return '<article class="project-card accent-' + esc(p.accent || "mint") + '">' + cover +
        '<div class="project-card-body"><p class="overline">' + esc(cat?.label || "") + '</p><h3>' + title + '</h3><p>' + esc(p.summary || "") + '</p><div class="card-foot"><span>' + esc(p.technologies || "") + '</span>' +
        (target ? '<a href="' + esc(target) + '" class="small-arrow">View case study ↗</a>' : '') +
        '</div>' + (externalLinks(p) ? '<div class="project-extra-links">' + externalLinks(p) + '</div>' : '') + '</div></article>';
    }).join("");
    const count = document.querySelector(".hero-facts div:last-child b");
    if (count) count.textContent = String(chosen.length).padStart(2,"0");
    const expl = document.querySelector("#featured .section-header > p");
    if (expl) expl.textContent = "Selected engineering projects with technical evidence and further documentation.";
  }
  const archive = document.querySelector("#additional-work .archive-grid");
  if (archive) {
    archive.innerHTML = cats.map((cat,i) => {
      const items = projects.filter(p => p.category === cat.id && !p.featured);
      if (!items.length) return "";
      return '<div class="archive-block"><span class="archive-index">' + String(i+1).padStart(2,"0") + ' / ' + esc(cat.label.toUpperCase()) + '</span><h3>' + esc(cat.label) + '</h3><ul>' +
        items.map(p => '<li>' + (pageURL(p) ? '<a href="' + esc(pageURL(p)) + '">' + esc(p.title) + '</a>' : esc(p.title)) + '</li>').join("") + '</ul></div>';
    }).join("");
  }
  const caseEl = document.getElementById("dynamic-project");
  if (caseEl) {
    const params = new URLSearchParams(location.search);
    const p = projects.find(item => item.id === params.get("id") && item.ready);
    if (!p) {
      caseEl.innerHTML = '<section class="case-section"><h1>Project not found</h1><p>This project may be unpublished or hidden.</p><a href="' + base + 'index.html">Return to the portfolio</a></section>';
      return;
    }
    const cat = cats.find(c => c.id === p.category);
    document.title = p.title + " | Farhan Ali";
    const d = Array.isArray(p.details) ? p.details : [];
    const sections = d.map((entry,i) => '<article><span class="case-num">' + String(i+1).padStart(2,"0") + '</span><div><h3>' + esc(entry.heading || "") + '</h3><p>' + esc(entry.text || "") + '</p></div></article>').join("");
    const image = safe(p.image) ? '<img class="portfolio-detail-photo" src="' + esc(base+p.image) + '" alt="' + esc(p.title) + '" />' : '';
    caseEl.innerHTML = '<div class="breadcrumbs"><a href="' + base + 'index.html">Home</a><span>/</span><span>' + esc(p.title) + '</span></div>' +
      '<section class="case-hero"><p class="eyebrow">' + esc(cat?.label.toUpperCase() || "ENGINEERING PROJECT") + '</p><h1>' + esc(p.title) + '</h1><p class="case-lede">' + esc(p.summary || "") + '</p>' + image + '</section>' +
      (sections ? '<section class="case-section"><div class="section-header"><div><p class="eyebrow">PROJECT DETAILS</p><h2>Engineering case study</h2></div></div><div class="case-steps">' + sections + '</div></section>' : '') +
      '<section class="case-section"><div class="section-header"><div><p class="eyebrow">FURTHER DOCUMENTATION</p><h2>Explore the project</h2></div></div><div class="hero-actions">' + externalLinks(p) + '<a href="' + base + 'index.html#featured" class="button outline">Back to projects</a></div></section>';
  }
})();
