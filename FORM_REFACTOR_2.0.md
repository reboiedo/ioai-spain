# Form Refactor 2.0: Guardian Sign-Up Flow

## Problem Statement

The current form system needs to support guardian sign-ups for participants under 14 years old while maintaining a clean user experience for all registration types.

### Requirements
- Allow guardians to sign up children under 14
- Support self-registration for students 14+
- Support self-registration for teachers, parents, and other adults
- Handle edge case: parent helping a 14+ student register
- Minimize form field bloat by reusing existing fields
- Create an intuitive, conversational flow

---

## Conversational Flow Design

### Step 1: Who's Filling Out the Form?

```
┌─────────────────────────────────────────────────────┐
│  Apply to IOAI Spain                                │
├─────────────────────────────────────────────────────┤
│                                                     │
│  Are you signing up yourself or someone else?      │
│                                                     │
│    ○ I want to participate myself                  │
│    ○ I'm signing up someone else                   │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

### Path A: "I want to participate myself"

#### Step 2A: What describes you?

```
│    ● I want to participate myself                  │
│                                                     │
│  What best describes you?                          │
│    ○ Student                                       │
│    ○ Teacher                                       │
│    ○ Parent/Guardian                               │
│    ○ Other                                         │
```

#### If Student → Step 3A: Age Check

```
│    ● Student                                       │
│                                                     │
│  Are you 14 years old or older?                   │
│    ○ Yes                                          │
│    ○ No                                           │
│                                                     │
│  [If No → Show guardian fields below]              │
│                                                     │
│  ┌─────────────────────────────────────────────┐  │
│  │ Guardian Information (Required)             │  │
│  │                                             │  │
│  │ Guardian Full Name: *                       │  │
│  │ [_____________________________________]     │  │
│  │                                             │  │
│  │ Guardian Email: *                           │  │
│  │ [_____________________________________]     │  │
│  └─────────────────────────────────────────────┘  │
│                                                     │
│  Your Full Name: [____________________________]    │
│  Your Email: [________________________________]    │
│  School Name: [_______________________________]    │
│  ☑ I consent to receiving emails                   │
│  [Submit]                                          │
```

#### If Teacher/Parent/Other → Skip to Form

```
│    ● Teacher                                       │
│                                                     │
│  Your Full Name: [____________________________]    │
│  Your Email: [________________________________]    │
│  School/Organization: [_______________________]    │
│  ☑ I consent to receiving emails                   │
│  [Submit]                                          │
```

---

### Path B: "I'm signing up someone else"

#### Step 2B: Age Check

```
│    ● I'm signing up someone else                   │
│                                                     │
│  Is the participant 14 years old or older?        │
│    ○ Yes                                          │
│    ○ No                                           │
│                                                     │
│  Your Full Name (Guardian): *                      │
│  [_____________________________________]           │
│                                                     │
│  Your Email (Guardian): *                          │
│  [_____________________________________]           │
│                                                     │
│  Participant Full Name: *                          │
│  [_____________________________________]           │
│                                                     │
│  Participant Email: *                              │
│  [_____________________________________]           │
│                                                     │
│  School Name: *                                    │
│  [_____________________________________]           │
│                                                     │
│  ☑ I consent to receiving emails                   │
│  [Submit]                                          │
```

---

## Field Specifications

### New Fields Required

#### 1. signUpFor (Radio Button)
```typescript
signUpFor: {
  en: {
    type: 'radio',
    name: 'signUpFor',
    label: 'Are you signing up yourself or someone else?',
    required: true,
    options: [
      { value: 'myself', label: 'I want to participate myself' },
      { value: 'someone-else', label: "I'm signing up someone else" }
    ]
  },
  es: {
    type: 'radio',
    name: 'signUpFor',
    label: '¿Te inscribes tú mismo o a otra persona?',
    required: true,
    options: [
      { value: 'myself', label: 'Quiero participar yo mismo' },
      { value: 'someone-else', label: 'Estoy inscribiendo a otra persona' }
    ]
  }
}
```

#### 2. participantAge (Radio Button - Dynamic Label)
```typescript
participantAge: {
  en: {
    type: 'radio',
    name: 'participantAge',
    label: 'Are you 14 years old or older?', // Changes based on context
    required: true,
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' }
    ]
  },
  es: {
    type: 'radio',
    name: 'participantAge',
    label: '¿Tienes 14 años o más?',
    required: true,
    options: [
      { value: 'yes', label: 'Sí' },
      { value: 'no', label: 'No' }
    ]
  }
}
```

**Label Variations:**
- If `signUpFor === 'myself'`: "Are you 14 years old or older?"
- If `signUpFor === 'someone-else'`: "Is the participant 14 years old or older?"

#### 3. guardianName (Text Input)
```typescript
guardianName: {
  en: {
    type: 'text',
    name: 'guardianName',
    label: 'Guardian Full Name',
    placeholder: 'Enter guardian full name',
    required: false // Becomes required dynamically
  },
  es: {
    type: 'text',
    name: 'guardianName',
    label: 'Nombre Completo del Tutor',
    placeholder: 'Ingrese el nombre completo del tutor',
    required: false
  }
}
```

#### 4. guardianEmail (Email Input)
```typescript
guardianEmail: {
  en: {
    type: 'email',
    name: 'guardianEmail',
    label: 'Guardian Email',
    placeholder: 'Enter guardian email',
    required: false // Becomes required dynamically
  },
  es: {
    type: 'email',
    name: 'guardianEmail',
    label: 'Email del Tutor',
    placeholder: 'Ingrese el email del tutor',
    required: false
  }
}
```

### Existing Fields Reused

- `role` - Moved to position 2 (after signUpFor)
- `fullName` - Labels change dynamically
- `email` - Labels change dynamically
- `schoolName` - Same for all
- `consent` - Same for all

---

## Conditional Display Logic

### Rule 1: Show Role Question
```javascript
role field visible ONLY IF signUpFor === 'myself'
```

### Rule 2: Show Age Question
```javascript
participantAge visible IF:
  - signUpFor === 'myself' AND role === 'student'
  OR
  - signUpFor === 'someone-else'
