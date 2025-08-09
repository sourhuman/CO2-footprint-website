document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("mainHeader");
  const hero = document.querySelector(".hero-video-container");

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        header.classList.remove("scrolled");
      } else {
        header.classList.add("scrolled");
      }
    },
    { threshold: 0.9 }
  );

  if (hero) observer.observe(hero);
});