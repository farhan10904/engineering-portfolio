/* Site theme preference; independent of HTML5 UP sidebar behaviour. */
(function () {
  'use strict';
  const key = 'farhan-portfolio-theme';
  const toggle = document.getElementById('theme-toggle');
  const label = document.getElementById('theme-toggle-label');
  const symbol = toggle ? toggle.querySelector('.theme-symbol') : null;
  const doc = document.documentElement;
  if (!toggle || !label) return;
  function updateUI() {
    const dark = doc.getAttribute('data-theme') !== 'light';
    toggle.setAttribute('aria-pressed', String(dark));
    toggle.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
    label.textContent = dark ? 'Switch to light mode' : 'Switch to dark mode';
    if (symbol) symbol.textContent = dark ? '☀' : '☾';
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#0b1220' : '#f6f8fa');
  }
  toggle.addEventListener('click', function () {
    const next = doc.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    doc.setAttribute('data-theme', next);
    try { localStorage.setItem(key, next); } catch (error) { /* Private browsing may block storage. */ }
    updateUI();
  });
  updateUI();
})();
