// Categorías tal como aparecen en el CV — no se inventan niveles ni porcentajes.
// `tech`: logo en assets/icons/tech/<tech>.svg  ·  `line`: icono lineal (components/icons.js)
export const skillCategories = [
  {
    id: "lenguajes",
    label: "Lenguajes",
    items: [
      { name: "Java", tech: "java" },
      { name: "Python", tech: "python" },
      { name: "JavaScript", tech: "javascript" },
      { name: "PHP", tech: "php" },
      { name: "SQL", line: "database" },
      { name: "HTML", tech: "html" },
      { name: "CSS", tech: "css" },
    ],
  },
  {
    id: "backend",
    label: "Backend y arquitectura",
    items: [
      { name: "Spring Boot", tech: "springboot" },
      { name: "APIs REST", line: "arrowLeftRight" },
      { name: "POO", line: "box" },
      { name: "MVC", line: "layoutDashboard" },
      { name: "N-capas", line: "layers" },
      { name: "SOLID", line: "shapes" },
      { name: "Clean Code", line: "codeXml" },
    ],
  },
  {
    id: "bases-de-datos",
    label: "Bases de datos",
    items: [
      { name: "MySQL", tech: "mysql" },
      { name: "PostgreSQL", tech: "postgresql" },
      { name: "SQL Server", tech: "sqlserver" },
      { name: "Modelado relacional y dimensional", line: "network" },
    ],
  },
  {
    id: "herramientas",
    label: "Herramientas y metodologías",
    items: [
      { name: "Git", tech: "git" },
      { name: "GitHub", line: "github" },
      { name: "Scrum", line: "refreshCw" },
      { name: "Pruebas de software", line: "flaskConical" },
      { name: "Documentación técnica", line: "fileText" },
    ],
  },
  {
    id: "datos",
    label: "Datos y automatización",
    items: [
      { name: "Power BI", tech: "powerbi" },
      { name: "Pandas", tech: "pandas" },
      { name: "n8n", tech: "n8n" },
      { name: "Make", tech: "make" },
    ],
  },
];
