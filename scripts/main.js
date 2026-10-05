import { profile } from "./data/profile.js";
import { skillCategories } from "./data/skills.js";
import { experience } from "./data/experience.js";
import { projects } from "./data/projects.js";
import { educationFormal, certifications } from "./data/education.js";

import { initParticles } from "./modules/particles.js";
import { initNavigation } from "./modules/navigation.js";
import { initScrollReveal } from "./modules/reveal.js";
import { initSkillsFilter } from "./modules/skillsFilter.js";
import { initBackToTop } from "./modules/backToTop.js";
import { initContactForm } from "./modules/contactForm.js";
import { initTheme } from "./modules/theme.js";

import { icon } from "../components/icons.js";
import { SocialLink } from "../components/SocialLink.js";
import { SkillTile } from "../components/SkillTile.js";
import { TimelineItem } from "../components/TimelineItem.js";
import { ProjectCard } from "../components/ProjectCard.js";
import { createProjectModal } from "../components/ProjectModal.js";

function mount(selector, nodes) {
  const container = document.querySelector(selector);
  if (!container) return;
  nodes.forEach((node) => container.appendChild(node));
}

/** Reemplaza cada [data-icon="nombre"] del HTML por el icono lineal correspondiente. */
function hydrateIcons() {
  document.querySelectorAll("[data-icon]").forEach((el) => {
    el.innerHTML = icon(el.dataset.icon, Number(el.dataset.iconSize) || 22);
  });
}

function renderSocialLinks() {
  const links = [
    { href: `mailto:${profile.email}`, label: "Correo", icon: "mail" },
    { href: profile.linkedin, label: "LinkedIn", icon: "linkedin" },
  ];
  if (profile.github) links.push({ href: profile.github, label: "GitHub", icon: "github" });

  mount("#social-links", links.map((link) => SocialLink(link)));
  mount("#social-links-secondary", links.map((link) => SocialLink({ ...link, showLabel: true })));
}

function renderSkills() {
  const filtersContainer = document.getElementById("skills-filters");
  const groupsContainer = document.getElementById("skills-groups");

  skillCategories.forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "filter-chip";
    button.dataset.filter = category.id;
    button.setAttribute("aria-pressed", "false");
    button.textContent = category.label;
    filtersContainer.appendChild(button);

    const group = document.createElement("div");
    group.dataset.category = category.id;
    group.className = "reveal";
    group.setAttribute("data-reveal", "");
    group.innerHTML = `<h3 class="text-[var(--color-primary)]">${category.label}</h3>`;

    const tilesWrap = document.createElement("div");
    tilesWrap.className = "mt-4 flex flex-wrap gap-3";
    category.items.forEach((skill, index) => tilesWrap.appendChild(SkillTile(skill, index)));
    group.appendChild(tilesWrap);

    groupsContainer.appendChild(group);
  });

  initSkillsFilter({ groupsSelector: "#skills-groups > div", buttonsSelector: "#skills-filters button" });
}

function renderExperience() {
  mount(
    "#experience-list",
    experience.map((job) =>
      TimelineItem({
        title: job.role,
        subtitle: job.company,
        period: job.period,
        highlight: job.milestone,
      })
    )
  );
}

function renderProjects() {
  const modal = createProjectModal();
  mount(
    "#projects-grid",
    projects.map((project) => ProjectCard(project, modal.open))
  );
}

function renderEducation() {
  mount(
    "#education-formal",
    educationFormal.map((edu) =>
      TimelineItem({
        title: edu.institution,
        subtitle: edu.location,
        period: edu.period,
        bullets: edu.items,
      })
    )
  );

  mount(
    "#education-certs",
    certifications.map((cert) =>
      TimelineItem({
        title: cert.name,
        subtitle: [cert.institution, cert.detail].filter(Boolean).join(" · "),
        period: cert.period,
      })
    )
  );
}

function renderHeroCopy() {
  document.getElementById("hero-tagline").textContent = profile.tagline;
  document.getElementById("hero-pitch").textContent = profile.pitch;
}

function renderContactSidebar() {
  const emailEl = document.getElementById("contact-email");
  emailEl.href = `mailto:${profile.email}`;
  emailEl.textContent = profile.email;

  const locationEl = document.getElementById("contact-location");
  const locationBlock = document.getElementById("contact-location-block");
  if (profile.location) {
    locationEl.textContent = profile.location;
  } else {
    locationBlock.classList.add("hidden");
  }

  const availabilityBlock = document.getElementById("contact-availability-block");
  if (!profile.availableForWork) availabilityBlock.classList.add("hidden");
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();

  hydrateIcons();
  renderHeroCopy();
  renderSocialLinks();
  renderSkills();
  renderExperience();
  renderProjects();
  renderEducation();
  renderContactSidebar();

  initNavigation();
  initBackToTop();
  initContactForm();
  initTheme();

  // Los grupos de Skills y las tarjetas de Proyectos/Timeline se crean en runtime,
  // así que el reveal se activa después de montarlos en el DOM.
  initScrollReveal();

  const heroCanvas = document.getElementById("hero-particles");
  if (heroCanvas) initParticles(heroCanvas);
});