```

### Rule 3: Show Guardian Fields
```javascript
guardianName + guardianEmail visible AND required IF:
  - (signUpFor === 'myself' AND role === 'student' AND participantAge === 'no')
  OR
  - (signUpFor === 'someone-else')
```

### Rule 4: Dynamic Labels

**participantAge label:**
- `signUpFor === 'myself'` → "Are you 14 years old or older?"
- `signUpFor === 'someone-else'` → "Is the participant 14 years old or older?"

**fullName label:**
- `signUpFor === 'myself' AND role !== 'student'` → "Your Full Name"
- `signUpFor === 'myself' AND role === 'student'` → "Your Full Name"
- `signUpFor === 'someone-else'` → "Participant Full Name"

**email label:**
- `signUpFor === 'myself'` → "Your Email"
- `signUpFor === 'someone-else'` → "Participant Email"

**Guardian field labels:**
- `signUpFor === 'someone-else'` → "Your Full Name (Guardian)", "Your Email (Guardian)"
- `signUpFor === 'myself'` → "Guardian Full Name", "Guardian Email"

---

## Implementation Checklist

### Phase 1: Add Radio Button Support
- [ ] Add `'radio'` to `FormFieldType` in `formFields.ts`
- [ ] Add `'radio'` to field type enum in `content.config.ts`
- [ ] Add radio button rendering in `GenericForm.astro`
- [ ] Add radio button CSS styling

### Phase 2: Add New Fields
- [ ] Add `signUpFor` field to `formFields.ts`
- [ ] Add `participantAge` field to `formFields.ts`
- [ ] Add `guardianName` field to `formFields.ts`
- [ ] Add `guardianEmail` field to `formFields.ts`

### Phase 3: Update Template
- [ ] Update `application` template in `formTemplates.ts`:
  ```typescript
  application: {
    fields: [
      'signUpFor',        // NEW - position 1
      'role',             // EXISTING - position 2 (conditional)
      'participantAge',   // NEW - position 3 (conditional)
      'guardianName',     // NEW - position 4 (conditional)
      'guardianEmail',    // NEW - position 5 (conditional)
      'fullName',         // EXISTING - position 6
      'email',            // EXISTING - position 7
      'schoolName',       // EXISTING - position 8
      'consent'           // EXISTING - position 9
    ]
  }
  ```

### Phase 4: Add Conditional Logic to GenericForm.astro
- [ ] Add event listener for `signUpFor` radio change
- [ ] Show/hide `role` field based on `signUpFor`
- [ ] Show/hide `participantAge` field based on `signUpFor` + `role`
- [ ] Show/hide guardian fields based on conditions
- [ ] Update `participantAge` label dynamically
- [ ] Update `fullName` and `email` labels dynamically
- [ ] Make guardian fields required when visible
- [ ] Clear guardian fields when hidden

### Phase 5: Testing
- [ ] Test: Student 14+ self-registration (no guardian)
- [ ] Test: Student under 14 self-registration (with guardian)
- [ ] Test: Teacher self-registration
- [ ] Test: Parent self-registration
- [ ] Test: Other self-registration
- [ ] Test: Parent signing up 14+ student
- [ ] Test: Parent signing up under 14 student
- [ ] Test: Field clearing when changing selections
- [ ] Test: Form submission with all scenarios
- [ ] Test: Spanish translations

---

## User Scenarios Covered

### Scenario 1: Student 14+ Self-Registration
1. Select "I want to participate myself"
2. Select "Student"
3. Select "Yes" (14+)
4. Guardian fields hidden
5. Fill name, email, school
6. Submit

**Submitted Data:**
```json
{
  "signUpFor": "myself",
  "role": "student",
  "participantAge": "yes",
  "fullName": "John Doe",
  "email": "john@example.com",
  "schoolName": "Springfield High",
  "consent": "yes"
}
```

---

### Scenario 2: Student Under 14 Self-Registration
1. Select "I want to participate myself"
2. Select "Student"
3. Select "No" (under 14)
4. Guardian fields appear
5. Fill guardian name, guardian email
6. Fill own name, email, school
7. Submit

**Submitted Data:**
```json
{
  "signUpFor": "myself",
  "role": "student",
  "participantAge": "no",
  "guardianName": "Mary Doe",
  "guardianEmail": "mary@example.com",
  "fullName": "Jane Doe",
  "email": "jane@example.com",
  "schoolName": "Springfield Middle",
  "consent": "yes"
}
```

---

### Scenario 3: Teacher Self-Registration
1. Select "I want to participate myself"
2. Select "Teacher"
3. Age question hidden
4. Fill name, email, school
5. Submit

**Submitted Data:**
```json
{
  "signUpFor": "myself",
  "role": "teacher",
  "fullName": "Dr. Smith",
  "email": "smith@school.edu",
  "schoolName": "Springfield High",
  "consent": "yes"
}
```

---

### Scenario 4: Parent Self-Registration
1. Select "I want to participate myself"
2. Select "Parent/Guardian"
3. Age question hidden
4. Fill name, email, organization
5. Submit

**Submitted Data:**
```json
{
  "signUpFor": "myself",
  "role": "parent",
  "fullName": "Mary Doe",
  "email": "mary@example.com",
  "schoolName": "Parent Association",
  "consent": "yes"
}
```

---

### Scenario 5: Parent Signing Up 14+ Student (Edge Case)
1. Select "I'm signing up someone else"
2. Select "Yes" (participant is 14+)
3. Guardian fields shown (always shown for someone-else)
4. Fill guardian name, guardian email
5. Fill participant name, participant email, school
6. Submit

**Submitted Data:**
```json
{
  "signUpFor": "someone-else",
  "participantAge": "yes",
  "guardianName": "Mary Doe",
  "guardianEmail": "mary@example.com",
  "fullName": "John Doe",
  "email": "john@example.com",
  "schoolName": "Springfield High",
  "consent": "yes"
}
```

---

### Scenario 6: Parent Signing Up Under 14 Student
1. Select "I'm signing up someone else"
2. Select "No" (participant is under 14)
3. Guardian fields shown
4. Fill guardian name, guardian email
5. Fill participant name, participant email, school
6. Submit

**Submitted Data:**
```json
{
  "signUpFor": "someone-else",
  "participantAge": "no",
  "guardianName": "Mary Doe",
  "guardianEmail": "mary@example.com",
  "fullName": "Jane Doe",
  "email": "jane@example.com",
  "schoolName": "Springfield Middle",
  "consent": "yes"
}
```

---

## Technical Implementation Notes

### Client-Side JavaScript Structure

```javascript
// GenericForm.astro <script> section

