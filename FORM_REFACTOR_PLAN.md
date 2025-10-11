# Form System Refactor Plan

## Overview
This document outlines the complete refactor plan for moving from the current config-based form system to an Astro content collection-driven system that provides automatic page generation, better content management, and maintains type safety.

## Current State (Phase 1 ✅ Complete)
- ✅ Created `GenericForm.astro` component
- ✅ Eliminated 800+ lines of duplicated code
- ✅ Implemented type-safe form configurations in `src/config/forms.ts`
- ✅ Refactored apply pages to use the new system

## Phase 2: Collections + Auto Route Generation

### Goals
1. **Content-First Architecture**: Forms managed through markdown files
2. **Automatic Page Generation**: No manual page creation needed
3. **Auto Thank-You Pages**: Every form gets `/form/{slug}/thank-you/` automatically
4. **Astro Native**: Leverage collections as intended
5. **Backward Compatibility**: Old URLs continue working via redirects

## Implementation Plan

### 1. Collection Schema Design

```typescript
// src/content.config.ts
const forms = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/forms' }),
  schema: z.object({
    slug: z.string(), // "apply", "download", "contact"
    configKey: z.enum(['apply', 'download', 'contact']),
    enabled: z.boolean().default(true),

    // Auto thank-you configuration
    thankYou: z.object({
      titleKey: z.string(), // "thankYou.apply.title"
      messageKey: z.string(), // "thankYou.apply.paragraph"
      buttonTextKey: z.string(), // "thankYou.apply.buttonText"
      buttonUrl: z.string().optional(), // defaults to "/"
      downloadUrl: z.string().optional() // for download forms
    }),

    // Form metadata
    meta: z.object({
      titleKey: z.string(),
      descriptionKey: z.string()
    })
  })
});
```

### 2. Content File Structure

```
src/content/forms/
├── en/
│   ├── apply.md
│   ├── download.md
│   └── contact.md
└── es/
    ├── apply.md
    ├── download.md
    └── contact.md
```

**Example Content File** (`content/forms/en/apply.md`):
```markdown
---
slug: "apply"
configKey: "apply"
enabled: true
thankYou:
  titleKey: "thankYou.apply.title"
  messageKey: "thankYou.apply.paragraph"
  buttonTextKey: "thankYou.apply.buttonText"
  buttonUrl: "/"
meta:
  titleKey: "registration.meta.title"
  descriptionKey: "registration.meta.description"
---

Join Spain's first AI Olympiad and compete with the brightest minds in artificial intelligence.
```

### 3. Dynamic Route Generation

#### Form Pages: `src/pages/form/[slug].astro`
```typescript
---
import { getCollection } from 'astro:content';
import GenericForm from '../../components/GenericForm.astro';
import SimpleFormLayout from '../../layouts/SimpleFormLayout.astro';
import { getFormConfig } from '../../config/forms';

export async function getStaticPaths() {
  const forms = await getCollection('forms', ({ id }) => {
    return id.startsWith('en/'); // English forms
  });

  return forms.map(form => ({
    params: { slug: form.data.slug },
    props: { form }
  }));
}

const { form } = Astro.props;
const locale = 'en';
const configFn = getFormConfig[form.data.configKey];
const formConfig = configFn(locale);

// Update redirect path to auto-generated thank you URL
formConfig.redirectPath = {
  en: `/form/${form.data.slug}/thank-you/`,
  es: `/es/form/${form.data.slug}/thank-you/`
};
---

<SimpleFormLayout
  title={...}
  description={...}
  t={...}
>
  <GenericForm config={formConfig} locale={locale} />
</SimpleFormLayout>
```

#### Spanish Form Pages: `src/pages/es/form/[slug].astro`
```typescript
export async function getStaticPaths() {
  const forms = await getCollection('forms', ({ id }) => {
    return id.startsWith('es/'); // Spanish forms
  });

  return forms.map(form => ({
    params: { slug: form.data.slug },
    props: { form }
  }));
}
// ... rest identical but with locale = 'es'
```

