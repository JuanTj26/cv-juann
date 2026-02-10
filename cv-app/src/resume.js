export const resume = {
  name: 'Juan Torales',
  title: 'Desarrollador Multiplataforma',
  photo: '/img/Juan.jpg',
  location: 'México',
  contact: [
    { label: 'Email', value: 'juanitotj001@gmail.com', href: 'mailto:juanitotj001@gmail.com' },
    { label: 'Teléfono', value: '5624190385', href: 'tel:5624190385' },
    { label: 'GitHub', value: 'github.com/juant', href: 'https://github.com' }
    // { label: 'LinkedIn', value: 'linkedin.com/in/juant', href: 'https://linkedin.com' }
  ],
  // Grouped skills for clearer UI
  skillsAdvanced: [
    { name: 'HTML5 - Estructuración', level: 70 },
    { name: 'CSS3 - Estilos', level: 70 },
    { name: 'Java - Backend', level: 70 },
    { name: 'Spring Boot - Framework', level: 65 },
    { name: 'Angular - Frontend', level: 65 },
    { name: 'TypeScript - Tipado', level: 65 }
  ],
  skillsIntermediate: [
    { name: 'PHP - Backend', level: 50 },
    { name: 'APIs - Integración', level: 50 },
    { name: 'JavaScript - Dinamismo', level: 50 }
  ],
  skillsBasic: [
    { name: 'MongoDB - NoSQL', level: 30 },
    { name: 'MySQL - Consultas', level: 30 },
    { name: 'Arduino - IoT', level: 30 },
    { name: 'ESP-32 - Embebidos', level: 30 }
  ],
  languages: [
    { name: 'Español', level: 'Nativo' }
  ],
  softSkills: ['Comunicación efectiva', 'Análisis de requerimientos', 'Resolución de problemas', 'Trabajo en equipo', 'Adaptabilidad'],
  // Short intro + longer about
  headline: 'Creo soluciones digitales que fusionan creatividad y tecnología.',
  summary: 'Soy un aspirante a programador junior en desarrollo web, comprometido con aprender y crear aplicaciones intuitivas y funcionales. Tengo conocimientos en desarrollo back-end y front-end, y busco contribuir en proyectos variados para ser versátil y eficaz en mi desarrollo laboral.',
  experience: [
    {
      role: 'Full Stack Developer',
      company: 'Anáhuac Online / RedSoft Group',
      period: '2025',
      bullets: [
        'Desarrollo de plataforma analítica para visualización y gestión de información financiera.',
        'Frontend con Angular + TypeScript: creación de dashboards interactivos, gráficos de evolución histórica y resúmenes visuales.',
        'Backend con Java + Spring Boot: automatización de obtención de datos financieros, flujos mensuales y módulos de conciliación (exportaciones Excel/PDF).'
      ]
    },
    {
      role: 'Full Stack Developer',
      company: 'Anáhuac Online / RedSoft Group',
      period: '2025',
      bullets: [
        'Implementación y modificación de módulos completos de conciliación financiera.',
        'Desarrollo de componentes ejecutables mensuales (Java + Spring Boot) para extracción y procesamiento automático de datos.',
        'Aplicación de reglas de negocio para validaciones y generación de reportes estandarizados.',
        'Frontend (Angular + TypeScript) para interfaces de carga masiva, selección por periodo y descarga de resultados.'
      ]
    },
    {
      role: 'Full Stack Developer',
      company: 'Grupo Educación CDMX / RedSoft Group',
      period: '2025',
      bullets: [
        'Desarrollo de portal de becas y apoyos educativos.',
        'Construcción de interfaces para solicitudes, seguimiento de estatus y visualización de apoyos (Angular + TypeScript).',
        'Gestión integral de procesos backend, validaciones de requisitos normativos y flujos seguros de aprobación (Java + Spring Boot).'
      ]
    }
  ],
  projects: [
    {
      title: 'Sistema Domótico de Riego Automatizado (IoT)',
      desc: 'Aporté en el desarrollo de una aplicación web para IoT enfocada en la automatización de riego y monitoreo ambiental.',
      tags: ['HTML', 'CSS', 'PHP', 'JS', 'XAMPP', 'Arduino', 'ESP-32', 'MySQL'],
      href: '#'
    },
    {
      title: 'App Zoológico Parque del Pueblo',
      desc: 'Aporté en la creación de una aplicación web para la gestión incremental de un zoológico, optimizando procesos operativos y mejorando la usabilidad.',
      tags: ['HTML', 'CSS', 'PHP', 'JS', 'XAMPP', 'MySQL'],
      href: '#'
    },
    {
      title: 'Gestión de Huerto Móvil',
      desc: 'Desarrollo de una aplicación web para la organización de un huerto móvil personal.',
      tags: ['HTML', 'CSS', 'PHP', 'JS', 'XAMPP', 'MySQL', 'OpenIA', 'APIs'],
      href: '#'
    },
    {
      title: 'Gestión de Zonas Arqueológicas',
      desc: 'Colaboré en el desarrollo de una aplicación web innovadora para la gestión de zonas arqueológicas, implementando 3 APIs para enriquecer la funcionalidad.',
      tags: ['HTML', 'CSS', 'PHP', 'JS', 'XAMPP', 'APIs', 'MySQL'],
      href: '#'
    }
  ],
  education: 'Técnico Superior Universitario en Desarrollo de Software Multiplataforma (2023-2025). Ingeniería en Desarrollo y Gestión de Software — Universidad Tecnológica de Nezahualcóyotl (En curso, 2026-Actualidad).'
}
