import { useEffect, useRef, useState } from 'react'
import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleDollarSign,
  ClipboardCheck,
  Clock3,
  Compass,
  FileSpreadsheet,
  FileText,
  Gauge,
  Globe2,
  Handshake,
  Landmark,
  LineChart,
  Lock,
  Mail,
  Menu,
  Phone,
  Presentation,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  X,
} from 'lucide-react'

/* ==========================================================================
   Positioning
   ========================================================================== */

const answers = [
  {
    number: '01',
    question: 'What do you do?',
    answer:
      'We build the fundraising package investors respond to — pitch decks, financial models and the supporting materials that go out with them.',
  },
  {
    number: '02',
    question: 'Who do you help?',
    answer:
      'Startups and growing businesses raising capital, from pre-seed and seed through Series A, growth rounds and beyond.',
  },
  {
    number: '03',
    question: 'Why should I trust you?',
    answer:
      'Founder-led by a finance and transaction advisory practitioner — 12+ years across financial modelling, M&A and investor communication.',
  },
]

/* ==========================================================================
   What we do
   ========================================================================== */

const services = [
  {
    number: '01',
    icon: Presentation,
    title: 'Pitch decks',
    text: 'Investor-focused presentations that clearly communicate the business opportunity — structured so an investor understands the thesis, the proof and the ask without friction.',
    points: ['12–16 slides', 'Investor-tested structure', 'Editable source file'],
  },
  {
    number: '02',
    icon: LineChart,
    title: 'Financial modeling',
    text: 'Revenue projections, unit economics, assumptions and financial forecasts — driver-based, documented and defensible under diligence.',
    points: ['Driver-based model', 'Unit economics', 'Scenarios & sensitivity'],
  },
  {
    number: '03',
    icon: FileText,
    title: 'Investor materials',
    text: 'Teasers, one-pagers, investment memos and supporting documents that carry the same story consistently across every investor conversation.',
    points: ['Teaser & one-pager', 'Investment memo', 'Data room support'],
  },
  {
    number: '04',
    icon: Target,
    title: 'Fundraising strategy',
    text: 'Positioning the company, identifying the right investor profile and preparing the fundraising story before a single slide is designed.',
    points: ['Investor profiling', 'Raise sizing', 'Positioning & story'],
  },
]

/* ==========================================================================
   Process
   ========================================================================== */

const processSteps = [
  {
    number: '01',
    title: 'Understand',
    summary: 'We learn the business before we shape the story.',
    text: 'We understand your business, market, financials and fundraising objective. Nothing is written until we can explain your business back to you in one clear sentence.',
    duration: 'Week 1',
    outputs: [
      'Business, market and financial diagnostic',
      'Unit economics and traction review',
      'Fundraising objective, raise size and investor profile',
    ],
  },
  {
    number: '02',
    title: 'Build',
    summary: 'We develop the investment story, structure and visual presentation.',
    text: 'We develop the investment story, structure and visual presentation — the narrative, the financial model and the deck designed together so the numbers and the argument agree.',
    duration: 'Weeks 2–3',
    outputs: [
      'Investment narrative and deck structure',
      'Driver-based financial model with documented assumptions',
      'Designed deck, teaser and one-pager — first draft',
    ],
  },
  {
    number: '03',
    title: 'Refine',
    summary: 'We stress-test the narrative around investor expectations.',
    text: 'We stress-test the narrative and refine the deck around investor expectations — the objections a partner will raise, the numbers that need defending, and the slides that are not earning their place.',
    duration: 'Week 4',
    outputs: [
      'Investor-style stress test and Q&A bank',
      'Narrative, number and design revisions',
      'Founder rehearsal and delivery coaching',
    ],
  },
  {
    number: '04',
    title: 'Deliver',
    summary: 'You receive a polished, investor-ready fundraising package.',
    text: 'You receive a polished, investor-ready fundraising package — final deck, model, supporting documents and a clear picture of how to run the process from here.',
    duration: 'Week 5+',
    outputs: [
      'Final deck, teaser, one-pager and memo',
      'Editable model with an assumptions appendix',
      'Support through investor meetings and follow-ups',
    ],
  },
]

/* ==========================================================================
   Our work
   ========================================================================== */

