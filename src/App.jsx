import { useEffect, useRef, useState } from 'react'
import './App.css'

const NAV_LEFT = [
  { label: 'Serviços', href: '#services' },
  { label: 'Projeto', href: '#featured' },
]

const NAV_RIGHT = [
  { label: 'Processo', href: '#process' },
  { label: 'Portfólio', href: '#portfolio' },
]

const SERVICES = [
  {
    id: 'branding',
    title: 'Branding',
    text: 'Identidades visuais que traduzem essência, propósito e presença — do conceito à aplicação em todos os pontos de contato.',
  },
  {
    id: 'direction',
    title: 'Creative Direction',
    text: 'Visão artística unificada para campanhas, editoriais e narrativas visuais que elevam a percepção da marca.',
  },
  {
    id: 'web',
    title: 'Web Design',
    text: 'Experiências digitais refinadas, responsivas e memoráveis — construídas com precisão editorial e atenção ao detalhe.',
  },
]

const PROCESS = [
  { num: '01', name: 'Discovery', detail: 'Imersão na marca, mercado e oportunidades estratégicas.' },
  { num: '02', name: 'Strategy', detail: 'Definição de direção criativa, tom e arquitetura visual.' },
  { num: '03', name: 'Design', detail: 'Criação artística com obsessão por cada elemento.' },
  { num: '04', name: 'Launch', detail: 'Entrega impecável e suporte para impacto duradouro.' },
]

const PORTFOLIO = [
  {
    slug: 'coffee',
    type: 'Coffee Brand',
    name: 'Terre Brûlée',
    scope: 'Identity · Packaging · Digital',
    hue: '#8B6F5C',
    bg: 'linear-gradient(160deg, #E8DDD0 0%, #C4A88A 55%, #8B6F5C 100%)',
  },
  {
    slug: 'fashion',
    type: 'Fashion Brand',
    name: 'Ligne Noire',
    scope: 'Editorial · Campaign · E-commerce',
    hue: '#5C4A42',
    bg: 'linear-gradient(165deg, #F0E8DF 0%, #D4B8A8 45%, #9A7B6A 100%)',
  },
  {
    slug: 'skincare',
    type: 'Skincare Brand',
    name: 'Sélène Ritual',
    scope: 'Luxury Packaging · Art Direction',
    hue: '#C4756A',
    bg: 'linear-gradient(155deg, #FAF6F1 0%, #E8D5CC 50%, #C4756A 100%)',
  },
]

const TESTIMONIALS = [
  {
    text: 'A Lumière entregou uma presença visual que nossa marca sempre buscou, mas nunca havia alcançado com tanta clareza.',
    name: 'Isabelle Moreau',
    role: 'Founder, Ligne Noire',
  },
  {
    text: 'Cada decisão criativa foi intencional. O resultado é elegante, atemporal e profundamente alinhado à nossa essência.',
    name: 'Marco Alvarez',
    role: 'CEO, Terre Brûlée',
  },
  {
    text: 'Trabalho editorial de altíssimo nível. Transformaram nosso lançamento em uma experiência visual inesquecível.',
    name: 'Elena Vasquez',
    role: 'Brand Director, Sélène Ritual',
  },
]

function useReveal() {
  const rootRef = useRef(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const nodes = root.querySelectorAll('.anim')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('anim--visible')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -48px 0px' }
    )

    nodes.forEach((n) => io.observe(n))
    return () => io.disconnect()
  }, [])

  return rootRef
}

