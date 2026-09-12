/**
 * @param {string} name
 * @returns {HTMLSpanElement}
 */
export function SkillBadge(name) {
  const span = document.createElement("span");
  span.className = "chip";
  span.textContent = name;
  return span;
}