const deckSections = [
  ['01', 'Company overview', 'What you do, who you serve, your vision and credentials'],
  ['02', 'Problem & market', 'Why the problem matters now, market size and timing'],
  ['03', 'Product & solution', 'Platform deep dive, workflow and customer journey'],
  ['04', 'Differentiation', 'Why you win, and the customers and geographies you target'],
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

/* ==========================================================================
   Industries
   ========================================================================== */

const industries = [
  {
    name: 'SaaS & Technology',
    text: 'Recurring revenue businesses where retention, unit economics and expansion tell the story.',
  },
  {
    name: 'FinTech',
    text: 'Regulated, data-heavy models that need a clear bridge from product to economics.',
  },
  {
    name: 'Consumer & D2C',
    text: 'Brand, cohort and repeat-purchase businesses with fast-moving marketing economics.',
  },
  {
    name: 'Healthcare',
    text: 'Long sales cycles, clinical evidence and reimbursement logic investors test closely.',
  },
  {
    name: 'EdTech',
    text: 'Outcomes-driven platforms that must prove impact, not just usage.',
  },
  {
    name: 'Marketplace & Services',
    text: 'Two-sided businesses where supply, liquidity and take rate drive the model.',
  },
  {
    name: 'Manufacturing',
    text: 'Asset and supply-chain businesses with margin, capacity and capex storylines.',
  },
  {
    name: 'Climate & Sustainability',
    text: 'Capital-intensive, mission-led companies raising on a long payback horizon.',
  },
]

/* ==========================================================================
   About
   ========================================================================== */

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
    icon: Compass,
    title: 'Fundraising strategy',
    text: 'Positioning the company, identifying the right investor profile, sequencing the raise and preparing the story before any slide is designed.',
  },
  {
    icon: Users,
    title: 'Businesses we work with',
    text: 'Pre-seed through growth-stage companies across SaaS, fintech, consumer, healthcare, marketplaces, industrial and climate businesses — plus the founders raising their first round.',
  },
]

const stats = [
  ['12+', 'Years in finance & advisory'],
  ['100%', 'Founder-led engagements'],
  ['4–6 wks', 'Typical deck timeline'],
  ['Pre-seed → B', 'Stages supported'],
]

/* ==========================================================================
   FAQ
   ========================================================================== */

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

/* ==========================================================================
   Intake modal — form data
   ========================================================================== */

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

/* ==========================================================================
   Shared components
   ========================================================================== */

function Logo({ light = false }) {
  return (
    <a className="logo" href="#top" aria-label="DG Global — home">
      <img
        className="brand-logo"
        src={light ? '/dg-global-logo-light.svg' : '/dg-global-logo.svg'}
        alt="DG Global"
        width="252"
        height="56"
      />
    </a>
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
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])
}

function SectionIntro({ kicker, title, text, light = false }) {
  return (
    <div className={`section-intro reveal ${light ? 'section-intro--light' : ''}`}>
      <span className="kicker">{kicker}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  )
}

/* ==========================================================================
   Header
   ========================================================================== */

const navLinks = [
  ['Services', '#services'],
  ['Our Work', '#work'],
  ['Process', '#process'],
  ['Industries', '#industries'],
  ['About', '#about'],
  ['Contact', '#contact'],
]

