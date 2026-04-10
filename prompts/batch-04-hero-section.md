# Batch 04: Hero Section Content

## Objective
Transform the hero section into a compelling, high-conversion entry point for Monjoven's hair transplant and cosmetic surgery services.

## Files to Modify

### 1. `src/components/sections/HeroSection/HeroSection.jsx`

**Hero Images:**
Update `HERO_IMAGES` with medical-themed placeholders:
```javascript
const HERO_IMAGES = {
  desktop: [
    "https://placehold.co/1920x800/1A5276/FFFFFF?text=Monjoven+Hair+Transplant+Clinic",
  ],
  mobile: [
    "https://placehold.co/768x1000/1A5276/FFFFFF?text=Monjoven+Hair+Transplant",
  ],
};
```

**Hero Content (find and update all hardcoded text):**

- **Badge/Chip text**: "Northeast India's Premier Hair Transplant Clinic"
- **Main Headline**: "Restore Your Confidence with World-Class Hair Transplant"
- **Sub-headline/Description**: "Led by Dr. Porag Neog (MBBS, MS) with 12+ years of experience. We use the latest Micro-FUE technology to deliver natural, permanent results at par with international standards."
- **CTA Button text**: "Book Free Consultation"
- **Secondary CTA**: "Call Now: +91 8011002870"

**Trust Badges / Quick Stats below the headline:**
Update any trust indicator chips/badges to show:
- "12+ Years Experience"
- "5000+ Successful Procedures"
- "Micro-FUE Technology"
- "Free Post-Op Laser Therapy"

**Lead Form:**
The `UnifiedLeadForm` in the hero should have:
- `source`: "hero"
- Title: "Book Your Free Consultation"
- Subtitle: "Get expert advice from Dr. Porag Neog"

### 2. `src/components/sections/HeroSection/HeroSection.module.css`
- Update any hardcoded color values to match Monjoven brand colors
- Ensure the hero overlay creates good contrast for text readability over the medical imagery
- Keep all layout, animation, and responsive styles intact

## Content Guidelines
- The headline should evoke confidence and trust
- Emphasize "free consultation" as the primary CTA
- Include the doctor's credentials prominently
- The hero must immediately communicate: medical expertise + results + easy first step

## Validation
- Hero section renders correctly on desktop and mobile
- Lead form is visible and functional
- CTA buttons have proper hover/click states
- All text is readable over the background

---

**Test the changes and raise a PR after completion.**