const signUpForRadios = document.querySelectorAll('input[name="signUpFor"]');
const roleField = document.querySelector('.field-role');
const participantAgeField = document.querySelector('.field-participantAge');
const guardianFields = document.querySelectorAll('.field-guardian');
const participantAgeLabel = document.querySelector('label[for="participantAge"]');
const fullNameLabel = document.querySelector('label[for="fullName"]');
const emailLabel = document.querySelector('label[for="email"]');

function updateFormDisplay() {
  const signUpFor = document.querySelector('input[name="signUpFor"]:checked')?.value;
  const role = document.querySelector('input[name="role"]:checked')?.value;
  const participantAge = document.querySelector('input[name="participantAge"]:checked')?.value;

  // Logic implementation here...
}

// Add event listeners
signUpForRadios.forEach(radio => radio.addEventListener('change', updateFormDisplay));
// ... more listeners
```

### Field Visibility Helper

```javascript
function setFieldVisibility(field, visible, required = false) {
  const fieldGroup = field.closest('.form-group');

  if (visible) {
    fieldGroup.style.display = 'flex';
    field.required = required;
  } else {
    fieldGroup.style.display = 'none';
    field.required = false;
    field.value = ''; // Clear when hidden

    // Uncheck radio buttons when hidden
    if (field.type === 'radio') {
      document.querySelectorAll(`input[name="${field.name}"]`)
        .forEach(radio => radio.checked = false);
    }
  }
}
```

### Dynamic Label Updates

```javascript
function updateLabels(signUpFor) {
  const locale = document.documentElement.lang || 'en';

  const labels = {
    en: {
      participantAge: {
        myself: 'Are you 14 years old or older?',
        someoneElse: 'Is the participant 14 years old or older?'
      },
      fullName: {
        myself: 'Your Full Name',
        someoneElse: 'Participant Full Name'
      },
      // ... more labels
    },
    es: { /* Spanish translations */ }
  };

  // Apply labels based on context
}
```

---

## Files to Modify

1. **`src/config/formFields.ts`**
   - Add 'radio' to FormFieldType
   - Add signUpFor field
   - Add participantAge field
   - Add guardianName field
   - Add guardianEmail field

2. **`src/config/formTemplates.ts`**
   - Update application template field order
   - Keep existing submit button and confirmation

3. **`src/components/GenericForm.astro`**
   - Add radio button rendering (new case in field.type switch)
   - Add conditional display logic script
   - Add dynamic label updates
   - Add field clearing on condition changes

4. **`src/content.config.ts`**
   - Add 'radio' to field type enum

5. **CSS in `GenericForm.astro`**
   - Add radio button group styling
   - Add radio button label styling
   - Ensure proper spacing and alignment

---

## Edge Cases & Validation

### Validation Rules
- Guardian email must be different from participant email (optional, for data quality)
- All required fields must be filled before submission
- Guardian fields become required only when visible
- Form clears guardian data if user changes from "someone-else" to "myself"

### Edge Case Handling
- **Scenario**: User selects "myself" → "student" → "no" (under 14), fills guardian info, then changes to "yes" (14+)
  - **Behavior**: Guardian fields hide and clear automatically

- **Scenario**: User selects "someone-else", fills all info, then switches to "myself"
  - **Behavior**: Guardian fields hide, participant name/email remain in fullName/email fields, age question appears

---

## Future Enhancements (Post-Implementation)

1. **Relationship Field** (Optional)
   - Add dropdown: Parent / Legal Guardian / Other
   - Only shown when guardian fields are visible

2. **Guardian Consent Checkbox** (Optional)
   - Separate consent for guardian vs participant
   - Required when participant is under 14

3. **Email Validation**
   - Prevent same email for guardian and participant
   - Show warning if emails match

4. **Progressive Enhancement**
   - Graceful degradation if JavaScript disabled
   - All fields visible by default without JS

---

## Success Metrics

After implementation, verify:
- ✅ All 6 user scenarios work correctly
- ✅ No field bloat (only 4 new fields added)
- ✅ Intuitive, conversational flow
- ✅ Guardian information collected for under-14 participants
- ✅ Form works in both English and Spanish
- ✅ No console errors
- ✅ Mobile-responsive layout maintained
- ✅ Form submissions reach Formspark correctly

---

## Timeline Estimate

- Phase 1 (Radio Support): 1-2 hours
- Phase 2 (New Fields): 30 minutes
- Phase 3 (Template Update): 15 minutes
- Phase 4 (Conditional Logic): 2-3 hours
- Phase 5 (Testing): 1-2 hours

**Total**: ~5-8 hours
