import { useEffect, useRef, useState } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  CircleDollarSign,
  ClipboardCheck,
  Clock3,
  Cloud,
  Coins,
  Cpu,
  Factory,
  FileSpreadsheet,
  FileText,
  Globe2,
  GraduationCap,
  Handshake,
  HeartPulse,
  Landmark,
  LineChart,
  Lock,
  Mail,
  Monitor,
  Pill,
  Presentation,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Target,
  Truck,
  Users,
  X,
} from 'lucide-react'

/* ==========================================================================
   Data
   ========================================================================== */

const stagesWorked = ['Pre-seed', 'Seed', 'Series A', 'Series B', 'Growth']

const heroStats = [
  ['12+', 'Years in finance & advisory'],
  ['100%', 'Founder-led engagements'],
  ['4–6 wks', 'Typical deck timeline'],
  ['Pre-seed → B', 'Stages supported'],
]

const industries = [
  { icon: Monitor, name: 'SaaS & Technology' },
  { icon: ShieldCheck, name: 'Cyber Security' },
  { icon: Coins, name: 'FinTech' },
  { icon: Cpu, name: 'Deep Tech' },
  { icon: HeartPulse, name: 'Healthcare & HealthTech' },
  { icon: GraduationCap, name: 'Education & EdTech' },
  { icon: ShoppingCart, name: 'Consumer & D2C' },
  { icon: Truck, name: 'Logistics' },
  { icon: Pill, name: 'Pharma & Life sciences' },
  { icon: Factory, name: 'Manufacturing' },
  { icon: Globe2, name: 'Marketplace & Services' },
  { icon: Cloud, name: 'Climate & Sustainability' },
]

const services = [
  {
    number: '01',
    label: 'Engagement',
    icon: Presentation,
    visual: 'deck',
    accent: 'blue',
    title: 'Pitch decks',
    tagline: 'A story an investor finishes.',
    text: 'Investor-focused presentations that communicate the business opportunity clearly — structured so an investor understands the thesis, the proof and the ask without friction.',
    tags: ['12–16 slides', 'Investor-tested structure', 'Editable source file'],
  },
  {
    number: '02',
    label: 'Engagement',
    icon: LineChart,
    visual: 'model',
    accent: 'green',
    title: 'Financial modeling',
    tagline: 'Numbers that survive diligence.',
    text: 'Revenue projections, unit economics, assumptions and forecasts — driver-based, documented and defensible under questioning.',
    tags: ['Driver-based model', 'Unit economics', 'Scenarios & sensitivity'],
  },
  {
    number: '03',
    label: 'Engagement',
    icon: FileText,
    visual: 'documents',
    accent: 'blue',
    title: 'Investor materials',
    tagline: 'One story, every document.',
    text: 'Teasers, one-pagers, investment memos and supporting documents that carry the same narrative consistently across every investor conversation.',
    tags: ['Teaser & one-pager', 'Investment memo', 'Data room support'],
  },
  {
    number: '04',
    label: 'Engagement',
    icon: Target,
    visual: 'strategy',
    accent: 'green',
    title: 'Fundraising strategy',
    tagline: 'The plan before the pixels.',
    text: 'Positioning the company, identifying the right investor profile and sequencing the raise — prepared before a single slide is designed.',
    tags: ['Investor profiling', 'Raise sizing', 'Positioning & story'],
  },
]

const processSteps = [
  {
    number: '01',
    duration: 'Week 1',
    title: 'Understand',
    summary: 'We learn the business before we shape the story.',
    outputs: [
      'Business, market and financial diagnostic',
      'Unit economics and traction review',
      'Raise size and investor profile',
    ],
  },
  {
    number: '02',
    duration: 'Weeks 2–3',
    title: 'Build',
    summary: 'Narrative, model and deck designed together.',
    outputs: [
      'Investment narrative and deck structure',
      'Driver-based model with documented assumptions',
      'Deck, teaser and one-pager — first draft',
    ],
  },
  {
    number: '03',
    duration: 'Week 4',
    title: 'Refine',
    summary: 'We stress-test around investor expectations.',
    outputs: [
      'Investor-style stress test and Q&A bank',
      'Narrative, number and design revisions',
      'Founder rehearsal and delivery coaching',
    ],
  },
  {
    number: '04',
    duration: 'Week 5+',
    title: 'Deliver',
    summary: 'You receive an investor-ready package.',
    outputs: [
      'Final deck, teaser, one-pager and memo',
      'Editable model with assumptions appendix',
      'Support through investor meetings',
    ],
  },
]

const deckSections = [
  ['01', 'Company overview', 'What you do, who you serve, your vision and credentials'],
  ['02', 'Problem & market', 'Why the problem matters now, market size and timing'],
  ['03', 'Product & solution', 'Platform deep dive, workflow and customer journey'],
  ['04', 'Differentiation', 'Why you win, and the customers you target'],
  ['05', 'Traction & validation', 'Growth, milestones, partnerships and credible proof'],
  ['06', 'Business model', 'Revenue model, pricing and unit economics'],
  ['07', 'Financial projections', 'Forecast, drivers, margins and path to profitability'],
  ['08', 'Competitive position', 'Alternatives, SWOT and the defensible landscape'],
  ['09', 'Team, raise & close', 'Team, advisors, capital use and why invest now'],
]