#### Thank You Pages: `src/pages/form/[slug]/thank-you.astro`
```typescript
---
import { getCollection } from 'astro:content';
import SimpleFormLayout from '../../../layouts/SimpleFormLayout.astro';
import GenericThankYou from '../../../components/GenericThankYou.astro';

export async function getStaticPaths() {
  const forms = await getCollection('forms', ({ id }) => {
    return id.startsWith('en/');
  });

  return forms.map(form => ({
    params: { slug: form.data.slug },
    props: { form }
  }));
}

const { form } = Astro.props;
---

<SimpleFormLayout title={...}>
  <GenericThankYou config={form.data.thankYou} locale="en" />
</SimpleFormLayout>
```

### 4. URL Structure (Auto-Generated)

From content files, these URLs are automatically generated:

```
content/forms/en/apply.md     → /form/apply/ + /form/apply/thank-you/
content/forms/en/download.md  → /form/download/ + /form/download/thank-you/
content/forms/en/contact.md   → /form/contact/ + /form/contact/thank-you/
content/forms/es/apply.md     → /es/form/apply/ + /es/form/apply/thank-you/
content/forms/es/download.md  → /es/form/download/ + /es/form/download/thank-you/
```

### 5. Automatic Redirect System

**GenericForm Component Updates**:
```typescript
// Remove manual redirect configuration
// Auto-calculate based on form slug
const redirectUrl = `/${locale === 'es' ? 'es/' : ''}form/${config.slug}/thank-you/`;
```

**Backward Compatibility Redirects** (via middleware or redirect pages):
```
/apply/              → /form/apply/
/download/           → /form/download/
/thank-you-apply/    → /form/apply/thank-you/
/thank-you-download/ → /form/download/thank-you/
/es/apply/           → /es/form/apply/
/es/thank-you-apply/ → /es/form/apply/thank-you/
```

### 6. Components to Create

#### `GenericThankYou.astro`
```typescript
interface Props {
  config: {
    titleKey: string;
    messageKey: string;
    buttonTextKey: string;
    buttonUrl?: string;
    downloadUrl?: string;
  };
  locale: 'en' | 'es';
}
```

## Migration Strategy

### Step 1: Setup Collections
1. Create `src/content/forms/` directory structure
2. Add forms collection to `content.config.ts`
3. Create content files for existing forms

### Step 2: Dynamic Routes
1. Create `src/pages/form/[slug].astro`
2. Create `src/pages/es/form/[slug].astro`
3. Create thank you page routes

### Step 3: Component Updates
1. Create `GenericThankYou.astro` component
2. Update `GenericForm.astro` for auto-redirects
3. Update form config functions to work with collections

### Step 4: Testing & Migration
1. Test new routes work correctly
2. Verify form submissions and redirects
3. Add backward compatibility redirects
4. Remove old manual pages

### Step 5: Content Management
1. Document how to add new forms
2. Train team on markdown-based form creation
3. Optimize for content editor workflows

## Benefits

### Immediate
- **Zero Configuration**: Add form = add markdown file
- **Consistent URLs**: All forms follow `/form/{slug}/` pattern
- **Auto Thank You**: Every form gets automatic thank you page
- **Type Safety**: Maintained through config functions

### Long-term
- **Content Management**: Non-developers can add forms
- **SEO Optimized**: Clean, predictable URL structure
- **Astro Native**: Follows established conventions
- **Scalable**: Easy to add new form types

### Developer Experience
- **Hot Reload**: Content changes update instantly
- **Type Generation**: Astro generates types from schema
- **Consistent Patterns**: Same as FAQ/rounds collections
- **Maintainable**: Single source of truth for forms

## Technical Considerations

### Performance
- Static generation for all form pages
- No runtime overhead for form discovery
- Optimized bundle splitting

### SEO
- Clean URLs with meaningful slugs
- Proper meta tags from collection schema
- Automatic sitemap generation

### Accessibility
- Consistent navigation patterns
- Proper semantic HTML structure
- Form validation and error handling

## Future Enhancements

### Phase 3: Advanced Features
- Form analytics integration
- A/B testing capabilities
- Dynamic field validation
- Multi-step form support

### Phase 4: Content Management UI
- Admin interface for form management
- Visual form builder
- Real-time preview capabilities

---

## Status Tracking

