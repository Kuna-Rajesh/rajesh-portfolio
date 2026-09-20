# 🚀 Rajesh Kuna — Developer Portfolio & AI Assistant

A state-of-the-art, high-performance portfolio website for **Rajesh Kuna** — System Engineer, Java Backend Lead & PL/SQL Developer at TCS. Built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**, **Framer Motion**, and featuring an interactive **AI Assistant** with automated email transcript dispatching.

---

## ✨ Features

- 🎨 **Rich Modern Aesthetics**: Vibrant HSL color tokens, calm ambient lighting, glassmorphism UI cards, and sleek dark/light mode toggle.
- ⚡ **Interactive Typewriter Hero**: Dynamic role switching showcasing Java Backend Engineering, Spring Boot Architecture, Oracle PL/SQL Specialization, and GenAI Integration.
- 🤖 **Rajesh-AI Assistant**: Interactive chat overlay for recruiters to query technical experience, microservices architecture, and PL/SQL stored procedures in real-time.
- 📩 **Automated Direct Email & Chat Transcripts**: Form submissions and full AI chat session logs are automatically formatted and emailed to `rajeshkuna70@gmail.com` via Google Apps Script & Formspree endpoints.
- 📱 **100% Responsive & Mobile First**: Optimized touch targets, safe-area floating action button (`z-[9999]`), and responsive navigation overlay.
- 📊 **Metrics & Accomplishments**: Highlights 70% API response time reduction, 100+ PL/SQL stored procedures handling 50K+ daily transactions, zero-downtime releases in Johannesburg, and TCS awards (*Star of the Month*, *Spot on the Team*).

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | [Next.js 16 (App Router)](https://nextjs.org/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) & Vanilla CSS Tokens |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **AI & Automation** | Google Apps Script Web App, Formspree API |
| **Deployment** | [Vercel](https://vercel.com/) |

---

## 📁 Project Structure

```text
rajesh-portfolio-web/
├── public/                     # Static assets (images, demo videos, resume PDF)
│   ├── omnisaina/              # OmniSaina project demo media
│   ├── rajesh-ai-assistant/    # Live AI Assistant embed files
│   ├── profile.png             # Profile avatar image
│   └── Rajesh_Kuna_Resume.pdf  # Downloadable resume CV
├── src/
│   ├── app/
│   │   ├── globals.css         # Design tokens, keyframe animations, & utilities
│   │   ├── layout.tsx          # Root layout & SEO Metadata
│   │   └── page.tsx            # Main page assembling sections & chat FAB
│   ├── components/
│   │   ├── chat/
│   │   │   ├── chatData.ts     # FAQ dataset & bot response logic
│   │   │   ├── ChatFAB.tsx     # High-priority mobile floating chat button
│   │   │   └── ChatOverlay.tsx # Glassmorphism chat UI & transcript mailer
│   │   ├── layout/
│   │   │   ├── Navbar.tsx      # Fixed glassmorphism header & mobile drawer
│   │   │   ├── Footer.tsx      # Footer & quick links
│   │   │   └── ThemeToggle.tsx # Light / Dark mode switcher
│   │   ├── sections/
│   │   │   ├── Hero.tsx        # Typewriter hero section & metrics
│   │   │   ├── About.tsx       # Bio, contact chips, & TCS highlights
│   │   │   ├── Experience.tsx  # Work history, PL/SQL & Spring Boot accomplishments
│   │   │   ├── Skills.tsx      # Core Backend, PL/SQL, AI, & DevOps arsenal
│   │   │   ├── Projects.tsx    # OmniSaina & Rajesh-AI Assistant showcases
│   │   │   ├── Education.tsx   # Qualifications, cloud certifications, & awards
│   │   │   └── Contact.tsx     # Direct message form with automated email dispatch
│   │   └── ui/                 # Reusable UI primitives (SectionTitle, Toast, etc.)
│   └── .env.local              # Local environment variables (ignored by git)
└── next.config.ts              # Next.js export & build settings
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `v18.17.0` or higher (Node `v20+` recommended)
- **npm**, **yarn**, or **pnpm**

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/kuna-rajesh/rajesh-portfolio.git
   cd rajesh-portfolio-web
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_APPS_SCRIPT_URL=https://script.google.com/macros/s/AKfycbza8uK5SSko2mkmD2q2fyjZxgVA4REFGc1m9skp3eZyhzWeDfY5kGb6byq0W0yx1Vxa7A/exec
   ```

4. **Run Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Production Build & Vercel Deployment

### Build Locally

To test static bundle generation:
```bash
npm run build
```

### Deploying to Vercel

1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "feat: portfolio updates & AI integration"
   git push origin main
   ```

2. **Import in Vercel**:
   - Go to [Vercel Dashboard](https://vercel.com/new) and select `kuna-rajesh/rajesh-portfolio-web`.
   - Vercel automatically detects Next.js.

3. **Set Environment Variable in Vercel**:
   - In **Project Settings > Environment Variables**:
     - **Key**: `NEXT_PUBLIC_APPS_SCRIPT_URL`
     - **Value**: `https://script.google.com/macros/s/AKfycbza8uK5SSko2mkmD2q2fyjZxgVA4REFGc1m9skp3eZyhzWeDfY5kGb6byq0W0yx1Vxa7A/exec`

4. **Click Deploy**.

---

## 👨‍💻 Author

**Rajesh Kuna**  
*System Engineer · Java Backend & PL/SQL Developer*  
- **Email**: [rajeshkuna70@gmail.com](mailto:rajeshkuna70@gmail.com)
- **LinkedIn**: [linkedin.com/in/kuna-rajesh](https://linkedin.com/in/kuna-rajesh)
- **GitHub**: [github.com/kuna-rajesh](https://github.com/kuna-rajesh)
- **AI Assistant**: [rajesh-ai-assistant.vercel.app](https://rajesh-ai-assistant.vercel.app)
