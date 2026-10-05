import { icon } from "./icons.js";

/**
 * Enlace con icono lineal. Con `showLabel` se muestra como botón con texto.
 * @param {{ href: string, label: string, icon: string, showLabel?: boolean }} props
 * @returns {HTMLAnchorElement}
 */
export function SocialLink({ href, label, icon: iconName, showLabel = false }) {
  const a = document.createElement("a");
  a.href = href;
  a.setAttribute("aria-label", label);

  if (!href.startsWith("mailto:")) {
    a.target = "_blank";
    a.rel = "noopener noreferrer";
  }

  if (showLabel) {
    a.className = "btn-secondary btn-sm";
    a.innerHTML = `${icon(iconName, 18)}<span>${label}</span>`;
  } else {
    a.className =
      "text-[var(--color-secondary)] transition hover:text-[var(--color-accent)] hover:-translate-y-0.5";
    a.innerHTML = icon(iconName, 24);
  }

  return a;
}
