# Malar Subramani — Portfolio

Personal portfolio website for Malar Subramani, Marketing Automation Specialist.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite 7** (build tool)
- **Tailwind CSS v4**
- **Framer Motion** (animations)
- **shadcn/ui** components

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for Production

```bash
npm run build
```

The output is in the `dist/` folder.

## Deploy to Vercel

1. Push this repo to GitHub.
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import your GitHub repo.
3. Vercel auto-detects Vite. Keep all settings as-is and click **Deploy**.

The `vercel.json` included handles SPA routing (all paths serve `index.html`) and ensures the resume PDF downloads correctly.

## Resume PDF

`public/Malar_Subramani_Resume.pdf` is served statically. The "Download Resume" buttons throughout the site link directly to it.
