# Batch 08: Features Section - Why Choose Monjoven

## Objective
Transform the features/support section into a "Why Choose Monjoven" section highlighting the clinic's unique advantages and comprehensive care.

## Files to Modify

### 1. `src/data/featuresData.js`
Replace the entire content with Monjoven-specific feature categories:

```javascript
export const featuresData = [
  {
    id: 1,
    category: "Advanced Technology",
    items: [
      {
        icon: "mdi:microscope",
        title: "Micro-FUE Technology",
        description: "Smallest FUE punch (0.6mm-1.25mm) for minimal scarring and maximum graft survival rate",
      },
      {
        icon: "mdi:laser-pointer",
        title: "Free Laser Therapy",
        description: "Complimentary 4-month post-transplant laser therapy to boost hair growth and healing",
      },
      {
        icon: "mdi:needle",
        title: "PRP Therapy",
        description: "Platelet-Rich Plasma therapy for non-surgical hair restoration and enhanced results",
      },
      {
        icon: "mdi:image-filter-hdr",
        title: "Natural Results",
        description: "Natural angle and density placement ensuring results at par with international standards",
      },
    ],
  },
  {
    id: 2,
    category: "Patient Care & Support",
    items: [
      {
        icon: "mdi:phone-in-talk",
        title: "24/7 Telephonic Support",
        description: "Round-the-clock post-procedure support for any questions or concerns during recovery",
      },
      {
        icon: "mdi:calendar-check",
        title: "Free Follow-Up Care",
        description: "Complimentary 2-week follow-up care ensuring optimal healing and results",
      },
      {
        icon: "mdi:food-apple",
        title: "Luxury Clinic Experience",
        description: "Comfortable clinic environment with complimentary meals and snacks during procedures",
      },
      {
        icon: "mdi:shield-check",
        title: "Strict Safety Protocols",
        description: "Rigorous operative protocols with a fully dedicated team of trained surgeons and technicians",
      },
    ],
  },
  {
    id: 3,
    category: "Experience & Trust",
    items: [
      {
        icon: "mdi:doctor",
        title: "Expert Surgeon",
        description: "Led by Dr. Porag Neog (MBBS, MS) with over 12 years of specialized cosmetic surgery experience",
      },
      {
        icon: "mdi:trophy-outline",
        title: "Pioneer in Northeast India",
        description: "First dedicated hair transplant clinic in the entire Northeast India region since 2012",
      },
      {
        icon: "mdi:earth",
        title: "Global Patient Trust",
        description: "Patients from 10+ countries including US, UK, Canada, Norway, Saudi Arabia, and more",
      },
      {
        icon: "mdi:star-outline",
        title: "Celebrity Clientele",
        description: "Trusted by notable personalities and celebrities for discreet, high-quality procedures",
      },
    ],
  },
];
```

### 2. `src/components/sections/FeaturesSection/FeaturesSection.jsx`
- Update section content:
  - Section `id`: `"why-us"` (to match navigation anchor)
  - Overline: "Why Choose Us"
  - Title: "The Monjoven Advantage"
  - Subtitle: "Experience the difference of Northeast India's most trusted hair transplant and cosmetic surgery clinic"
- Update any CTA text to "Schedule Your Consultation"
- Replace hardcoded color values with new brand colors

### 3. `src/components/sections/FeaturesSection/FeaturesSection.module.css`
- Update hardcoded color values
- Keep layout, grid, animations unchanged

## Validation
- Three category tabs/sections render with 4 items each
- All icons load correctly from @iconify
- Tab switching/category navigation works smoothly
- Section ID matches the "Why Choose Us" nav link
- No lorem ipsum or placeholder text remains
- Mobile responsive layout works

---

**Test the changes and raise a PR after completion.**
