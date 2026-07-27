# Leipzig Montage - Professionelle Möbelmontage Website

A modern, full-stack business website for **Moebelmontage-Leipzig**, a professional furniture assembly service operating in Leipzig and surrounding areas (50+ km radius). The platform serves as both a customer-facing marketing site with service pages, a gallery, and contact forms, and an admin dashboard for managing products, pricing, and cost calculations.

## Table of Contents

- [Why Next.js](#why-nextjs)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Architecture](#architecture)
- [Available Scripts](#available-scripts)
- [Coding Standards](#coding-standards)
- [Deployment](#deployment)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

---

## Why Next.js

Next.js 16 was chosen for this project for several key reasons:

- **App Router** with file-based routing enables clean, intuitive URL structure (`/büro`, `/küche`, `/schlafzimmer`, etc.)
- **Server Components** reduce client-side JavaScript for public-facing pages, improving SEO and load performance
- **API Routes** (`app/admin/api/`) provide a full backend without a separate server
- **Server-side redirects** handle English-to-German URL mapping (e.g., `/office` → `/büro`)
- **`next/font`** for optimized Google Fonts (Hanken Grotesk) loading
- **`robots.ts`** and metadata APIs for built-in SEO configuration
- **Instrumentation hooks** for server-side database initialization on startup

---

## Features

### Public-Facing (Customers)

- **Homepage** — Hero section, service cards, statistics, customer testimonials, logo slider, related topics tabs, and a contact form with WhatsApp integration
- **Service Pages** — Dedicated pages for Büro (Office), Küche (Kitchen), Schlafzimmer (Bedroom), and Montage (IKEA Assembly)
- **Gallery** — Interactive before/after comparison sliders using a custom range input component, plus a project showcase grid
- **Kontakt (Contact)** — Embedded lead capture form via LeadConnector/GHL widget, chat widget integration
- **Über Uns (About Us)** — Company information, experience highlights
- **Impressum & Datenschutz** — Legal pages (German legal requirements)
- **Custom 404 Page** — Themed not-found page with navigation back to home or contact

### Admin Dashboard

- **JWT-based Login** — Email/password authentication with bcrypt hashing, 1-hour token expiry, refresh token generation
- **Product CRUD** — Create, read, update, delete products with paginated listing (10/20/50/100 rows per page)
- **Product Image Hover Preview** — Mouse-following enlarged image preview in the dashboard table
- **CSV Bulk Image Update** — Upload a CSV file to batch-update product image URLs
- **GHL Price Calculator API** — Code-authenticated endpoint for external CRM (GoHighLevel) to calculate assembly cost ranges from a list of product IDs

### Technical

- **Material Design Icons** via Google Fonts (`material-symbols-outlined`)
- **Framer Motion** animations — SlideIn component with directional entrance animations and scroll-triggered playback
- **Marquee logo slider** — CSS keyframe-based infinite scroll of partner/client logos
- **Responsive design** — Mobile-first with hamburger menu (animated slide-in via Framer Motion), responsive grid layouts
- **SEO** — `robots.ts` configuration, structured metadata, semantic HTML

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | Next.js 16.2.6 (App Router) |
| Language | TypeScript 5 (strict mode) |
| React | React 19.2.4 |
| Styling | Tailwind CSS 4 (via `@tailwindcss/postcss`) |
| Animations | Framer Motion 12.40 |
| ORM | Sequelize 6.37 |
| Database | PostgreSQL (via `pg` 8.13) |
| Authentication | JWT (`jsonwebtoken` 9.0), bcrypt (`bcryptjs` 2.4) |
| Icons | React Icons 5.6, Google Material Symbols |
| File Parsing | xlsx 0.18 (CSV/Excel upload) |
| Linting | ESLint 9 with `eslint-config-next` |
| Package Manager | npm |

---

## Getting Started

### Prerequisites

| Software | Version | Notes |
|---|---|---|
| Node.js | >= 18.x | LTS recommended |
| npm | >= 9.x | Bundled with Node.js |
| PostgreSQL | >= 14.x | Must be running and accessible |
| Git | Latest | For cloning the repository |

### 1. Clone the Repository

```bash
git clone <repository-url>
cd leipzig-montage
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables

Create a `.env.local` file in the project root with the following variables:

```env
# PostgreSQL Database
DB_HOST=localhost
DB_PORT=5432
DB_NAME=montage
DB_USER=postgres
DB_PASSWORD=<your-database-password>

# Authentication
JWT_SECRET=<your-jwt-secret-key>
CODE=<admin-api-code>
```

> **Note:** The `.env.local` file is gitignored. Never commit secrets to the repository.

### 4. Database Setup

Ensure PostgreSQL is running, then create the database:

```bash
# Connect to PostgreSQL and create the database
psql -U postgres -c "CREATE DATABASE montage;"
```

The application uses Sequelize's `sync({ alter: true })` in `instrumentation.ts` to automatically create/update tables on server startup. No manual migration commands are needed.

### 5. Start the Development Server

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

### 6. Access the Admin Panel

Navigate to [http://localhost:3000/admin](http://localhost:3000/admin) and log in with admin credentials stored in the `Users` table of the database.

---

## Project Structure

```
leipzig-montage/
├── app/
│   ├── layout.tsx              # Root layout (font loading, metadata, global HTML)
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Global styles, Tailwind theme, custom CSS
│   ├── not-found.tsx           # Custom 404 page
│   ├── robots.ts               # SEO robots configuration
│   ├── favicon.ico             # Favicon
│   ├── admin/
│   │   ├── page.tsx            # Admin login page
│   │   ├── dashboard/
│   │   │   └── page.tsx        # Admin dashboard (product CRUD)
│   │   └── api/
│   │       ├── login/route.ts         # POST /admin/api/login
│   │       ├── products/route.ts      # GET/POST /admin/api/products
│   │       ├── products/[id]/route.ts # PUT/DELETE /admin/api/products/:id
│   │       ├── products/upload/route.ts        # Product upload
│   │       ├── products/update-images/route.ts # CSV bulk image update
│   │       ├── users/route.ts         # User management
│   │       ├── users/[id]/route.ts    # User CRUD by ID
│   │       └── ghl/calculate/route.ts # GHL price calculator API
│   ├── büro/page.tsx           # Office furniture assembly page
│   ├── küche/page.tsx          # Kitchen assembly page
│   ├── schlafzimmer/page.tsx   # Bedroom furniture assembly page
│   ├── montage/page.tsx        # IKEA montage service page
│   ├── galerie/page.tsx        # Gallery with before/after sliders
│   ├── kontakt/page.tsx        # Contact page with embedded forms
│   ├── uberuns/page.tsx        # About us page
│   ├── impressum/page.tsx      # Legal imprint page
│   └── datenschutz/page.tsx    # Privacy policy page
├── components/
│   ├── Navbar.tsx              # Responsive navigation with mobile slide-in menu
│   ├── Footer.tsx              # Site footer with contact info and links
│   ├── LogoSlider.tsx          # Infinite scrolling logo marquee
│   ├── SlideIn.tsx             # Framer Motion scroll-triggered animation wrapper
│   └── RelatedTopics.tsx       # Tabbed content section (Office/Kitchen/Bedroom/About)
├── lib/
│   ├── db.ts                   # Sequelize PostgreSQL connection configuration
│   ├── models/
│   │   ├── index.ts            # Model associations and exports
│   │   ├── User.ts             # User model (id, username, email, password, tokens)
│   │   └── Product.ts          # Product model (id, productId, name, costs, imageUrl)
│   └── middleware/
│       ├── auth.ts             # JWT verification and code-based auth middleware
│       └── validateProduct.ts  # Product input validation
├── public/
│   ├── *.webp                  # Static images (hero, service images, gallery)
│   ├── Logos/                  # Partner/client logos for the marquee slider
│   ├── logo-1.png              # Company logo
│   └── ...
├── instrumentation.ts          # Server-side DB initialization (sequelize.sync)
├── next.config.ts              # Next.js config (redirects, serverExternalPackages)
├── eslint.config.mjs           # ESLint flat config
├── postcss.config.mjs          # PostCSS with Tailwind CSS plugin
├── tsconfig.json               # TypeScript configuration (strict mode, path aliases)
└── package.json
```

### Key Directories Explained

| Directory | Purpose |
|---|---|
| `app/` | Next.js App Router — all routes, layouts, pages, and API endpoints |
| `app/admin/api/` | Backend API routes for authentication, product management, and external integrations |
| `components/` | Reusable UI components shared across pages |
| `lib/` | Database connection, Sequelize models, and middleware utilities |
| `lib/models/` | Database schema definitions with type exports |
| `lib/middleware/` | Authentication verification and input validation functions |
| `public/` | Static assets served at the root URL path |

---

## Architecture

### High-Level Design

```
┌─────────────────────────────────────────────────┐
│                   Frontend                       │
│  Next.js App Router (React 19 Server/Client)    │
│  Tailwind CSS 4 + Framer Motion                 │
├─────────────────────────────────────────────────┤
│                API Layer                         │
│  Next.js API Routes (app/admin/api/*)           │
│  JWT Auth + Code Auth Middleware                 │
├─────────────────────────────────────────────────┤
│               Data Layer                         │
│  Sequelize ORM → PostgreSQL                      │
│  Models: User, Product                           │
├─────────────────────────────────────────────────┤
│            External Services                     │
│  GoHighLevel (CRM), WhatsApp, LeadConnector     │
└─────────────────────────────────────────────────┘
```

### Routing Strategy

- **Public pages** — Server-rendered by default; client interactivity via `"use client"` directive where needed (animations, form handling, menus)
- **Admin pages** — Client-side rendered for dynamic dashboard interactions
- **API routes** — All under `app/admin/api/` using Next.js Route Handlers (`route.ts`)

### Authentication Flow

```
1. Admin visits /admin → Login form rendered
2. POST /admin/api/login with email + password
3. Server: bcrypt.compare() against stored hash
4. Server: jwt.sign() creates 1-hour token
5. Client: stores token + user in localStorage
6. Dashboard: sends Authorization: Bearer <token> header
7. API routes: verifyAuth() middleware checks JWT validity
```

A second authentication mechanism exists for the GHL calculator API:
- **Code-based auth**: External services send a `code` header matching the `CODE` environment variable

### Data Flow

```
User Request → Next.js Server → API Route → verifyAuth() middleware
    → Sequelize Model (query PostgreSQL) → JSON Response → Client State (useState)
```

- **Product listing**: GET `/admin/api/products?limit=10&offset=0` → paginated response
- **Product creation**: POST `/admin/api/products` → validated via `validateProduct()` → Sequelize `Product.create()`
- **Price calculation**: POST `/admin/api/ghl/calculate` → iterates product list → returns `total_min`/`total_max` sums

### Database Schema

**Users Table**
| Column | Type | Notes |
|---|---|---|
| id | INTEGER | Primary key, auto-increment |
| username | STRING(100) | Required |
| email | STRING(150) | Required, unique |
| password | STRING(255) | bcrypt hashed |
| token | STRING(500) | JWT token, nullable |
| refToken | STRING(500) | Refresh token, nullable |
| createdAt | DATE | Auto-managed by Sequelize |
| updatedAt | DATE | Auto-managed by Sequelize |

**Products Table**
| Column | Type | Notes |
|---|---|---|
| id | INTEGER | Primary key, auto-increment |
| productId | STRING(100) | External product identifier |
| name | STRING(200) | Product name |
| imageUrl | STRING(500) | Nullable image URL |
| minCost | FLOAT | Minimum assembly cost (EUR), nullable |
| maxCost | FLOAT | Maximum assembly cost (EUR), nullable |
| userId | INTEGER | Foreign key → Users.id |
| createdAt | DATE | Auto-managed by Sequelize |
| updatedAt | DATE | Auto-managed by Sequelize |

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Next.js development server with hot reloading |
| `npm run build` | Create a production build |
| `npm start` | Start the production server (requires `build` first) |
| `npm run lint` | Run ESLint to check for code quality issues |

---

## Coding Standards

### Language & Type Safety

- **TypeScript** with `strict: true` in `tsconfig.json`
- Explicit interfaces for all data models (`UserAttributes`, `ProductAttributes`, etc.)
- Path alias `@/*` maps to the project root for clean imports

### File & Folder Naming

| Element | Convention | Example |
|---|---|---|
| Page routes | `kebab-case` (folder) | `büro/page.tsx`, `schlafzimmer/page.tsx` |
| React components | `PascalCase` | `Navbar.tsx`, `SlideIn.tsx`, `RelatedTopics.tsx` |
| Utility/lib files | `camelCase` | `db.ts`, `auth.ts`, `validateProduct.ts` |
| Sequelize models | `PascalCase` | `User.ts`, `Product.ts` |
| API route files | `route.ts` | Standard Next.js convention |

### Component Conventions

- Use `"use client"` directive only when client-side interactivity is required (event handlers, hooks, browser APIs)
- Components receive typed props via `interface` definitions
- Animation components (`SlideIn`) accept `direction`, `delay`, and `className` props
- No `React.FC` — use plain function declarations with typed return values

### Linting & Formatting

- **ESLint** 9 with flat config (`eslint.config.mjs`)
- `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript` presets
- Run with: `npm run lint`

### Commit Conventions

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add product CSV bulk upload endpoint
fix: correct JWT token expiry validation
docs: update README with deployment instructions
refactor: extract auth middleware into lib/middleware
```

---

## Deployment

### Vercel (Recommended)

1. Push the repository to GitHub
2. Import the project on [vercel.com](https://vercel.com)
3. Configure environment variables in the Vercel dashboard:
   - `DB_HOST`, `DB_PORT`, `DB_NAME`, `DB_USER`, `DB_PASSWORD`
   - `JWT_SECRET`, `CODE`
4. Ensure `serverExternalPackages` in `next.config.ts` includes `pg`, `pg-hstore`, `sequelize`
5. Deploy — Vercel handles builds and serverless function deployment automatically

### Self-Hosted (Docker / VPS)

```bash
# Build the production image
npm run build

# Start the production server
npm start
```

Ensure the PostgreSQL database is accessible from the deployment environment and all environment variables are set.

### Post-Deployment Checklist

- Verify database connectivity (Sequelize will auto-sync on startup)
- Test the admin login flow at `/admin`
- Verify API routes respond with proper authentication
- Check SEO metadata on public pages
- Test responsive design on mobile devices

---

## Testing

### Current State

The project does not yet include a dedicated test suite. Testing is currently performed through:

- **Manual testing** of all routes and admin functionality
- **ESLint** for static code analysis
- **TypeScript** compiler for type checking

### Recommended Testing Strategy

When tests are added to the project:

| Type | Tool | Command |
|---|---|---|
| Unit Tests | Jest + React Testing Library | `npm run test` |
| E2E Tests | Playwright | `npm run test:e2e` |
| Linting | ESLint | `npm run lint` |
| Type Check | TypeScript | `npx tsc --noEmit` |

---

## Contributing

### Branch Strategy

- `main` — Production-ready code
- `develop` — Integration branch for features
- `feature/<name>` — Individual feature branches
- `fix/<name>` — Bug fix branches

### Pull Request Process

1. Create a feature branch from `develop`
2. Implement changes following the coding standards above
3. Run `npm run lint` and ensure no errors
4. Verify the application builds: `npm run build`
5. Open a pull request with a clear description of changes
6. Require at least one review before merging

---

## License

This project is proprietary software. All rights reserved.

---

## Acknowledgments

- [Next.js](https://nextjs.org/) — React framework
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) — Animation library
- [Sequelize](https://sequelize.org/) — PostgreSQL ORM
- [bcryptjs](https://www.npmjs.com/package/bcryptjs) — Password hashing
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) — JWT implementation
- [React Icons](https://react-icons.github.io/react-icons/) — Icon library
- [xlsx](https://www.npmjs.com/package/xlsx) — Spreadsheet parsing for CSV uploads
- [Material Symbols](https://fonts.google.com/icons) — Google's icon font
- [Hanken Grotesk](https://fonts.google.com/specimen/Hanken+Grotesk) — Primary typeface
- [OpenCode](https://opencode.ai) — Terminal-based development environment
