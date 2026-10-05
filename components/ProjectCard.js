import { SkillBadge } from "./SkillBadge.js";
import { icon } from "./icons.js";

/**
 * Botón de acción de la tarjeta (enlace externo con icono lineal).
 */
function ActionLink({ href, label, iconName, variant }) {
  const a = document.createElement("a");
  a.href = href;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.className = `${variant} btn-sm`;
  a.innerHTML = `${icon(iconName, 16)}<span>${label}</span>`;
  return a;
}

/**
 * @param {object} project
 * @param {(project: object) => void} onDetails
 * @returns {HTMLElement}
 */
export function ProjectCard(project, onDetails) {
  const { title, type, period, description, stack = [], image, imageAlt, link, demo } = project;

  const card = document.createElement("article");
  card.className = "card reveal flex h-full flex-col overflow-hidden";
  card.setAttribute("data-reveal", "");

  card.innerHTML = `
    ${
      image
        ? `<img src="${image}" alt="${imageAlt ?? ""}" class="h-44 w-full object-cover" loading="lazy" />`
        : ""
    }
    <div class="flex flex-1 flex-col p-6 pb-0 text-left">
      <div class="flex flex-wrap items-center justify-between gap-2">
        ${type ? `<span class="chip !py-1 !text-xs" style="border-color: var(--color-accent-soft); color: var(--color-accent);">${type}</span>` : "<span></span>"}
        ${period ? `<span class="font-mono text-xs text-[var(--color-secondary)]">${period}</span>` : ""}
      </div>
      <h3 class="mt-3 line-clamp-2 min-h-[2.6em] text-[var(--color-primary)]">${title}</h3>
      <p class="mt-2 text-sm text-[var(--color-secondary)]">${description}</p>
    </div>
  `;

  const body = card.querySelector("div.flex-1");

  const stackWrap = document.createElement("div");
  stackWrap.className = "mt-4 flex flex-wrap gap-2";
  stack.forEach((tech) => stackWrap.appendChild(SkillBadge(tech)));
  body.appendChild(stackWrap);

  // Los botones quedan siempre alineados al borde inferior, sin importar cuánto texto tenga la tarjeta.
  const actions = document.createElement("div");
  actions.className = "mt-auto flex flex-wrap items-center gap-2 p-6 pt-5";

  const detailsBtn = document.createElement("button");
  detailsBtn.type = "button";
  detailsBtn.className = "btn-secondary btn-sm";
  detailsBtn.textContent = "Ver detalles";
  detailsBtn.addEventListener("click", () => onDetails(project));
  actions.appendChild(detailsBtn);

  if (demo) {
    actions.appendChild(ActionLink({ href: demo, label: "Demo", iconName: "externalLink", variant: "btn-primary" }));
  }
  if (link) {
    actions.appendChild(ActionLink({ href: link, label: "GitHub", iconName: "github", variant: "btn-primary" }));
  }

  card.appendChild(actions);

  return card;
}
