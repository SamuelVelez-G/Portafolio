const STORAGE_KEY = "theme";

export function initTheme() {
  const root = document.documentElement;
  const toggle = document.getElementById("theme-toggle");
  const lightIcon = document.getElementById("theme-icon-light");
  const darkIcon = document.getElementById("theme-icon-dark");

  let stored = null;
  try {
    stored = localStorage.getItem(STORAGE_KEY);
  } catch (error) {}
  if (stored === "light" || stored === "dark") root.setAttribute("data-theme", stored);

  function isDark() {
    // El modo oscuro es el tema por defecto del portafolio.
    return root.getAttribute("data-theme") !== "light";
  }

  function syncToggle() {
    if (!toggle) return;
    const dark = isDark();
    // El switch oscuro (blanco sobre transparente) se ve en fondo oscuro;
    // el switch claro (marino sobre transparente) se ve en fondo claro.
    lightIcon?.classList.toggle("hidden", dark);
    darkIcon?.classList.toggle("hidden", !dark);
    toggle.setAttribute("aria-label", dark ? "Cambiar a modo claro" : "Cambiar a modo oscuro");
  }

  syncToggle();

  toggle?.addEventListener("click", () => {
    const next = isDark() ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch (error) {}
    syncToggle();
  });
}
