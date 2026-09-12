import { profile } from "../data/profile.js";

/**
 * Envío del formulario de contacto.
 *
 * Este portafolio todavía no tiene backend propio, así que por ahora
 * abrimos el cliente de correo del visitante con los datos ya rellenados
 * (funciona de verdad, sin servidor). El día que tengas un endpoint real,
 * reemplaza el cuerpo de esta función por:
 *
 *   const res = await fetch("/api/contact", {
 *     method: "POST",
 *     headers: { "Content-Type": "application/json" },
 *     body: JSON.stringify(payload),
 *   });
 *   if (!res.ok) throw new Error("request-failed");
 *
 * y deja el try/catch de contactForm.js tal como está: ya maneja los
 * estados de carga, éxito y error.
 *
 * @param {{ name: string, email: string, subject: string, inquiryType: string, message: string }} payload
 */
export async function sendContactMessage(payload) {
  const body = [
    `Nombre: ${payload.name}`,
    `Correo: ${payload.email}`,
    `Tipo de consulta: ${payload.inquiryType}`,
    "",
    payload.message,
  ].join("\n");

  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
    payload.subject
  )}&body=${encodeURIComponent(body)}`;

  // Simula una latencia de red para que los estados de carga se vean bien.
  await new Promise((resolve) => setTimeout(resolve, 600));

  window.location.href = mailto;
}
