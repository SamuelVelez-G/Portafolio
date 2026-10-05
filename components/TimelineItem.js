import { icon } from "./icons.js";

/**
 * @param {{ title: string, subtitle?: string, period?: string, bullets?: string[], highlight?: string }} props
 * @returns {HTMLElement}
 */
export function TimelineItem({ title, subtitle, period, bullets = [], highlight }) {
  const item = document.createElement("article");
  item.className = "timeline-item reveal pb-8";
  item.setAttribute("data-reveal", "");

  item.innerHTML = `
    <div class="flex flex-wrap items-baseline justify-between gap-x-4">
      <h3 class="text-[var(--color-primary)]">${title}</h3>
      ${period ? `<span class="font-mono text-xs text-[var(--color-secondary)]">${period}</span>` : ""}
    </div>
    ${subtitle ? `<p class="text-sm font-medium text-[var(--color-accent)]">${subtitle}</p>` : ""}
  `;

  if (highlight) {
    const hito = document.createElement("p");
    hito.className = "timeline-highlight";
    hito.innerHTML = `${icon("flag", 16)}<span>${highlight}</span>`;
    item.appendChild(hito);
  }

  if (bullets.length) {
    const ul = document.createElement("ul");
    ul.className = "mt-3 list-disc space-y-2 pl-5 text-sm text-[var(--color-secondary)]";
    ul.innerHTML = bullets.map((b) => `<li>${b}</li>`).join("");
    item.appendChild(ul);
  }

  return item;
}
