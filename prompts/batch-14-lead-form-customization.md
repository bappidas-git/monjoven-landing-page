# Batch 14: Lead Form Customization for Medical Consultations

## Objective
Customize the unified lead form and lead form drawer to capture medical consultation leads effectively for Monjoven.

## Files to Modify

### 1. `src/components/common/UnifiedLeadForm/UnifiedLeadForm.jsx`

**Form Fields:**
Update the form fields to be relevant for a medical consultation:

- **Full Name** (required) - Text input
  - Placeholder: "Your Full Name"
  - Validation: minimum 2 characters

- **Phone Number** (required) - Tel input
  - Placeholder: "+91 XXXXX XXXXX"
  - Validation: valid Indian phone number (10 digits)

- **Email** (optional) - Email input
  - Placeholder: "your@email.com"

- **Service Interest** (required) - Select dropdown
  - Options: "Hair Transplant", "Beard Transplant", "Eyebrow Transplant", "Rhinoplasty", "Liposuction", "Gynecomastia", "PRP Therapy", "Laser Therapy", "Hairfall Consultation", "Other"

- **Brief Message** (optional) - Textarea
  - Placeholder: "Describe your concern or preferred consultation time..."
  - Max 500 characters

**Form Header Text (contextual):**
Depending on the `source` prop:
- `hero`: Title "Book Your Free Consultation", Subtitle "Get expert advice from Dr. Porag Neog"
- `contact`: Title "Request a Callback", Subtitle "Our team will contact you within 24 hours"
- `default`: Title "Schedule a Consultation", Subtitle "Take the first step towards your transformation"

**Submit Button:**
- Text: "Book Free Consultation"
- Loading text: "Submitting..."

**Success Message:**
Update the post-submission message:
- Title: "Thank You!"
- Message: "Your consultation request has been received. Dr. Neog's team will contact you within 24 hours to schedule your appointment."

**Trust Indicators below form:**
- "100% Confidential"
- "No Obligation"
- "Free Consultation"

### 2. `src/components/common/LeadFormDrawer/LeadFormDrawer.jsx`

**Drawer Header:**
- Default title: "Book Your Free Consultation"
- Default subtitle: "Fill in your details and our specialist will contact you"
- Update any hardcoded text to Monjoven-specific content

### 3. `src/components/common/UnifiedLeadForm/UnifiedLeadForm.module.css`
- Update hardcoded color values to brand palette
- Keep form layout, validation styles, and animations intact

### 4. `src/components/common/LeadFormDrawer/LeadFormDrawer.module.css`
- Update hardcoded color values

### 5. `src/components/common/LeadForm/LeadForm.jsx` (if used separately)
- Apply the same field and content updates as UnifiedLeadForm

## Important Notes
- DO NOT modify form submission logic, webhook integration, or validation framework
- Only update labels, placeholders, field options, and visual text
- Ensure the "Service Interest" dropdown has all Monjoven services
- Keep the form conversion-optimized (minimal required fields)

## Validation
- Form renders correctly in hero, contact section, and drawer
- All fields validate properly
- Service dropdown shows all options
- Submit button works and shows loading state
- Success message displays after submission
- Form is mobile-responsive

---

**Test the changes and raise a PR after completion.**
