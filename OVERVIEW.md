# BrandStudios.AI Splash Page

## Project Overview

A "coming soon" splash page for BrandStudios.AI featuring email signup functionality.

**Live URL:** https://www.brandstudios.ai
**Repo:** https://github.com/timothysepulvado/BSPLASH.git
**Vercel Project:** cloud-city

## Tech Stack

- **Frontend:** Static HTML/CSS/JS
- **Animation:** Lottie (dots.json)
- **Database:** Supabase (cnimajaxjchgkubixuls)
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
├── script.js           # Lottie init + email form handling
├── vercel.json         # Vercel config (static site)
├── api/
│   └── subscribe.js    # Email signup serverless function
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

- `NEXT_PUBLIC_SUPABASE_URL` - https://cnimajaxjchgkubixuls.supabase.co
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Supabase publishable key
- `SUPABASE_API_KEY` - Supabase secret key (for API)

## Branches

- `main` - Production-ready code
- `tim-dev` - Development branch with latest updates

## Deployment

```bash
# Link to cloud-city project (one-time)
vercel link --project cloud-city --yes

# Deploy to production
vercel --prod
```

## Features

- Animated Lottie dots loader
- Email signup form saves to Supabase `email_signups` table
- Responsive design
- Privacy Policy & Terms of Service pages
- Subtle legal links in top-left corner
- On-brand styling throughout
