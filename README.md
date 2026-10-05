<div align="center">

# Samuel Vélez Guzmán

**Desarrollador Full Stack y Backend.**

Portafolio personal enfocado en backend, APIs, automatización y soluciones basadas en
datos — con timeline de experiencia, skills filtrables, proyectos con modal de detalle,
formulario de contacto validado y modo claro/oscuro.

[![Demo](https://img.shields.io/badge/Demo-en_vivo-8a5a34?style=for-the-badge)](https://samuelvelez-g.github.io/Portafolio/)
[![Figma](https://img.shields.io/badge/Figma-dise%C3%B1o-f24e1e?style=for-the-badge&logo=figma&logoColor=white)](https://www.figma.com/design/6kpbJMpxgvgkDoXgXKB8ka/Portafolio)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-perfil-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/samuel-velez-guzman-full-stack-developer-/)
[![GitHub](https://img.shields.io/badge/GitHub-SamuelVelez--G-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/SamuelVelez-G)

</div>

---

## Sobre el proyecto

Este portafolio nace de una idea simple: mostrar mi trabajo real como desarrollador —Java,
Spring Boot, Python, automatización con n8n y análisis de datos— en un sitio que se sienta
tan cuidado como el código que escribo, sin caer en el diseño genérico de "developer con
foto y lista de tecnologías".

Cada sección está pensada para responder una pregunta distinta a quien la visita: quién soy
(Inicio), qué he hecho (Experiencia), con qué herramientas trabajo (Skills, filtrables por
categoría), qué he construido (Proyectos, con capturas reales y modal de detalle) y cómo
contactarme (formulario validado, sin depender solo de un enlace `mailto`).

Construido como una web estándar —HTML, CSS y JavaScript modular, sin framework— para que
cargue rápido y sea fácil de mantener, pero con las prácticas de un sitio de producción:
componentes reutilizables, datos separados de la presentación, accesibilidad y modo oscuro.

## Vista previa

<!-- Agrega aquí una captura del Hero, por ejemplo: -->
<!-- ![Vista previa del portafolio](assets/images/preview.png) -->

## Características

| | |
|---|---|
| **Hero interactivo** | Foto de perfil, red de partículas animada en canvas y accesos directos a proyectos y contacto |
| **Experiencia y Educación** | Línea de tiempo con indicador visual y efecto hover; la experiencia resume rol, empresa, fecha y un hito |
| **Skills con iconos** | Logos de cada tecnología, agrupadas por categoría, con filtro instantáneo y animación de entrada |
| **Proyectos con detalle** | Tarjetas con captura real, botones a GitHub/Demo y modal accesible (cierre con Escape, clic afuera o botón) |
| **Formulario de contacto** | Tres campos, validación en tiempo real, mensajes en español y estados de carga/éxito/error |
| **Modo oscuro por defecto** | Basado en variables CSS; el visitante puede cambiar a modo claro y su elección se recuerda |
| **Diseño responsivo** | Menú móvil propio, sin scroll horizontal, pensado para escritorio, tablet y móvil |

## Stack

<p>
<img src="https://img.shields.io/badge/HTML5-e34f26?style=flat-square&logo=html5&logoColor=white" alt="HTML5">
<img src="https://img.shields.io/badge/CSS3-1572b6?style=flat-square&logo=css3&logoColor=white" alt="CSS3">
<img src="https://img.shields.io/badge/JavaScript-f7df1e?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript">
<img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS">
<img src="https://img.shields.io/badge/Git-f05032?style=flat-square&logo=git&logoColor=white" alt="Git">
<img src="https://img.shields.io/badge/GitHub_Pages-222?style=flat-square&logo=github&logoColor=white" alt="GitHub Pages">
</p>

**Herramientas de trabajo:** Figma (diseño), Visual Studio Code, Tailwind CLI.

## Estructura del proyecto

```
PORTAFOLIO/
├── index.html            # Estructura de la interfaz
├── README.md
├── package.json
├── .gitignore
├── assets/
│   ├── icons/tech/       # Logos de tecnologías (SVG)
│   └── images/           # Foto de perfil, capturas de proyectos, favicon/logo
├── components/           # Funciones JS que renderizan UI reutilizable
│   ├── icons.js          # Iconos lineales inline (Lucide)
│   ├── ProjectCard.js
│   ├── ProjectModal.js
│   ├── SkillBadge.js
│   ├── SkillTile.js
│   ├── SocialLink.js
│   └── TimelineItem.js
├── scripts/
│   ├── main.js           # Punto de entrada
│   ├── modules/          # Navegación, tema, partículas, formulario, filtros...
│   └── data/             # Contenido: perfil, experiencia, skills, proyectos, educación
└── styles/
    ├── tailwind.css      # Tokens de diseño y estilos fuente
    └── main.css          # CSS compilado, servido directamente
```

**Fase de diseño:** wireframe de baja fidelidad en Figma, contenido tomado directamente de mi CV.

## Desarrollo local

```bash
npm install
npm run dev
```

Compila Tailwind en modo watch y levanta un servidor local en `http://localhost:5500`.

## Enlaces

| Recurso | Enlace |
|---|---|
| Demo en vivo | https://samuelvelez-g.github.io/Portafolio/ |
| Diseño en Figma | https://www.figma.com/design/6kpbJMpxgvgkDoXgXKB8ka/Portafolio |
| LinkedIn | https://www.linkedin.com/in/samuel-velez-guzman-full-stack-developer-/ |
| GitHub | https://github.com/SamuelVelez-G |

## Autor

**Samuel Vélez Guzmán** · [@SamuelVelez-G](https://github.com/SamuelVelez-G) · samu2005vel@gmail.com
