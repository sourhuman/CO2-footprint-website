document.addEventListener('DOMContentLoaded', () => {
  const breakers = document.querySelectorAll('.break-snap');
  if (!breakers.length || !('IntersectionObserver' in window)) return;

  const html = document.documentElement;
  const visible = new Set();

  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting && e.intersectionRatio >= 0.6) {
        visible.add(e.target);
      } else {
        visible.delete(e.target);
      }
    });
    // Wenn irgendein break-snap sichtbar ist -> Snap global aus
    if (visible.size > 0) html.classList.add('no-snap');
    else html.classList.remove('no-snap');
  }, { threshold: [0.6] });

  breakers.forEach((el) => io.observe(el));
});