# Batch 06: Services Section Data - Medical Procedures

## Objective
Replace the boilerplate service/plan data with Monjoven's actual medical services (surgical and non-surgical treatments).

## Files to Modify

### 1. `src/data/servicesData.js`
Replace the entire content with Monjoven's services. These serve as service "cards" in the ServicesSection:

```javascript
export const servicesData = [
  {
    id: "hair-transplant",
    name: "Hair Transplant",
    shortName: "FUE/FUT",
    target: "Hair Loss & Baldness",
    duration: "6-8 Hours Procedure",
    description:
      "Advanced Micro-FUE and FUT hair transplant procedures using the smallest punch technology for natural, permanent results with minimal scarring.",
    features: [
      "Micro-FUE with smallest punch size",
      "Natural hairline design",
      "Permanent & natural results",
      "Minimal downtime & scarring",
    ],
    frequency: "One-time procedure with lasting results",
    badge: "Most Popular",
    icon: "mdi:head-outline",
  },
  {
    id: "beard-transplant",
    name: "Beard Transplant",
    shortName: "BEARD",
    target: "Patchy or Thin Beard",
    duration: "4-6 Hours Procedure",
    description:
      "Achieve a full, natural-looking beard with our precision FUE beard transplant. Ideal for patchy, thin, or scarred beard areas.",
    features: [
      "Natural beard density",
      "Custom beard design",
      "FUE extraction method",
      "Minimal recovery time",
    ],
    frequency: "Permanent natural beard growth",
    badge: null,
    icon: "mdi:face-man-shimmer-outline",
  },
  {
    id: "cosmetic-surgery",
    name: "Cosmetic Surgery",
    shortName: "COSMETIC",
    target: "Body Contouring & Enhancement",
    duration: "Varies by Procedure",
    description:
      "Comprehensive cosmetic procedures including rhinoplasty, liposuction, and gynecomastia surgery performed by experienced cosmetic surgeons.",
    features: [
      "Rhinoplasty (Nose reshaping)",
      "Liposuction",
      "Gynecomastia treatment",
      "International-standard techniques",
    ],
    frequency: "Customized treatment plans",
    badge: "Premium",
    icon: "mdi:medical-bag",
  },
];
```

### 2. `src/data/serviceDetailsData.js`
Replace with detailed service information for expanded views:

```javascript
export const serviceDetailsData = [
  {
    id: "hair-transplant",
    title: "Hair Transplant (FUE & FUT)",
    image: "https://placehold.co/600x400/1A5276/FFFFFF?text=Hair+Transplant+Procedure",
    commencement: "Procedure performed in a single day session",
    frequency: "Micro-FUE with 0.6mm-1.25mm punch | FUT Strip Method | Local Anesthesia",
    highlights: [
      "Smallest FUE punch for minimal scarring",
      "Natural angle & density placement",
      "Free 4-month laser therapy post-procedure",
      "Free 2-week follow-up care",
    ],
  },
  {
    id: "beard-transplant",
    title: "Beard & Eyebrow Transplant",
    image: "https://placehold.co/600x400/1A5276/FFFFFF?text=Beard+Transplant",
    commencement: "Single-session procedure with local anesthesia",
    frequency: "FUE extraction | Precision placement | Custom design",
    highlights: [
      "Natural-looking beard density",
      "Eyebrow restoration available",
      "Covers scars and patches",
      "Permanent results with natural growth",
    ],
  },
  {
    id: "cosmetic-surgery",
    title: "Cosmetic & Reconstructive Surgery",
    image: "https://placehold.co/600x400/1A5276/FFFFFF?text=Cosmetic+Surgery",
    commencement: "Consultation required before scheduling",
    frequency: "Rhinoplasty | Liposuction | Gynecomastia | Hymenoplasty",
    highlights: [
      "Board-certified cosmetic surgeon",
      "Strict operative protocols",
      "State-of-the-art facility",
      "Personalized treatment plans",
    ],
  },
];
```

### 3. `src/components/sections/ServicesSection/ServicesSection.jsx`
- Update the section title/subtitle text:
  - Overline: "Our Services"
  - Title: "Advanced Hair & Cosmetic Procedures"
  - Subtitle: "World-class treatments tailored to your needs, performed by experienced specialists using the latest technology"
- Update any CTA button text to "Book Consultation" or "Learn More"
- Update the section `id` attribute to `id="services"` to match navigation
- Replace any hardcoded color values with new brand colors

### 4. `src/components/sections/ServicesSection/ServicesSection.module.css`
- Update hardcoded color values to match new brand palette
- Keep layout intact

## Validation
- All three service cards render correctly
- Service detail expansion/modal works
- Icons display properly (using @iconify/react)
- No placeholder/lorem ipsum text remains
- Section ID matches navigation anchor

---

**Test the changes and raise a PR after completion.**