function Header({ openBrief }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={`site-header ${scrolled ? 'site-header--scrolled' : ''} ${menuOpen ? 'site-header--menu-open' : ''}`}
    >
      <div className="container header__inner">
        <Logo light={!scrolled || menuOpen} />
        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`} aria-label="Main navigation">
          {navLinks.map(([label, href]) => (
            <a key={href} href={href} onClick={closeMenu}>
              {label}
            </a>
          ))}
          <button
            className="button button--brass button--small header__mobile-cta"
            onClick={() => {
              closeMenu()
              openBrief()
            }}
          >
            Book a consultation <ArrowRight size={16} />
          </button>
        </nav>
        <div className="header__actions">
          <button className="button button--small" onClick={openBrief}>
            Book a consultation <ArrowRight size={16} />
          </button>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  )
}

/* ==========================================================================
   Hero
   ========================================================================== */

const kpis = [
  { label: 'Revenue CAGR', value: '68%', note: '3-year plan' },
  { label: 'Gross margin', value: '82%', note: 'Year 3' },
  { label: 'Burn multiple', value: '1.4×', note: 'Disciplined' },
]

const barGeometry = [
  { x: 12, y: 96 },
  { x: 76, y: 76 },
  { x: 140, y: 56 },
  { x: 204, y: 36 },
  { x: 268, y: 18 },
]

function HeroPanel() {
  return (
    <div className="hero__panel">
      <div className="panel">
        <div className="panel__bar">
          <span>Illustrative model output</span>
          <span>Driver-based · 5 year</span>
        </div>
        <div className="panel__body">
          <div className="panel__kpis">
            {kpis.map((kpi) => (
              <div className="panel__kpi" key={kpi.label}>
                <span>{kpi.label}</span>
                <strong>{kpi.value}</strong>
                <small>{kpi.note}</small>
              </div>
            ))}
          </div>

          <div className="chart">
            <div className="chart__head">
              <span>Revenue build &amp; EBITDA margin</span>
              <div className="chart__legend">
                <span><i className="fill" />Revenue</span>
                <span><i className="line" />Margin</span>
              </div>
            </div>
            <svg className="chart__svg" viewBox="0 0 320 126" role="img" aria-label="Bar chart of projected revenue over five years with an EBITDA margin line trending upward">
              {[18, 52, 86].map((y) => (
                <line key={y} className="chart__grid-line" x1="0" y1={y} x2="320" y2={y} />
              ))}
              <line className="chart__axis" x1="0" y1="120" x2="320" y2="120" />
              {barGeometry.map((bar, index) => (
                <rect
                  key={bar.x}
                  className={index === barGeometry.length - 1 ? 'chart__bar chart__bar--last' : 'chart__bar'}
                  x={bar.x}
                  y={bar.y}
                  width="40"
                  height={120 - bar.y}
                />
              ))}
              <path
                className="chart__line"
                d="M32 104 L96 97 L160 90 L224 83 L288 76"
              />
            </svg>
            <div className="chart__labels" aria-hidden="true">
              <span>Year 1</span>
              <span>Year 2</span>
              <span>Year 3</span>
              <span>Year 4</span>
              <span>Year 5</span>
            </div>
          </div>

          <p className="panel__foot">
            <Gauge size={16} />
            Every assumption is documented, stress-tested and defensible under diligence.
          </p>
        </div>
      </div>

      <div className="panel-badge">
        <span className="panel-badge__icon"><BarChart3 size={17} /></span>
        <span>
          <small>Standard output</small>
          <strong>Deck + model + teaser</strong>
        </span>
      </div>
    </div>
  )
}

function Hero({ openBrief }) {
  return (
    <section className="hero" id="top">
      <div className="hero__inner">
        <div className="container hero__main">
          <div className="hero__content">
            <div className="hero__eyebrow">Fundraising advisory &amp; investor communication</div>
            <h1>
              Investor-ready pitch decks, financial storytelling and <em>fundraising materials.</em>
            </h1>
            <p className="hero__lede">
              For startups and growing businesses. We turn complex operations, markets and financials into
              the clear, credible package an investor can act on.
            </p>
            <div className="hero__actions">
              <button className="button button--brass" onClick={openBrief}>
                Book a consultation <ArrowRight size={17} />
              </button>
              <a className="text-link text-link--light" href="#services">
                What we do
              </a>
            </div>
            <div className="hero__note">
              <span><Check size={14} /> Founder-led, start to finish</span>
              <span><Lock size={14} /> Confidential by default</span>
              <span><Clock3 size={14} /> 4–6 week typical timeline</span>
            </div>
          </div>
          <HeroPanel />
        </div>

        <div className="container">
          <div className="hero__answers">
            {answers.map((item) => (
              <div className="answer" key={item.number}>
                <div className="answer__q">{item.number}</div>
                <h2>{item.question}</h2>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ==========================================================================
   Services
   ========================================================================== */

function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-head">
          <SectionIntro
            kicker="What we do"
            title={<>Fundraising support, <em>end to end.</em></>}
            text="Four specific engagements that can be taken individually or run as one package. Every number, claim and slide is built to survive investor diligence."
          />
          <div className="section-head__aside reveal">
            <strong>One senior team</strong>
            No handoffs to a slide factory. The person who shapes your strategy is the person who designs your deck and models your financials.
          </div>
        </div>

        <div className="services__grid">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <article className="service-card reveal" style={{ '--delay': `${index * 60}ms` }} key={service.number}>
                <div className="service-card__top">
                  <span>{service.number}</span>
                  <span className="service-card__icon"><Icon size={20} /></span>
                </div>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <ul className="service-card__list">
                    {service.points.map((point) => <li key={point}>{point}</li>)}
                  </ul>
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
   Process — interactive
   ========================================================================== */

function Process({ openBrief }) {
  const [active, setActive] = useState(0)
  const tabRefs = useRef([])
  const current = processSteps[active]

  const onTabKeyDown = (event, index) => {
    const forward = { ArrowRight: 1, ArrowDown: 1 }
    const backward = { ArrowLeft: -1, ArrowUp: -1 }
    const last = processSteps.length - 1

    if (event.key in forward) {
      event.preventDefault()
      const next = (index + forward[event.key] + processSteps.length) % processSteps.length
      setActive(next)
      tabRefs.current[next]?.focus()
    } else if (event.key in backward) {
      event.preventDefault()
      const next = (index + backward[event.key] + processSteps.length) % processSteps.length
      setActive(next)
      tabRefs.current[next]?.focus()
    } else if (event.key === 'Home') {
      event.preventDefault()
      setActive(0)
      tabRefs.current[0]?.focus()
    } else if (event.key === 'End') {
      event.preventDefault()
      setActive(last)
      tabRefs.current[last]?.focus()
    }
  }

  return (
    <section className="section section--grey" id="process">
      <div className="container">
        <div className="section-head">
          <SectionIntro
            kicker="Our process"
            title={<>What happens after <em>you contact us.</em></>}
            text="A defined four-step engagement with agreed milestones, so you always know what is being worked on, what you need to send, and what you receive at the end."
          />
          <div className="section-head__aside reveal">
            <strong>Five weeks, four steps</strong>
            Select a step to see what happens in it and exactly what you receive when it closes.
          </div>
        </div>

        <div className="process__layout reveal">
          <div className="process-tabs" role="tablist" aria-label="Engagement process" aria-orientation="vertical">
            {processSteps.map((step, index) => (
              <button
                key={step.number}
                ref={(node) => { tabRefs.current[index] = node }}
                className="process-tab"
                type="button"
                role="tab"
                id={`process-tab-${index}`}
                aria-selected={active === index}
                aria-controls="process-panel"
                tabIndex={active === index ? 0 : -1}
                onClick={() => setActive(index)}
                onKeyDown={(event) => onTabKeyDown(event, index)}
              >
                <span className="process-tab__num">{step.number}</span>
                <span>
                  <h3>{step.title}</h3>
                  <p>{step.summary}</p>
                </span>
              </button>
            ))}
          </div>

          <div
            className="process-detail"
            role="tabpanel"
            id="process-panel"
            aria-labelledby={`process-tab-${active}`}
          >
            <div className="process-detail__meta">
              <span>
                Step {current.number} of {String(processSteps.length).padStart(2, '0')}
              </span>
              <em>{current.duration}</em>
            </div>
            <h3>{current.title}</h3>
            <p className="process-detail__lede">{current.text}</p>
            <p className="process-detail__label">What you get at the end of this step</p>
            <ul className="process-outputs">
              {current.outputs.map((output) => (
                <li key={output}>
                  <Check size={15} />
                  {output}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="process__foot reveal">
          <p>
            <strong>You approve at every milestone.</strong> Narrative, model and design are reviewed with you before
            anything moves forward, so nothing reaches investors that you have not signed off.
          </p>
          <button className="button button--navy" onClick={openBrief}>
            Start with a consultation <ArrowRight size={17} />
          </button>
        </div>
      </div>
    </section>
  )
}

/* ==========================================================================
   Our work
   ========================================================================== */

function Work() {
  return (
    <section className="section" id="work">
      <div className="container">
        <div className="section-head">
          <SectionIntro
            kicker="Our work"
            title={<>The package you <em>actually receive.</em></>}
            text="Client decks and models are shared under NDA, but the structure below is what we build every time — a deliberate flow where each section removes the next investor objection."
          />
          <div className="section-head__aside reveal">
            <strong>Nine sections, one argument</strong>
            Every chapter earns the next. If a slide does not move the decision forward, it comes out.
          </div>
        </div>

        <div className="work__layout">
          <div className="work-list">
            {deckSections.map(([number, title, text], index) => (
              <div className="work-list__item reveal" style={{ '--delay': `${index * 35}ms` }} key={number}>
                <span>{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>

          <aside className="work__aside">
            <div className="spec-card reveal">
              <div className="spec-card__head">
                <span>Illustrative model output</span>
                <LineChart size={15} />
              </div>
              <div className="spec-card__rows">
                {modelRows.map(([label, value]) => (
                  <div className="spec-row" key={label}>
                    <span>{label}</span>
                    <strong className="up">{value}</strong>
                  </div>
                ))}
              </div>
            </div>

            <div className="spec-card reveal">
              <div className="spec-card__head">
                <span>Typical engagement</span>
                <ClipboardCheck size={15} />
              </div>
              <div className="spec-card__rows">
                {engagementRows.map(([label, value]) => (
                  <div className="spec-row" key={label}>
                    <span>{label}</span>
                    <strong>{value}</strong>
                  </div>
                ))}
              </div>
            </div>

            <div className="work__note reveal">
              <Lock size={17} />
              <div>
                <strong>Confidential by default</strong>
                Sample decks and models are shared under NDA during a consultation. Your information is never published or passed to third parties.
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

/* ==========================================================================
   Industries
   ========================================================================== */

function Industries() {
  return (
    <section className="section section--navy" id="industries">
      <div className="container">
        <div className="section-head">
          <SectionIntro
            light
            kicker="Industries we work with"
            title={<>We know how your <em>market reads a number.</em></>}
            text="Every sector has its own definition of proof, its own diligence traps and its own investor profile. We adapt the story to the room you are actually in."
          />
          <div className="section-head__aside reveal">
            <strong>Sector fluency, not sector labels</strong>
            We build the benchmark, the metric hierarchy and the proof points your investors expect to see.
          </div>
        </div>

        <div className="industries__grid">
          {industries.map((industry, index) => (
            <article className="industry reveal" style={{ '--delay': `${index * 40}ms` }} key={industry.name}>
              <span className="industry__num">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3>{industry.name}</h3>
                <p>{industry.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="industries__foot reveal">
          <p>
            Don't see your sector? We work across business models rather than a fixed list — if it has revenue,
            unit economics and a growth story, we can build the case for it.
          </p>
          <a className="link-arrow" href="#contact">
            Discuss your sector <ArrowRight size={16} />
          </a>
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
    <section className="section about" id="about">
      <div className="container">
        <div className="section-head">
          <SectionIntro
            kicker="About DG Global"
            title={<>You are trusting us with a <em>fundraising process.</em></>}
            text="So the background matters. DG Global was built by someone who has sat on the other side of the table — modelling businesses, negotiating transactions and defending numbers to investors."
          />
          <div className="section-head__aside reveal">
            <strong>Fundraising advisory and investor communication</strong>
            A single senior practitioner stays on your file from the first conversation to the last investor follow-up.
          </div>
        </div>

        <div className="about__layout">
          <div className="founder reveal">
            <div className="founder__head">
              <div className="founder__avatar" aria-hidden="true">DG</div>
              <div>
                <div className="founder__name">Dhruv Goyal</div>
                <div className="founder__role">Founder &amp; Principal</div>
              </div>
            </div>
            <div className="founder__body">
              <p>
                Dhruv founded DG Global to close a gap he kept hitting from inside finance and advisory work:
                businesses with real traction were losing investor meetings because their story was hard to follow,
                their numbers were not defensible, or both.
              </p>
              <p>
                The practice brings together three things a fundraising package needs and rarely gets in one place —
                financial rigour, transaction judgement and clear investor communication. The same person who frames
                your strategy builds your model, writes your deck and rehearses your delivery.
              </p>
            </div>
            <div className="founder__contact">
              <a href="tel:+919876654294"><Phone size={15} />+91 98766 54294</a>
              <a href="mailto:dhruvgoyal2944@gmail.com"><Mail size={15} />dhruvgoyal2944@gmail.com</a>
            </div>
          </div>

          <div className="credentials">
            {credentials.map((item, index) => {
              const Icon = item.icon
              return (
                <div className="credential reveal" style={{ '--delay': `${index * 50}ms` }} key={item.title}>
                  <span className="credential__icon"><Icon size={19} /></span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="stat-strip reveal">
          {stats.map(([value, label]) => (
            <div className="stat" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
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
      <div className="container faq__layout">
        <div className="faq__intro">
          <SectionIntro kicker="Good to know" title={<>Questions before you <em>share your story?</em></>} />
          <p className="reveal">
            Still deciding whether we are the right fit? Start with a confidential brief — there is no commitment
            and no hard sell.
          </p>
          <button className="text-link reveal" onClick={openBrief}>
            Tell us about your company
          </button>
        </div>
        <div className="faq__list">
          {faqs.map((faq, index) => (
            <details className="faq-item reveal" style={{ '--delay': `${index * 40}ms` }} key={faq.question}>
              <summary>
                <span>{faq.question}</span>
                <i><ChevronDown size={17} /></i>
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ==========================================================================
   Contact
   ========================================================================== */

const contactRows = [
  { icon: Clock3, label: 'Time to complete', value: 'About 4 minutes' },
  { icon: Lock, label: 'Your information', value: 'Treated as confidential' },
  { icon: FileText, label: 'What you get', value: 'A structured starting point' },
]

function Contact({ openBrief }) {
  return (
    <section className="contact" id="contact">
      <div className="container contact__layout">
        <div className="contact__copy">
          <span className="kicker kicker--light">Book a consultation</span>
          <h2>
            Your business likely has more potential than your deck <em>currently shows.</em>
          </h2>
          <p>
            Share the raw details — business, numbers, traction, the raise. We will help you find the sharp,
            credible story inside them, and tell you honestly whether we are the right firm for the job.
          </p>
          <button className="button button--brass" onClick={openBrief}>
            Start my confidential brief <ArrowRight size={17} />
          </button>
          <div className="contact__meta">
            <a href="tel:+919876654294"><Phone size={15} />+91 98766 54294</a>
            <a href="mailto:dhruvgoyal2944@gmail.com"><Mail size={15} />dhruvgoyal2944@gmail.com</a>
          </div>
        </div>

        <div className="contact__card">
          <div className="contact__card-head">Before we speak</div>
          <div className="contact__rows">
            {contactRows.map((row) => {
              const Icon = row.icon
              return (
                <div className="contact__row" key={row.label}>
                  <span className="contact__row-icon"><Icon size={17} /></span>
                  <span>
                    <small>{row.label}</small>
                    <strong>{row.value}</strong>
                  </span>
                </div>
              )
            })}
          </div>
          <div className="contact__card-foot">
            <button className="button button--outline-light" onClick={openBrief}>
              Begin the brief <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ==========================================================================
   Footer
   ========================================================================== */

function Footer({ openBrief }) {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <Logo light />
          <p>
            Fundraising advisory and investor communication. Investor-ready pitch decks, financial storytelling
            and fundraising materials for startups and growing businesses.
          </p>
          <div className="footer__contact">
            <a href="tel:+919876654294"><Phone size={14} />+91 98766 54294</a>
            <a href="mailto:dhruvgoyal2944@gmail.com"><Mail size={14} />dhruvgoyal2944@gmail.com</a>
          </div>
        </div>
        <div className="footer__nav">
          <span>Explore</span>
          {navLinks.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </div>
        <div className="footer__cta">
          <p>Raising in the next six months? Start the conversation early — it materially improves the outcome.</p>
          <button className="button button--brass button--small" onClick={openBrief}>
            Book a consultation <ArrowRight size={16} />
          </button>
        </div>
      </div>
      <div className="container footer__bottom">
        <p>© {new Date().getFullYear()} DG Global. All rights reserved.</p>
        <p>Strategy <em>•</em> Financial modelling <em>•</em> Investor communication</p>
      </div>
    </footer>
  )
}

/* ==========================================================================
   Consultation modal
   ========================================================================== */

const briefSteps = [
  { short: 'Company', title: 'First, the essentials.', text: 'A few details so we know who we are speaking with.' },
  { short: 'Business', title: 'Tell us what you build.', text: 'Start with what you know. We will help shape the rest.' },
  { short: 'Proof', title: 'Show us the signal.', text: 'The metrics and milestones that show your business is moving.' },
  { short: 'Raise', title: 'What comes next?', text: 'Give us the goal, the use of funds and your ideal timeline.' },
]

function Field({ label, hint, required, error, children }) {
  return (
    <label className={`form-field ${error ? 'form-field--error' : ''}`}>
      <span className="form-field__label">
        {label}{required && <em>*</em>}{hint && <small>{hint}</small>}
      </span>
      {children}
      {error && <span className="field-error">{error}</span>}
    </label>
  )
}

function IntakeModal({ open, onClose }) {
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

  const steps = briefSteps

  useEffect(() => {
    if (!open) return undefined
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKeyDown = (event) => {
      if (event.key === 'Escape' && !submitting) onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    const focusTimer = window.setTimeout(() => firstFieldRef.current?.focus(), 180)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
      window.clearTimeout(focusTimer)
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

  const current = steps[step]

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
      setStep((value) => Math.min(value + 1, steps.length - 1))
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
      <div className="brief-modal" role="dialog" aria-modal="true" aria-labelledby="brief-title">
        <button className="brief-modal__close" type="button" onClick={onClose} disabled={submitting} aria-label="Close brief">
          <X size={19} />
        </button>

        {result ? (
          <div className="brief-success">
            <div className="brief-success__icon"><Check size={32} /></div>
            <span className="eyebrow">Brief received</span>
            <h2 id="brief-title">Your story is in good hands.</h2>
            <p>
              Thank you, {form.contactName.split(' ')[0]}. We have received your confidential brief and will review
              it before we speak.
            </p>
            <div className="reference-card">
              <span>Your reference</span>
              <strong>{result.reference}</strong>
            </div>
            <div className="success-storyline">
              <span>What happens next</span>
              <strong>Brief <i>→</i> Strategy <i>→</i> Model <i>→</i> Deck</strong>
            </div>
            <button className="button button--navy button--wide" onClick={onClose}>
              Return to the website <ArrowRight size={17} />
            </button>
          </div>
        ) : (
          <>
            <aside className="brief-sidebar">
              <Logo light />
              <div>
                <span className="brief-sidebar__label">Confidential by default</span>
                <h3>Raw inputs.<br />Investor-ready story.</h3>
                <p>About four minutes. Your answers save automatically on this device.</p>
                <ul className="brief-sidebar__steps">
                  {briefSteps.map((item, index) => (
                    <li key={item.short}><b>{index + 1}</b> {item.short}</li>
                  ))}
                </ul>
              </div>
              <div className="brief-sidebar__trust">
                <ShieldCheck size={16} />
                <span>
                  <strong>Your information stays private</strong>
                  Used only to prepare your pitch. Never published, never shared.
                </span>
              </div>
            </aside>

            <div className="brief-content">
              <div className="brief-progress" aria-label={`Step ${step + 1} of ${steps.length}`}>
                {steps.map((item, index) => (
                  <div
                    className={`brief-progress__step ${index === step ? 'is-active' : ''} ${index < step ? 'is-complete' : ''}`}
                    key={item.short}
                  >
                    <span>{index < step ? <Check size={13} /> : index + 1}</span>
                    <small>{item.short}</small>
                  </div>
                ))}
              </div>

              <div className="brief-content__heading">
                <span className="eyebrow">Step {step + 1} of {steps.length}</span>
                <h2 id="brief-title">{current.title}</h2>
                <p>{current.text}</p>
              </div>

              <div className="brief-form">
                {step === 0 && (
                  <>
                    <Field label="Company name" required error={errors.companyName}>
                      <input ref={firstFieldRef} value={form.companyName} onChange={(e) => update('companyName', e.target.value)} placeholder="e.g. Acme Labs" autoComplete="organization" />
                    </Field>
                    <Field label="Website" hint="Optional">
                      <div className="input-with-icon"><Globe2 size={16} /><input value={form.website} onChange={(e) => update('website', e.target.value)} placeholder="yourcompany.com" /></div>
                    </Field>
                    <div className="form-grid form-grid--two">
                      <Field label="Your name" required error={errors.contactName}>
                        <input value={form.contactName} onChange={(e) => update('contactName', e.target.value)} placeholder="Full name" autoComplete="name" />
                      </Field>
                      <Field label="Work email" required error={errors.email}>
                        <input type="email" value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="you@company.com" autoComplete="email" />
                      </Field>
                    </div>
                    <Field label="Your role" hint="Optional">
                      <input value={form.role} onChange={(e) => update('role', e.target.value)} placeholder="Founder & CEO" />
                    </Field>
                  </>
                )}

                {step === 1 && (
                  <>
                    <div className="form-grid form-grid--two">
                      <Field label="Industry" required error={errors.industry}>
                        <div className="select-wrap">
                          <select ref={firstFieldRef} value={form.industry} onChange={(e) => update('industry', e.target.value)}>
                            <option value="">Select one</option>
                            {industriesOptions.map((item) => <option key={item}>{item}</option>)}
                          </select>
                          <ChevronDown size={16} />
                        </div>
                      </Field>
                      <Field label="Current stage" required error={errors.stage}>
                        <div className="select-wrap">
                          <select value={form.stage} onChange={(e) => update('stage', e.target.value)}>
                            <option value="">Select one</option>
                            {stages.map((item) => <option key={item}>{item}</option>)}
                          </select>
                          <ChevronDown size={16} />
                        </div>
                      </Field>
                    </div>
                    <Field label="In two or three sentences, what does your company do?" required error={errors.businessOverview} hint={`${form.businessOverview.length}/1,200`}>
                      <textarea ref={firstFieldRef} maxLength={1200} value={form.businessOverview} onChange={(e) => update('businessOverview', e.target.value)} placeholder="We help [customer] to [outcome] by [solution]…" />
                    </Field>
                    <Field label="What customer problem matters most?" required error={errors.customerProblem}>
                      <textarea maxLength={1200} value={form.customerProblem} onChange={(e) => update('customerProblem', e.target.value)} placeholder="What is painful, expensive or frustrating today?" />
                    </Field>
                    <Field label="How does your solution work?" hint="Optional">
                      <textarea maxLength={1200} value={form.solution} onChange={(e) => update('solution', e.target.value)} placeholder="Give us the short version — we will help with the rest." />
                    </Field>
                    <Field label="Who do you serve?" hint="Optional">
                      <input value={form.targetMarket} onChange={(e) => update('targetMarket', e.target.value)} placeholder="Customer segments, industries, company sizes…" />
                    </Field>
                    <Field label="Why is the market opportunity timely?" hint="Optional">
                      <textarea maxLength={1200} value={form.marketOpportunity} onChange={(e) => update('marketOpportunity', e.target.value)} placeholder="Market size, market behavior, technology shifts or a trigger that makes now important." />
                    </Field>
                  </>
                )}

                {step === 2 && (
                  <>
                    <Field label="Current revenue" required error={errors.revenue} hint="Enter 'Pre-revenue' if not applicable">
                      <div className="input-with-icon"><CircleDollarSign size={16} /><input ref={firstFieldRef} value={form.revenue} onChange={(e) => update('revenue', e.target.value)} placeholder="e.g. $850K ARR, ₹4.2Cr revenue" /></div>
                    </Field>
                    <div className="form-grid form-grid--two">
                      <Field label="Recent growth" hint="Optional">
                        <input value={form.growth} onChange={(e) => update('growth', e.target.value)} placeholder="e.g. 22% MoM" />
                      </Field>
                      <Field label="Customers or users" hint="Optional">
                        <input value={form.customers} onChange={(e) => update('customers', e.target.value)} placeholder="e.g. 180 paying customers" />
                      </Field>
                    </div>
                    <Field label="What is your strongest proof of traction?" required error={errors.traction}>
                      <textarea maxLength={2000} value={form.traction} onChange={(e) => update('traction', e.target.value)} placeholder="Share milestones, growth, retention, partnerships, pilots, awards, customer quotes — anything that shows momentum." />
                    </Field>
                    <div className="form-grid form-grid--two">
                      <Field label="Certifications & partnerships" hint="Optional">
                        <input value={form.credentials} onChange={(e) => update('credentials', e.target.value)} placeholder="ISO, enterprise clients, strategic partners…" />
                      </Field>
                      <Field label="Target geography" hint="Optional">
                        <input value={form.geography} onChange={(e) => update('geography', e.target.value)} placeholder="e.g. India, SEA, Europe, global" />
                      </Field>
                    </div>
                    <div className="form-tip">
                      <Sparkles size={17} />
                      <span>
                        <strong>Do not overthink the numbers.</strong> A raw, honest picture is more useful than a
                        polished guess. We will shape the right investor narrative together.
                      </span>
                    </div>
                  </>
                )}

                {step === 3 && (
                  <>
                    <div className="form-grid form-grid--two">
                      <Field label="Target raise" required error={errors.raisingAmount}>
                        <div className="input-with-icon"><CircleDollarSign size={16} /><input ref={firstFieldRef} value={form.raisingAmount} onChange={(e) => update('raisingAmount', e.target.value)} placeholder="e.g. $2M" /></div>
                      </Field>
                      <Field label="Ideal timeline" hint="Optional">
                        <div className="input-with-icon"><Clock3 size={16} /><input value={form.targetDate} onChange={(e) => update('targetDate', e.target.value)} placeholder="e.g. Q2 2027" /></div>
                      </Field>
                    </div>
                    <Field label="How will you use the funds?" required error={errors.useOfFunds}>
                      <textarea maxLength={2000} value={form.useOfFunds} onChange={(e) => update('useOfFunds', e.target.value)} placeholder="Hiring, product, market expansion, operations…" />
                    </Field>
                    <Field label="Existing deck link" hint="Optional">
                      <div className="input-with-icon"><FileText size={16} /><input value={form.existingDeck} onChange={(e) => update('existingDeck', e.target.value)} placeholder="Google Drive, Figma or Dropbox link" /></div>
                    </Field>
                    <Field label="Team, SWOT, competitors & next steps" hint="Optional">
                      <textarea maxLength={2000} value={form.notes} onChange={(e) => update('notes', e.target.value)} placeholder="Share your team and advisors, key strengths or gaps, competitive alternatives, investor feedback and upcoming milestones…" />
                    </Field>
                    <label className={`consent ${errors.consent ? 'consent--error' : ''}`}>
                      <input type="checkbox" checked={form.consent} onChange={(e) => update('consent', e.target.checked)} />
                      <span className="consent__box"><Check size={13} /></span>
                      <span>I agree that DG Global may contact me about this brief. I understand my information will be treated as confidential.</span>
                    </label>
                    {errors.consent && <span className="field-error">{errors.consent}</span>}
                    {submitError && <div className="submit-error" role="alert">{submitError}</div>}
                  </>
                )}
              </div>

              <div className="brief-actions">
                <button className="button button--ghost" type="button" onClick={step === 0 ? onClose : goBack} disabled={submitting}>
                  {step === 0 ? <X size={16} /> : <ChevronLeft size={16} />}
                  {step === 0 ? 'Cancel' : 'Back'}
                </button>
                {step < steps.length - 1 ? (
                  <button className="button button--navy" type="button" onClick={goNext}>Continue <ChevronRight size={17} /></button>
                ) : (
                  <button className="button button--navy" type="button" onClick={submit} disabled={submitting}>
                    {submitting ? <><span className="spinner" /> Sending securely…</> : <>Send my brief <ArrowRight size={17} /></>}
                  </button>
                )}
              </div>
              <div className="autosave-note"><ShieldCheck size={14} /> Draft saved on this device</div>
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
  const openBrief = () => setBriefOpen(true)
  useReveal()

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header openBrief={openBrief} />

      <main id="main">
        <Hero openBrief={openBrief} />
        <Services />
        <Work />
        <Process openBrief={openBrief} />
        <Industries />
        <About />
        <Faq openBrief={openBrief} />
        <Contact openBrief={openBrief} />
      </main>

      <Footer openBrief={openBrief} />

      <IntakeModal open={briefOpen} onClose={() => setBriefOpen(false)} />
    </>
  )
}

export default App
