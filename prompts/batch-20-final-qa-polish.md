# Batch 20: Final QA, Testing & Polish

## Objective
Perform a comprehensive quality assurance pass across the entire landing page, fixing any remaining issues, ensuring consistency, and optimizing for performance.

## Checklist

### 1. Content Audit - No Placeholder Text
Search the entire `src/` directory for any remaining:
- "Lorem ipsum" text
- "Your Business" / "Your Company" / "Your City" / "Your State"
- "TODO: Replace"
- "placeholder" references (except for image URLs from placehold.co)
- "XXXXXXX" or "XXXXXXXXXX" placeholder values
- Any generic boilerplate text that wasn't updated

**Files to check thoroughly:**
- `src/components/common/Footer/Footer.jsx` (privacy policy, terms content)
- `src/components/common/MobileDrawer/MobileDrawer.jsx`
- `src/components/common/Header/Header.jsx`
- `src/context/ModalContext.jsx`
- `src/components/common/Modal/Modal.jsx`
- All section components in `src/components/sections/`
- `public/index.html`

### 2. Color Consistency Check
Verify all hardcoded color values have been updated:
- Search for old colors: `#2D3561`, `#2EC4B6`, `#FF6B35`, `#E0F7F5`, `#1B2A4A`
- Replace any remaining instances with new Monjoven colors
- Check in `.jsx`, `.module.css`, and `.css` files
- Verify `rgba()` values that reference old colors

### 3. Navigation & Section ID Alignment
Verify all navigation links match actual section IDs:
- Header nav `href` values must match section `id` attributes
- MobileDrawer menu `href` values must match
- Footer quick links must match
- Test smooth scrolling to each section

Expected mapping:
| Nav Link | Section ID |
|----------|-----------|
| #home | home (HeroSection) |
| #about | about (AboutSection) |
| #services | services (ServicesSection) |
| #why-us | why-us (FeaturesSection) |
| #results | results (HighlightsSection) |
| #testimonials | testimonials (CTASection) |
| #contact | contact (ContactSection) |

### 4. Phone/Contact Consistency
Verify consistent contact info across ALL files:
- Phone: `+91 8011002870` or `+918011002870`
- WhatsApp: `+91 9127062599` or `919127062599`
- Email: `dr@monjoven.com`
- Address: "VIP Road, Borbari, Six Mile, Near Pratiksha Hospital, Guwahati, Assam"

### 5. Image Placeholders
Verify all images use descriptive placeholders from `https://placehold.co/`:
- Hero images (desktop & mobile)
- Service images
- About section images
- Highlight/result images
- Doctor profile image
- Map placeholder

### 6. Build Test
Run the build to check for errors:
```bash
npm run build
```
- Fix any compilation errors
- Fix any warnings (unused imports, missing dependencies)
- Ensure no console errors in development mode

### 7. Responsive Testing Checklist
Verify the following at various viewpoints (320px, 375px, 768px, 1024px, 1440px):
- [ ] Header renders correctly with logo
- [ ] Hero section text is readable
- [ ] Lead form is usable on small screens
- [ ] Service cards stack properly
- [ ] Stats section is readable
- [ ] Features tabs work on mobile
- [ ] Testimonials carousel swipes
- [ ] Contact info is accessible
- [ ] Footer links are tappable
- [ ] Mobile bottom nav doesn't overlap content
- [ ] Mobile drawer opens/closes smoothly

### 8. Accessibility Check
- All images have proper alt text
- Form inputs have labels
- Color contrast meets WCAG AA
- Skip to content link works
- Keyboard navigation works for main interactions

### 9. Performance Check
- Verify lazy loading is working for below-fold sections
- Check that images use appropriate sizes
- No unnecessary re-renders in React DevTools
- Bundle size is reasonable

## Files Commonly Missed
- `src/components/common/EngagementTracker/EngagementTracker.jsx`
- `src/utils/webhookSubmit.js` (check webhook field names match form)
- `src/utils/swalHelper.js` (check success/error message text)
- `src/context/ModalContext.jsx` (check default drawer config text)

## Deliverables
- All placeholder text replaced
- All colors consistent
- All navigation working
- Build passes without errors
- No console errors
- Mobile responsive verified

---

**Test the changes and raise a PR after completion.**
