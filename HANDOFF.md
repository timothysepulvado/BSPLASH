# Handoff - BrandStudios.AI Splash Page

## Current Status (Dec 11, 2025)

**Branch:** `main` (production)
**Last commit:** `3e72ad0` - Merge: Mobile responsive redesign with Mailchimp integration
**Live URL:** https://www.brandstudios.ai

### Production Status: COMPLETE

All features deployed and working:

- **Mailchimp Integration** - Email signups working
  - API Key in Vercel env: `MAILCHIMP_API_KEY`
  - List ID: `b5d57fbac2` (BrandStudios.AI list)
  - Data center: `us7`

- **Form Layout** - Grid-based form with:
  - First Name | Last Name (side by side on desktop, stacked on mobile)
  - Email Address (full width)
  - Phone Number optional (full width)
  - "REQUEST ACCESS" button with loading spinner, success states

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

- `main` - Production (current, deployed)
- `tim-dev` - Older dev branch (different UI)

### Recent Commits

```
3e72ad0 Merge: Mobile responsive redesign with Mailchimp integration
9e5f781 Constrain form width on mobile for better proportions
29877e8 Add package.json for ESM support and fix Vercel config
d0722e7 Implement fluid responsive design with clamp() typography
a067797 Fix mobile responsiveness for iOS Safari
```
