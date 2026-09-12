export function initBackToTop() {
  const button = document.getElementById("back-to-top");
  if (!button) return;

  const SHOW_AFTER_PX = 480;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  window.addEventListener("scroll", () => {
    button.classList.toggle("hidden", window.scrollY < SHOW_AFTER_PX);
  });

  button.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  });
}
