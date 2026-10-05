import { icon } from "./icons.js";

/**
 * Skill con icono: logo de la tecnología (assets/icons/tech) o, para conceptos
 * sin logo (POO, MVC, SOLID…), un icono lineal.
 * @param {{ name: string, tech?: string, line?: string }} skill
 * @param {number} index posición, usada para escalonar la animación de entrada
 * @returns {HTMLElement}
 */
export function SkillTile({ name, tech, line }, index = 0) {
  const tile = document.createElement("span");
  tile.className = "skill-tile";
  tile.style.setProperty("--i", String(index));

  const iconWrap = document.createElement("span");
  iconWrap.className = "skill-tile__icon";
  iconWrap.setAttribute("aria-hidden", "true");

  if (tech) {
    const img = document.createElement("img");
    img.src = `./assets/icons/tech/${tech}.svg`;
    img.alt = "";
    img.loading = "lazy";
    iconWrap.appendChild(img);
  } else {
    iconWrap.classList.add("skill-tile__icon--line");
    iconWrap.innerHTML = icon(line, 18);
  }

  const label = document.createElement("span");
  label.textContent = name;

  tile.append(iconWrap, label);
  return tile;
}
