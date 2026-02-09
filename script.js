const resume = {
  name: 'Juan Pérez',
  title: 'Diseñador UI / Frontend Developer',
  photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=abcd',
  contact: [
    {label: '📍', value: 'Ciudad, País'},
    {label: '✉️', value: 'juan@example.com', href: 'mailto:juan@example.com'},
    {label: '🔗', value: 'tu-portfolio.example', href: 'https://tu-portfolio.example'},
    {label: '💼', value: 'linkedin.com/in/tuusuario', href: 'https://linkedin.com/in/tuusuario'}
  ],
  skills: ['Figma', 'HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Accesibilidad (a11y)'],
  languages: ['Español — Nativo', 'Inglés — Avanzado (C1)'],
  summary: 'Diseñador y desarrollador frontend con 6+ años creando interfaces limpias y experiencias accesibles. Me enfoco en productos escalables, diseño centrado en el usuario y rendimiento web.',
  experience: [
    {
      role: 'Senior Frontend Developer',
      company: 'Empresa XYZ',
      period: '2021 — Presente • Remoto',
      bullets: [
        'Diseño e implementación de una librería de componentes accesible y documentada.',
        'Mejora del rendimiento de la app reduciendo el TTI en 40%.'
      ]
    },
    {
      role: 'UI/UX Designer',
      company: 'Agencia Creativa',
      period: '2018 — 2021',
      bullets: [
        'Creación de prototipos interactivos y pruebas con usuarios.',
        'Colaboración con equipos de producto para alinear diseño y desarrollo.'
      ]
    }
  ],
  projects: [
    {title: 'Producto A', desc: 'Rediseño del dashboard con mejor conversión en onboarding.'},
    {title: 'Componente B', desc: 'Sistema de tarjetas reutilizables, theming y tests visuales.'}
  ],
  education: 'Lic. en Diseño Digital — Universidad Ejemplo (2014 — 2018)'
}

function el(id){return document.getElementById(id)}

function render(){
  el('name').textContent = resume.name
  el('title').textContent = resume.title
  el('photo').src = resume.photo
  el('summary').textContent = resume.summary

  const contactList = el('contactList')
  contactList.innerHTML = ''
  resume.contact.forEach(c => {
    const li = document.createElement('li')
    if(c.href){
      const a = document.createElement('a')
      a.href = c.href; a.target = '_blank'; a.rel = 'noopener'; a.textContent = `${c.value}`
      li.textContent = c.label + ' '
      li.appendChild(a)
    } else {
      li.textContent = `${c.label} ${c.value}`
    }
    contactList.appendChild(li)
  })

  const skillsList = el('skillsList')
  skillsList.innerHTML = ''
  resume.skills.forEach(s => { const li = document.createElement('li'); li.textContent = s; skillsList.appendChild(li) })

  const langs = el('languagesList')
  langs.innerHTML = ''
  resume.languages.forEach(l => { const li = document.createElement('li'); li.textContent = l; langs.appendChild(li) })

  const exp = el('experienceList')
  exp.innerHTML = ''
  resume.experience.forEach(job => {
    const node = document.createElement('article')
    node.className = 'job'
    node.innerHTML = `<h3>${job.role} — ${job.company}</h3><p class="meta">${job.period}</p>`
    const ul = document.createElement('ul')
    job.bullets.forEach(b => { const li = document.createElement('li'); li.textContent = b; ul.appendChild(li) })
    node.appendChild(ul)
    exp.appendChild(node)
  })

  const projects = el('projectsList')
  projects.innerHTML = ''
  resume.projects.forEach(p => { const li = document.createElement('li'); li.innerHTML = `<strong>${p.title}:</strong> ${p.desc}`; projects.appendChild(li) })

  el('education').textContent = resume.education
}

// Theme toggle and print
function setupControls(){
  const themeToggle = el('themeToggle')
  const printBtn = el('printBtn')
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  if(prefersDark) document.documentElement.classList.remove('light-mode')
  else document.documentElement.classList.add('light-mode')

  themeToggle.addEventListener('click', ()=>{
    document.documentElement.classList.toggle('light-mode')
  })
  printBtn.addEventListener('click', ()=> window.print())
}

document.addEventListener('DOMContentLoaded', ()=>{ render(); setupControls() })

// Export resume object for quick customization in the browser console
export { resume }
