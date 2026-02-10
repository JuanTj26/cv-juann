import React, { useState, useRef, useCallback, useEffect } from 'react'
import { resume } from './resume'
import { motion, useScroll, useSpring, useInView } from 'framer-motion'
import { Mail, Globe, Linkedin, Github, Moon, Sun, Download, MapPin, Phone, ChevronDown, FileJson, Sparkles, GraduationCap, Briefcase, FolderKanban, Heart, Code2, ExternalLink, User, Languages } from 'lucide-react'
import { Toaster, toast } from 'sonner'

/* ——— Animated Section ——— */
function AnimatedSection({ children, className, id, delay = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })
  return (
    <motion.section
      ref={ref} id={id} className={className}
      initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
      animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >{children}</motion.section>
  )
}

/* ——— Skill Bar ——— */
function SkillBar({ name, level, levelClass }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <div className={`skill ${levelClass}`} ref={ref}>
      <div className="skill-row">
        <span className="skill-name">{name}</span>
        <span className="skill-level">{level}%</span>
      </div>
      <div className="bar">
        <motion.div
          className="bar-fill"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </div>
    </div>
  )
}

/* ——— Typewriter Text ——— */
function TypewriterText({ text }) {
  const [displayedText, setDisplayedText] = useState('')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    let i = 0
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i))
      i++
      if (i > text.length) clearInterval(interval)
    }, 20) // Speed
    return () => clearInterval(interval)
  }, [text, isInView])

  return <span ref={ref}>{displayedText}{isInView && displayedText.length < text.length && <span className="cursor">|</span>}</span>
}


/* ——— Timeline Item ——— */
function TimelineItem({ job, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-40px" })
  return (
    <motion.article
      ref={ref} className="timeline-item"
      initial={{ opacity: 0, x: -20, filter: 'blur(6px)' }}
      animate={isInView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.7, delay: index * 0.12 }}
    >
      <div className="dot-wrapper"><div className="dot" /></div>
      <div className="content">
        <div className="job-header">
          <h3>{job.role}</h3>
          <span className="company">{job.company}</span>
        </div>
        <span className="meta">{job.period}</span>
        <ul>
          {job.bullets.map((b, i) => (
            <motion.li key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
            >{b}</motion.li>
          ))}
        </ul>
      </div>
    </motion.article>
  )
}

/* ——— Project Card ——— */
function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-30px" })
  return (
    <motion.a
      ref={ref} className="project-card"
      href={project.href} target="_blank" rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
      animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
    >
      <div className="card-accent" />
      <div className="card-content">
        <div className="card-icon"><FolderKanban size={20} /></div>
        <h3>{project.title}</h3>
        <p>{project.desc}</p>
        {project.tags && (
          <div className="project-tags">
            {project.tags.map((t, idx) => <span key={idx} className="project-tag">{t}</span>)}
          </div>
        )}
      </div>
    </motion.a>
  )
}

/* ——— Section Header ——— */
function SectionHeader({ icon: Icon, title }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <motion.div ref={ref} className="section-header"
      initial={{ opacity: 0, x: -16, filter: 'blur(4px)' }}
      animate={isInView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.5 }}
    >
      <div className="section-icon"><Icon size={18} /></div>
      <h2>{title}</h2>
    </motion.div>
  )
}

