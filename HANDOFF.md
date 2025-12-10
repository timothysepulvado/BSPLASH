# Handoff - BrandStudios.AI Splash Page

## Current Status (Dec 10, 2025)

**Branch:** `new` (working branch)
**Last commit:** `9d0f585` - Added Mailchimp integration, name field, cookie/legal UI

### What Was Done This Session

1. **Mailchimp Integration** - Replaced Supabase with Mailchimp API for email signups
   - API Key in `.env`: `MAILCHIMP_API_KEY`
   - List ID: `b5d57fbac2` (BrandStudios.AI list)
   - Data center: `us7`
   - Supabase code is commented out in `api/subscribe.js` as backup

2. **New Form Layout** - Grid-based form with:
   - First Name | Last Name (side by side on desktop, stacked on mobile)
   - Email Address (full width)
   - Phone Number optional (full width)
   - "REQUEST ACCESS" button with arrow, loading spinner, success states

3. **Cookie Banner** - Added cookie consent banner with Accept/Decline
   - Saves to localStorage
   - Slides up after 1 second on first visit

4. **Legal Links** - Privacy | Terms links in top-left header

5. **Mobile Responsiveness** - STILL NEEDS WORK
   - Made multiple fixes but user reports overlap and scrolling issues on iPhone
   - Changed footer/header to `position: relative` on mobile
   - Enabled `overflow-y: auto` for scrolling
   - Reduced spacing/sizes significantly

### What Needs To Be Done

1. **TEST MOBILE RESPONSIVENESS** - Check on actual iPhone, fix remaining issues
   - User said "overlap and no scrolling" after latest changes
   - May need to adjust padding, remove more fixed heights

2. **Commit and push changes** - Current changes not committed yet

3. **Test Mailchimp form submission** - Form UI is done, test actual submission

4. **Deploy to production** - Once mobile is fixed and tested

### Key Files Modified

- `index.html` - New form layout, header, cookie banner
- `style.css` - New form styles, mobile breakpoints at 768px and 480px
- `script.js` - Cookie handling, new form submission with loading states
- `api/subscribe.js` - Mailchimp API (firstName, lastName, email, phone)

### Commands

```bash
# Local dev (you have vercel dev working on your end)
vercel dev

# Or simple static server (won't run API)
npx serve -l 3000

# Deploy when ready
vercel --prod
```

### Environment Variables Needed

```
MAILCHIMP_API_KEY=<key from .env file>
```

### Testing Mailchimp

```bash
# Test API directly (use key from .env)
curl -s -X POST "https://us7.api.mailchimp.com/3.0/lists/b5d57fbac2/members" \
  -H "Authorization: apikey $MAILCHIMP_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"email_address": "test@example.com", "status": "subscribed", "merge_fields": {"FNAME": "Test", "LNAME": "User", "PHONE": ""}}'

# Get list members
curl -s -X GET "https://us7.api.mailchimp.com/3.0/lists/b5d57fbac2/members" \
  -H "Authorization: apikey $MAILCHIMP_API_KEY"
```

### Branches

- `new` - Current working branch (this one)
- `main` - Production
- `tim-dev` - Has older version with different UI (ball pit physics, etc.)

### Priority for Next Session

1. Fix mobile responsiveness (test on real iPhone)
2. Commit all changes
3. Test form submission end-to-end
4. Deploy
