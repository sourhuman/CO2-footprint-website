document.addEventListener("scroll", function () {
  const header = document.getElementById("mainHeader");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("mainHeader");
  const hero = document.querySelector(".hero-video-container");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Hero sichtbar -> GlobaleNav transparent
          header.classList.remove("scrolled");
        } else {
          // Hero nicht mehr sichtbar -> GlobaleNav schwarz
          header.classList.add("scrolled");
        }
      });
    },
    { threshold: 0.5 } 
  );

  observer.observe(hero);
});

document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('mainHeader');

  function updateHeaderOffset() {
    if (!header) return;
    const h = header.offsetHeight; 
    document.documentElement.style.setProperty('--header-h', h + 'px');
  }

  updateHeaderOffset();
  window.addEventListener('resize', updateHeaderOffset);
  window.addEventListener('orientationchange', updateHeaderOffset);
});

(() => {
  const vids = document.querySelectorAll('[data-autopause-video]');
  if (!vids.length || !('IntersectionObserver' in window)) return;

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      const v = e.target;
      if (document.hidden || !e.isIntersecting) v.pause();
      else v.play().catch(()=>{});
    });
  }, { threshold: 0.15 });

  vids.forEach(v => io.observe(v));
  document.addEventListener('visibilitychange', () =>
    vids.forEach(v => document.hidden ? v.pause() : v.play().catch(()=>{}))
  );
})();




