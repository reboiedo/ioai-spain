# Tenerife Summer Camp Page Implementation Plan

## Overview
Integration of a new Tenerife summer camp page (based on https://join.leaguesofcode.com/camps/menorca-summer) into the IOAI Spain project with isolated styling and component architecture.

## Architecture Strategy

### File Organization
- **Components**: `src/components/tenerife-camp/` - All camp-specific components
- **Styles**: `src/styles/tenerife-camp.css` - Dedicated stylesheet for camp page
- **Layout**: `src/layouts/TenerifeCampLayout.astro` - Custom layout importing camp styles
- **Config**: `src/config/camp*.ts` - JSON-based structured data
- **Collections**: `src/content/camp-faq/` - Rich text FAQ with links
- **i18n**: `src/i18n/tenerifeCamp.ts` - All camp translations

### Content Strategy
- **Collections** (needs markdown/rich text): `camp-faq`
- **Config files** (structured data): `campCourses.ts`, `campInstructors.ts`, `campSchedule.ts`

---

## Implementation Stages

### Stage 1: Foundation & Content Structure ✅
**Goal**: Set up all necessary files, collections, and configuration structure

#### Tasks
- [x] **1.1** Update `src/content.config.ts` to add `campFaq` collection
  - Schema: `question: string`, `category?: string`, `order: number`
  - Loader: `glob({ pattern: '**/*.md', base: './src/content/camp-faq' })`

- [x] **1.2** Create `src/config/campCourses.ts`
  - TypeScript interface for course data
  - Initial course array (can be populated later)

- [x] **1.3** Create `src/config/campInstructors.ts`
  - TypeScript interface for instructor data
  - Initial instructor array (can be populated later)

- [x] **1.4** Create `src/config/campSchedule.ts`
  - TypeScript interface for schedule/timeline data
  - Initial schedule structure

- [x] **1.5** Create `src/i18n/tenerifeCamp.ts`
  - Translation structure following existing pattern
  - Export all camp-related text keys
  - Both `en` and `es` translations
  - Location updated to Tenerife

- [x] **1.6** Update `src/i18n/index.ts` to export Tenerife camp translations
  - Import and add to translations object
  - Add to `useTranslations()` return object

**Deliverable**: All foundation files created and wired into existing systems ✅

---

### Stage 2: Styling Foundation ⏳
**Goal**: Create isolated stylesheet and layout for camp page

#### Tasks
- [ ] **2.1** Create `src/styles/tenerife-camp.css`
  - Define camp-specific CSS custom properties
  - Color palette matching target page
  - Typography scale if different from main site
  - Utility classes for camp sections

- [ ] **2.2** Create `src/layouts/TenerifeCampLayout.astro`
  - Extend/use `BaseLayout.astro` as foundation
  - Import `tenerife-camp.css`
  - Accept props: `title`, `description`, `ogImage`, etc.
  - Optional: custom navigation styling

- [ ] **2.3** Test layout with placeholder content
  - Create temporary test page to verify styles load correctly
  - Ensure no conflicts with existing global styles

**Deliverable**: Working layout with custom styles, ready for components

---

### Stage 3: Component Development ⏳
**Goal**: Build all summer camp section components

#### Tasks
- [ ] **3.1** Analyze target page and document sections
  - List all distinct sections (Hero, Courses, Instructors, Schedule, FAQ, etc.)
  - Note interactive elements, animations, special styling
  - Take screenshots/notes for reference

- [ ] **3.2** Create `src/components/tenerife-camp/` directory structure

- [ ] **3.3** Build `CampHero.astro`
  - Hero section with title, subtitle, CTA
  - Background styling matching target
  - Responsive design

- [ ] **3.4** Build `CampCourses.astro`
  - Display courses from `campCourses.ts` config
  - Card/grid layout
  - Locale-aware content

- [ ] **3.5** Build `CampInstructors.astro`
  - Display instructors from `campInstructors.ts` config
  - Profile cards with images
  - Bio text, social links

- [ ] **3.6** Build `CampSchedule.astro`
  - Timeline/schedule display from `campSchedule.ts`
  - Visual timeline or table format
  - Dates, times, activities

- [ ] **3.7** Build `CampFAQ.astro`
  - Fetch from `camp-faq` collection
  - Accordion/expandable format
  - Support for rich text and links in answers

- [ ] **3.8** Build additional sections as needed
  - Testimonials, features, pricing, etc.
  - Identify and create based on target page analysis

- [ ] **3.9** Reuse existing UI components where appropriate
  - `Button.astro`, form components, etc.
  - Ensure styling compatibility

**Deliverable**: All camp components built and ready for assembly

---

### Stage 4: Content Population ⏳
**Goal**: Fill all config files and collections with real content

#### Tasks
- [ ] **4.1** Populate `src/config/campCourses.ts` with course data
  - All courses with descriptions
  - Both English and Spanish content

- [ ] **4.2** Populate `src/config/campInstructors.ts` with instructor data
  - All instructor profiles
  - Images, bios, social links
  - Both English and Spanish content

- [ ] **4.3** Populate `src/config/campSchedule.ts` with schedule data
  - Complete timeline/schedule
  - Both English and Spanish content

- [ ] **4.4** Create FAQ content in `src/content/camp-faq/en/`
  - All FAQ markdown files
  - Rich text, links, formatting

- [ ] **4.5** Create FAQ content in `src/content/camp-faq/es/`
  - Spanish translations of all FAQs

- [ ] **4.6** Complete all translations in `src/i18n/summerCamp.ts`
  - All text for all sections
  - Verify no missing keys

**Deliverable**: All content ready for display

---

### Stage 5: Page Assembly ⏳
**Goal**: Create the actual summer camp pages in both languages

#### Tasks
- [ ] **5.1** Create `src/pages/tenerife-camp.astro` (English)
  - Use `TenerifeCampLayout`
  - Import and compose all camp components
  - Wire up content collections and configs
  - Set proper meta tags

- [ ] **5.2** Create `src/pages/es/tenerife-camp.astro` (Spanish)
  - Same structure as English version
  - Pass `locale='es'` to all components

- [ ] **5.3** Test both pages in development
  - Verify all content displays correctly
  - Check translations
  - Test responsive behavior

- [ ] **5.4** Add camp page links to main navigation (if needed)
  - Update `Navigation.astro` if camp should be in main nav
  - Or create standalone navigation for camp

**Deliverable**: Complete, functional summer camp pages in both languages

---

### Stage 6: Polish & Integration ⏳
**Goal**: Refine design, add animations, optimize performance

#### Tasks
- [ ] **6.1** Add animations with GSAP (if needed)
  - Scroll-triggered animations
  - Hover effects
  - Smooth transitions

- [ ] **6.2** Optimize images and assets
  - Compress images
  - Use appropriate formats (WebP, etc.)
  - Add loading="lazy" where appropriate

- [ ] **6.3** Add meta tags and OG images
  - Custom OG image for camp page
  - Proper meta descriptions
  - Social sharing tags

- [ ] **6.4** Integrate camp registration form (if needed)
  - Create form in `src/content/forms/` collection
  - Use template: "application" or create custom
  - Wire up to thank-you page

- [ ] **6.5** Cross-browser testing
  - Test on Chrome, Firefox, Safari
  - Mobile testing (iOS, Android)
  - Fix any browser-specific issues

- [ ] **6.6** Performance audit
  - Run Lighthouse audit
  - Optimize based on results
  - Check bundle size

**Deliverable**: Production-ready summer camp pages

---

### Stage 7: Documentation & Deployment ⏳
**Goal**: Document the implementation and prepare for deployment

#### Tasks
- [ ] **7.1** Update `CLAUDE.md` with summer camp architecture
  - Document component structure
  - Document content management approach
  - Add notes on styling isolation

- [ ] **7.2** Create content editing guide
  - How to add/edit courses
  - How to add/edit instructors
  - How to add/edit FAQs
  - How to update schedule

- [ ] **7.3** Test build process
  - Run `npm run build`
  - Verify no build errors
  - Check dist output

- [ ] **7.4** Preview production build
  - Run `npm run preview`
  - Final QA of all pages
  - Test all links and navigation

- [ ] **7.5** Deploy to production
  - Commit changes
  - Push to repository
  - Deploy via hosting platform

**Deliverable**: Deployed summer camp pages with documentation

---

## Files to Create

### New Files
```
src/
├── components/tenerife-camp/
│   ├── CampHero.astro
│   ├── CampCourses.astro
│   ├── CampInstructors.astro
│   ├── CampSchedule.astro
│   ├── CampFAQ.astro
│   └── [additional sections].astro
├── config/
│   ├── campCourses.ts            ✅
│   ├── campInstructors.ts        ✅
│   └── campSchedule.ts           ✅
├── content/camp-faq/
│   ├── en/
│   │   ├── 01-question.md
│   │   └── ...
│   └── es/
│       ├── 01-question.md
│       └── ...
├── i18n/
│   └── tenerifeCamp.ts           ✅
├── layouts/
│   └── TenerifeCampLayout.astro
├── pages/
│   ├── tenerife-camp.astro
│   └── es/
│       └── tenerife-camp.astro
└── styles/
    └── tenerife-camp.css
```

### Modified Files
```
src/
├── content.config.ts          ✅ (add campFaq collection)
└── i18n/index.ts              ✅ (export tenerifeCamp translations)
```

---

## Notes & Decisions

### Why Collections for FAQ Only?
- FAQs need markdown rendering for rich text and links
- Courses, instructors, schedule are structured data (name-value pairs)
- Config files are simpler and more performant for structured data

### Style Isolation Strategy
- All camp styles in separate CSS file
- Loaded only on camp pages via layout
- Use CSS custom properties for theming
- Prefix camp-specific classes to avoid conflicts

### Benefits of This Approach
- ✅ Isolated and maintainable
- ✅ No refactoring of existing code
- ✅ Type-safe content management
- ✅ Easy to remove or extend
- ✅ Follows project patterns
- ✅ Bilingual ready

---

## Status Legend
- ⏳ Not Started
- 🚧 In Progress
- ✅ Complete
- ⚠️ Blocked/Issues

---

**Last Updated**: 2025-10-13
