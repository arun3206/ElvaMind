# ElvaMind website

Production-ready website built with Next.js App Router, TypeScript, Tailwind CSS, React, and Lucide icons.

## Install and run

Use Node.js 20 or newer.

```bash
npm install
npm run dev
npm run build
```

Local development runs at `http://localhost:3000`.

## Edit content

All editable business details and page content are in `src/config/site.ts`, including brand, founder, contact, social, form, navigation, sections, analytics, and legal dates. Replace every `YOUR_...` value before launch.

## Images

Add the founder photo to `public/images/` and update `founder.photo` in `src/config/site.ts`. The page shows initials if the image fails. Replace the featured workflow mockup in `src/app/page.tsx` with `next/image` components pointing to screenshots in `public/images/` such as `workflow-placeholder.png` and `telegram-placeholder.png`.

## Form

Set `form.endpoint` in `src/config/site.ts` to a Formspree URL or generic serverless POST endpoint. The form sends standard `FormData`. Web3Forms keys placed in client code are public; use a serverless endpoint if a credential must stay private. With the placeholder endpoint, submission is safely disabled and a development message appears.

## WhatsApp

Set `contact.whatsappNumber` to the full international number, including country code. Spaces and punctuation are removed automatically and the requested message is prefilled.

## Vercel and domain

Push to a Git provider, import the project into Vercel, and use the detected Next.js defaults. In **Settings → Domains**, add `elvamind.com` and apply Vercel’s DNS records at your registrar. Add `www.elvamind.com` and configure the preferred redirect if needed.

## SEO

Update the domain and brand values in `src/config/site.ts`. Global metadata is in `src/app/layout.tsx`; legal-page metadata is beside each page. Canonical URL, Open Graph, Twitter, robots, sitemap, favicon, and ProfessionalService structured data are included.

Before production, replace placeholders, connect the form, update screenshots, test all contact links, and have the privacy and terms content reviewed by a qualified legal professional.
