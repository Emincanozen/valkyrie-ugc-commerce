# Valkyrie — AI E-Commerce & UGC Video Studio

[![Next.js](https://img.shields.io/badge/Next.js-16.2.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Anthropic Claude](https://img.shields.io/badge/Anthropic-Claude_3.5_Sonnet-orange?style=for-the-badge&logo=anthropic)](https://www.anthropic.com/)
[![AetherOS](https://img.shields.io/badge/Architecture-AetherOS-purple?style=for-the-badge)](https://github.com)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](#)

> **Valkyrie** is an autonomous AI E-Commerce & Viral UGC Video Studio powered by Next.js 16, Anthropic Claude, and Arcads AI Avatars.
>
> *(Studio d'IA E-Commerce & Génération Vidéo UGC : scripts viraux, avatars IA réalistes via Arcads et programmation éditoriale).*

---

## Overview

**Valkyrie** bridges e-commerce conversion copywriting with automated AI video generation:
- **Direct Arcads Integration**: Dual generation modes supporting talking AI avatar presenters (`POST /v2/talking-actors/generate`) and dynamic product showcases from still photos (`POST /v1/presets/product-showcase/generate`).
- **High-Converting UGC Scripting**: Proven e-commerce storytelling structures (*Hook → Problem → Product → Social Proof → Call-to-Action*) strictly optimized for vertical 9:16 mobile formats (TikTok, Instagram Reels, YouTube Shorts).
- **Interactive Studio UI**: A dedicated video creation suite alongside the Claude chat assistant for drafting scripts, choosing avatar talents, triggering renders, and reviewing video archives.
- **Brand Context Customization**: Dynamic injection of product catalogs, brand identity, and customer personas from `clients/votre-marque/brand.md`.

---

## Architecture & Directory Layout

```
valkyrie-ugc-commerce/
├── .claude/
│   └── agents/
│       └── ecommerce.md             # Valkyrie agent persona & system prompt blueprint
├── aether-studio/                   # Full-stack Next.js 16 Studio application
│   ├── src/
│   │   ├── app/                     # App router pages, layouts, and API routes (/api/chat, etc.)
│   │   ├── components/              # Studio UI (Video Studio, Chat interface, Timeline)
│   │   └── lib/                     # Arcads API connectors, e-commerce store, and AI SDK
│   ├── .env.example                 # Documented template environment variables
│   ├── .gitignore                   # Studio gitignore with .env.example tracking exception
│   └── package.json                 # Studio dependencies & scripts
├── clients/
│   └── votre-marque/
│       └── brand.md                 # Your brand context, tone of voice, and product guidelines
├── content/                         # Generated video scripts, UGC copies, and media assets
├── meetings/                        # Archives & customer review notes
├── propositions/                    # Commercial proposals and campaign briefs
├── CLAUDE.md                        # Assistant onboarding instructions for Claude Code
├── .gitignore                       # Root repository ignore rules
└── README.md                        # Project documentation
```

### Key Architectural Concepts
- **Template Lock (`OWNED_AGENT=ecommerce`)**: Locks the workspace interface directly to Valkyrie's specialized e-commerce and UGC video tools.
- **Context Injection**: Valkyrie reads your brand context from `clients/votre-marque/brand.md` to tailor scripts and visual recommendations to your exact products.
- **Deliverables Organization**: All created scripts, marketing angles, and generated assets are organized inside `content/`.

---

## Quick Start (3 Steps)

### Step 1: Enter Studio Directory
```bash
cd aether-studio
```

### Step 2: Configure Environment
Copy the example environment configuration:
```bash
cp .env.example .env.local
```
Edit `.env.local` to provide your Anthropic API key:
```env
ANTHROPIC_API_KEY="your-anthropic-api-key"
```
*(Optional: Provide `ARCADS_CLIENT_ID` and `ARCADS_CLIENT_SECRET` to enable live video rendering).*

### Step 3: Install Dependencies & Run
```bash
npm install
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)** in your browser to start creating with Valkyrie.

---

## Environment Variables

| Variable | Type | Description |
|---|---|---|
| `ANTHROPIC_API_KEY` | **Required** | Your Anthropic Claude API key from [Anthropic Console](https://console.anthropic.com) |
| `OWNED_AGENT` | **Required** | Set to `ecommerce` to lock the Studio to Valkyrie |
| `NEXT_PUBLIC_OWNED_AGENT` | **Required** | Client-side template lock (`ecommerce`) |
| `ARCADS_CLIENT_ID` | Optional | Arcads API Client ID (Settings → Public API) for AI video generation |
| `ARCADS_CLIENT_SECRET` | Optional | Arcads API Client Secret for API authentication |
| `APIFY_TOKEN` | Optional | Apify token for automated competitor research and scraping |
| `GEMINI_API_KEY` | Optional | Google Gemini API key for supplementary image generation |
| `GOOGLE_CLIENT_ID` | Optional | Google OAuth Client ID for Gmail and Drive sync |
| `GOOGLE_CLIENT_SECRET` | Optional | Google OAuth Client Secret |
| `GOOGLE_REDIRECT_URI` | Optional | OAuth callback URL (`http://localhost:3000/api/integrations/google/callback`) |
| `NEXT_PUBLIC_UNLOCK_URL` | Optional | Custom link for agent suite upgrade/unlock |

---

## License

This repository is distributed under the [MIT License](LICENSE).