/* ——— Cursor Spotlight Component ——— */
function CursorSpotlight() {
  const mouseX = useSpring(0, { stiffness: 500, damping: 28 })
  const mouseY = useSpring(0, { stiffness: 500, damping: 28 })

  React.useEffect(() => {
    const handleMouseMove = ({ clientX, clientY }) => {
      mouseX.set(clientX)
      mouseY.set(clientY)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <motion.div
      className="cursor-spotlight"
      style={{ left: mouseX, top: mouseY, translateX: '-50%', translateY: '-50%' }}
    />
  )
}

/* ========================================
   MAIN APP
   ======================================== */
export default function App() {
  const [light, setLight] = useState(false)
  const cvRef = useRef(null)

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  const getIcon = (label) => {
    const l = label.toLowerCase()
    if (l.includes('email')) return <Mail size={15} />
    if (l.includes('tel') || l.includes('phone')) return <Phone size={15} />
    if (l.includes('linkedin')) return <Linkedin size={15} />
    if (l.includes('github')) return <Github size={15} />
    return <Globe size={15} />
  }

  // FORCE Static 1 Year
  const yearsOfExperience = 1

  const skillCount = (resume.skillsAdvanced?.length || 0) + (resume.skillsIntermediate?.length || 0) + (resume.skillsBasic?.length || 0)

  const downloadPDF = useCallback(async () => {

    toast.loading('Generando PDF...', { id: 'pdf' })
    try {
      const html2pdf = (await import('html2pdf.js')).default
      const element = cvRef.current
      if (!element) return
      const app = element.closest('.app')
      const wasDark = !app.classList.contains('light')
      app.classList.add('light')
      await new Promise(r => setTimeout(r, 600)) // Wait for lighter theme render
      const options = {
        margin: [6, 0, 6, 0],
        filename: `${resume.name.replace(/\s+/g, '-')}-CV.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, logging: false, windowWidth: 1200 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
      }
      await html2pdf().set(options).from(element).save()
      if (wasDark) app.classList.remove('light')
      toast.success('¡PDF descargado!', { id: 'pdf' })
    } catch (err) {
      console.error(err)
      toast.error('Error al generar PDF', { id: 'pdf' })
    }
  }, [])

  const downloadJSON = useCallback(() => {
    const blob = new Blob([JSON.stringify(resume, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url; a.download = `${resume.name.replace(/\s+/g, '-')}-resume.json`
    document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url)
    toast.success('JSON descargado')
  }, [])

  const toggleTheme = useCallback(() => {
    setLight(l => !l)
    toast(light ? '🌙 Modo oscuro' : '☀️ Modo claro', { duration: 1500 })
  }, [light])

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text)
    toast.success(`${label} copiado al portapapeles`)
  }

  React.useEffect(() => {
    const handler = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return
      if (e.key === 't' || e.key === 'T') toggleTheme()
      if (e.key === 'p' || e.key === 'P') downloadPDF()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [toggleTheme, downloadPDF])

  const initials = resume.name.split(' ').map(n => n[0]).join('').slice(0, 2)

  return (
    <div className={`app ${light ? 'light' : 'dark'}`}>
      <Toaster position="bottom-right" toastOptions={{
        style: {
          background: light ? '#fff' : '#1e293b',
          color: light ? '#111' : '#f1f5f9',
          border: `1px solid ${light ? '#e5e7eb' : 'rgba(255,255,255,0.08)'}`,
          borderRadius: '12px', fontSize: '0.88rem'
        }
      }} />

      <CursorSpotlight />

      <motion.div className="scroll-progress" style={{ scaleX }} />
      <a className="skip-link" href="#content">Saltar al contenido</a>

      {/* ——— NAVBAR ——— */}
      <motion.nav
        className="navbar"
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="navbar-inner">
          <a href="#" className="nav-brand">
            <div className="nav-logo">{initials}</div>
            <div className="nav-brand-text">{resume.name.split(' ')[0]} <span>{resume.name.split(' ').slice(1).join(' ')}</span></div>
          </a>
          <ul className="nav-links">
            <li><a href="#about">Sobre mí</a></li>
            <li><a href="#experience">Experiencia</a></li>
            <li><a href="#projects">Proyectos</a></li>
            <li><a href="#education">Educación</a></li>
          </ul>
          <div className="nav-actions controls">
            <button className="control-btn accent" onClick={downloadPDF} title="PDF (P)">
              <Download size={14} /><span>PDF</span>
            </button>
            <button className="control-btn" onClick={downloadJSON} title="JSON">
              <FileJson size={14} />
            </button>
            <button className="control-btn" onClick={toggleTheme} title="Tema (T)">
              {light ? <Moon size={14} /> : <Sun size={14} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ——— CV BODY ——— */}
      <div ref={cvRef} className="cv-wrapper">
        {/* SIDEBAR */}
        <motion.aside className="sidebar"
          initial={{ opacity: 0, x: -40, filter: 'blur(10px)' }}
          animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div className="profile-section"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="photo-ring">
              <div className="photo">
                <img src={resume.photo} alt={resume.name} />
              </div>
              <div className="status-badge" title="Disponible para trabajar"></div>
            </div>
            <h1 className="name">{resume.name}</h1>
            <p className="title">{resume.title}</p>
            <p className="location"><MapPin size={13} />{resume.location}</p>
            <div className="quick-stats">
              <div className="stat"><strong>{yearsOfExperience}+</strong><span>Años Exp.</span></div>
              <div className="stat"><strong>{resume.projects.length}</strong><span>Proyectos</span></div>
              <div className="stat"><strong>{skillCount}</strong><span>Skills</span></div>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.section className="sidebar-block contact-section"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <h4><Mail size={13} /> Contacto</h4>
            <div className="contact-list">
              {resume.contact.map((c, i) => (
                <motion.a key={i}
                  href={c.label === 'Email' ? '#' : c.href}
                  onClick={(e) => {
                    if (c.label === 'Email') {
                      e.preventDefault()
                      copyToClipboard(c.value, 'Email')
                    }
                  }}
                  target={c.label === 'Email' ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="contact-item"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.45 + i * 0.07 }}
                  whileHover={{ x: 4 }}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="icon-box">{getIcon(c.label)}</div>
                  <div className="contact-info">
                    <span className="label">{c.label}</span>
                    <span className="value">{c.value}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.section>

          {/* Languages */}
          {resume.languages && (
            <motion.section className="sidebar-block languages-section"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <h4><Languages size={13} /> Idiomas</h4>
              <div className="contact-list">
                {resume.languages.map((l, i) => (
                  <div key={i} className="contact-item" style={{ paddingLeft: 0 }}>
                    <div className="contact-info">
                      <span className="label" style={{ color: 'var(--text-primary)', fontSize: '0.85rem' }}>{l.name}</span>
                      <span className="value" style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', fontWeight: 400 }}>{l.level}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Skills */}
          <motion.section className="sidebar-block skills-section"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.5 }}
          >
            <h4><Code2 size={13} /> Habilidades Técnicas</h4>
            {resume.skillsAdvanced && (
              <>
                <h5>🟢 Avanzadas</h5>
                <div className="skills-grid">
                  {resume.skillsAdvanced.map((s, i) => <SkillBar key={`a-${i}`} name={s.name} level={s.level} levelClass="skill-advanced" />)}
                </div>
              </>
            )}
            {resume.skillsIntermediate && (
              <>
                <h5>🟡 Intermedias</h5>
                <div className="skills-grid">
                  {resume.skillsIntermediate.map((s, i) => <SkillBar key={`i-${i}`} name={s.name} level={s.level} levelClass="skill-intermediate" />)}
                </div>
              </>
            )}
            {resume.skillsBasic && (
              <>
                <h5>🔵 Básicas</h5>
                <div className="skills-grid">
                  {resume.skillsBasic.map((s, i) => <SkillBar key={`b-${i}`} name={s.name} level={s.level} levelClass="skill-basic" />)}
                </div>
              </>
            )}
          </motion.section>

          {/* Soft Skills */}
          <motion.section className="sidebar-block soft-skills-section"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.5 }}
          >
            <h4><Heart size={13} /> Habilidades Blandas</h4>
            <div className="badges-container">
              {resume.softSkills.map((sk, i) => (
                <motion.span key={i} className="badge"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + i * 0.05, type: 'spring', stiffness: 300 }}
                  whileHover={{ scale: 1.08, y: -2 }}
                >{sk}</motion.span>
              ))}
            </div>
          </motion.section>
        </motion.aside>

        {/* MAIN */}
        <main id="content" className="main">
          <AnimatedSection className="hero-section" id="about">
            <SectionHeader icon={Sparkles} title="Acerca de Mí" />
            <p className="hero-text">
              <TypewriterText text={resume.summary || resume.headline} />
            </p>
            <div className="hero-actions">
              <button className="btn-primary" onClick={downloadPDF}><Download size={15} /> Descargar CV</button>
              <a className="btn-ghost" href="#experience">Ver experiencia <ChevronDown size={15} /></a>
            </div>
          </AnimatedSection>

          <AnimatedSection className="experience-section" id="experience" delay={0.1}>
            <SectionHeader icon={Briefcase} title="Experiencia Profesional" />
            <div className="timeline">
              {resume.experience.map((job, i) => <TimelineItem key={i} job={job} index={i} />)}
            </div>
          </AnimatedSection>

          <AnimatedSection className="projects-section" id="projects" delay={0.1}>
            <SectionHeader icon={FolderKanban} title="Proyectos Destacados" />
            <div className="cards-grid">
              {resume.projects.map((p, i) => <ProjectCard key={i} project={p} index={i} />)}
            </div>
          </AnimatedSection>

          <AnimatedSection className="education-section" id="education" delay={0.1}>
            <SectionHeader icon={GraduationCap} title="Formación Académica" />
            <div className="edu-card"><p>{resume.education}</p></div>
          </AnimatedSection>

          <footer className="cv-footer">
            <p>© {new Date().getFullYear()} {resume.name}</p>
            <p className="shortcuts-hint">Atajos: <kbd>T</kbd> tema · <kbd>P</kbd> PDF</p>
          </footer>
        </main>
      </div>
    </div>
  )
}
