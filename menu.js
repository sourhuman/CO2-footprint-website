(function () {
  const RTL = new Set(['ar','he','fa','ur','ps','sd','dv','ku','yi','syr']);

  const candidates = [
    document.documentElement.getAttribute('lang'),
    ...(navigator.languages || []),
    navigator.language
  ].filter(Boolean).map(s => String(s).toLowerCase());

  const tag = (candidates[0] || '').split('-')[0];
  const dir = RTL.has(tag) ? 'rtl' : 'ltr';

  // dir auf dem NAV-Wrapper setzen
  const nav = document.querySelector('.local-nav');
  if (nav) nav.setAttribute('dir', dir);

  // Saubere Zeichensetzung
  document.querySelectorAll('.local-nav .nav-link').forEach(a => {
    a.setAttribute('dir', 'auto');
  });
})();

