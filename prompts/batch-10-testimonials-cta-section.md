# Batch 10: CTA Section - Patient Testimonials & Social Proof

## Objective
Transform the CTA section into a powerful testimonials and social proof section featuring real patient reviews from Monjoven's clinic.

## Files to Modify

### 1. `src/components/sections/CTASection/CTASection.jsx`

Update all hardcoded content to create a testimonials-focused CTA section:

**Section Header:**
- Section `id`: `"testimonials"`
- Overline: "Patient Testimonials"
- Title: "What Our Patients Say"
- Subtitle: "Real experiences from patients who trusted Monjoven for their transformation"

**Testimonials Data:**
Create a testimonials array with real reviews from Monjoven patients (extracted from the website):

```javascript
const testimonials = [
  {
    name: "Kausar Shofi Ahmed",
    location: "Guwahati, Assam",
    rating: 5,
    text: "I am very satisfied with the results of my hair transplant at Monjoven. Dr. Neog and his team are highly skilled and excellent. The entire process was smooth and comfortable.",
    procedure: "Hair Transplant",
  },
  {
    name: "Medini Saharia",
    location: "Assam",
    rating: 5,
    text: "Amazing experience at Monjoven. The staff is very professional and caring. Dr. Porag Neog explained everything clearly and the results exceeded my expectations.",
    procedure: "Hair Transplant",
  },
  {
    name: "Irfan Khan",
    location: "International Patient",
    rating: 5,
    text: "I've had three transplant sessions at Monjoven across 2017-2021. Every time the results were outstanding. Dr. Neog is truly one of the best in this field.",
    procedure: "Hair Transplant (3 sessions)",
  },
  {
    name: "Biki Patowary",
    location: "Assam",
    rating: 5,
    text: "The clinic environment is top-notch and the team is well-mannered and always smiling. My hair transplant results look completely natural. Highly recommend Monjoven!",
    procedure: "Hair Transplant",
  },
  {
    name: "Dipankar Borah",
    location: "Northeast India",
    rating: 5,
    text: "Best hair transplant clinic in Northeast India. The procedure was painless and the results are incredible. Dr. Neog and his team made me feel comfortable throughout.",
    procedure: "Hair Transplant",
  },
  {
    name: "Manash Baishya",
    location: "Assam",
    rating: 5,
    text: "Monjoven gave me back my confidence. The micro-FUE technique they use ensures minimal scarring and the most natural-looking results. Worth every penny!",
    procedure: "Micro-FUE Hair Transplant",
  },
];
```

**CTA Section Below Testimonials:**
- Headline: "Ready to Start Your Transformation?"
- Sub-text: "Book a free consultation with Dr. Porag Neog and discover the best treatment plan for you"
- Primary CTA: "Book Free Consultation" (opens lead form drawer)
- Secondary CTA: "Call +91 8011002870" (phone link)

**Social Proof Badges:**
Display trust indicators:
- "5,000+ Happy Patients"
- "4.9/5 Average Rating"
- "12+ Years Trusted"

### 2. `src/components/sections/CTASection/CTASection.module.css`
- Update hardcoded colors to brand palette
- If this section has a dark background, ensure it uses `#1A5276` (new primary dark)
- Keep layout and carousel/slider mechanics intact

## Design Notes
- Testimonial cards should show: patient name, location, star rating, quote, procedure type
- Include a subtle avatar/icon placeholder for each testimonial
- The CTA area should have high visual contrast to drive conversions
- Star ratings should use `mdi:star` icons in gold/yellow

## Validation
- All testimonials render in cards with ratings
- Carousel/slider navigation works
- CTA buttons are functional (lead form + phone)
- Section ID matches navigation anchor
- Mobile responsive layout works

---

**Test the changes and raise a PR after completion.**
