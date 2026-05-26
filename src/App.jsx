import { useEffect, useRef, useState } from 'react'
import './App.css'

const NAV_LINKS = [
  { label: 'Serviços', href: '#services' },
  { label: 'Projeto', href: '#featured' },
  { label: 'Processo', href: '#process' },
  { label: 'Contato', href: '#cta' },
]

const SERVICES = [
  {
    number: '01',
    title: 'Branding',
    description:
      'Identidades visuais refinadas que traduzem a essência da marca em cada detalhe — do logotipo à linguagem visual completa.',
  },
  {
    number: '02',
    title: 'Creative Direction',
    description:
      'Direção criativa estratégica para campanhas, editoriais e experiências que elevam a narrativa da sua marca.',
  },
  {
    number: '03',
    title: 'Web Design',
    description:
      'Interfaces digitais sofisticadas, responsivas e memoráveis — projetadas para marcas que exigem excelência.',
  },
]

const PROCESS = [
  { step: '01', title: 'Discovery', text: 'Imersão profunda na essência da marca, mercado e visão estratégica.' },
  { step: '02', title: 'Strategy', text: 'Definição de direção criativa, tom visual e arquitetura da experiência.' },
  { step: '03', title: 'Creation', text: 'Desenvolvimento artístico com atenção obsessiva a cada detalhe.' },
  { step: '04', title: 'Launch', text: 'Entrega refinada e acompanhamento para impacto duradouro.' },
]

const TESTIMONIALS = [
  {
    quote:
      'A Lumière transformou nossa presença digital em algo verdadeiramente memorável. Cada detalhe respira sofisticação.',
    author: 'Camille Laurent',
    role: 'Creative Director, Maison Éclat',
  },
  {
    quote:
      'Trabalhar com eles foi como ter um estúdio editorial interno. O resultado superou todas as expectativas.',
    author: 'James Whitfield',
    role: 'Founder, Noir Roastery',
  },
  {
    quote:
      'Elegância, precisão e visão artística incomparáveis. Nossa marca nunca esteve tão bem posicionada.',
    author: 'Sofia Mendes',
    role: 'CEO, Velours Beauty',
  },
]

function useScrollReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const targets = el.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    targets.forEach((t) => observer.observe(t))
    return () => observer.disconnect()
  }, [])

  return ref
}

function Navbar({ scrolled }) {
  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <nav className="navbar__inner">
        <a href="#" className="navbar__logo">
          <span className="navbar__logo-mark">L</span>
          <span className="navbar__logo-text">
            LUMIÈRE
            <em>STUDIO</em>
          </span>
        </a>
        <ul className="navbar__links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="navbar__link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#cta" className="navbar__cta">
          Iniciar projeto
        </a>
        <button className="navbar__menu-btn" aria-label="Menu">
          <span />
          <span />
        </button>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__organic hero__organic--1" aria-hidden="true" />
      <div className="hero__organic hero__organic--2" aria-hidden="true" />
      <div className="hero__grain" aria-hidden="true" />

      <div className="hero__content">
        <p className="hero__eyebrow reveal">Estúdio Criativo Internacional</p>
        <h1 className="hero__title reveal reveal-delay-1">
          Creative experiences
          <br />
          <em>crafted with elegance.</em>
        </h1>
        <p className="hero__subtitle reveal reveal-delay-2">
          Projetos digitais sofisticados criados para marcas modernas que valorizam
          estética e presença visual.
        </p>
        <div className="hero__actions reveal reveal-delay-3">
          <a href="#featured" className="btn btn--primary">
            Ver projeto
            <span className="btn__arrow">→</span>
          </a>
          <a href="#cta" className="btn btn--ghost">
            Falar conosco
          </a>
        </div>
      </div>

      <div className="hero__visual">
        <div className="hero__mockup hero__mockup--main floating">
          <div className="mockup-screen">
            <div className="mockup-screen__header">
              <span />
              <span />
              <span />
            </div>
            <div className="mockup-screen__body">
              <div className="mockup-screen__line mockup-screen__line--wide" />
              <div className="mockup-screen__line" />
              <div className="mockup-screen__line mockup-screen__line--short" />
              <div className="mockup-screen__image" />
            </div>
          </div>
        </div>
        <div className="hero__mockup hero__mockup--secondary floating floating--delayed">
          <div className="mockup-card">
            <span className="mockup-card__label">Featured</span>
            <div className="mockup-card__visual" />
            <p className="mockup-card__title">Maison Éclat</p>
          </div>
        </div>
        <div className="hero__accent floating floating--slow" aria-hidden="true">
          <svg viewBox="0 0 120 120" fill="none">
            <circle cx="60" cy="60" r="58" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="60" cy="60" r="40" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </div>
      </div>

      <div className="hero__scroll reveal reveal-delay-4">
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}

