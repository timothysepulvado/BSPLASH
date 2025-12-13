# BrandStudios.AI Splash Page

## Project Overview

A "coming soon" splash page for BrandStudios.AI featuring email signup functionality.

**Live URL:** https://www.brandstudios.ai
**Repo:** https://github.com/timothysepulvado/BSPLASH.git
**Vercel Project:** cloud-city

## Tech Stack

- **Frontend:** Static HTML/CSS/JS
- **Animation:** Lottie (dots.json)
- **Email Signups:** Mailchimp API (List ID: b5d57fbac2, DC: us7)
- **Hosting:** Vercel
- **Fonts:** PP Editorial New (headlines), Poppins (body/input)

## Project Structure

```
bsplash/
├── index.html          # Main splash page
├── style.css           # Main styles (fluid responsive with clamp)
├── script.js           # Lottie init + form handling + cookie consent
├── vercel.json         # Vercel config (static site)
├── HANDOFF.md          # Session handoff notes
├── OVERVIEW.md         # This file
├── api/
│   └── subscribe.js    # Mailchimp signup serverless function
└── assets/
    ├── fonts/          # PP Editorial New woff2 files
    ├── images/         # logo.png
    └── json/           # dots.json (Lottie animation)
```

## Brand Colors

- Dark Blue: #0F1956
- Orange: #ED4C14
- Background Gray: #EBEBEB

## Environment Variables (Vercel)

- `MAILCHIMP_API_KEY` - Mailchimp API key (format: xxxx-us7)

## Branches

- `main` - Production (deployed to brandstudios.ai)
- `new` - Development branch
- `tim-dev` - Older dev branch (different UI)

## Deployment

```bash
# Local dev
vercel dev

# Deploy to production
vercel --prod
```

## Features (All Complete)

- Animated Lottie dots loader
- Signup form (First Name, Last Name, Email)
- Mailchimp integration for email collection
- Cookie consent banner
- Privacy/Terms links in header
- Fluid responsive design with clamp() typography
- iOS Safari mobile fixes
- "SUBMIT" button with loading/success states
