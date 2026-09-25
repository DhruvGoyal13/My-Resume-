import { useEffect, useRef, useState } from 'react'
import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  Building2,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleDollarSign,
  Clock3,
  FileText,
  Globe2,
  Layers3,
  Mail,
  Menu,
  Phone,
  Presentation,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  X,
  Zap,
} from 'lucide-react'

const services = [
  {
    number: '01',
    icon: Target,
    title: 'Pitch strategy',
    text: 'We find the sharpest version of your story, then structure every slide around the decisions investors need to make.',
    tag: 'Positioning',
  },
  {
    number: '02',
    icon: BarChart3,
    title: 'Financial storytelling',
    text: 'Revenue, market, unit economics and forecasts become a credible growth case—not a collection of disconnected numbers.',
    tag: 'Evidence',
  },
  {
    number: '03',
    icon: Presentation,
    title: 'Investor deck design',
    text: 'Clear hierarchy, persuasive visuals and precise language turn your business into a presentation people remember.',
    tag: 'Design',
  },
  {
    number: '04',
    icon: Users,
    title: 'Founder storytelling',
    text: 'Practice the narrative with us so you can speak with clarity, confidence and consistency when the room gets live.',
    tag: 'Coaching',
  },
]

const process = [
  {
    number: '01',
    title: 'Discover',
    text: 'We learn the business, market, ambition and investor context.',
  },
  {
    number: '02',
    title: 'Distill',
    text: 'We turn complex inputs into one clear, evidence-led storyline.',
  },
  {
    number: '03',
    title: 'Build',
    text: 'We develop, write and design the deck slide by slide.',
  },
  {
    number: '04',
    title: 'Rehearse',
    text: 'We pressure-test the story and prepare you to present it.',
  },
]

const deckSections = [
  ['01', 'Open with clarity', 'Cover, important context and the one-line company thesis'],
  ['02', 'Company at a glance', 'What you do, who you serve, your vision and credentials'],
  ['03', 'Problem & market', 'Why the problem matters now, market size and timing'],
  ['04', 'Product & solution', 'Platform deep dive, workflow and complete customer journey'],
  ['05', 'Differentiation & market', 'Why you win and the customers and geographies you target'],
  ['06', 'Traction & validation', 'Growth, milestones, partnerships and credible proof'],
  ['07', 'Business model & financials', 'Revenue model, performance, projections and CAGR'],
  ['08', 'Competitive position', 'SWOT, alternatives and the defensible competitive landscape'],
  ['09', 'Team, raise & close', 'Team, advisors, capital use and why invest now'],
]

const faqs = [
  {
    question: 'When should we involve you?',
    answer:
      'The best time is usually six to ten weeks before a fundraising process begins. That gives us enough time to validate the story, build the financial narrative and create a deck that works in the room—not just on screen.',
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
    question: 'What do you need from us?',
    answer:
      'Start with the guided brief on this website. We will also need access to any existing materials, product information, financial model and market research you already have. You do not need to make the story presentable—we will shape it with you.',
  },
  {
    question: 'Can you keep our information confidential?',
    answer:
      'Absolutely. Your brief is treated as confidential business information. We only use it to prepare your pitch and never publish it or share it with third parties without your permission.',
  },
]

const industries = [
  'B2B SaaS',
  'Consumer',
  'Fintech',
  'Healthtech',
  'AI / Data',
  'Climate',
  'E-commerce',
  'Industrials',
  'Other',
]

