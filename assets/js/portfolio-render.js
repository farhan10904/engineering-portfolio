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
    const list = items => items.filter(p => pageURL(p)).map(p =>
      '<li><a href="' + esc(pageURL(p)) + '">' + esc(p.sidebarTitle || p.title) + '</a></li>'
    ).join("");
    const main = projects.filter(p => p.featured);
    const other = projects.filter(p => !p.featured);
    nav.innerHTML = '<li><a href="' + base + 'index.html">Overview</a></li>' +
      '<li><span class="opener active">Main Engineering Projects</span><ul>' + list(main) + '</ul></li>' +
      '<li><span class="opener">Other Projects</span><ul>' + list(other) + '</ul></li>' +
      '<li><a href="' + base + 'explore.html">Explore All Projects</a></li>' +
      '<li><a href="' + base + 'index.html#writing">Technical writing</a></li>' +
      '<li><a href="' + base + 'index.html#technical-skills">Technical skills</a></li>' +
      '<li><a href="' + base + 'index.html#contact">Contact & links</a></li>';
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
  const explore = document.getElementById("explore-results");
  if (explore) {
    const search = document.getElementById("project-search");
    const filters = document.getElementById("project-filters");
    const count = document.getElementById("project-count");
    const clear = document.getElementById("project-clear");
    const tags = [...new Set(projects.flatMap(p => Array.isArray(p.tags) ? p.tags : []))].sort();
    const selected = new Set();
    filters.innerHTML = tags.map(tag => '<button type="button" class="project-filter" aria-pressed="false" data-tag="' + esc(tag) + '">' + esc(tag) + '</button>').join("");
    const renderExplore = () => {
      const q = search.value.trim().toLowerCase();
      const matched = projects.filter(p => {
        const pTags = Array.isArray(p.tags) ? p.tags : [];
        const haystack = [p.title,p.sidebarTitle,p.summary,p.technologies,p.type,...pTags].filter(Boolean).join(" ").toLowerCase();
        return (!q || haystack.includes(q)) && [...selected].every(tag => pTags.includes(tag));
      });
      matched.sort((a,b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));
      count.textContent = matched.length + ' of ' + projects.length + ' projects';
      explore.innerHTML = matched.length ? matched.map(p => {
        const href = pageURL(p);
        const cover = safe(p.image) ? '<img loading="lazy" src="' + esc(/^https:\/\//.test(p.image) ? p.image : base + p.image) + '" alt="">' : '<span class="explore-card-placeholder">ENGINEERING / PROJECT</span>';
        const title = href ? '<a href="' + esc(href) + '">' + esc(p.title) + '</a>' : esc(p.title);
        const pTags = Array.isArray(p.tags) ? p.tags : [];
        return '<article class="explore-card"><div class="explore-card-visual">' + cover + '</div><div class="explore-card-content">' +
          '<p class="explore-card-type">' + (p.featured ? 'MAIN PROJECT' : 'OTHER PROJECT') + '</p>' +
          '<h3>' + title + '</h3><p>' + esc(p.cardSummary || p.summary || "") + '</p>' +
          '<div class="explore-card-tags">' + pTags.map(tag => '<span>' + esc(tag) + '</span>').join("") + '</div>' +
          (href ? '<a class="explore-card-link" href="' + esc(href) + '">View case study ↗</a>' : '') + '</div></article>';
      }).join("") : '<p class="explore-empty">No projects match. Try removing a filter or changing your search.</p>';
    };
    filters.addEventListener("click", event => {
      const button = event.target.closest("button[data-tag]");
      if (!button) return;
      const tag = button.dataset.tag;
      if (selected.has(tag)) selected.delete(tag); else selected.add(tag);
      button.setAttribute("aria-pressed", String(selected.has(tag)));
      renderExplore();
    });
    search.addEventListener("input", renderExplore);
    clear.addEventListener("click", () => {
      search.value = ""; selected.clear();
      filters.querySelectorAll("button").forEach(button => button.setAttribute("aria-pressed","false"));
      renderExplore(); search.focus();
    });
    renderExplore();
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
    const imageURL = url => {
      if (!safe(url)) return "";
      return /^https:\/\//i.test(url) ? url : base + url;
    };
    const paragraph = value => '<p>' + esc(value) + '</p>';
    const list = values => Array.isArray(values) && values.length
      ? '<ul class="archive-bullet-list">' + values.map(v => '<li>' + esc(v) + '</li>').join("") + '</ul>'
      : '';
    const codeSnippet = block => (block && typeof block.text === "string" && block.text.trim())
      ? '<div class="archive-code-example">' +
        (block.caption ? '<p class="archive-code-caption">' + esc(block.caption) + '</p>' : '') +
        '<pre class="robot-code"><code>' + esc(block.text) + '</code></pre></div>'
      : '';
    const photos = images => {
      if (!Array.isArray(images) || !images.length) return "";
      const items = images.filter(im => im && imageURL(im.src)).map(im => {
        const src = imageURL(im.src);
        const alt = im.alt || im.caption || p.title;
        return '<figure class="archive-image-figure">' +
          '<img loading="lazy" src="' + esc(src) + '" alt="' + esc(alt) + '">' +
          (im.caption ? '<figcaption>' + esc(im.caption) + '</figcaption>' : '') +
          '</figure>';
      }).join("");
      return items ? '<div class="archive-figure-grid">' + items + '</div>' : "";
    };

    document.title = p.title + " | Farhan Ali";
    const sectionsData = Array.isArray(p.sections) ? p.sections : [];
    const sections = sectionsData.length
      ? sectionsData.map((entry, i) => '<section class="case-section archive-case-section">' +
        '<div class="section-header"><div><p class="eyebrow">' + String(i + 1).padStart(2, "0") +
        ' / ' + esc(p.type || cat?.label || "ENGINEERING WORK") + '</p><h2>' + esc(entry.heading) + '</h2></div></div>' +
        (Array.isArray(entry.paragraphs) ? entry.paragraphs.map(paragraph).join("") : "") +
        list(entry.bullets) + codeSnippet(entry.code) + photos(entry.images) + '</section>').join("")
      : (Array.isArray(p.details) && p.details.length
        ? '<section class="case-section"><div class="section-header"><div><p class="eyebrow">PROJECT DETAILS</p><h2>Engineering case study</h2></div></div><div class="case-steps">' +
        p.details.map((entry, i) => '<article><span class="case-num">' + String(i + 1).padStart(2, "0") +
          '</span><div><h3>' + esc(entry.heading || "") + '</h3><p>' + esc(entry.text || "") + '</p></div></article>').join("") +
        '</div></section>' : '');
    const facts = Array.isArray(p.facts) && p.facts.length
      ? '<div class="archive-facts">' + p.facts.map(fact => '<div><strong>' +
        esc(fact.value) + '</strong><span>' + esc(fact.label) + '</span></div>').join("") + '</div>' : '';
    const heroImg = imageURL(p.image)
      ? photos([{src:p.image,caption:"Project overview",alt:p.title}])
      : '';
    caseEl.innerHTML =
      '<div class="breadcrumbs"><a href="' + base + 'index.html">Home</a><span>/</span>' +
      '<a href="' + base + 'explore.html">Additional work</a><span>/</span><span>' + esc(p.title) + '</span></div>' +
      '<section class="case-hero archive-case-hero"><p class="eyebrow">' + esc((p.type || cat?.label || "ENGINEERING").toUpperCase()) +
      '</p><h1>' + esc(p.title) + '</h1><p class="case-lede">' + esc(p.summary || "") + '</p>' +
      '<p class="archive-technologies">' + esc(p.technologies || "") + '</p>' +
      facts + heroImg + '</section>' + sections +
      '<section class="case-section archive-case-section"><div class="section-header"><div>' +
      '<p class="eyebrow">DOCUMENTATION</p><h2>Related work</h2></div></div>' +
      '<p>The content and images are drawn from the original engineering portfolio and linked project materials. Results are described as coursework, training or prototype work according to their documented scope.</p>' +
      '<div class="hero-actions">' + externalLinks(p) +
      '<a href="' + base + 'explore.html" class="button outline">Back to project archive</a></div></section>';

    // Notion archive images require a one-time upload to assets/images/archive.
    // Until present, hide missing images gracefully instead of showing broken icons.
    caseEl.querySelectorAll(".archive-image-figure img").forEach(img => {
      const hideIfBroken = () => {
        const figure = img.closest(".archive-image-figure");
        if (figure) figure.hidden = true;
      };
      img.addEventListener("error", hideIfBroken);
      if (img.complete && img.naturalWidth === 0) hideIfBroken();
    });
  }
})();
