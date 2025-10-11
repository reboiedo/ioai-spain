# Form Template System Examples

This document demonstrates the different approaches for creating forms using our template system.

## Approach 1: Pure Template (Simplest)

Use a template with no modifications - everything is required by default:

```yaml
---
slug: "basic-download"
formTemplate: "download"
form:
  title: "Download Brochure"
thankYou: [...]
meta: [...]
---
```

**Result**: All fields are required (fullName, email, organization, consent)

## Approach 2: Template with Field Overrides (Recommended)

Use a template but customize specific fields:

```yaml
---
slug: "newsletter"
formTemplate: "download"
fieldOverrides:
  organization:
    required: false
    placeholder: "Your organization (optional)"
  consent:
    label: "I'd like to receive newsletter updates"
form:
  title: "Join Our Newsletter"
  subtitle: "Stay updated with AI Olympiad news"
thankYou: [...]
meta: [...]
---
```

**Result**:
- `fullName` and `email` remain required (from template)
- `organization` becomes optional with custom placeholder
- `consent` gets custom label text
- All other field properties come from the field library

## Approach 3: Fully Custom Form

Complete control over every aspect:

```yaml
---
slug: "custom-survey"
form:
  title: "Custom Survey"
  action: "https://submit-form.com/xyz"
  fields:
    - type: "text"
      name: "fullName"
      label: "Your Name"
      required: true
    - type: "textarea"
      name: "feedback"
      label: "Your Feedback"
      required: true
    - type: "checkbox"
      name: "newsletter"
      label: "Subscribe to updates"
      required: false
  submitButton:
    default: "Submit Survey"
    loading: "Submitting..."
thankYou: [...]
meta: [...]
---
```

**Result**: Complete custom form with unique fields and configuration

## Field Override Options

When using templates, you can override these field properties:

```yaml
fieldOverrides:
  fieldName:
    required: true/false        # Override required status
    placeholder: "New text"     # Override placeholder text
    label: "New label"          # Override label text
```

## Available Templates

### `application`
**Fields**: fullName, email, schoolName, role, consent
**Use for**: Registration, applications, sign-ups

### `download`
**Fields**: fullName, email, organization, consent
**Use for**: Brochure downloads, resource access

### `contact`
**Fields**: fullName, email, message
**Use for**: Contact forms, support requests

## Best Practices

1. **Use templates for 90% of forms** - They ensure consistency and reduce errors
2. **Use field overrides for minor customizations** - Like making fields optional or changing labels
3. **Use full custom forms only when needed** - For unique field types or complex requirements
4. **All fields are required by default** - Explicitly set `required: false` for optional fields
5. **Keep field names consistent** - Use the same field names across forms when possible

## Migration Path

Existing forms can be easily migrated:

**Before:**
```yaml
form:
  fields:
    - type: "text"
      name: "fullName"
      label: "Full Name"
      required: true
    - type: "email"
      name: "email"
      label: "Email"
      required: true
    # ... 20+ more lines
```

**After:**
```yaml
formTemplate: "contact"
form:
  title: "Contact Us"
```

**Savings**: ~40 lines → 4 lines (90% reduction!)