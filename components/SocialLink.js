import { icons } from "./icons.js";

/**
 * @param {{ href: string, label: string, icon: keyof typeof icons }} props
 * @returns {HTMLAnchorElement}
 */
export function SocialLink({ href, label, icon }) {
  const a = document.createElement("a");
  a.href = href;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.setAttribute("aria-label", label);
  a.className =
    "text-[var(--color-secondary)] transition hover:text-[var(--color-accent)] hover:-translate-y-0.5";
  a.innerHTML = icons[icon] ?? "";
  return a;
}