function Services() {
  return (
    <section className="services" id="services">
      <div className="section-header reveal">
        <span className="section-label">O que fazemos</span>
        <h2 className="section-title">
          Serviços com
          <br />
          <em>excelência editorial</em>
        </h2>
      </div>
      <div className="services__grid">
        {SERVICES.map((service, i) => (
          <article
            key={service.title}
            className={`service-card reveal reveal-delay-${i + 1}`}
          >
            <span className="service-card__number">{service.number}</span>
            <h3 className="service-card__title">{service.title}</h3>
            <p className="service-card__text">{service.description}</p>
            <span className="service-card__line" />
            <a href="#cta" className="service-card__link">
              Saiba mais <span>→</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

function FeaturedProject() {
  return (
    <section className="featured" id="featured">
      <div className="featured__inner">
        <div className="featured__content reveal">
          <span className="section-label">Projeto em destaque</span>
          <h2 className="featured__title">
            Maison
            <br />
            <em>Éclat</em>
          </h2>
          <p className="featured__desc">
            Uma identidade de moda contemporânea que une minimalismo parisiense
            com ousadia editorial. Campanha visual completa, direção de arte e
            presença digital refinada.
          </p>
          <div className="featured__meta">
            <div>
              <span className="featured__meta-label">Cliente</span>
              <span className="featured__meta-value">Maison Éclat</span>
            </div>
            <div>
              <span className="featured__meta-label">Escopo</span>
              <span className="featured__meta-value">Branding · Web · Editorial</span>
            </div>
            <div>
              <span className="featured__meta-label">Ano</span>
              <span className="featured__meta-value">2025</span>
            </div>
          </div>
          <a href="#cta" className="btn btn--outline">
            Ver case completo
            <span className="btn__arrow">→</span>
          </a>
        </div>
        <div className="featured__visual reveal reveal-delay-2">
          <div className="featured__frame">
            <div className="featured__mockup">
              <div className="featured__mockup-inner">
                <div className="featured__brand">É</div>
                <div className="featured__mockup-text">
                  <span>Spring Collection</span>
                  <span>2025</span>
                </div>
              </div>
            </div>
            <div className="featured__float-card floating floating--delayed">
              <span>98%</span>
              <small>Brand recall increase</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section className="process" id="process">
      <div className="process__header reveal">
        <span className="section-label">Como trabalhamos</span>
        <h2 className="section-title">
          Processo
          <br />
          <em>refinado</em>
        </h2>
      </div>
      <div className="process__timeline">
        <div className="process__line" aria-hidden="true" />
        {PROCESS.map((item, i) => (
          <article
            key={item.step}
            className={`process__step reveal reveal-delay-${i + 1}`}
          >
            <span className="process__number">{item.step}</span>
            <div className="process__step-content">
              <h3 className="process__step-title">{item.title}</h3>
              <p className="process__step-text">{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials__header reveal">
        <span className="section-label">Depoimentos</span>
        <h2 className="section-title">
          O que dizem
          <br />
          <em>nossos parceiros</em>
        </h2>
      </div>
      <div className="testimonials__grid">
        {TESTIMONIALS.map((t, i) => (
          <blockquote
            key={t.author}
            className={`testimonial reveal reveal-delay-${i + 1}`}
          >
            <span className="testimonial__mark">"</span>
            <p className="testimonial__quote">{t.quote}</p>
            <footer className="testimonial__footer">
              <cite className="testimonial__author">{t.author}</cite>
              <span className="testimonial__role">{t.role}</span>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="cta" id="cta">
      <div className="cta__organic" aria-hidden="true" />
      <div className="cta__inner reveal">
        <span className="section-label">Vamos criar juntos</span>
        <h2 className="cta__title">
          Design sofisticado para marcas que querem ser lembradas.
        </h2>
        <p className="cta__subtitle">
          Conte-nos sobre seu projeto. Responderemos em até 48 horas com uma
          proposta personalizada.
        </p>
        <a href="mailto:hello@lumiere.studio" className="btn btn--primary btn--large">
          Iniciar conversa
          <span className="btn__arrow">→</span>
        </a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <a href="#" className="footer__logo">
            LUMIÈRE <em>STUDIO</em>
          </a>
          <p className="footer__tagline">
            Creative experiences crafted with elegance.
          </p>
        </div>
        <div className="footer__links">
          <div className="footer__col">
            <span className="footer__col-title">Navegação</span>
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
          <div className="footer__col">
            <span className="footer__col-title">Social</span>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              @lumiere.studio
            </a>
            <a href="https://behance.net" target="_blank" rel="noopener noreferrer">
              Behance
            </a>
            <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
              Dribbble
            </a>
          </div>
          <div className="footer__col">
            <span className="footer__col-title">Contato</span>
            <a href="mailto:hello@lumiere.studio">hello@lumiere.studio</a>
            <span>Paris · São Paulo · New York</span>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <span>© 2025 LUMIÈRE STUDIO. Todos os direitos reservados.</span>
        <span className="footer__crafted">Crafted with intention.</span>
      </div>
    </footer>
  )
}

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const containerRef = useScrollReveal()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="app" ref={containerRef}>
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <Services />
        <FeaturedProject />
        <Process />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
