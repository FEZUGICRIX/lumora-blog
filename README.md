# Lumora

Modern full-stack blogging platform built with Next.js 15, featuring a rich text editor, real-time reactions, internationalization, and a scalable Feature-Sliced Design architecture.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![TailwindCSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=flat-square&logo=tailwind-css)
![GraphQL](https://img.shields.io/badge/GraphQL-E10098?style=flat-square&logo=graphql)

## ✨ Key Features

- **Rich Text Editor** — TipTap-based WYSIWYG editor with image uploads, code blocks, and custom extensions
- **Real-time Reactions** — Emoji reactions on articles and comments with optimistic updates
- **Internationalization** — Full i18n support (EN/RU) with next-intl, including SSR
- **Authentication** — OAuth (Google, GitHub) + credentials with 2FA support and ReCAPTCHA
- **SEO Optimized** — Hybrid SSR/SSG rendering, dynamic metadata, semantic HTML
- **Dark Mode** — System-aware theme switching with smooth transitions
- **Responsive Design** — Mobile-first approach with glassmorphism UI components

## 🏗 Architecture

Project follows **Feature-Sliced Design (FSD)** methodology for scalable and maintainable codebase:

```
src/
├── app/              # Next.js App Router (routing, layouts)
├── screens/          # Page-level components (compositions)
├── widgets/          # Complex UI blocks (Header, Footer, Comments)
├── features/         # User interactions (auth, editor, reactions)
├── entities/         # Business entities (article, user, category)
└── shared/           # Reusable utilities, UI kit, configs
```

### Layer Dependencies
```
app → screens → widgets → features → entities → shared
```

Each layer can only import from layers below it, ensuring unidirectional data flow and clear boundaries.

## 🛠 Tech Stack

### Frontend
| Technology | Purpose |
|------------|---------|
| **Next.js 15** | React framework with App Router, Turbopack |
| **React 19** | UI library with Server Components |
| **TypeScript 5** | Type safety and DX |
| **Tailwind CSS 4** | Utility-first styling |
| **TipTap** | Headless rich text editor |
| **Framer Motion / GSAP** | Animations |
| **React Hook Form + Zod** | Form handling and validation |
| **TanStack Query** | Server state management |

### API & Data
| Technology | Purpose |
|------------|---------|
| **GraphQL** | API query language |
| **graphql-request** | Lightweight GraphQL client |
| **GraphQL Codegen** | Type-safe operations generation |

### DX & Tooling
| Technology | Purpose |
|------------|---------|
| **ESLint + Prettier** | Code quality |
| **Turbopack** | Fast development builds |
| **next-intl** | Internationalization |
| **next-themes** | Theme management |

## 🚀 Getting Started

### Prerequisites
- Node.js 20+
- pnpm (recommended)

### Installation

```bash
# Clone repository
git clone https://github.com/yourusername/lumora.git
cd lumora

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env.local

# Generate GraphQL types
pnpm codegen

# Start development server
pnpm dev
```

### Environment Variables

```env
NEXT_PUBLIC_API_URL=http://localhost:4000/graphql
NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY=your_recaptcha_key
```

## 📁 Project Structure Highlights

### Entities Layer
Business domain models with API integration:
- `article/` — Article CRUD, types, UI components (ArticleCard, ArticleHero)
- `user/` — User profiles, authentication state
- `category/` — Content categorization
- `reaction/` — Emoji reactions system

### Features Layer
User-facing functionality:
- `auth/` — Login, register, OAuth, 2FA, password recovery
- `editor/` — TipTap configuration, custom nodes, toolbar
- `article/` — Filters, search, CRUD operations
- `locale-switcher/` — Language switching

### Widgets Layer
Composite UI blocks:
- `header/` — Navigation, auth buttons, mobile menu
- `footer/` — Links, social, crypto donations
- `comment/` — Comment form, list, reactions
- `article-edit-form/` — Full article editor with validation

## 🎨 UI/UX Decisions

- **Glassmorphism** — Frosted glass effects for cards and overlays
- **Micro-interactions** — Hover states, loading skeletons, optimistic updates
- **Accessibility** — Semantic HTML, ARIA labels, keyboard navigation
- **Performance** — Image optimization, code splitting, prefetching

## 📝 Code Quality

- Strict TypeScript configuration
- ESLint with Next.js and TanStack Query plugins
- Prettier with Tailwind CSS class sorting
- Consistent naming conventions (kebab-case files, PascalCase components)
- Barrel exports for clean imports

## 🔮 Roadmap

- [ ] Full-text search with Algolia/Meilisearch
- [ ] Notifications system
- [ ] Article bookmarks
- [ ] User following
- [ ] Analytics dashboard
- [ ] PWA support

## 📄 License

---

Built with ❤️ using modern web technologies
