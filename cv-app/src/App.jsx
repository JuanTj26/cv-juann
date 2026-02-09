import React, { useState } from 'react'
import { resume } from './resume'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Globe, Linkedin, Github, Moon, Sun, Download, MapPin } from 'lucide-react'

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

function Skill({name, level}){
  return (
    <div className="skill">
      <div className="skill-row">
        <span className="skill-name">{name}</span>
        {/* <span className="skill-level">{level}%</span> */}
      </div>
      <div className="bar">
        <motion.div 
          className="bar-fill" 
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  )
}

function TimelineItem({job}){
  return (
    <motion.article className="timeline-item" variants={item}>
      <div className="line-connector" />
      <div className="dot-wrapper"><div className="dot" /></div>
      <div className="content">
        <div className="job-header">
          <h3>{job.role}</h3>
          <span className="company">{job.company}</span>
        </div>
        <p className="meta">{job.period}</p>
        <ul>{job.bullets.map((b,i)=><li key={i}>{b}</li>)}</ul>
      </div>
    </motion.article>
  )
}

export default function App(){
  const [light, setLight] = useState(true)
  const [collapsed, setCollapsed] = useState(false)
  const liveRef = React.useRef(null)

  const getIcon = (label) => {
    const l = label.toLowerCase();
    if(l.includes('email')) return <Mail size={16} />;
    if(l.includes('tel') || l.includes('phone')) return <Mail size={16} />;
    if(l.includes('web')) return <Globe size={16} />;
    if(l.includes('linkedin')) return <Linkedin size={16} />;
    if(l.includes('github')) return <Github size={16} />;
    return <Globe size={16} />;
  }

  // compute approximate years of experience from resume periods
  const yearsOfExperience = React.useMemo(() => {
    try {
      const years = resume.experience
        .map(e => (e.period || '').match(/(\d{4})/g))
        .flat()
        .map(Number)
      const minYear = Math.min(...years)
      const now = new Date().getFullYear()
      return Math.max(0, now - minYear)
    } catch (err) { return 1 }
  }, [])

  // keyboard shortcuts: T toggle theme, P print, J download json, S toggle sidebar
  React.useEffect(() => {
    const handler = (e) => {
      if (e.key === 't' || e.key === 'T') { setLight(l => !l); if (liveRef.current) liveRef.current.textContent = 'Tema cambiado'; }
      if (e.key === 'p' || e.key === 'P') { window.print(); }
      if (e.key === 'j' || e.key === 'J') { downloadJSON(); }
      if (e.key === 's' || e.key === 'S') { setCollapsed(c => !c); }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  function downloadJSON(){
    const blob = new Blob([JSON.stringify(resume, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${resume.name.replace(/\s+/g, '-')}-resume.json`
    document.body.appendChild(a)
    a.click()
    a.remove()
    URL.revokeObjectURL(url)
    if (liveRef.current) liveRef.current.textContent = 'JSON descargado'
  }

  return (
    <div className={`app ${light ? 'light' : 'dark'} ${collapsed ? 'sidebar-collapsed' : ''}`}>
      <a className="skip-link" href="#content">Saltar al contenido</a>
      <div aria-live="polite" ref={liveRef} className="visually-hidden" />

      <motion.aside 
        className={`sidebar ${collapsed ? 'collapsed' : ''}`}
        role="navigation"
        aria-label="Información personal"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="controls">
          <button onClick={() => setCollapsed(s => !s)} aria-expanded={!collapsed} aria-label="Colapsar barra lateral">{collapsed ? '▸' : '▾'}</button>
          <button onClick={() => setLight(!light)} aria-label="Cambiar tema">
            {light ? <Sun size={18}/> : <Moon size={18}/>}
          </button>
          <button onClick={() => window.print()} aria-label="Imprimir"> <Download size={18}/> PDF</button>
          <button onClick={downloadJSON} aria-label="Descargar JSON">JSON</button>
        </div>

        <div className="profile-section" tabIndex={-1}>
          <div className="photo-ring">
            <div className="photo">
              <img src={resume.photo} alt={`${resume.name} — foto de perfil`} />
            </div>
          </div>
          <h1 className="name">{resume.name}</h1>
          <p className="title">{resume.title}</p>
          <p className="location"><MapPin size={14} style={{display:'inline', marginRight:4}}/>{resume.location}</p>

          <div className="quick-stats" aria-hidden="false">
            <div className="stat"><strong>{yearsOfExperience}+</strong><span>Años</span></div>
            <div className="stat"><strong>{resume.projects.length}</strong><span>Proyectos</span></div>
            <div className="stat"><strong>{resume.skills.length}</strong><span>Tecnologías</span></div>
          </div>
        </div>

        <section className="contact-section" aria-label="Contacto">
          <div className="glass-panel">
            {resume.contact.map((c,i)=> (
              <a key={i} href={c.href} target="_blank" rel="noopener noreferrer" className="contact-item">
                <div className="icon-box">{getIcon(c.label)}</div>
                <div className="contact-info">
                  <span className="label">{c.label}</span>
                  <span className="value">{c.value}</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="skills-section">
          <h4>Expertise</h4>
          <div className="skills-grid">
            {resume.skills.map((s,i)=>(<Skill key={i} name={s.name} level={s.level} />))}
          </div>
        </section>

        <section className="soft-skills-section">
          <h4>Habilidades Blandas</h4>
          <div className="badges-container">
            {resume.softSkills.map((sk, i) => (
              <span key={i} className="badge">{sk}</span>
            ))}
          </div>
        </section>
      </motion.aside>

      <motion.main 
        id="content"
        className="main"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.header className="hero-section" variants={item}>
          <div className="hero-grid">
            <div>
              <h2>Sobre mí</h2>
              <p>{resume.summary}</p>
            </div>
            <div className="hero-actions" aria-hidden="false">
              <button className="primary" onClick={() => window.print()}>Guardar PDF</button>
              <button className="ghost" onClick={downloadJSON}>Descargar JSON</button>
              <a className="cta-link" href="#projects">Ver proyectos ↓</a>
            </div>
          </div>
        </motion.header>

        <section className="experience-section">
          <h2>Experiencia</h2>
          <div className="timeline">
            {resume.experience.map((job,i)=>(<TimelineItem key={i} job={job} />))}
          </div>
        </section>

        <section className="projects-section">
          <h2>Proyectos</h2>
          <div className="cards-grid">
            {resume.projects.map((p,i)=>(
              <motion.a 
                variants={item}
                className="project-card" 
                key={i} 
                href={p.href} 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
              >
                <div className="card-content">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <span className="link-text">Ver proyecto →</span>
                </div>
              </motion.a>
            ))}
          </div>
        </section>
        
        <motion.section className="education-section" variants={item}>
            <h2>Formación</h2>
            <div className="edu-card">
              <p>{resume.education}</p>
            </div>
        </motion.section>
      </motion.main>
    </div>
  )
}
