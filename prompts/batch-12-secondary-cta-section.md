# Batch 12: Secondary CTA Section - Final Conversion Push

## Objective
Update the secondary CTA section (bottom of the page, before footer) with a strong final call-to-action focused on booking a free consultation.

## Files to Modify

### 1. `src/components/sections/SecondaryCTASection/SecondaryCTASection.jsx`

Update all hardcoded content:

**Section Content:**
- Background: Use the primary dark color (`#1A5276`) or a gradient for visual impact
- Overline: "Take the First Step"
- Title: "Your Transformation Begins with a Free Consultation"
- Subtitle/Description: "Dr. Porag Neog personally evaluates every case. Book your free consultation today and get a customized treatment plan designed just for you."

**Key Benefits List (if present):**
- "Free initial consultation & assessment"
- "Personalized treatment plan"
- "Transparent pricing with no hidden costs"
- "Flexible scheduling to suit your convenience"

**CTA Buttons:**
- Primary: "Book Free Consultation" (opens lead form drawer)
- Secondary: "WhatsApp Us" (links to `https://api.whatsapp.com/send?phone=919127062599&text=Hi%20Dr.%20Neog%2C%20I%20want%20to%20book%20a%20consultation`)

**Trust Indicators:**
- "24/7 Support"
- "No Obligation"
- "100% Confidential"

**Image (if section has one):**
```
https://placehold.co/600x500/148F77/FFFFFF?text=Book+Your+Consultation+Today
```

### 2. `src/components/sections/SecondaryCTASection/SecondaryCTASection.module.css`
- Update hardcoded color values to brand palette
- Ensure the section has strong visual contrast (dark background with light text)
- Keep layout and animations intact

## Design Notes
- This is the final push before the footer - it should be visually impactful
- Use urgency and reassurance in the copy
- The WhatsApp CTA should be prominent as many users prefer messaging
- Include a phone number as plain text: "+91 8011002870"

## Validation
- Both CTAs are functional (lead form + WhatsApp)
- Section renders with proper contrast and readability
- Mobile responsive layout works
- No placeholder text remains

---

**Test the changes and raise a PR after completion.**