- [x] **Phase 2.1**: Collection schema and content files ✅
- [x] **Phase 2.2**: Dynamic route generation ✅
- [x] **Phase 2.3**: GenericThankYou component ✅
- [x] **Phase 2.4**: Auto-redirect system ✅
- [x] **Phase 2.5**: Backward compatibility ✅
- [x] **Phase 2.6**: Testing and validation ✅
- [x] **Phase 2.7**: Old page cleanup ✅

---

## Phase 3: Self-Contained Forms + Flexible Button System ⚡ Current Phase

### Issues with Phase 2
While Phase 2 successfully implemented collection-driven forms, it still had architectural problems:
- **Scattered Configuration**: Form fields still in `/src/config/forms.ts`
- **External i18n Dependencies**: Thank you content still in `/src/i18n/thankYou.ts`
- **Inflexible Buttons**: Single hardcoded button + special download case
- **URL Handling Issues**: Auto-detection of external vs internal URLs causes problems

### Phase 3 Goals
1. **True Self-Containment**: Everything in frontmatter, no external dependencies
2. **Flexible Button System**: Primary/secondary buttons with explicit control
3. **Smart URL Handling**: Explicit `openInNewTab` control + smart defaults
4. **Consistent Architecture**: Follow FAQ/Rounds pattern completely

### Self-Contained Form Structure
```yaml
---
slug: "apply"
enabled: true
form:
  title: "Apply for IOAI Spain"
  subtitle: "Join the first Spanish AI Olympiad..."
  action: "https://submit-form.formspark.io/xyz"
  fields:
    - type: "text"
      name: "fullName"
      label: "Full Name"
      placeholder: "Enter your full name"
      required: true
    - type: "email"
      name: "email"
      label: "Email Address"
      required: true
    - type: "select"
      name: "role"
      label: "Role"
      options:
        - value: "student"
          label: "Student"
        - value: "teacher"
          label: "Teacher"
  submitButton:
    default: "Submit Application"
    loading: "Submitting..."
  confirmationMessage: "By submitting this form..."
thankYou:
  title: "Application Submitted Successfully!"
  message: "Thank you for applying to the IOAI Spain program..."
  buttons:
    primary:
      text: "Back to Home"
      url: "/"
      openInNewTab: false
    secondary:  # optional
      text: "View FAQ"
      url: "/faq"
      openInNewTab: false
meta:
  title: "Apply - IOAI Spain"
  description: "Apply for the program"
---

Content that appears on the form page...
```

### Smart URL Handling
```typescript
// Explicit control + smart fallbacks
function getButtonProps(button) {
  const isExternalUrl = button.url.startsWith('http://') || button.url.startsWith('https://');
  const shouldOpenInNewTab = button.openInNewTab ?? isExternalUrl; // explicit or fallback

  return {
    href: button.url,
    target: shouldOpenInNewTab ? '_blank' : undefined,
    rel: shouldOpenInNewTab && isExternalUrl ? 'noopener noreferrer' : undefined
  };
}
```

### Button System Examples

**Apply Form** (simple navigation):
```yaml
buttons:
  primary:
    text: "Back to Home"
    url: "/"
    openInNewTab: false
```

**Download Form** (external file + navigation):
```yaml
buttons:
  primary:
    text: "Download Brochure"
    url: "https://drive.google.com/file/d/xyz/view"
    openInNewTab: true
  secondary:
    text: "Back to Home"
    url: "/"
    openInNewTab: false
```

### Phase 3 Implementation Status
- [ ] **Phase 3.1**: Update content collection schema
- [ ] **Phase 3.2**: Migrate form content to self-contained structure
- [ ] **Phase 3.3**: Update GenericForm to use collection data
- [ ] **Phase 3.4**: Update GenericThankYou for flexible buttons
- [ ] **Phase 3.5**: Remove external config/i18n dependencies
- [ ] **Phase 3.6**: Testing and validation

## Questions & Decisions

1. **Form Validation**: Should validation rules live in collections or config?
2. **Analytics**: How to track form completions across the new system?
3. **Caching**: Do we need special caching strategies for form pages?
4. **Error Handling**: How to handle form submission errors in the new flow?

---

*This document will be updated as implementation progresses.*