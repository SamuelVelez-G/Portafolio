import { SkillBadge } from "./SkillBadge.js";

/**
 * @param {object} project
 * @param {(project: object) => void} onDetails
 * @returns {HTMLElement}
 */
export function ProjectCard(project, onDetails) {
  const { title, type, period, description, stack = [], image, imageAlt, link } = project;

  const card = document.createElement("article");
  card.className = "card reveal overflow-hidden";
  card.setAttribute("data-reveal", "");

  card.innerHTML = `
    ${
      image
        ? `<img src="${image}" alt="${imageAlt ?? ""}" class="h-44 w-full object-cover" loading="lazy" />`
        : ""
    }
    <div class="p-6">
      <div class="flex flex-wrap items-center justify-between gap-2">
        ${type ? `<span class="chip !py-1 !text-xs" style="border-color: var(--color-accent-soft); color: var(--color-accent);">${type}</span>` : "<span></span>"}
        ${period ? `<span class="text-xs text-[var(--color-secondary)]">${period}</span>` : ""}
      </div>
      <h3 class="mt-3 text-[var(--color-primary)]">${title}</h3>
      <p class="mt-2 text-sm text-[var(--color-secondary)] line-clamp-3">${description}</p>
    </div>
  `;

  const stackWrap = document.createElement("div");
  stackWrap.className = "flex flex-wrap gap-2 px-6";
  stack.forEach((tech) => stackWrap.appendChild(SkillBadge(tech)));
  card.appendChild(stackWrap);

  const actions = document.createElement("div");
  actions.className = "flex items-center gap-4 px-6 py-5";

  const detailsBtn = document.createElement("button");
  detailsBtn.type = "button";
  detailsBtn.className = "text-sm font-semibold text-[var(--color-accent)] hover:underline";
  detailsBtn.textContent = "Ver detalles →";
  detailsBtn.addEventListener("click", () => onDetails(project));
  actions.appendChild(detailsBtn);

  if (link) {
    const a = document.createElement("a");
    a.href = link;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.className = "text-sm font-medium text-[var(--color-secondary)] hover:text-[var(--color-primary)]";
    a.textContent = "Repositorio";
    actions.appendChild(a);
  }

  card.appendChild(actions);

  return card;
}
