export function initNavigation() {
  const header = document.getElementById("site-header");
  const toggle = document.getElementById("nav-toggle");
  const menu = document.getElementById("nav-menu");

  toggle?.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("flex");
    menu.classList.toggle("hidden");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  menu?.addEventListener("click", (e) => {
    if (e.target.tagName === "A" && !menu.classList.contains("hidden")) {
      menu.classList.add("hidden");
      menu.classList.remove("flex");
      toggle?.setAttribute("aria-expanded", "false");
    }
  });

  if (header) {
    const updateHeaderShadow = () => header.classList.toggle("header-scrolled", window.scrollY > 8);
    updateHeaderShadow();
    window.addEventListener("scroll", updateHeaderShadow);
  }

  const links = document.querySelectorAll(".nav-link");
  const sections = [...links]
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if (!sections.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries.find((entry) => entry.isIntersecting);
      if (!visible) return;

      links.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${visible.target.id}`);
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );

  sections.forEach((section) => observer.observe(section));
}
