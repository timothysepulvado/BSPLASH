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
├── privacy.html        # Privacy Policy
├── terms.html          # Terms of Service
├── style.css           # Main styles
├── legal.css           # Legal page styles
├── script.js           # Lottie init + form handling + cookie consent
├── vercel.json         # Vercel config (static site)
├── HANDOFF.md          # Current session handoff notes
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
- `NEXT_PUBLIC_SUPABASE_URL` - (legacy, commented out)
- `SUPABASE_API_KEY` - (legacy, commented out)

## Branches

- `main` - Production-ready code
- `new` - Current working branch with Mailchimp integration
- `tim-dev` - Older dev branch (different UI)

## Deployment

```bash
# Local dev
vercel dev

# Deploy to production
vercel --prod
```

## Features

- Animated Lottie dots loader
- Multi-field signup form (First Name, Last Name, Email, Phone optional)
- Mailchimp integration for email collection
- Cookie consent banner
- Privacy/Terms links in header
- Responsive design (needs testing on mobile)
- "REQUEST ACCESS" button with loading/success states