const modelRows = [
  ['ARR — year 3', '$4.2M'],
  ['Revenue CAGR', '68%'],
  ['Gross margin', '82%'],
  ['Burn multiple', '1.4×'],
  ['Runway', '19 months'],
]

const engagementRows = [
  ['Deck & narrative', '4–6 weeks'],
  ['Financial model', '3-year, driver-based'],
  ['Investor materials', 'Teaser + one-pager'],
  ['Support through raise', 'Included'],
]

const credentials = [
  {
    icon: Landmark,
    title: 'Finance & investment banking',
    text: 'Capital structure thinking, valuation context and the analytical standard investors are used to. We build the numbers the way a diligence team will read them.',
  },
  {
    icon: Handshake,
    title: 'Transaction advisory & M&A',
    text: 'Exposure across the transaction lifecycle — from first outreach and negotiation through to closing. We know what a buyer, and then an investor, will push on.',
  },
  {
    icon: FileSpreadsheet,
    title: 'Financial modelling',
    text: 'Driver-based forecasts, unit economics, scenario and sensitivity analysis. Assumptions are documented so the model survives diligence instead of collapsing under it.',
  },
  {
    icon: Target,
    title: 'Fundraising strategy',
    text: 'Positioning the company, identifying the right investor profile, sequencing the raise and preparing the story before any slide is designed.',
  },
  {
    icon: Users,
    title: 'Businesses we work with',
    text: 'Pre-seed through growth-stage companies across SaaS, fintech, consumer, healthcare, marketplaces, industrial and climate businesses — plus founders raising their first round.',
  },
]

const faqs = [
  {
    question: 'When should we involve you?',
    answer:
      'The best time is usually six to ten weeks before a fundraising process begins. That gives us enough time to validate the story, build the financial narrative and create a deck that works in the room — not just on screen.',
  },
  {
    question: 'Do you work with early-stage companies?',
    answer:
      'Yes. We work with founders from pre-seed through growth stage. If revenue is still early, we focus on the strongest available proof: customer insight, repeat usage, pilots, market research, team insight and a clear path to monetization.',
  },
  {
    question: 'How long does a pitch deck take?',
    answer:
      'Most investor decks take four to six weeks from a complete brief to a polished final version. A simple redesign can move faster; a complex new narrative may take longer. We agree on milestones before work begins.',
  },
  {
    question: 'Do you build the financial model as well?',
    answer:
      'Yes. The model and the deck are built together. You receive a driver-based forecast with documented assumptions, unit economics, scenarios and a summary appendix an investor can follow without a call.',
  },
  {
    question: 'Can you keep our information confidential?',
    answer:
      'Absolutely. Your brief is treated as confidential business information. We only use it to prepare your pitch and never publish it or share it with third parties without your permission.',
  },
]

const contactInterests = [
  'Pitch decks',
  'Financial modeling',
  'Investor materials',
  'Fundraising strategy',
  'Something else',
]

const industriesOptions = [
  'SaaS & Technology',
  'FinTech',
  'Consumer & D2C',
  'Healthcare',
  'EdTech',
  'Marketplace & Services',
  'Manufacturing',
  'Climate & Sustainability',
  'Other',
]

const stages = [
  'Idea / pre-product',
  'Pre-seed',
  'Seed',
  'Series A',
  'Series B',
  'Growth',
  'Private / profitable',
]

const emptyBrief = {
  companyName: '',
  website: '',
  contactName: '',
  email: '',
  role: '',
  industry: '',
  stage: '',
  businessOverview: '',
  customerProblem: '',
  solution: '',
  targetMarket: '',
  marketOpportunity: '',
  revenue: '',
  growth: '',
  customers: '',
  traction: '',
  credentials: '',
  geography: '',
  raisingAmount: '',
  useOfFunds: '',
  targetDate: '',
  existingDeck: '',
  notes: '',
  consent: false,
}

const navLinks = [
  ['About', '#about'],
  ['Our Services', '#services'],
  ['Process', '#process'],
  ['The Work', '#work'],
]

/* ==========================================================================
   Shared bits
   ========================================================================== */

function Logo() {
  return (
    <a className="logo" href="#hero" aria-label="DG Global — home">
      <img src="/dg-logo-light.svg" alt="DG Global" width="236" height="52" />
    </a>
  )
}

function Kicker({ children, accent = 'green', center = false }) {
  return (
    <div className={`kicker ${center ? 'kicker--center' : ''} kicker--${accent} entry`}>
      <span className="kicker__rule" />
      <span className="kicker__text">{children}</span>
      <span className="kicker__rule" />
    </div>
  )
}

function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])
}

/* ==========================================================================
   Header
   ========================================================================== */

