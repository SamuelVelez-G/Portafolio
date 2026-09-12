/**
 * Filtra los grupos de Skills por categoría sin recargar la página.
 * @param {{ groupsSelector: string, buttonsSelector: string }} config
 */
export function initSkillsFilter({ groupsSelector, buttonsSelector }) {
  const buttons = document.querySelectorAll(buttonsSelector);
  const groups = document.querySelectorAll(groupsSelector);
  if (!buttons.length || !groups.length) return;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;

      buttons.forEach((b) => b.classList.toggle("is-active", b === button));
      buttons.forEach((b) => b.setAttribute("aria-pressed", String(b === button)));

      groups.forEach((group) => {
        const matches = filter === "all" || group.dataset.category === filter;
        group.classList.toggle("hidden", !matches);
      });
    });
  });
}