const stages = [
  'Idea / pre-product',
  'Pre-seed',
  'Seed',
  'Series A',
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

function Logo({ light = false }) {
  return (
    <a className={`logo ${light ? 'logo--light' : ''}`} href="#top" aria-label="DG Global home">
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
      { threshold: 0.12 },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])
}

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

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <div className="container header__inner">
        <Logo light={!scrolled && !menuOpen} />
        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`} aria-label="Main navigation">
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#approach" onClick={closeMenu}>Approach</a>
          <a href="#deck" onClick={closeMenu}>Deck anatomy</a>
          <a href="#faq" onClick={closeMenu}>FAQ</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <button className="button button--small button--dark header__mobile-cta" onClick={() => { closeMenu(); openBrief() }}>
            Start your brief <ArrowRight size={16} />
          </button>
        </nav>
        <div className="header__actions">
          <button className="button button--small button--dark" onClick={openBrief}>
            Start your brief <ArrowRight size={16} />
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

function HeroVisual() {
  return (
    <div className="hero-visual" aria-label="A preview of an investor pitch slide">
      <div className="hero-visual__orb hero-visual__orb--one" />
      <div className="hero-visual__orb hero-visual__orb--two" />
      <div className="deck-window">
        <div className="deck-window__bar">
          <div className="window-dots"><i /><i /><i /></div>
          <span>Example deck · Series A</span>
          <span className="deck-window__count">07 / 14</span>
        </div>
        <div className="deck-window__body">
          <aside className="deck-sidebar">
            <span className="deck-sidebar__label">Story flow</span>
            {['Thesis', 'Problem', 'Product', 'Market', 'Traction'].map((item, index) => (
              <div className={`deck-sidebar__item ${index === 3 ? 'is-active' : ''}`} key={item}>
                <span>0{index + 1}</span>{item}
              </div>
            ))}
          </aside>
          <div className="deck-slide">
            <div className="deck-slide__eyebrow">The market opportunity</div>
            <h3>A large market is useful. A timely market wins.</h3>
            <div className="market-chart">
              <div className="market-chart__labels">
                <span>Now</span><span>+3 yrs</span><span>+5 yrs</span>
              </div>
              <svg viewBox="0 0 360 118" role="img" aria-label="Market growth chart">
                <defs>
                  <linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#d9ff63" stopOpacity=".45" />
                    <stop offset="100%" stopColor="#d9ff63" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path className="chart-line" d="M4 104 C68 99 72 85 125 87 S192 70 218 61 S280 30 356 10" />
                <path fill="url(#chartFill)" d="M4 104 C68 99 72 85 125 87 S192 70 218 61 S280 30 356 10 L356 118 L4 118 Z" />
                <circle cx="356" cy="10" r="5" />
              </svg>
              <div className="market-chart__metric">
                <strong>3.4×</strong>
                <span>category growth</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="proof-card proof-card--top">
        <span className="proof-card__icon"><TrendingUp size={17} /></span>
        <span><small>ARR growth</small><strong>+186% YoY</strong></span>
      </div>
      <div className="proof-card proof-card--bottom">
        <span className="proof-card__icon proof-card__icon--orange"><Building2 size={17} /></span>
        <span><small>Active customers</small><strong>1,240+</strong></span>
        <span className="proof-card__check"><Check size={13} /></span>
      </div>
      <div className="visual-stamp">
        <span>12+</span>
        <small>years of<br />deck craft</small>
      </div>
    </div>
  )
}

function SectionIntro({ kicker, title, text, light = false }) {
  return (
    <div className={`section-intro reveal ${light ? 'section-intro--light' : ''}`}>
      <div className="kicker"><span />{kicker}</div>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  )
}

function IntakeModal({ open, onClose }) {
  const initialStep = 0
  const [step, setStep] = useState(initialStep)
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

  const steps = [
    { short: 'Company', title: 'First, the essentials.', text: 'A few details so we know who we are speaking with.' },
    { short: 'Business', title: 'Tell us what you build.', text: 'Start with what you know. We will help shape the rest.' },
    { short: 'Proof', title: 'Show us the signal.', text: 'The metrics and milestones that show your business is moving.' },
    { short: 'Raise', title: 'What comes next?', text: 'Give us the goal, the use of funds and your ideal timeline.' },
  ]

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
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => {
      if (event.target === event.currentTarget && !submitting) onClose()
    }}>
      <div className="brief-modal" role="dialog" aria-modal="true" aria-labelledby="brief-title">
        <button className="brief-modal__close" type="button" onClick={onClose} disabled={submitting} aria-label="Close brief">
          <X size={20} />
        </button>

        {result ? (
          <div className="brief-success">
            <div className="brief-success__icon"><Check size={34} /></div>
            <span className="eyebrow">Brief received</span>
            <h2 id="brief-title">Your story is in good hands.</h2>
            <p>Thank you, {form.contactName.split(' ')[0]}. We have received your confidential brief and will review it before we speak.</p>
            <div className="reference-card">
              <span>Your reference</span>
              <strong>{result.reference}</strong>
            </div>
            <div className="success-storyline">
              <span>What happens next</span>
              <strong>Brief <i>→</i> Strategy <i>→</i> Story <i>→</i> Slides</strong>
            </div>
            <button className="button button--dark button--wide" onClick={onClose}>Return to the website <ArrowRight size={17} /></button>
          </div>
        ) : (
          <>
            <aside className="brief-sidebar">
              <Logo light />
              <div>
                <span className="brief-sidebar__label">Your deck starts here.</span>
                <h3>Raw inputs.<br />Investor-ready story.</h3>
                <p>About four minutes. Your answers save automatically on this device.</p>
              </div>
              <div className="brief-sidebar__trust">
                <ShieldCheck size={17} />
                <span><strong>Confidential by default</strong>Your information is used only to prepare your pitch.</span>
              </div>
            </aside>

            <div className="brief-content">
              <div className="brief-progress" aria-label={`Step ${step + 1} of ${steps.length}`}>
                {steps.map((item, index) => (
                  <div className={`brief-progress__step ${index === step ? 'is-active' : ''} ${index < step ? 'is-complete' : ''}`} key={item.short}>
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
                            {industries.map((item) => <option key={item}>{item}</option>)}
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
                      <textarea maxLength={1200} value={form.solution} onChange={(e) => update('solution', e.target.value)} placeholder="Give us the short version—we will help with the rest." />
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
                    <Field label="Current revenue" required error={errors.revenue} hint="Enter ‘Pre-revenue’ if not applicable">
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
                      <textarea maxLength={2000} value={form.traction} onChange={(e) => update('traction', e.target.value)} placeholder="Share milestones, growth, retention, partnerships, pilots, awards, customer quotes—anything that shows momentum." />
                    </Field>
                    <div className="form-grid form-grid--two">
                      <Field label="Certifications & partnerships" hint="Optional">
                        <input value={form.credentials} onChange={(e) => update('credentials', e.target.value)} placeholder="ISO, enterprise clients, strategic partners…" />
                      </Field>
                      <Field label="Target geography" hint="Optional">
                        <input value={form.geography} onChange={(e) => update('geography', e.target.value)} placeholder="e.g. India, SEA, Europe, global" />
                      </Field>
                    </div>
                    <div className="form-tip"><Sparkles size={17} /><span><strong>Do not overthink the numbers.</strong> A raw, honest picture is more useful than a polished guess. We will shape the right investor narrative together.</span></div>
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
                  <button className="button button--dark" type="button" onClick={goNext}>Continue <ChevronRight size={17} /></button>
                ) : (
                  <button className="button button--dark" type="button" onClick={submit} disabled={submitting}>
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

function Field({ label, hint, required, error, children }) {
  return (
    <label className={`form-field ${error ? 'form-field--error' : ''}`}>
      <span className="form-field__label">{label}{required && <em>*</em>}{hint && <small>{hint}</small>}</span>
      {children}
      {error && <span className="field-error">{error}</span>}
    </label>
  )
}

function App() {
  const [briefOpen, setBriefOpen] = useState(false)
  useReveal()

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header openBrief={() => setBriefOpen(true)} />

      <main id="main">
        <section className="hero" id="top">
          <div className="hero__noise" />
          <div className="container hero__grid">
            <div className="hero__content">
              <div className="hero__eyebrow"><span className="hero__eyebrow-dot" /> Pitch strategy, narrative & design <span>12+ years</span></div>
              <h1>Turn your traction into a story <em>investors remember.</em></h1>
              <p className="hero__lede">We help ambitious founders transform complex businesses into clear, credible and beautifully designed pitch decks.</p>
              <div className="hero__actions">
                <button className="button button--lime" onClick={() => setBriefOpen(true)}>Build my pitch deck <ArrowRight size={18} /></button>
                <a className="text-link" href="#approach">See how we work <ArrowDown size={17} /></a>
              </div>
              <div className="hero__proof">
                <div className="avatar-stack" aria-hidden="true">
                  <span>DG</span><span>↗</span><span>✓</span>
                </div>
                <p><strong>Founder-led from day one.</strong><br />A senior expert stays close to your story.</p>
              </div>
            </div>
            <HeroVisual />
          </div>
          <div className="container hero__footer">
            <div><span>12+</span><p>years of<br />deck craft</p></div>
            <div><span>100%</span><p>founder-led<br />attention</p></div>
            <div><span>End-to-end</span><p>strategy to<br />final slide</p></div>
            <p className="hero__scroll">Scroll to explore <span><ArrowDown size={15} /></span></p>
          </div>
        </section>

        <section className="sector-strip" aria-label="Industries served">
          <div className="container">
            <p>Storytelling for ambitious teams across</p>
            <div>
              {['B2B SAAS', 'CONSUMER', 'FINTECH', 'HEALTHTECH', 'AI & DATA', 'CLIMATE'].map((sector) => <span key={sector}>{sector}</span>)}
            </div>
          </div>
        </section>

        <section className="section services" id="services">
          <div className="container">
            <div className="services__heading-row">
              <SectionIntro
                kicker="What we do"
                title={<>A good deck is not decoration. <span>It is a decision tool.</span></>}
                text="We connect your business data, market insight and founder knowledge into one persuasive, coherent story."
              />
              <p className="section-note reveal"><Zap size={18} /><span><strong>One senior team.</strong>No handoffs, no generic templates, no slide factory.</span></p>
            </div>
            <div className="services__grid">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <article className="service-card reveal" style={{ '--delay': `${index * 70}ms` }} key={service.title}>
                    <div className="service-card__top"><span>{service.number}</span><Icon size={24} /></div>
                    <div>
                      <span className="service-card__tag">{service.tag}</span>
                      <h3>{service.title}</h3>
                      <p>{service.text}</p>
                    </div>
                    <div className="service-card__arrow"><ArrowRight size={18} /></div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="statement">
          <div className="container statement__inner">
            <div className="statement__mark reveal"><span>“</span></div>
            <div className="statement__copy reveal">
              <span className="kicker kicker--light"><span />Our point of view</span>
              <h2>Fundraising is not just <em>what you say.</em> It is how clearly the room can <span>see the future with you.</span></h2>
              <p>We reduce noise, sharpen the evidence and make every slide earn its place. The result is a deck that feels as credible as the business behind it.</p>
              <button className="button button--outline-light" onClick={() => setBriefOpen(true)}>Start with your story <ArrowRight size={17} /></button>
            </div>
          </div>
          <div className="statement__graphic" aria-hidden="true">
            <span className="statement__circle statement__circle--one" />
            <span className="statement__circle statement__circle--two" />
            <span className="statement__line statement__line--one" />
            <span className="statement__line statement__line--two" />
            <span className="statement__cross statement__cross--one">+</span>
            <span className="statement__cross statement__cross--two">+</span>
          </div>
        </section>

        <section className="section deck" id="deck">
          <div className="container deck__grid">
            <div className="deck__visual reveal">
              <div className="mini-deck">
                <div className="mini-deck__top"><span>dg global / brief to investor story</span><span>01 — 09</span></div>
                <div className="mini-deck__slide">
                  <div className="mini-deck__number">01</div>
                  <div>
                    <span>OPEN WITH THE ANSWER</span>
                    <h3>Start with the reason to care.</h3>
                    <p>The submitted brief becomes a clear path from business context to market, product, proof and the raise.</p>
                  </div>
                  <div className="mini-deck__rule" />
                </div>
                <div className="mini-deck__dots"><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
              </div>
              <div className="narrative-card">
                <span><Sparkles size={18} /></span>
                <div><small>The narrative test</small><strong>Can someone repeat your story after one read?</strong></div>
              </div>
            </div>
            <div className="deck__content">
              <SectionIntro
                kicker="After you submit · Deck flow"
                title={<>Your brief becomes a <span>clear investor narrative.</span></>}
                text="We organize the information you share into a deliberate deck flow—each chapter removes doubt and earns the next."
              />
              <div className="deck-list">
                {deckSections.map(([number, title, text], index) => (
                  <div className="deck-list__item reveal" style={{ '--delay': `${index * 35}ms` }} key={number}>
                    <span>{number}</span><div><h3>{title}</h3><p>{text}</p></div><ArrowRight size={17} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section approach" id="approach">
          <div className="container">
            <div className="approach__heading">
              <SectionIntro
                kicker="Our approach"
                title={<>Clarity first. <span>Craft everywhere.</span></>}
                text="A focused, collaborative process that respects your time and gets to the heart of the business."
              />
              <div className="approach__badge reveal"><span>12+</span><p>years turning<br />complexity into clarity</p></div>
            </div>
            <div className="process">
              {process.map((item, index) => (
                <article className="process__step reveal" style={{ '--delay': `${index * 80}ms` }} key={item.number}>
                  <div className="process__top"><span>{item.number}</span>{index < process.length - 1 && <i />}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
            <div className="approach__detail reveal">
              <div className="approach__detail-icon"><Layers3 size={25} /></div>
              <div><span>What you leave with</span><h3>Not just slides—a pitch you can own.</h3></div>
              <p>A clear strategic narrative, an investor-ready deck, a source-of-truth document and the confidence to tell the story live.</p>
              <button className="icon-button" onClick={() => setBriefOpen(true)} aria-label="Start your project brief"><ArrowRight size={21} /></button>
            </div>
          </div>
        </section>

        <section className="difference">
          <div className="container difference__grid">
            <div className="difference__heading reveal">
              <span className="kicker"><span />Why DG Global</span>
              <h2>Built for the questions investors will actually ask.</h2>
            </div>
            <div className="difference__items">
              <div className="difference__item reveal">
                <span>01</span><div><h3>Strategy before slides</h3><p>We resolve the core narrative before touching the presentation.</p></div>
              </div>
              <div className="difference__item reveal">
                <span>02</span><div><h3>Evidence over adjectives</h3><p>Every claim connects to a fact, insight or measurable proof point.</p></div>
              </div>
              <div className="difference__item reveal">
                <span>03</span><div><h3>Design with intent</h3><p>Every visual helps the investor understand, compare and remember.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section faq" id="faq">
          <div className="container faq__grid">
            <div className="faq__intro">
              <SectionIntro kicker="Good to know" title={<>Questions before you <span>share your story?</span></>} />
              <p className="reveal">Still wondering whether we are the right fit? Start with your brief—there is no commitment and no hard sell.</p>
              <button className="text-link text-link--dark reveal" onClick={() => setBriefOpen(true)}>Tell us about your company <ArrowRight size={17} /></button>
            </div>
            <div className="faq__list">
              {faqs.map((faq, index) => (
                <details className="faq-item reveal" style={{ '--delay': `${index * 45}ms` }} key={faq.question}>
                  <summary><span>{faq.question}</span><i><ChevronDown size={18} /></i></summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta" id="contact">
          <div className="container final-cta__inner">
            <div className="final-cta__copy reveal">
              <span className="kicker kicker--light"><span />Your next round starts here</span>
              <h2>Your business has more potential than your deck shows.</h2>
              <p>Share the raw details. We will help you find the sharp, credible story inside them.</p>
              <button className="button button--lime" onClick={() => setBriefOpen(true)}>Start my confidential brief <ArrowRight size={18} /></button>
              <div className="direct-contact" aria-label="Direct contact details">
                <span>Prefer to talk?</span>
                <a href="tel:+919876654294"><Phone size={14} />+91 98766 54294</a>
                <a href="mailto:dhruvgoyal2944@gmail.com"><Mail size={14} />dhruvgoyal2944@gmail.com</a>
              </div>
            </div>
            <div className="final-cta__side reveal">
              <div><Clock3 size={18} /><span><small>Time to complete</small><strong>About 4 minutes</strong></span></div>
              <div><ShieldCheck size={18} /><span><small>Your information</small><strong>Treated as confidential</strong></span></div>
              <div><FileText size={18} /><span><small>What you get</small><strong>A structured starting point</strong></span></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__top">
          <div>
            <Logo light />
            <p>Pitch strategy, narrative and design for ambitious companies.</p>
            <div className="footer__contact">
              <a href="tel:+919876654294"><Phone size={13} />+91 98766 54294</a>
              <a href="mailto:dhruvgoyal2944@gmail.com"><Mail size={13} />dhruvgoyal2944@gmail.com</a>
            </div>
          </div>
          <div className="footer__links"><a href="#services">Services</a><a href="#approach">Approach</a><a href="#deck">Deck anatomy</a><a href="#faq">FAQ</a></div>
          <button className="footer__cta" onClick={() => setBriefOpen(true)}>Start a project <ArrowRight size={17} /></button>
        </div>
        <div className="container footer__bottom">
          <p>© {new Date().getFullYear()} DG Global Pitch Studio. All rights reserved.</p>
          <p>Strategy <span>•</span> Narrative <span>•</span> Design</p>
        </div>
      </footer>

      <IntakeModal open={briefOpen} onClose={() => setBriefOpen(false)} />
    </>
  )
}

export default App
