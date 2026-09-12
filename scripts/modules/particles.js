const PARTICLE_COLOR = "47, 111, 94"; // var(--color-accent)
const LINK_DISTANCE = 120;
const MOUSE_RADIUS = 140;
const MAX_PARTICLES = 55; // sutil: es un fondo, no el protagonista visual del Hero

/**
 * Red de partículas interactiva para el Hero.
 * Vanilla Canvas 2D, sin dependencias externas.
 * @param {HTMLCanvasElement} canvas
 */
export function initParticles(canvas) {
  const ctx = canvas.getContext("2d");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let width, height, particles;
  const mouse = { x: null, y: null };

  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    // Un resize disparado a mitad de un reflow puede reportar 0x0 momentáneamente;
    // ignorarlo evita colapsar el canvas de forma permanente.
    if (rect.width === 0 || rect.height === 0) return;

    width = canvas.width = rect.width;
    height = canvas.height = rect.height;
    const count = Math.min(MAX_PARTICLES, Math.floor((width * height) / 18000));
    particles = Array.from({ length: count }, createParticle);
  }

  function createParticle() {
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 1,
    };
  }

  function draw() {
    if (!particles) return; // aún no hay un tamaño válido medido

    ctx.clearRect(0, 0, width, height);

    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      if (mouse.x !== null) {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.hypot(dx, dy);
        if (dist < MOUSE_RADIUS) {
          const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS;
          p.x += (dx / dist) * force * 1.2;
          p.y += (dy / dist) * force * 1.2;
        }
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${PARTICLE_COLOR}, 0.35)`;
      ctx.fill();
    }

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i];
        const b = particles[j];
        const dist = Math.hypot(a.x - b.x, a.y - b.y);
        if (dist < LINK_DISTANCE) {
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(${PARTICLE_COLOR}, ${0.1 * (1 - dist / LINK_DISTANCE)})`;
          ctx.stroke();
        }
      }
    }
  }

  function loop() {
    draw();
    if (!prefersReducedMotion) requestAnimationFrame(loop);
  }

  let resizeRaf = null;
  window.addEventListener("resize", () => {
    // Espera a que el navegador termine el reflow antes de medir el contenedor.
    cancelAnimationFrame(resizeRaf);
    resizeRaf = requestAnimationFrame(() => {
      resize();
      if (prefersReducedMotion) draw(); // el bucle de animación ya no corre: redibuja el frame estático
    });
  });
  canvas.parentElement.addEventListener("mousemove", (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });
  canvas.parentElement.addEventListener("mouseleave", () => {
    mouse.x = null;
    mouse.y = null;
  });

  resize();
  loop();
}
