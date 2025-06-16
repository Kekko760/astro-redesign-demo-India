document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  sections.forEach((sec) => {
    sec.style.opacity = 0;
    sec.style.transform = "translateY(30px)";
    sec.style.transition = "all 0.8s ease";
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        sec.style.opacity = 1;
        sec.style.transform = "translateY(0)";
        obs.disconnect();
      }
    }, { threshold: 0.3 });
    obs.observe(sec);
  });
});


