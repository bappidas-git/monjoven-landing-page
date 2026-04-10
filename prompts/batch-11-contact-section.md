# Batch 11: Contact Section - Clinic Location & Contact Info

## Objective
Update the contact section with Monjoven's clinic location, contact details, operating hours, and a strong call-to-action form.

## Files to Modify

### 1. `src/components/sections/ContactSection/ContactSection.jsx`

Update all hardcoded content:

**Section Header:**
- Section `id`: `"contact"`
- Overline: "Get In Touch"
- Title: "Visit Our Clinic or Book a Consultation"
- Subtitle: "Located in Guwahati, Assam - easily accessible from all parts of Northeast India"

**Contact Information Cards:**
Update contact details displayed in the section:

1. **Address:**
   - Icon: `mdi:map-marker-outline`
   - Label: "Clinic Address"
   - Value: "VIP Road, Borbari, Six Mile, Near Pratiksha Hospital, Guwahati, Assam"

2. **Phone:**
   - Icon: `mdi:phone-outline`
   - Label: "Call Us"
   - Value: "+91 8011002870"
   - Link: `tel:+918011002870`

3. **WhatsApp:**
   - Icon: `mdi:whatsapp`
   - Label: "WhatsApp"
   - Value: "+91 9127062599"
   - Link: `https://api.whatsapp.com/send?phone=919127062599`

4. **Email:**
   - Icon: `mdi:email-outline`
   - Label: "Email Us"
   - Value: "dr@monjoven.com"
   - Link: `mailto:dr@monjoven.com`

5. **Working Hours:**
   - Icon: `mdi:clock-outline`
   - Label: "Clinic Hours"
   - Value: "Mon - Sat: 9:00 AM - 6:00 PM"

**Map Placeholder:**
```
https://placehold.co/800x400/1A5276/FFFFFF?text=Monjoven+Clinic+Six+Mile+Guwahati+Map
```

**Lead Form in Contact Section:**
If the contact section includes a `UnifiedLeadForm` or `LeadForm`:
- Source: "contact"
- Title: "Request a Callback"
- Subtitle: "Fill in your details and our team will reach out to you"

### 2. `src/components/sections/ContactSection/ContactSection.module.css`
- Update hardcoded color values to brand palette
- Keep layout intact

### 3. `src/components/sections/LocationSection/LocationSection.jsx`
Update location section content:
- Section title: "Serving All of Northeast India"
- Subtitle: "Conveniently located in Guwahati with patients visiting from across the Northeast and beyond"
- Update warehouse/clinic locations text
- Update nearby areas to Guwahati neighborhoods (Six Mile, Zoo Road, Ganeshguri, Dispur, Chandmari, etc.)
- Update the serving regions to all 8 NE states
- Map image: `https://placehold.co/800x400/1A5276/FFFFFF?text=Northeast+India+Service+Map`

### 4. `src/components/sections/LocationSection/LocationSection.module.css`
- Update hardcoded colors to brand palette

## Validation
- All contact details are correct and clickable (phone, WhatsApp, email)
- Map placeholder renders properly
- Contact form works with proper source tracking
- Location section shows correct areas and states
- Mobile layout stacks properly
- No placeholder text remains

---

**Test the changes and raise a PR after completion.**
