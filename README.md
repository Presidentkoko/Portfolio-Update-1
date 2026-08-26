# Jeruz Garde — Digital Studio Portfolio

A premium, conversion-focused portfolio for **Jeruz Laynell J. Garde** (`Presidentkoko`). The site presents full-stack development, business systems, verified n8n automations, custom WordPress work, LinkedIn and social-media management, graphic design, and content production through source-backed project data and real portfolio assets.

The front end remains intentionally lightweight: semantic HTML, custom CSS, and vanilla JavaScript. A small Vercel function handles project inquiries through Resend.

## What is included

- Cinematic, responsive hero with a lightweight particle field and rotating professional roles
- Sticky navigation, animated mobile menu, custom desktop cursor, magnetic buttons, and reduced-motion support
- Customer-focused value and service sections
- Dedicated “Meet the Developer” video section with a responsive poster-first player, custom keyboard-accessible controls, replay, fullscreen, and review-labelled English draft captions/transcript
- Filterable project case studies for Featured, WordPress, n8n Automation, Web Development, Full-Stack Systems, and UI/UX work
- Dedicated AI & Automation section with a lightweight lead-flow diagram and implementation-level n8n case studies
- Dedicated WordPress section with verified custom-theme projects and a transparent Santech evidence request
- Dedicated LinkedIn and social-media growth-management case study
- Filterable creative-work gallery with a keyboard-accessible fullscreen lightbox
- Client process, grouped technology stack, and verified experience timeline
- Validated project inquiry form with loading, success, and failure states
- Vercel serverless contact endpoint using Resend
- SEO metadata, Open Graph data, JSON-LD, manifest, robots.txt, sitemap, favicon, and custom 404
- Static production build with checks for broken local references, mojibake, placeholder links, and oversized creative assets

## Project structure

```text
.
├── api/contact.js           # Vercel contact endpoint
├── assets/
│   ├── docs/                # CV and PDF portfolio
│   ├── images/              # Project visuals
│   │   ├── automation/      # Verified n8n workflow proof
│   │   ├── creative/        # Optimised creative gallery assets
│   │   └── wordpress/       # WordPress theme screenshots
│   └── videos/              # Intro, demo, aerial media, and caption tracks
├── css/styles.css           # Complete visual system and responsive layout
├── js/
│   ├── data.js              # Editable site, service, project, gallery, skill, and experience data
│   └── app.js               # Rendering, filters, dialogs, form, motion, cursor, and canvas
├── scripts/
│   ├── build.mjs            # Creates the production dist/ directory
│   ├── check.mjs            # Validates source content and local file references
│   └── dev.mjs              # Dependency-free local preview server
├── .env.example
├── 404.html
├── index.html
├── package.json
├── robots.txt
├── sitemap.xml
└── vercel.json
```

## Edit portfolio content

Most updates are made in [`js/data.js`](js/data.js):

- `site` — identity, availability, contact details, CV, and social profiles
- `roles` — hero role rotation
- `values` — credibility/value cards
- `services` — client problem, deliverables, benefit, and CTA for each service
- `projects` — full case-study records, images, technology, and verified links
- `wordpressVerification` — evidence still required before the Santech case study can be attributed and published
- `creativeWork` — gallery images, categories, titles, and formats
- `growthServices` — LinkedIn/social management deliverables
- `process` — client delivery stages
- `skillGroups` — grouped capabilities without percentage scores
- `experience` — verified work and education timeline

To add a creative item, place an optimised image in `assets/images/creative/` and add one object to `creativeWork`. To add a project, copy a verified image into `assets/images/`, then add one project object. Leave `live` or `github` empty when no public URL exists; the interface automatically hides the missing action.

The developer introduction uses `assets/videos/intro-video.mp4` (1280×720 H.264/AAC, CRF 26, fast-start), `assets/images/intro-video-poster.webp`, and `assets/videos/intro-video-captions.vtt`. The captions and visible transcript are machine-generated drafts; the uncertain AI tool name around 00:35 is explicitly marked for review.

## Run locally

Requires Node.js 20 or later.

```bash
npm run dev
```

Open [http://127.0.0.1:4173](http://127.0.0.1:4173). The local preview intentionally does not send email; it returns a configuration message so no test inquiry is lost.

## Validate and build

```bash
npm run check
npm run build
```

The build creates `dist/`. Set `SITE_URL` to generate metadata for the final domain:

```bash
SITE_URL=https://your-project.vercel.app npm run build
```

If `SITE_URL` is not set, the current working GitHub Pages URL is used as the canonical fallback.

## Deploy to Vercel

1. Import the `Presidentkoko/web-port` repository in Vercel.
2. Vercel reads `vercel.json` and runs `npm run build`.
3. Add these environment variables for **Production**, **Preview**, and **Development** as appropriate:

   - `SITE_URL` — final Vercel or custom domain, without a trailing slash
   - `RESEND_API_KEY` — Resend API key
   - `CONTACT_TO_EMAIL` — inbox that receives inquiries
   - `CONTACT_FROM_EMAIL` — verified Resend sender, for example `Portfolio <inquiries@yourdomain.com>`

4. Redeploy after adding the variables.
5. Submit one real test inquiry and confirm delivery and reply-to behaviour.

No secrets belong in the repository. `.env.example` contains names and safe placeholders only.

## Verified public links used

- GitHub: <https://github.com/Presidentkoko>
- Core-N-Core: <https://presidentkoko.github.io/Core-N-Core/>
- Premium Uppal: <https://presidentkoko.github.io/Premium-Uppal/>
- Uppal Group Website: <https://presidentkoko.github.io/Uppal-Group-Website/>
- AI Lead Qualification: <https://github.com/Presidentkoko/ai-lead-qualification>
- Automated SEO Monitoring: <https://github.com/Presidentkoko/Automated-SEO-monitoring>
- Social Media Automation: <https://github.com/Presidentkoko/social-media-automation>
- Telegram Appointment Agent: <https://github.com/Presidentkoko/appointment-voice-agent>
- MEBS Construction WordPress: <https://github.com/Presidentkoko/mebs-construction-elementor>
- Anton Barbershop WordPress: <https://github.com/Presidentkoko/antons-barbershop-wordpress>

Projects without a verified public demo are shown as private or repository-only instead of linking to placeholders.

## Add later

- Final Vercel/custom domain in `SITE_URL`
- Santech WordPress source/theme or export, approved screenshots, confirmed live URL, and implementation notes; the current workspace and connected repositories do not contain enough evidence to publish it as a verified WordPress case study
- Resend credentials and a verified sender domain
- Verified analytics screenshots or outcome metrics for growth-management work, if they can be published
- Additional campaign visuals or video thumbnails as they become available
- Confirmed project dates or employer details only when they are ready for public display
