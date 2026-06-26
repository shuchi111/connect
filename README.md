# Shuchi Shukla -catch up

Personal portfolio for **Shuchi Shukla**, AI Engineer · Data Scientist · Agentic AI Builder.

Showcases experience, projects, tech stack, achievements, writing, and contact — built with React and deployed as a static site on GitHub Pages.

**Live site:** [https://shuchi111.github.io/app/](https://shuchi111.github.io/app/)

---

## Tech stack

- **React 19** + Create React App (CRACO)
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Lucide React** for icons
- **GitHub Actions** for CI/CD deploy

---

## Project structure

```
portfolio/
├── .github/workflows/     # GitHub Pages deploy pipeline
├── frontend/
│   ├── public/            # Static assets (resume PDF, etc.)
│   ├── scripts/           # Post-build helpers (404.html for SPA)
│   └── src/
│       ├── components/    # Portfolio sections
│       ├── data/          # Portfolio content (portfolio.js)
│       └── lib/           # API helpers
└── README.md
```

---

## Local development

### Prerequisites

- Node.js 18+
- Yarn 1.22+ (`corepack enable`)

### Run locally

```bash
cd frontend
yarn install
yarn start
```

Open [http://localhost:3000/app](http://localhost:3000/app)

### Production build (optional)

```bash
cd frontend
yarn build
```

Output is written to `frontend/build/`.

---

## Environment variables

Copy the example file and edit if needed:

```bash
cp frontend/.env.example frontend/.env.local
```

| Variable | Required | Description |
|----------|----------|-------------|
| `REACT_APP_BACKEND_URL` | No | Backend API URL for chatbot/contact. Leave empty for static mode (contact opens email, chatbot shows offline message). |

---

## Deploy to GitHub Pages

### 1. Push to GitHub

```bash
git add .
git commit -m "Deploy portfolio"
git push origin main
```

> **Important:** Enable GitHub Pages before the deploy job runs (see step 3 below).

### 2. Make the repo public

GitHub Pages on the free plan requires a **public** repository for personal sites.

Go to **Settings → General → Change repository visibility → Public**.

### 3. Enable GitHub Pages (required)

1. Open https://github.com/shuchi111/app/settings/pages
2. Under **Build and deployment → Source**, choose **Deploy from a branch**
3. Set **Branch** to **`gh-pages`** and folder to **`/ (root)`**
4. Click **Save**

The workflow pushes the built site to the `gh-pages` branch automatically.

### 4. Push code and wait for the workflow

```bash
git add .
git commit -m "Fix GitHub Pages deployment"
git push origin main
```

Go to **Actions** and wait for a green checkmark.

### 5. Verify

- **Settings → Pages** should show: *Your site is live at...*
- Visit [https://shuchi111.github.io/app/](https://shuchi111.github.io/app/)

---

## Updating portfolio content

Edit `frontend/src/data/portfolio.js` for profile info, experience, projects, skills, achievements, and blog links. Changes appear after you save locally or push to GitHub.

To add a profile photo, place `shuchi.png` in `frontend/public/`.

---

## Contact

- **Email:** shuchis9999@gmail.com
- **GitHub:** [shuchi111](https://github.com/shuchi111)
- **LinkedIn:** [shuchi-shukla](https://www.linkedin.com/in/shuchi-shukla)
