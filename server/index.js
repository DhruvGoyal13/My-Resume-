import express from 'express'
import { promises as fs } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { randomBytes } from 'node:crypto'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')
const dataDir = path.join(rootDir, 'data')
const dataFile = path.join(dataDir, 'submissions.json')
const distDir = path.join(rootDir, 'dist')
const port = Number(process.env.PORT) || 3001

const app = express()
app.disable('x-powered-by')
app.use(express.json({ limit: '1mb' }))
app.use((_req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff')
  res.setHeader('X-Frame-Options', 'SAMEORIGIN')
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin')
  next()
})

const requests = new Map()
const WINDOW_MS = 10 * 60 * 1000
const MAX_REQUESTS = 8

app.post('/api/submissions', async (req, res) => {
  const now = Date.now()
  const key = req.ip || 'unknown'
  const previous = requests.get(key) || { count: 0, startedAt: now }

  if (now - previous.startedAt > WINDOW_MS) {
    requests.set(key, { count: 1, startedAt: now })
  } else {
    previous.count += 1
    requests.set(key, previous)
    if (previous.count > MAX_REQUESTS) {
      return res.status(429).json({
        ok: false,
        message: 'Too many submission attempts. Please try again in a few minutes.',
      })
    }
  }

  const body = req.body || {}
  const text = (value, max = 2000) =>
    typeof value === 'string' ? value.trim().slice(0, max) : ''

  const submission = {
    companyName: text(body.companyName, 160),
    website: text(body.website, 240),
    contactName: text(body.contactName, 160),
    email: text(body.email, 200).toLowerCase(),
    role: text(body.role, 120),
    industry: text(body.industry, 120),
    stage: text(body.stage, 120),
    businessOverview: text(body.businessOverview),
    customerProblem: text(body.customerProblem),
    solution: text(body.solution),
    targetMarket: text(body.targetMarket, 1200),
    marketOpportunity: text(body.marketOpportunity, 2000),
    revenue: text(body.revenue, 240),
    growth: text(body.growth, 1000),
    customers: text(body.customers, 1000),
    traction: text(body.traction, 2000),
    credentials: text(body.credentials, 1500),
    geography: text(body.geography, 1000),
    raisingAmount: text(body.raisingAmount, 240),
    useOfFunds: text(body.useOfFunds, 2000),
    targetDate: text(body.targetDate, 120),
    existingDeck: text(body.existingDeck, 500),
    notes: text(body.notes, 2000),
    consent: body.consent === true,
  }

  const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(submission.email)
  const missing = []

  if (!submission.companyName) missing.push('companyName')
  if (!submission.contactName) missing.push('contactName')
  if (!emailIsValid) missing.push('email')
  if (!submission.businessOverview) missing.push('businessOverview')
  if (!submission.revenue) missing.push('revenue')
  if (!submission.traction) missing.push('traction')
  if (!submission.consent) missing.push('consent')

  if (missing.length) {
    return res.status(400).json({
      ok: false,
      message: 'Please complete all required fields before submitting.',
      fields: missing,
    })
  }

  const reference = `DG-${new Date().getUTCFullYear()}-${randomBytes(3).toString('hex').toUpperCase()}`
  const record = {
    reference,
    submittedAt: new Date().toISOString(),
    data: submission,
  }

  try {
    await enqueueWrite(record)
    return res.status(201).json({
      ok: true,
      reference,
      message: 'Your confidential brief has been received.',
    })
  } catch (error) {
    console.error('Could not save submission:', error)
    return res.status(500).json({
      ok: false,
      message: 'We could not save your brief right now. Please try again shortly.',
    })
  }
})

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'dg-global-pitch-studio' })
})

app.use('/api', (_req, res) => {
  res.status(404).json({ ok: false, message: 'API route not found.' })
})

let writeQueue = Promise.resolve()

function enqueueWrite(record) {
  writeQueue = writeQueue.then(async () => {
    await fs.mkdir(dataDir, { recursive: true })

    let submissions = []
    try {
      const existing = await fs.readFile(dataFile, 'utf8')
      const parsed = JSON.parse(existing)
      if (Array.isArray(parsed)) submissions = parsed
    } catch (error) {
      if (error.code !== 'ENOENT') console.warn('Starting a new submissions file:', error.message)
    }

    submissions.push(record)
    const tempFile = `${dataFile}.tmp`
    await fs.writeFile(tempFile, JSON.stringify(submissions, null, 2), 'utf8')
    await fs.rename(tempFile, dataFile)
  })

  return writeQueue
}

try {
  await fs.access(distDir)
  app.use(express.static(distDir))
  app.use((req, res, next) => {
    if (req.method === 'GET' && req.accepts('html')) {
      return res.sendFile(path.join(distDir, 'index.html'))
    }
    return next()
  })
} catch {
  app.get('/', (_req, res) => {
    res.status(200).send('DG Global API is running. Start Vite on port 5173 for development.')
  })
}

app.listen(port, () => {
  console.log(`DG Global server listening on http://localhost:${port}`)
})
