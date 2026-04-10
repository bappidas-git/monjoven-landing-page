# Batch 13: Footer - Monjoven Branding & Legal Content

## Objective
Update the footer with Monjoven branding, clinic contact details, social media links, navigation, and legal content (Privacy Policy, Terms & Conditions).

## Files to Modify

### 1. `src/components/common/Footer/Footer.jsx`

**Logo:**
Replace the placeholder logo URL with:
```javascript
"https://www.monjoven.com/assets/img/logo.png"
```

**Company Description:**
Update the footer description to:
"Monjoven (meaning 'My Youth') is Northeast India's first dedicated hair transplant and cosmetic surgery clinic, founded in 2012 by Dr. Porag Neog. We specialize in advanced hair restoration and cosmetic procedures with international-standard results."

**Quick Links:**
Update navigation links in footer to match the landing page sections:
- Home
- About Us
- Services
- Why Choose Us
- Results
- Testimonials
- Contact

**Services Links:**
- Hair Transplant
- Beard Transplant
- Eyebrow Transplant
- Rhinoplasty
- Liposuction
- Gynecomastia
- PRP Therapy
- Laser Therapy

**Contact Information:**
- Address: VIP Road, Borbari, Six Mile, Near Pratiksha Hospital, Guwahati, Assam
- Phone: +91 8011002870
- WhatsApp: +91 9127062599
- Email: dr@monjoven.com

**Social Media Links:**
- Facebook: `https://www.facebook.com/MONJOVEN/`
- Instagram: `https://www.instagram.com/monjoven_`
- WhatsApp: `https://api.whatsapp.com/send?phone=919127062599`

**Copyright:**
"2024 Monjoven Hair Transplant & Cosmetic Surgery. All rights reserved."

**Privacy Policy Content (PrivacyPolicyContent component):**
Update the privacy policy to reference:
- "Monjoven" instead of "Your Company Pvt. Ltd."
- Medical data collection (health history, treatment preferences, before/after photos)
- HIPAA-like privacy considerations for medical data
- How patient consultation data is handled
- Cookie and analytics tracking disclosure

**Terms & Conditions Content (if present):**
Update references to:
- "Monjoven" as the business name
- Medical disclaimer: results may vary, consultation required
- Cancellation/rescheduling policy for appointments
- Medical information is not a substitute for professional advice

### 2. `src/components/common/Footer/Footer.module.css`
- Update hardcoded color values to brand palette
- Keep footer layout structure intact

## Validation
- Logo renders correctly
- All footer links point to correct sections
- Social media links open in new tabs
- Phone/email links are clickable
- Privacy Policy and Terms modals open and display correctly
- Copyright text is current
- Mobile footer layout works properly

---

**Test the changes and raise a PR after completion.**
