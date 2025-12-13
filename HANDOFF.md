# Handoff - BrandStudios.AI Splash Page

## Current Status (Dec 12, 2025)

**Branch:** `new` (development branch)
**Last commit:** `16eb857` - Remove phone field and change button text to SUBMIT
**Live URL:** https://www.brandstudios.ai

### Production Status: DEPLOYED

All features deployed and working on `main`:

- **Mailchimp Integration** - Email signups working
  - API Key in Vercel env: `MAILCHIMP_API_KEY`
  - List ID: `b5d57fbac2` (BrandStudios.AI list)
  - Data center: `us7`

- **Form Layout** - Grid-based form with:
  - First Name | Last Name (side by side on desktop, stacked on mobile)
  - Email Address (full width)
  - "SUBMIT" button with loading spinner, success states

- **Mobile Responsiveness** - Fully working
  - Fluid typography with clamp()
  - iOS Safari viewport fixes
  - Scrolling fixed
  - Form width constrained on mobile

- **Cookie Banner** - Cookie consent with Accept/Decline
  - Saves to localStorage
  - Slides up after 1 second on first visit

- **Legal Links** - Privacy | Terms links in top-left header

### Key Files

- `index.html` - Main splash page
- `style.css` - Styles with fluid responsive design
- `script.js` - Cookie handling, form submission with loading states
- `api/subscribe.js` - Mailchimp API serverless function

### Commands

```bash
# Local dev
vercel dev

# Deploy to production
vercel --prod
```

### Environment Variables (Vercel)

```
MAILCHIMP_API_KEY=<configured in Vercel>
```

### Branches

- `main` - Production (deployed to brandstudios.ai)
- `new` - Development branch (this one)
- `tim-dev` - Older dev branch (different UI)