function Navbar({ solid }) {
  return (
    <header className={`nav ${solid ? 'nav--solid' : ''}`}>
      <div className="nav__wrap">
        <ul className="nav__group nav__group--left">
          {NAV_LEFT.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="nav__link">{l.label}</a>
            </li>
          ))}
        </ul>

        <a href="#" className="nav__brand">
          <span className="nav__brand-main">LUMIÈRE</span>
          <span className="nav__brand-sub">Studio</span>
        </a>

        <ul className="nav__group nav__group--right">
          {NAV_RIGHT.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="nav__link">{l.label}</a>
            </li>
          ))}
          <li>
            <a href="#contact" className="nav__pill">Contato</a>
          </li>
        </ul>

        <button type="button" className="nav__burger" aria-label="Abrir menu">
          <span /><span />
        </button>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__blob hero__blob--a" aria-hidden="true" />
      <div className="hero__blob hero__blob--b" aria-hidden="true" />

      <aside className="hero__rail anim">
        <span>Est. 2018</span>
        <span className="hero__rail-line" />
        <span>Paris · SP · NYC</span>
      </aside>

      <div className="hero__grid">
        <div className="hero__copy">
          <p className="hero__kicker anim">Estúdio Criativo Internacional</p>
          <h1 className="hero__headline anim anim--d1">
            Where art meets
            <span className="hero__headline-accent"> refined design.</span>
          </h1>
          <p className="hero__lead anim anim--d2">
            Criamos experiências visuais sofisticadas para marcas que valorizam
            estética, narrativa e presença editorial no mundo digital.
          </p>
          <div className="hero__cta-row anim anim--d3">
            <a href="#portfolio" className="cta-btn cta-btn--fill">
              Explorar trabalhos
            </a>
            <a href="#contact" className="cta-btn cta-btn--line">
              Agendar conversa
            </a>
          </div>
        </div>

        <div className="hero__stage">
          <div className="hero__frame hero__frame--back float">
            <div className="hero__frame-inner">
              <div className="hero__frame-bar" />
              <div className="hero__frame-img hero__frame-img--warm" />
              <p className="hero__frame-cap">Ligne Noire — SS25</p>
            </div>
          </div>
          <div className="hero__frame hero__frame--front float float--alt">
            <div className="hero__frame-inner hero__frame-inner--card">
              <span className="hero__tag">New Project</span>
              <div className="hero__frame-img hero__frame-img--clay" />
              <div className="hero__frame-meta">
                <strong>Sélène Ritual</strong>
                <span>Skincare · 2025</span>
              </div>
            </div>
          </div>
          <div className="hero__ring float float--slow" aria-hidden="true">
            <svg viewBox="0 0 200 200" fill="none">
              <ellipse cx="100" cy="100" rx="95" ry="95" stroke="currentColor" strokeWidth="0.5" />
              <ellipse cx="100" cy="100" rx="70" ry="70" stroke="currentColor" strokeWidth="0.5" />
            </svg>
          </div>
        </div>
      </div>

      <div className="hero__stats anim anim--d4">
        <div>
          <strong>120+</strong>
          <span>Projetos entregues</span>
        </div>
        <div>
          <strong>18</strong>
          <span>Países atendidos</span>
        </div>
        <div>
          <strong>12</strong>
          <span>Prêmios criativos</span>
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section className="services" id="services">
      <div className="wrap">
        <header className="sec-head anim">
          <span className="sec-head__tag">Expertise</span>
          <h2 className="sec-head__title">
            Serviços pensados para marcas que exigem excelência.
          </h2>
        </header>

        <div className="services__list">
          {SERVICES.map((s, i) => (
            <article key={s.id} className={`service anim anim--d${i + 1}`}>
              <div className="service__top">
                <h3 className="service__name">{s.title}</h3>
                <span className="service__arrow" aria-hidden="true">↗</span>
              </div>
              <p className="service__text">{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Featured() {
  return (
    <section className="featured" id="featured">
      <div className="featured__visual anim">
        <div className="featured__canvas">
          <div className="featured__letter">L</div>
          <div className="featured__stripe" />
        </div>
        <div className="featured__badge float float--alt">
          <span>Case Study</span>
          <strong>2025</strong>
        </div>
      </div>

      <div className="featured__copy wrap">
        <span className="sec-head__tag anim">Projeto em destaque</span>
        <h2 className="featured__title anim anim--d1">Ligne Noire</h2>
        <p className="featured__desc anim anim--d2">
          Rebranding completo para uma maison de moda contemporânea. Direção de arte,
          campanha editorial, e-commerce e guidelines para uma identidade atemporal
          com presença parisiense.
        </p>
        <ul className="featured__tags anim anim--d3">
          <li>Brand Identity</li>
          <li>Art Direction</li>
          <li>Digital Experience</li>
        </ul>
        <a href="#portfolio" className="cta-btn cta-btn--dark anim anim--d4">
          Ver projeto completo
        </a>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section className="process" id="process">
      <div className="wrap process__wrap">
        <header className="sec-head sec-head--narrow anim">
          <span className="sec-head__tag">Metodologia</span>
          <h2 className="sec-head__title">Um processo claro, refinado e intencional.</h2>
        </header>

        <div className="process__track">
          <div className="process__rail" aria-hidden="true" />
          {PROCESS.map((step, i) => (
            <article key={step.num} className={`process__item anim anim--d${i + 1}`}>
              <span className="process__num">{step.num}</span>
              <div className="process__body">
                <h3>{step.name}</h3>
                <p>{step.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="wrap">
        <header className="sec-head anim">
          <span className="sec-head__tag">Seleção</span>
          <h2 className="sec-head__title">Trabalhos que definem nossa assinatura visual.</h2>
        </header>

        <div className="portfolio__grid">
          {PORTFOLIO.map((p, i) => (
            <a
              key={p.slug}
              href="#contact"
              className={`portfolio__card anim anim--d${(i % 3) + 1}`}
            >
              <div className="portfolio__visual" style={{ background: p.bg }}>
                <div className="portfolio__mock" style={{ borderColor: p.hue }}>
                  <span style={{ color: p.hue }}>{p.name.charAt(0)}</span>
                </div>
                <div className="portfolio__hover">
                  <span>Ver case</span>
                </div>
              </div>
              <div className="portfolio__info">
                <span className="portfolio__type">{p.type}</span>
                <h3>{p.name}</h3>
                <p>{p.scope}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const [active, setActive] = useState(0)

  return (
    <section className="quotes" id="quotes">
      <div className="wrap quotes__wrap">
        <header className="sec-head sec-head--center anim">
          <span className="sec-head__tag">Depoimentos</span>
          <h2 className="sec-head__title">Confiança construída com excelência.</h2>
        </header>

        <blockquote className="quotes__main anim">
          <p>"{TESTIMONIALS[active].text}"</p>
          <footer>
            <cite>{TESTIMONIALS[active].name}</cite>
            <span>{TESTIMONIALS[active].role}</span>
          </footer>
        </blockquote>

        <div className="quotes__nav anim">
          {TESTIMONIALS.map((t, i) => (
            <button
              key={t.name}
              type="button"
              className={`quotes__dot ${i === active ? 'quotes__dot--on' : ''}`}
              onClick={() => setActive(i)}
              aria-label={`Depoimento de ${t.name}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactCTA() {
  return (
    <section className="contact" id="contact">
      <div className="contact__wash" aria-hidden="true" />
      <div className="wrap contact__inner anim">
        <span className="sec-head__tag sec-head__tag--light">Vamos conversar</span>
        <h2 className="contact__title">
          Seu próximo projeto merece mais do que um design comum.
        </h2>
        <p className="contact__sub">
          Conte-nos sua visão. Respondemos em até 48 horas com uma proposta sob medida.
        </p>
        <a href="mailto:studio@lumiere.co" className="cta-btn cta-btn--light">
          Iniciar projeto
        </a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="foot">
      <div className="wrap foot__grid">
        <div className="foot__brand">
          <span className="foot__logo">LUMIÈRE STUDIO</span>
          <p>Creative studio for refined brands worldwide.</p>
        </div>
        <nav className="foot__nav">
          <a href="#services">Serviços</a>
          <a href="#featured">Projeto</a>
          <a href="#process">Processo</a>
          <a href="#portfolio">Portfólio</a>
        </nav>
        <div className="foot__social">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">@lumiere.studio</a>
          <a href="mailto:studio@lumiere.co">studio@lumiere.co</a>
        </div>
      </div>
      <div className="wrap foot__bar">
        <span>© 2025 LUMIÈRE STUDIO</span>
        <span>All rights reserved</span>
      </div>
    </footer>
  )
}

export default function App() {
  const [navSolid, setNavSolid] = useState(false)
  const appRef = useReveal()

  useEffect(() => {
    const onScroll = () => setNavSolid(window.scrollY > 48)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="site" ref={appRef}>
      <Navbar solid={navSolid} />
      <main>
        <Hero />
        <Services />
        <Featured />
        <Process />
        <Portfolio />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  )
}
