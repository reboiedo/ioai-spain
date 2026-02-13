# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Astro-based website for IOAI Spain (International Olympiad in Artificial Intelligence - Spain), a bilingual site supporting English and Spanish. The site handles program registration, information delivery, and content management through Astro's content collections.

## Development Commands

```bash
# Start development server at localhost:4321
npm run dev

# Build production site to ./dist/
npm run build

# Preview production build locally
npm run preview

# Run Astro CLI commands
npm run astro -- <command>
```

## Architecture

### Internationalization (i18n)

- **Locales**: English (`en`) and Spanish (`es`)
- **Default locale**: English (no prefix required)
- **Spanish routes**: Prefixed with `/es/`
- **Translation system**: Centralized in `src/i18n/`
  - Each section has its own translation file (e.g., `hero.ts`, `faq.ts`, `registration.ts`)
  - `src/i18n/index.ts` exports `useTranslations()` function
  - Translations use a typed structure: `{ en: string, es: string }`
  - Helper function `getTranslation()` extracts locale-specific text

### Content Collections

The site uses Astro Content Collections for structured content management. All collections are defined in `src/content.config.ts`:

#### FAQ Collection (`src/content/faq/`)
- Markdown files organized by locale: `en/` and `es/`
- Schema: `question`, `category`, `order`
- Categories: eligibility, process, requirements, contact, general

#### Rounds Collection (`src/content/rounds/`)
- Competition rounds and training phases
- Schema: `roundNumber`, `title`, `date`, `introSentence`, `phase`, `qualification`
- Phases: basic, preparatory, team

#### Forms Collection (`src/content/forms/`) ⚠️ KEY SYSTEM
The forms system has been through multiple refactors. **Current state (Phase 3 planning)**:
- Self-contained form configurations in markdown frontmatter
- Dynamic route generation at `src/pages/form/[slug].astro` and `src/pages/es/form/[slug].astro`
- Auto-generated thank-you pages at `src/pages/form/[slug]/thank-you.astro`
- Two configuration approaches:
  1. **Template-based**: Use `formTemplate: "application" | "download" | "contact"` + minimal overrides
  2. **Full configuration**: Define complete `form` object with fields, submitButton, action
- Templates defined in `src/config/formTemplates.ts` using field library from `src/config/formFields.ts`
- See `FORM_REFACTOR_PLAN.md` for detailed architecture and migration strategy

**Form URL structure**:
- English: `/form/{slug}/` → `/form/{slug}/thank-you/`
- Spanish: `/es/form/{slug}/` → `/es/form/{slug}/thank-you/`

#### Privacy Collection (`src/content/privacy/`)
- Privacy policy content by locale
- Schema: `title`, `lastUpdated`, `locale`, `description`

### Form System Deep Dive

**Components**:
- `GenericForm.astro`: Renders forms from collection data, handles template resolution
- `GenericThankYou.astro`: Post-submission thank-you pages with flexible button system
- `SimpleFormLayout.astro`: Layout wrapper for form pages

**Key features**:
- Form submission via Formspark (external service)
- Runtime redirect URL generation (absolute URLs required by Formspark)
- Automatic loading states and native HTML form submission
- Type-safe field definitions with locale support

### Layouts

- `BaseLayout.astro`: Core layout with meta tags, navigation, footer
- `HomePageLayout.astro`: Homepage-specific layout
- `SimpleFormLayout.astro`: Minimal layout for form pages
- `PrivacyLayout.astro`: Layout for privacy policy pages

### Component Organization

- `src/components/`: Astro components for sections (Hero, FAQ, About, Sponsors, etc.)
- `src/components/ui/`: Reusable UI components (Button, Input, Select, Checkbox, etc.)
- Components generally use translations from `useTranslations(locale)` hook

### Path Aliases

TypeScript path alias `@/*` maps to `./src/*` for cleaner imports:
```typescript
import { useTranslations } from '@/i18n';
```

### Styling

- CSS custom properties defined at root level for theming
- Variables: `--background-primary`, `--text-primary`, `--border-primary`, spacing scales (`--space-xl`, etc.)
- Scoped component styles with media queries for responsive design
- GSAP animations used selectively (e.g., button interactions)

## Important Patterns

### Adding New Forms

1. Create markdown file in `src/content/forms/{locale}/{slug}.md`
2. Choose template-based or full configuration approach
3. Define `thankYou` configuration with button(s)
4. Set `meta` for SEO
5. Pages generate automatically at build time

### Working with Translations

1. Add translation keys to appropriate file in `src/i18n/`
2. Use typed structure: `export const section = { key: { en: "...", es: "..." } }`
3. Export from `src/i18n/index.ts`
4. Access via `useTranslations(locale).section.key`

### Bilingual Page Creation

- English pages: `src/pages/{route}.astro`
- Spanish pages: `src/pages/es/{route}.astro`
- Use same component structure, different locale prop
- Share components between locales

## Git Configuration

- Main branch: `main`
- Repository is clean at conversation start
- Recent work includes form optimizations, favicon updates, and OG meta fixes

## Notes on Dependencies

- **Astro 5.14.1**: Core framework
- **GSAP**: Animation library for interactive elements
- **astro-tunnel**: Development tunneling for remote testing

## Development Workflow

1. Content changes in collections auto-reload in dev mode
2. Type generation from content schemas happens automatically
3. Forms use native HTML submission (no client-side JS frameworks)
4. All routes are statically generated at build time

<!-- GitHub-Slack integration test: This comment verifies PRs are reflected in Slack -->
