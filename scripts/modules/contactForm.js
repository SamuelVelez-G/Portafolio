import { sendContactMessage } from "./api.js";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const RULES = {
  name: (value) => (value.trim().length >= 2 ? null : "Escribe tu nombre completo."),
  email: (value) => {
    if (!value.trim()) return "El correo es obligatorio.";
    return EMAIL_RE.test(value.trim()) ? null : "Ingresa un correo electrónico válido.";
  },
  subject: (value) => (value.trim().length >= 3 ? null : "Cuéntame brevemente el motivo."),
  inquiryType: (value) => (value ? null : "Selecciona un tipo de consulta."),
  message: (value) => (value.trim().length >= 10 ? null : "El mensaje debe tener al menos 10 caracteres."),
};

export function initContactForm(formSelector = "#contact-form") {
  const form = document.querySelector(formSelector);
  if (!form) return;

  const fields = Object.keys(RULES).reduce((acc, key) => {
    acc[key] = form.querySelector(`[data-field="${key}"]`);
    return acc;
  }, {});

  const submitBtn = form.querySelector("[data-submit]");
  const statusEl = form.querySelector("[data-form-status]");

  function errorEl(key) {
    return form.querySelector(`[data-error="${key}"]`);
  }

  function validate(key) {
    const field = fields[key];
    const message = RULES[key](field.value);
    const error = errorEl(key);

    if (message) {
      field.setAttribute("aria-invalid", "true");
      field.classList.remove("is-valid");
      if (error) error.textContent = message;
      return false;
    }

    field.removeAttribute("aria-invalid");
    field.classList.add("is-valid");
    if (error) error.textContent = "";
    return true;
  }

  Object.keys(fields).forEach((key) => {
    const field = fields[key];
    if (!field) return;
    field.addEventListener("blur", () => validate(key));
    field.addEventListener("input", () => {
      if (field.getAttribute("aria-invalid") === "true") validate(key);
    });
  });

  function setStatus(kind, text) {
    if (!statusEl) return;
    statusEl.textContent = text;
    statusEl.dataset.kind = kind;
    statusEl.classList.toggle("hidden", !text);
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const results = Object.keys(fields).map((key) => validate(key));
    const firstInvalid = Object.keys(fields).find((key) => fields[key].getAttribute("aria-invalid") === "true");

    if (!results.every(Boolean)) {
      fields[firstInvalid]?.focus();
      setStatus("error", "Revisa los campos marcados antes de enviar.");
      return;
    }

    const payload = Object.keys(fields).reduce((acc, key) => {
      acc[key] = fields[key].value.trim();
      return acc;
    }, {});

    submitBtn.disabled = true;
    submitBtn.dataset.originalText ??= submitBtn.textContent;
    submitBtn.textContent = "Enviando…";
    setStatus("loading", "Enviando tu mensaje…");

    try {
      await sendContactMessage(payload);
      setStatus("success", "¡Mensaje enviado correctamente! Gracias por escribirme, me pondré en contacto contigo pronto.");
      form.reset();
      Object.values(fields).forEach((field) => {
        field.removeAttribute("aria-invalid");
        field.classList.remove("is-valid");
      });
    } catch (err) {
      setStatus("error", "No pudimos enviar el mensaje. Inténtalo de nuevo o escríbeme directamente por correo.");
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = submitBtn.dataset.originalText;
    }
  });
}
