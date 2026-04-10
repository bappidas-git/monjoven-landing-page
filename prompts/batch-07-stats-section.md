# Batch 07: Stats Section - Trust & Achievement Numbers

## Objective
Update the stats/trust section with Monjoven's actual achievements and metrics to build credibility and trust.

## Files to Modify

### 1. `src/data/statsData.js`
Replace the entire stats array with Monjoven-specific metrics:

```javascript
export const statsData = [
  {
    id: 1,
    icon: "mdi:calendar-check",
    title: "12+ Years of Pioneering Excellence",
    description:
      "Northeast India's first dedicated hair transplant clinic, delivering world-class results since 2012.",
    stat: "12+",
    statLabel: "Years Experience",
  },
  {
    id: 2,
    icon: "mdi:account-heart",
    title: "5,000+ Successful Procedures",
    description:
      "Thousands of satisfied patients with natural, permanent hair restoration results.",
    stat: "5K+",
    statLabel: "Procedures Done",
  },
  {
    id: 3,
    icon: "mdi:trophy-outline",
    title: "98% Patient Satisfaction",
    description:
      "Consistently high satisfaction rates from patients across India and internationally.",
    stat: "98%",
    statLabel: "Satisfaction Rate",
  },
  {
    id: 4,
    icon: "mdi:earth",
    title: "International Patient Base",
    description:
      "Trusted by patients from US, Canada, UK, Norway, Saudi Arabia, France, Dubai, Bhutan, and Nepal.",
    stat: "10+",
    statLabel: "Countries Served",
  },
  {
    id: 5,
    icon: "mdi:map-marker-multiple",
    title: "Northeast India Coverage",
    description:
      "Serving all eight northeastern states as the region's leading hair transplant destination.",
    stat: "8",
    statLabel: "NE States Served",
  },
  {
    id: 6,
    icon: "mdi:microscope",
    title: "Micro-FUE Technology",
    description:
      "Using the smallest FUE punch available for minimal scarring and maximum natural results.",
    stat: "0.6mm",
    statLabel: "Smallest Punch",
  },
  {
    id: 7,
    icon: "mdi:shield-check",
    title: "Strict Operative Protocols",
    description:
      "Fully dedicated trained team of surgeons and technicians following rigorous safety standards.",
    stat: "100%",
    statLabel: "Safety Compliance",
  },
];
```

### 2. `src/components/sections/StatsSection/StatsSection.jsx`
- Update the section title/subtitle:
  - Overline: "Our Track Record"
  - Title: "Trusted by Thousands Across the Globe"
  - Subtitle: "Numbers that reflect our commitment to excellence in hair restoration and cosmetic surgery"
- Update any hardcoded text or color values
- Keep the layout, animations, and `AnimatedCounter` logic intact

### 3. `src/components/sections/StatsSection/StatsSection.module.css`
- Update hardcoded color references to match brand palette
- Keep all layout and animation styles unchanged

## Validation
- All stat cards render with correct numbers and labels
- AnimatedCounter animations work properly
- Icons display from @iconify
- Mobile layout stacks cards properly
- No placeholder text remains

---

**Test the changes and raise a PR after completion.**
