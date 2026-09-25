# DG Global Pitch Studio

A responsive marketing website and confidential pitch-deck intake portal for a consultancy with 12+ years of experience.

## Run locally

```bash
npm install
npm run dev
```

- Website: `http://localhost:5173`
- API: `http://localhost:3001`
- Submissions: `data/submissions.json` (created after the first form submission and excluded from Git)

## Production

```bash
npm run build
npm start
```

The Express server serves the production site and intake API from `http://localhost:3001` by default. Set `PORT` to override it.

## Customize

- Brand name, content, services, FAQs, and intake options: `src/App.jsx`
- DG Global logo artwork: `public/dg-global-logo.svg` and `public/dg-global-logo-light.svg`
- Favicon artwork: `public/favicon.svg`
- Colors, typography, spacing, and responsive styling: `src/styles.css`
- Metadata: `index.html`
- Submission validation and persistence: `server/index.js`

## Contact

- Phone: [+91 98766 54294](tel:+919876654294)
- Email: [dhruvgoyal2944@gmail.com](mailto:dhruvgoyal2944@gmail.com)

Before a public launch, connect `/api/submissions` to your CRM, database, or encrypted intake provider, and add the final legal and privacy copy.
