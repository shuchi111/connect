# Shuchi Shukla — Portfolio

Personal portfolio for **Shuchi Shukla**, AI Engineer · Data Scientist · Agentic AI Builder.

Showcases experience, projects, tech stack, achievements, writing, and contact — built with React and deployed as a static site on GitHub Pages.

**Live site:** [https://shuchi111.github.io/portfolio/](https://shuchi111.github.io/portfolio/)

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

Open [http://localhost:3000/portfolio](http://localhost:3000/portfolio)

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

### 1. Rename the GitHub repo (one-time)

If your repo is still named `app`, rename it on GitHub:

1. Open **Settings → General → Repository name**
2. Change `app` → **`portfolio`**
3. Update your local remote:

```bash
git remote set-url origin https://github.com/shuchi111/portfolio.git
```

### 2. Push to GitHub

```bash
git add .
git commit -m "Deploy portfolio"
git push origin main
```

### 3. Make the repo public

GitHub Pages on the free plan requires a **public** repository for personal sites.

Go to **Settings → General → Change repository visibility → Public**.

### 4. Enable GitHub Pages

1. Open your repo on GitHub
2. Go to **Settings → Pages**
3. Under **Build and deployment → Source**, select **GitHub Actions**

Every push to `main` triggers the workflow in `.github/workflows/deploy-pages.yml` and publishes the site.

### 5. Verify

- Check the **Actions** tab for a green build
- Visit [https://shuchi111.github.io/portfolio/](https://shuchi111.github.io/portfolio/)

---

## Updating portfolio content

Edit `frontend/src/data/portfolio.js` for profile info, experience, projects, skills, achievements, and blog links. Changes appear after you save locally or push to GitHub.

To add a profile photo, place `shuchi.png` in `frontend/public/`.

---

## Contact

- **Email:** shuchis9999@gmail.com
- **GitHub:** [shuchi111](https://github.com/shuchi111)
- **LinkedIn:** [shuchi-shukla](https://www.linkedin.com/in/shuchi-shukla)
