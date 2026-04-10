# Batch 05: About Section - Clinic & Doctor Profile

## Objective
Update the About section to tell Monjoven's story, showcase Dr. Porag Neog's credentials, and build trust through clinic achievements.

## Files to Modify

### 1. `src/components/sections/AboutSection/AboutSection.jsx`

Find and update all hardcoded content in this component:

**Section Title:**
- Subtitle/overline: "About Monjoven"
- Main title: "Northeast India's First Dedicated Hair Transplant Clinic"

**About Content:**
Write compelling copy covering:
- Founded in 2012 by Dr. Porag Neog (MBBS, MS)
- First dedicated clinic for hair loss solutions and hair transplant in Northeast India
- Meaning of "Monjoven" - "My Youth" - restoring youthfulness and confidence
- Over a decade of pioneering excellence in hair transplants and cosmetic surgery
- International-standard results using advanced micro-FUE technology
- Patients from across India and internationally (US, Canada, UK, Norway, Saudi Arabia, France, Dubai, Bhutan, Nepal)

**Doctor Profile Card/Section:**
If the About section has a profile or image area, update with:
- Image: `https://placehold.co/400x500/1A5276/FFFFFF?text=Dr.+Porag+Neog`
- Name: Dr. Porag Neog
- Credentials: MBBS, MS
- Title: Cosmetic Surgeon & Founder
- Brief bio: Highly trained cosmetic surgeon with 12+ years specializing in hair transplant using the smallest FUE punch (micro-FUE) technology

**Differentiators/USP List:**
Update any differentiator items to:
1. Icon: `mdi:medal-outline` - "12+ Years of Proven Excellence"
2. Icon: `mdi:microscope` - "Smallest FUE Punch Technology"
3. Icon: `mdi:earth` - "International Standard Results"
4. Icon: `mdi:account-group` - "Globally Trusted by Patients"

**About Stats (AnimatedCounter):**
Update the inline stats to Monjoven-relevant numbers:
- "12+" / "Years Experience"
- "5000+" / "Successful Procedures"
- "98%" / "Patient Satisfaction"
- "8" / "NE States Served"

**CTA Button:**
- Text: "Book Free Consultation"
- Action: Should trigger the lead form drawer

### 2. `src/components/sections/AboutSection/AboutSection.module.css`
- Update any hardcoded color values to the new brand palette
- Keep layout and responsive styles unchanged

### 3. About Section Image
Use this placeholder for the about section image:
```
https://placehold.co/600x400/1A5276/FFFFFF?text=Monjoven+Clinic+Interior
```

## Validation
- Section renders with all content properly
- AnimatedCounter values work correctly
- CTA button opens the lead form
- No lorem ipsum text remains

---

**Test the changes and raise a PR after completion.**
