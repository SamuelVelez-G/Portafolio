import { SkillBadge } from "./SkillBadge.js";
import { icon } from "./icons.js";

/**
 * Modal accesible de detalle de proyecto.
 * Se cierra con el botón, la tecla Escape o clic fuera del contenido.
 */
export function createProjectModal() {
  const overlay = document.createElement("div");
  overlay.className =
    "fixed inset-0 z-[100] hidden items-center justify-center bg-black/60 p-4 backdrop-blur-sm";
  overlay.setAttribute("role", "presentation");

  overlay.innerHTML = `
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      class="card relative max-h-[85vh] w-full max-w-xl overflow-y-auto p-6"
    >
      <button
        type="button"
        data-close
        aria-label="Cerrar detalles del proyecto"
        class="absolute right-4 top-4 rounded-full p-1.5 text-[var(--color-secondary)] hover:bg-[var(--color-accent-soft)] hover:text-[var(--color-primary)]"
      >
        ${icon("x", 18)}
      </button>
      <span data-type class="chip !py-1 !text-xs" style="border-color: var(--color-accent-soft); color: var(--color-accent);"></span>
      <h3 id="project-modal-title" data-title class="mt-3 pr-8 text-xl font-bold text-[var(--color-primary)]"></h3>
      <p data-period class="text-sm text-[var(--color-secondary)]"></p>

      <div class="mt-4">
        <h4 class="text-sm font-semibold text-[var(--color-primary)]">Problema</h4>
        <p data-problem class="mt-1 text-sm text-[var(--color-secondary)]"></p>
      </div>

      <div class="mt-4">
        <h4 class="text-sm font-semibold text-[var(--color-primary)]">Qué hice</h4>
        <ul data-highlights class="mt-1 list-disc space-y-2 pl-5 text-sm text-[var(--color-secondary)]"></ul>
      </div>

      <div class="mt-4">
        <h4 class="text-sm font-semibold text-[var(--color-primary)]">Stack</h4>
        <div data-stack class="mt-2 flex flex-wrap gap-2"></div>
      </div>

      <div data-links class="mt-6 flex flex-wrap gap-2"></div>
    </div>
  `;

  document.body.appendChild(overlay);

  let lastFocused = null;

  function linkButton({ href, label, iconName }) {
    const a = document.createElement("a");
    a.href = href;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.className = "btn-primary btn-sm";
    a.innerHTML = `${icon(iconName, 16)}<span>${label}</span>`;
    return a;
  }

  function fill(project) {
    overlay.querySelector("[data-type]").textContent = project.type ?? "";
    overlay.querySelector("[data-title]").textContent = project.title;
    overlay.querySelector("[data-period]").textContent = [project.company, project.period]
      .filter(Boolean)
      .join(" · ");
    overlay.querySelector("[data-problem]").textContent = project.problem ?? project.description;

    const list = overlay.querySelector("[data-highlights]");
    list.innerHTML = "";
    (project.highlights ?? [project.description]).forEach((h) => {
      const li = document.createElement("li");
      li.textContent = h;
      list.appendChild(li);
    });

    const stackWrap = overlay.querySelector("[data-stack]");
    stackWrap.innerHTML = "";
    (project.stack ?? []).forEach((tech) => stackWrap.appendChild(SkillBadge(tech)));

    const links = overlay.querySelector("[data-links]");
    links.innerHTML = "";
    if (project.demo) links.appendChild(linkButton({ href: project.demo, label: "Demo", iconName: "externalLink" }));
    if (project.link) links.appendChild(linkButton({ href: project.link, label: "GitHub", iconName: "github" }));
  }

  function open(project) {
    lastFocused = document.activeElement;
    fill(project);
    overlay.classList.remove("hidden");
    overlay.classList.add("flex");
    document.body.style.overflow = "hidden";
    overlay.querySelector("[data-close]").focus();
  }

  function close() {
    overlay.classList.add("hidden");
    overlay.classList.remove("flex");
    document.body.style.overflow = "";
    lastFocused?.focus();
  }

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay || e.target.closest("[data-close]")) close();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !overlay.classList.contains("hidden")) close();
  });

  return { open, close };
}
