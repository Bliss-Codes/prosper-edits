# Video Editor Portfolio

A clean, honest portfolio for a freelance video editor. Built with
**Next.js 14**, **Tailwind CSS**, and **Framer Motion**. Dark theme,
fully responsive, no fake claims — just your work and how to reach you.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
```

## Make it yours

Everything lives in **`lib/data.js`**:

- **`profile`** — your name, email, WhatsApp number, and social links.
- **`projects`** — your real edits. This is the main thing; fill it with
  your best work first.
- **`services`, `tools`, `workflow`** — adjust to what's true for you.

### Add your work

Each project takes a `thumb` (image in `/public`, e.g. `/work/1.jpg`) and a
`video` (YouTube/Vimeo **embed** URL for the popup). Leave `thumb` empty to
use the gradient placeholder; leave `video` empty to just show the thumbnail.

```js
{ id: 1, title: "YouTube edit", category: "Long-form", duration: "10:24",
  desc: "Full episode edit",
  thumb: "/work/1.jpg",
  video: "https://www.youtube.com/embed/VIDEO_ID" }
```

### Optional: showreel background

In `components/Hero.jsx` there's a commented `<video>` block — drop a
`showreel.mp4` into `/public` and uncomment it for a moving background.

### Contact form

The form opens the visitor's email app with their message pre-filled (no
backend needed). To collect messages directly, connect Formspree or a
Next.js API route where the comment marks it in `components/Contact.jsx`.

## Deploy

Push to GitHub, import at <https://vercel.com/new>, deploy. Add your domain
in the dashboard.

## Sections

Nav · Hero · Work (filterable, click to watch) · What I do · About · Contact.
Change the accent color in one place: `accent` in `tailwind.config.js`.
