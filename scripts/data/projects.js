export const projects = [
  {
    title: "Agente conversacional para cotización logística",
    company: "IMBOCAR S.A.S.",
    period: "Oct. – Dic. 2025",
    type: "Automatización",
    problem:
      "El área comercial tardaba entre 20 y 34 minutos en calcular manualmente cada cotización de transporte.",
    description:
      "Agente automatizado en n8n con lógica de cálculo en Python (peso real vs. volumétrico, tarifas y recargos), que redujo el tiempo de cotización de 20–34 minutos a 1–4 minutos (más del 80%). Integra APIs externas y almacenamiento estructurado para el seguimiento comercial de solicitudes.",
    highlights: [
      "Diseñé e implementé un agente automatizado en n8n con lógica de cálculo en Python (peso real vs. volumétrico, tarifas y recargos), reduciendo el tiempo de cotización de 20–34 minutos a 1–4 minutos (más del 80%).",
      "Integré APIs externas y almacenamiento estructurado en base de datos para el registro y seguimiento comercial de solicitudes.",
      "Ejecuté más de 20 pruebas controladas validando precisión de cálculos y tiempos de respuesta antes de la puesta en producción.",
    ],
    stack: ["n8n", "Python", "APIs REST", "SQL"],
    image: "./assets/images/proyecto-chatbot-logistico.png",
    imageAlt: "Flujo del agente automatizado de cotización logística en n8n",
    link: null,
  },
  {
    title: "Análisis de accidentalidad vial en Medellín 2014–2021",
    company: "Talento Tech / MinTIC",
    period: "Oct. – Nov. 2025",
    type: "Análisis de datos",
    problem:
      "La Secretaría de Movilidad necesitaba identificar zonas y franjas horarias críticas a partir de datos abiertos sin procesar.",
    description:
      "Limpieza y normalización de un dataset de más de 200.000 registros de datos abiertos con Python y Pandas. Visualizaciones con Matplotlib/Seaborn y mapas de calor/clústeres geoespaciales con Folium para identificar zonas y franjas horarias críticas para la Secretaría de Movilidad.",
    highlights: [
      "Limpié y normalicé un dataset de más de 200.000 registros de datos abiertos con Python y Pandas, tratando categóricas, coordenadas, duplicados y nulos.",
      "Generé visualizaciones con Matplotlib y Seaborn para identificar patrones horarios, diarios y mensuales de accidentalidad.",
      "Construí mapas de calor y clústeres geoespaciales con Folium, identificando zonas y franjas horarias críticas para la Secretaría de Movilidad.",
    ],
    stack: ["Python", "Pandas", "Matplotlib", "Seaborn", "Folium"],
    image: "./assets/images/proyecto-accidentalidad-vial.webp",
    imageAlt: "Mapa de calor de accidentalidad vial en Medellín generado con Folium",
    link: "https://github.com/SamuelVelez-G/Analisis-de-siniestros-viales-Medellin",
  },
];