function Header({ openBrief }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [menuOpen])

  useEffect(() => {
    const onKey = (event) => event.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <>
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="shell site-header__inner">
          <Logo />
          <nav className="site-header__nav" aria-label="Main navigation">
            {navLinks.map(([label, href]) => (
              <a key={href} href={href}>{label}</a>
            ))}
            <button className="btn btn--ghost-green btn--sm" onClick={openBrief}>
              Get in touch
            </button>
          </nav>
          <div className="site-header__actions">
            <button
              className={`burger ${menuOpen ? 'is-open' : ''}`}
              type="button"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((value) => !value)}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? 'is-open' : ''}`}>
        <nav aria-label="Mobile navigation">
          {navLinks.map(([label, href], index) => (
            <a key={href} href={href} style={{ '--i': index }} onClick={close}>{label}</a>
          ))}
          <button
            className="btn btn--ghost-green"
            style={{ '--i': navLinks.length }}
            onClick={() => { close(); openBrief() }}
          >
            Get in touch
          </button>
        </nav>
      </div>
    </>
  )
}

/* ==========================================================================
   Service visuals
   ========================================================================== */

function ServiceVisual({ kind, accent }) {
  if (kind === 'deck') {
    return (
      <div className="art art--deck">
        <div className="art__slide art__slide--back" />
        <div className="art__slide art__slide--mid" />
        <div className="art__slide art__slide--front">
          <span className="art__kicker" />
          <span className="art__line art__line--lg" />
          <span className="art__line" />
          <span className="art__line art__line--sm" />
          <div className="art__bars"><i /><i /><i /><i /></div>
        </div>
      </div>
    )
  }

  if (kind === 'model') {
    return (
      <div className="art art--model">
        <div className="art__kpis"><i /><i /><i /></div>
        <div className="art__chart">
          <span style={{ '--h': '38%' }} />
          <span style={{ '--h': '54%' }} />
          <span style={{ '--h': '71%' }} />
          <span style={{ '--h': '88%' }} />
          <span style={{ '--h': '100%' }} />
          <svg viewBox="0 0 200 60" preserveAspectRatio="none" aria-hidden="true">
            <path d="M8 50 L58 42 L108 33 L158 22 L192 14" />
          </svg>
        </div>
      </div>
    )
  }

  if (kind === 'documents') {
    return (
      <div className="art art--docs">
        <div className="art__doc"><span /><span /><span /><em>Teaser</em></div>
        <div className="art__doc"><span /><span /><em>One-pager</em></div>
        <div className="art__doc"><span /><span /><span /><em>Memo</em></div>
      </div>
    )
  }

  return (
    <div className="art art--strategy">
      <div className="art__rings"><i /><i /><i /><i /></div>
      <div className="art__pin"><Target size={20} /></div>
    </div>
  )
}

/* ==========================================================================
   Hero
   ========================================================================== */

function Hero({ openBrief }) {
  return (
    <section className="hero" id="hero">
      <div className="hero__glow" aria-hidden="true" />

      <div className="shell hero__body">
        <div className="hero__copy">
          <h1 className="hero-entry" style={{ animationDelay: '0s' }}>
            Your business,<br />
            <em>made investable</em>
          </h1>
          <p className="hero-entry hero__lede" style={{ animationDelay: '.26s' }}>
            A founder-led fundraising practice. Investor-ready pitch decks, financial storytelling and
            supporting materials for startups and growing companies.
          </p>
          <div className="hero-entry hero__ctas" style={{ animationDelay: '.38s' }}>
            <a className="btn btn--ghost" href="#services">
              Explore our services <ArrowUpRight size={15} />
            </a>
            <button className="btn btn--quiet" onClick={openBrief}>Start your brief</button>
          </div>
        </div>

        <div className="hero__stats hero-entry" style={{ animationDelay: '.52s' }}>
          <div className="hero__stages">
            <span className="hero__stages-label">Working across</span>
            <div className="hero__stages-list">
              {stagesWorked.map((stage) => <span key={stage}>{stage}</span>)}
            </div>
          </div>
          <div className="hero__figures">
            {heroStats.map(([value, label]) => (
              <div className="hero__figure" key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ==========================================================================
   About
   ========================================================================== */

function About() {
  return (
    <section className="section section--about" id="about">
      <div className="shell shell--narrow">
        <div className="about__head">
          <Kicker accent="green" center>Who we are</Kicker>
          <h2 className="entry delay-1">
            A founder-led fundraising practice for companies that have the traction —
            but not yet the story investors can act on.
          </h2>
          <p className="about__lede entry delay-2">
            DG Global was built by someone who has sat on the other side of the table: modelling businesses,
            negotiating transactions and defending numbers to investors. The same person who frames your
            strategy builds your model, writes your deck and rehearses your delivery.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ==========================================================================
   Industries
   ========================================================================== */

function Industries({ openBrief }) {
  return (
    <section className="section section--flush" id="industries">
      <div className="shell shell--narrow">
        <div className="industries reveal">
          <div className="industries__head">
            <span className="kicker__rule" />
            <span className="industries__label">Focused sectors</span>
            <span className="kicker__rule" />
          </div>
          <div className="industries__grid">
            {industries.map(({ icon: Icon, name }) => (
              <div className="industries__item reveal" key={name}>
                <Icon size={40} strokeWidth={1.5} />
                <span>{name}</span>
              </div>
            ))}
          </div>
          <div className="industries__foot">
            <p>
              Don&apos;t see your sector? We work across business models rather than a fixed list — if it has
              revenue, unit economics and a growth story, we can build the case for it.
            </p>
            <button className="link-line" onClick={openBrief}>
              Discuss your sector <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ==========================================================================
   Services
   ========================================================================== */

function Services({ openBrief }) {
  return (
    <section className="section" id="services">
      <div className="shell">
        <div className="section-head">
          <div>
            <div className="kicker kicker--blue entry">
              <span className="kicker__rule" />
              <span className="kicker__text">What we do</span>
            </div>
            <h2 className="entry delay-1">Four engagements,<br />one senior team</h2>
          </div>
          <p className="section-head__aside entry delay-2">
            Take them individually or run them as one package. No handoffs to a slide factory — the person who
            shapes your strategy is the person who designs your deck and models your financials.
          </p>
        </div>

        <div className="services">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <article className={`service reveal service--${service.accent}`} key={service.number}>
                <div className="service__copy">
                  <span className="service__index">{service.number} / {service.label}</span>
                  <h3>{service.title}</h3>
                  <p className="service__tagline">{service.tagline}</p>
                  <p className="service__text">{service.text}</p>
                  <div className="pills">
                    {service.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                  <button className="btn btn--pill" onClick={openBrief}>
                    Start here <ArrowUpRight size={15} />
                  </button>
                </div>
                <div className="service__frame">
                  <span className="service__icon"><Icon size={18} /></span>
                  <ServiceVisual kind={service.visual} accent={service.accent} />
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ==========================================================================
   Process
   ========================================================================== */

function Process({ openBrief }) {
  return (
    <section className="section" id="process">
      <div className="shell">
        <div className="section-head">
          <div>
            <div className="kicker kicker--green entry">
              <span className="kicker__rule" />
              <span className="kicker__text">Our process</span>
            </div>
            <h2 className="entry delay-1">Five weeks,<br />four steps</h2>
          </div>
          <p className="section-head__aside entry delay-2">
            A defined engagement with agreed milestones, so you always know what is being worked on, what you
            need to send, and what you receive when each step closes.
          </p>
        </div>

        <div className="steps">
          {processSteps.map((step) => (
            <article className="step reveal" key={step.number}>
              <div className="step__top">
                <span className="step__num">{step.number}</span>
                <span className="step__duration">{step.duration}</span>
              </div>
              <h3>{step.title}</h3>
              <p className="step__summary">{step.summary}</p>
              <ul className="step__outputs">
                {step.outputs.map((output) => (
                  <li key={output}><Check size={14} />{output}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="process__foot reveal">
          <p>
            <strong>You approve at every milestone.</strong> Narrative, model and design are reviewed with you
            before anything moves forward, so nothing reaches investors that you have not signed off.
          </p>
          <button className="btn btn--solid" onClick={openBrief}>
            Start with a consultation <ArrowUpRight size={15} />
          </button>
        </div>
      </div>
    </section>
  )
}

/* ==========================================================================
   The work
   ========================================================================== */

function Work() {
  return (
    <section className="section" id="work">
      <div className="shell">
        <div className="section-head">
          <div>
            <div className="kicker kicker--blue entry">
              <span className="kicker__rule" />
              <span className="kicker__text">The work</span>
            </div>
            <h2 className="entry delay-1">The package you<br />actually receive</h2>
          </div>
          <p className="section-head__aside entry delay-2">
            Client decks and models are shared under NDA, but the structure below is what we build every time —
            a deliberate flow where each section removes the next investor objection.
          </p>
        </div>

        <div className="work">
          <ol className="work__list">
            {deckSections.map(([number, title, text]) => (
              <li className="work__item reveal" key={number}>
                <span className="work__num">{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ol>

          <aside className="work__aside">
            <div className="card reveal">
              <div className="card__head">
                <span>Illustrative model output</span>
                <LineChart size={15} />
              </div>
              <div className="card__rows">
                {modelRows.map(([label, value]) => (
                  <div className="card__row" key={label}>
                    <span>{label}</span>
                    <strong>{value}</strong>
                  </div>
                ))}
              </div>
            </div>

            <div className="card reveal">
              <div className="card__head">
                <span>Typical engagement</span>
                <ClipboardCheck size={15} />
              </div>
              <div className="card__rows">
                {engagementRows.map(([label, value]) => (
                  <div className="card__row" key={label}>
                    <span>{label}</span>
                    <strong>{value}</strong>
                  </div>
                ))}
              </div>
            </div>

            <div className="note reveal">
              <Lock size={17} />
              <div>
                <strong>Confidential by default</strong>
                <p>Sample decks and models are shared under NDA during a consultation. Your information is never
                  published or passed to third parties.</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

/* ==========================================================================
   Founder
   ========================================================================== */

function Founder() {
  return (
    <section className="section" id="founder">
      <div className="shell">
        <div className="founder">
          <div className="founder__lead reveal">
            <Kicker accent="green">The practice</Kicker>
            <div className="founder__id">
              <div className="founder__avatar" aria-hidden="true">DG</div>
              <div>
                <h2>Dhruv Goyal</h2>
                <p>Founder &amp; Principal</p>
              </div>
            </div>
            <p>
              Dhruv founded DG Global to close a gap he kept hitting from inside finance and advisory work:
              businesses with real traction were losing investor meetings because their story was hard to
              follow, their numbers were not defensible, or both.
            </p>
            <p>
              The practice brings together three things a fundraising package needs and rarely gets in one place
              — financial rigour, transaction judgement and clear investor communication.
            </p>
            <div className="founder__contact">
              <a href="tel:+919876654294">+91 98766 54294</a>
              <a href="mailto:dhruvgoyal2944@gmail.com">dhruvgoyal2944@gmail.com</a>
            </div>
          </div>

          <div className="founder__credentials">
            {credentials.map(({ icon: Icon, title, text }) => (
              <div className="credential reveal" key={title}>
                <span className="credential__icon"><Icon size={18} strokeWidth={1.6} /></span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ==========================================================================
   FAQ
   ========================================================================== */

function Faq({ openBrief }) {
  return (
    <section className="section" id="faq">
      <div className="shell">
        <div className="faq">
          <div className="faq__intro">
            <Kicker accent="blue">Good to know</Kicker>
            <h2>Questions before<br />you share your story?</h2>
            <p>
              Still deciding whether we are the right fit? Start with a confidential brief — there is no
              commitment and no hard sell.
            </p>
            <button className="link-line" onClick={openBrief}>
              Tell us about your company <ArrowRight size={15} />
            </button>
          </div>

          <div className="faq__list">
            {faqs.map((faq, index) => (
              <details className="faq__item reveal" style={{ '--delay': `${index * 50}ms` }} key={faq.question}>
                <summary>
                  <span>{faq.question}</span>
                  <i><ChevronDown size={17} /></i>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ==========================================================================
   Contact
   ========================================================================== */

function Contact({ openBrief, onSent }) {
  const [form, setForm] = useState({ name: '', email: '', company: '', interest: contactInterests[0], message: '' })
  const [status, setStatus] = useState({ state: 'idle', message: '' })

  const update = (field) => (event) => {
    setForm((previous) => ({ ...previous, [field]: event.target.value }))
    if (status.state !== 'idle') setStatus({ state: 'idle', message: '' })
  }

  const submit = async (event) => {
    event.preventDefault()
    setStatus({ state: 'sending', message: '' })
    try {
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await response.json().catch(() => ({}))
      if (!response.ok || !data.ok) throw new Error(data.message || 'Something went wrong. Please try again.')
      setStatus({ state: 'sent', message: '' })
      onSent?.('Thank you for reaching out. We will reply within one business day.')
      setForm({ name: '', email: '', company: '', interest: contactInterests[0], message: '' })
    } catch (error) {
      setStatus({ state: 'error', message: error.message })
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="contact__glow" aria-hidden="true" />
      <div className="shell contact__inner">
        <div className="contact__copy">
          <h2>
            <span>Have a raise, a deck or a story in mind?</span>
            <br />
            <span className="contact__copy-muted">Let&apos;s make it investable.</span>
          </h2>
          <p>
            Whether you are raising your first round or your next, our engagements cover the narrative, the
            numbers and the materials that go out with them.
          </p>
          <p className="contact__email">
            Prefer email?{' '}
            <a href="mailto:dhruvgoyal2944@gmail.com">dhruvgoyal2944@gmail.com</a>
          </p>
          <button className="btn btn--ghost" onClick={openBrief}>
            Start the full brief <ArrowUpRight size={15} />
          </button>
        </div>

        <form className="contact__form" onSubmit={submit} noValidate>
          <div className="grid-2">
            <label className="field">
              <span>Name</span>
              <input required value={form.name} onChange={update('name')} placeholder="Jane Doe" autoComplete="name" />
            </label>
            <label className="field">
              <span>Email</span>
              <input required type="email" value={form.email} onChange={update('email')} placeholder="jane@company.com" autoComplete="email" />
            </label>
          </div>
          <label className="field">
            <span>Company <i>optional</i></span>
            <input value={form.company} onChange={update('company')} placeholder="Company name" autoComplete="organization" />
          </label>
          <label className="field">
            <span>I&apos;m interested in</span>
            <div className="select">
              <select value={form.interest} onChange={update('interest')}>
                {contactInterests.map((item) => <option key={item}>{item}</option>)}
              </select>
              <ChevronDown size={16} />
            </div>
          </label>
          <label className="field">
            <span>Message</span>
            <textarea required rows={4} value={form.message} onChange={update('message')} placeholder="Tell us a little about what you're working on…" />
          </label>

          <div className="contact__submit">
            <button className="btn btn--solid" type="submit" disabled={status.state === 'sending'}>
              {status.state === 'sending' ? 'Sending…' : 'Send message'}
              {status.state !== 'sending' && <ArrowUpRight size={15} />}
            </button>
            <p className="contact__shield">
              <ShieldCheck size={14} /> Your details stay private and are never shared.
            </p>
          </div>
          {status.state === 'error' && <p className="field-error" role="alert">{status.message}</p>}
        </form>
      </div>
    </section>
  )
}

/* ==========================================================================
   Toast
   ========================================================================== */

function Toast({ message, onClose }) {
  if (!message) return null
  return (
    <div className="toast" role="status" aria-live="polite">
      <span className="toast__icon"><Check size={18} /></span>
      <div>
        <strong>Message sent</strong>
        <p>{message}</p>
      </div>
      <button type="button" onClick={onClose} aria-label="Dismiss"><X size={16} /></button>
    </div>
  )
}

/* ==========================================================================
   Footer
   ========================================================================== */

function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer__top">
          <nav className="footer__nav" aria-label="Footer navigation">
            <a href="#hero">Home</a>
            {navLinks.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
            <a href="#contact">Contact</a>
          </nav>
          <a className="social" href="mailto:dhruvgoyal2944@gmail.com" aria-label="Email">
            <Mail size={16} />
          </a>
        </div>
        <div className="footer__bottom">
          <div className="footer__legal">
            <p>© {new Date().getFullYear()} DG Global. All rights reserved.</p>
            <a href="#contact">Confidentiality</a>
          </div>
          <div className="footer__stages">
            <span className="footer__stages-label">Working across</span>
            {stagesWorked.map((stage) => <span key={stage}>{stage}</span>)}
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ==========================================================================
   Brief modal
   ========================================================================== */

const briefSteps = [
  { short: 'Company', title: 'First, the essentials.', text: 'A few details so we know who we are speaking with.' },
  { short: 'Business', title: 'Tell us what you build.', text: 'Start with what you know. We will help shape the rest.' },
  { short: 'Proof', title: 'Show us the signal.', text: 'The metrics and milestones that show your business is moving.' },
  { short: 'Raise', title: 'What comes next?', text: 'Give us the goal, the use of funds and your ideal timeline.' },
]

function Field({ label, hint, required, error, children }) {
  return (
    <label className={`bfield ${error ? 'bfield--error' : ''}`}>
      <span className="bfield__label">
        {label}{required && <em>*</em>}{hint && <small>{hint}</small>}
      </span>
      {children}
      {error && <span className="field-error">{error}</span>}
    </label>
  )
}

function BriefModal({ open, onClose }) {
  const [step, setStep] = useState(0)
  const [form, setForm] = useState(() => {
    try {
      const draft = localStorage.getItem('dg-global-pitch-brief')
      return draft ? { ...emptyBrief, ...JSON.parse(draft) } : emptyBrief
    } catch {
      return emptyBrief
    }
  })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [result, setResult] = useState(null)
  const firstFieldRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKeyDown = (event) => {
      if (event.key === 'Escape' && !submitting) onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    const timer = window.setTimeout(() => firstFieldRef.current?.focus(), 200)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
      window.clearTimeout(timer)
    }
  }, [open, onClose, submitting])

  useEffect(() => {
    try {
      localStorage.setItem('dg-global-pitch-brief', JSON.stringify(form))
    } catch {
      // Draft saving is a convenience; the form still works if storage is unavailable.
    }
  }, [form])

  if (!open) return null

  const current = briefSteps[step]

  const update = (field, value) => {
    setForm((previous) => ({ ...previous, [field]: value }))
    setErrors((previous) => {
      if (!previous[field]) return previous
      const next = { ...previous }
      delete next[field]
      return next
    })
  }

  const validateStep = () => {
    const nextErrors = {}
    if (step === 0) {
      if (!form.companyName.trim()) nextErrors.companyName = 'Company name is required.'
      if (!form.contactName.trim()) nextErrors.contactName = 'Your name is required.'
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = 'Enter a valid work email.'
    }
    if (step === 1) {
      if (!form.industry) nextErrors.industry = 'Choose an industry.'
      if (!form.stage) nextErrors.stage = 'Choose your current stage.'
      if (form.businessOverview.trim().length < 20) nextErrors.businessOverview = 'Share at least a couple of sentences.'
      if (!form.customerProblem.trim()) nextErrors.customerProblem = 'Tell us what problem you solve.'
    }
    if (step === 2) {
      if (!form.revenue.trim()) nextErrors.revenue = 'Revenue or current stage is required.'
      if (form.traction.trim().length < 10) nextErrors.traction = 'Share your strongest milestone or traction.'
    }
    if (step === 3) {
      if (!form.raisingAmount.trim()) nextErrors.raisingAmount = 'Target amount is required.'
      if (form.useOfFunds.trim().length < 10) nextErrors.useOfFunds = 'Tell us how you plan to use the funds.'
      if (!form.consent) nextErrors.consent = 'Please confirm that we may contact you.'
    }
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const goNext = () => {
    if (validateStep()) {
      setStep((value) => Math.min(value + 1, briefSteps.length - 1))
      setSubmitError('')
    }
  }

  const goBack = () => {
    setErrors({})
    setSubmitError('')
    setStep((value) => Math.max(value - 1, 0))
  }

  const submit = async () => {
    if (!validateStep()) return
    setSubmitting(true)
    setSubmitError('')
    try {
      const response = await fetch('/api/submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await response.json()
      if (!response.ok || !data.ok) throw new Error(data.message || 'Something went wrong. Please try again.')
      setResult(data)
      localStorage.removeItem('dg-global-pitch-brief')
    } catch (error) {
      setSubmitError(error.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div
      className="modal-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget && !submitting) onClose()
      }}
    >
      <div className="brief" role="dialog" aria-modal="true" aria-labelledby="brief-title">
        <button className="brief__close" type="button" onClick={onClose} disabled={submitting} aria-label="Close brief">
          <X size={18} />
        </button>

        {result ? (
          <div className="brief__success">
            <span className="brief__success-icon"><Check size={30} /></span>
            <span className="kicker kicker--green" style={{ justifyContent: 'center' }}>
              <span className="kicker__rule" />
              <span className="kicker__text">Brief received</span>
              <span className="kicker__rule" />
            </span>
            <h2 id="brief-title">Your story is in good hands.</h2>
            <p>
              Thank you, {form.contactName.split(' ')[0]}. We have received your confidential brief and will
              review it before we speak.
            </p>
            <div className="reference">
              <span>Your reference</span>
              <strong>{result.reference}</strong>
            </div>
            <div className="storyline">
              <span>What happens next</span>
              <strong>Brief <i>→</i> Strategy <i>→</i> Model <i>→</i> Deck</strong>
            </div>
            <button className="btn btn--solid btn--wide" onClick={onClose}>
              Return to the website <ArrowRight size={15} />
            </button>
          </div>
        ) : (
          <>
            <aside className="brief__side">
              <Logo />
              <div>
                <span className="brief__side-label">Confidential by default</span>
                <h3>Raw inputs.<br />Investor-ready story.</h3>
                <p>About four minutes. Your answers save automatically on this device.</p>
                <ul className="brief__side-steps">
                  {briefSteps.map((item, index) => (
                    <li key={item.short}><b>{index + 1}</b> {item.short}</li>
                  ))}
                </ul>
              </div>
              <div className="brief__side-trust">
                <ShieldCheck size={16} />
                <span>
                  <strong>Your information stays private</strong>
                  Used only to prepare your pitch. Never published, never shared.
                </span>
              </div>
            </aside>

            <div className="brief__content">
              <div className="brief__progress">
                {briefSteps.map((item, index) => (
                  <div
                    className={`brief__progress-step ${index === step ? 'is-active' : ''} ${index < step ? 'is-done' : ''}`}
                    key={item.short}
                  >
                    <span>{index < step ? <Check size={12} /> : index + 1}</span>
                    <small>{item.short}</small>
                  </div>
                ))}
              </div>

              <div className="brief__heading">
                <span className="brief__eyebrow">Step {step + 1} of {briefSteps.length}</span>
                <h2 id="brief-title">{current.title}</h2>
                <p>{current.text}</p>
              </div>

              <div className="brief__form">
                {step === 0 && (
                  <>
                    <Field label="Company name" required error={errors.companyName}>
                      <input ref={firstFieldRef} value={form.companyName} onChange={(e) => update('companyName', e.target.value)} placeholder="e.g. Acme Labs" autoComplete="organization" />
                    </Field>
                    <Field label="Website" hint="optional">
                      <input value={form.website} onChange={(e) => update('website', e.target.value)} placeholder="yourcompany.com" />
                    </Field>
                    <div className="grid-2">
                      <Field label="Your name" required error={errors.contactName}>
                        <input value={form.contactName} onChange={(e) => update('contactName', e.target.value)} placeholder="Full name" autoComplete="name" />
                      </Field>
                      <Field label="Work email" required error={errors.email}>
                        <input type="email" value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="you@company.com" autoComplete="email" />
                      </Field>
                    </div>
                    <Field label="Your role" hint="optional">
                      <input value={form.role} onChange={(e) => update('role', e.target.value)} placeholder="Founder & CEO" />
                    </Field>
                  </>
                )}

                {step === 1 && (
                  <>
                    <div className="grid-2">
                      <Field label="Industry" required error={errors.industry}>
                        <div className="select">
                          <select ref={firstFieldRef} value={form.industry} onChange={(e) => update('industry', e.target.value)}>
                            <option value="">Select one</option>
                            {industriesOptions.map((item) => <option key={item}>{item}</option>)}
                          </select>
                          <ChevronDown size={16} />
                        </div>
                      </Field>
                      <Field label="Current stage" required error={errors.stage}>
                        <div className="select">
                          <select value={form.stage} onChange={(e) => update('stage', e.target.value)}>
                            <option value="">Select one</option>
                            {stages.map((item) => <option key={item}>{item}</option>)}
                          </select>
                          <ChevronDown size={16} />
                        </div>
                      </Field>
                    </div>
                    <Field label="In two or three sentences, what does your company do?" required error={errors.businessOverview}>
                      <textarea maxLength={1200} value={form.businessOverview} onChange={(e) => update('businessOverview', e.target.value)} placeholder="We help [customer] to [outcome] by [solution]…" />
                    </Field>
                    <Field label="What customer problem matters most?" required error={errors.customerProblem}>
                      <textarea maxLength={1200} value={form.customerProblem} onChange={(e) => update('customerProblem', e.target.value)} placeholder="What is painful, expensive or frustrating today?" />
                    </Field>
                    <Field label="How does your solution work?" hint="optional">
                      <textarea maxLength={1200} value={form.solution} onChange={(e) => update('solution', e.target.value)} placeholder="Give us the short version — we will help with the rest." />
                    </Field>
                    <Field label="Who do you serve?" hint="optional">
                      <input value={form.targetMarket} onChange={(e) => update('targetMarket', e.target.value)} placeholder="Customer segments, industries, company sizes…" />
                    </Field>
                    <Field label="Why is the market opportunity timely?" hint="optional">
                      <textarea maxLength={1200} value={form.marketOpportunity} onChange={(e) => update('marketOpportunity', e.target.value)} placeholder="Market size, market behavior, technology shifts or a trigger that makes now important." />
                    </Field>
                  </>
                )}

                {step === 2 && (
                  <>
                    <Field label="Current revenue" required error={errors.revenue} hint="write 'Pre-revenue' if not applicable">
                      <div className="input-icon">
                        <CircleDollarSign size={15} />
                        <input ref={firstFieldRef} value={form.revenue} onChange={(e) => update('revenue', e.target.value)} placeholder="e.g. $850K ARR, ₹4.2Cr revenue" />
                      </div>
                    </Field>
                    <div className="grid-2">
                      <Field label="Recent growth" hint="optional">
                        <input value={form.growth} onChange={(e) => update('growth', e.target.value)} placeholder="e.g. 22% MoM" />
                      </Field>
                      <Field label="Customers or users" hint="optional">
                        <input value={form.customers} onChange={(e) => update('customers', e.target.value)} placeholder="e.g. 180 paying customers" />
                      </Field>
                    </div>
                    <Field label="What is your strongest proof of traction?" required error={errors.traction}>
                      <textarea ref={firstFieldRef} maxLength={2000} value={form.traction} onChange={(e) => update('traction', e.target.value)} placeholder="Milestones, growth, retention, partnerships, pilots, awards, customer quotes — anything that shows momentum." />
                    </Field>
                    <div className="grid-2">
                      <Field label="Certifications & partnerships" hint="optional">
                        <input value={form.credentials} onChange={(e) => update('credentials', e.target.value)} placeholder="ISO, enterprise clients, strategic partners…" />
                      </Field>
                      <Field label="Target geography" hint="optional">
                        <input value={form.geography} onChange={(e) => update('geography', e.target.value)} placeholder="e.g. India, SEA, Europe, global" />
                      </Field>
                    </div>
                    <div className="form-tip">
                      <Sparkles size={16} />
                      <span>
                        <strong>Do not overthink the numbers.</strong> A raw, honest picture is more useful than a
                        polished guess. We will shape the right investor narrative together.
                      </span>
                    </div>
                  </>
                )}

                {step === 3 && (
                  <>
                    <div className="grid-2">
                      <Field label="Target raise" required error={errors.raisingAmount}>
                        <div className="input-icon">
                          <CircleDollarSign size={15} />
                          <input ref={firstFieldRef} value={form.raisingAmount} onChange={(e) => update('raisingAmount', e.target.value)} placeholder="e.g. $2M" />
                        </div>
                      </Field>
                      <Field label="Ideal timeline" hint="optional">
                        <div className="input-icon">
                          <Clock3 size={15} />
                          <input value={form.targetDate} onChange={(e) => update('targetDate', e.target.value)} placeholder="e.g. Q2 2027" />
                        </div>
                      </Field>
                    </div>
                    <Field label="How will you use the funds?" required error={errors.useOfFunds}>
                      <textarea maxLength={2000} value={form.useOfFunds} onChange={(e) => update('useOfFunds', e.target.value)} placeholder="Hiring, product, market expansion, operations…" />
                    </Field>
                    <Field label="Existing deck link" hint="optional">
                      <input value={form.existingDeck} onChange={(e) => update('existingDeck', e.target.value)} placeholder="Google Drive, Figma or Dropbox link" />
                    </Field>
                    <Field label="Team, SWOT, competitors & next steps" hint="optional">
                      <textarea maxLength={2000} value={form.notes} onChange={(e) => update('notes', e.target.value)} placeholder="Your team and advisors, key strengths or gaps, competitive alternatives, investor feedback and upcoming milestones…" />
                    </Field>
                    <label className={`consent ${errors.consent ? 'consent--error' : ''}`}>
                      <input type="checkbox" checked={form.consent} onChange={(e) => update('consent', e.target.checked)} />
                      <span className="consent__box"><Check size={12} /></span>
                      <span>I agree that DG Global may contact me about this brief. I understand my information will be treated as confidential.</span>
                    </label>
                    {errors.consent && <span className="field-error">{errors.consent}</span>}
                    {submitError && <p className="submit-error" role="alert">{submitError}</p>}
                  </>
                )}
              </div>

              <div className="brief__actions">
                <button className="btn btn--quiet" type="button" onClick={step === 0 ? onClose : goBack} disabled={submitting}>
                  {step === 0 ? 'Cancel' : 'Back'}
                </button>
                {step < briefSteps.length - 1 ? (
                  <button className="btn btn--solid" type="button" onClick={goNext}>Continue <ArrowRight size={15} /></button>
                ) : (
                  <button className="btn btn--solid" type="button" onClick={submit} disabled={submitting}>
                    {submitting ? 'Sending securely…' : <>Send my brief <ArrowUpRight size={15} /></>}
                  </button>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

/* ==========================================================================
   App
   ========================================================================== */

function App() {
  const [briefOpen, setBriefOpen] = useState(false)
  const [toast, setToast] = useState('')
  useReveal()

  useEffect(() => {
    if (!toast) return undefined
    const timer = window.setTimeout(() => setToast(''), 6000)
    return () => window.clearTimeout(timer)
  }, [toast])

  const openBrief = () => setBriefOpen(true)

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header openBrief={openBrief} />

      <main id="main">
        <Hero openBrief={openBrief} />
        <About />
        <Industries openBrief={openBrief} />
        <Services openBrief={openBrief} />
        <Process openBrief={openBrief} />
        <Work />
        <Founder />
        <Faq openBrief={openBrief} />
        <Contact openBrief={openBrief} onSent={setToast} />
      </main>

      <Footer />
      <Toast message={toast} onClose={() => setToast('')} />
      <BriefModal open={briefOpen} onClose={() => setBriefOpen(false)} />
    </>
  )
}

export default App
