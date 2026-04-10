# Batch 03: Header & Navigation Update

## Objective
Update the header component with Monjoven branding, logo, and medical-specific navigation items.

## Files to Modify

### 1. `src/components/common/Header/Header.jsx`

**Logo:**
Replace the placeholder logo URL with:
```javascript
const logoUrl = "https://www.monjoven.com/assets/img/logo.png";
```

**Navigation Items:**
Update `navItems` array to reflect the Monjoven landing page sections:
```javascript
const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Results", href: "#results" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];
```

**Phone Number:**
Search for any hardcoded phone numbers in the header and replace with `+91 8011002870`.

### 2. `src/components/common/Header/Header.module.css`
- Update any hardcoded color values to match the new brand colors from Batch 02
- Ensure the logo displays well at appropriate sizes (the Monjoven logo is wider)

### 3. `src/components/common/MobileDrawer/MobileDrawer.jsx`

**Logo:**
Update the logo URL in the MobileDrawer to match:
```javascript
"https://www.monjoven.com/assets/img/logo.png"
```

**Menu Items:**
Update the `menuItems` array to match the navigation:
```javascript
const menuItems = [
  { id: "home", label: "Home", icon: "ic:outline-home", href: "#home" },
  { id: "about", label: "About Us", icon: "mdi:information-outline", href: "#about" },
  { id: "services", label: "Services", icon: "mdi:medical-bag", href: "#services" },
  { id: "why-us", label: "Why Choose Us", icon: "mdi:star-outline", href: "#why-us" },
  { id: "results", label: "Results", icon: "mdi:image-multiple-outline", href: "#results" },
  { id: "testimonials", label: "Testimonials", icon: "mdi:format-quote-open", href: "#testimonials" },
  { id: "contact", label: "Contact", icon: "mdi:phone-outline", href: "#contact" },
];
```

**Contact Info in Drawer:**
Update any phone number, WhatsApp, or email references:
- Phone: `+91 8011002870`
- WhatsApp: `+91 9127062599`
- Email: `dr@monjoven.com`

### 4. `src/components/common/MobileNavigation/MobileNavigation.jsx`
- Update any hardcoded labels (e.g., "Enquire" -> "Book Consultation")
- Ensure the mobile bottom nav bar has appropriate icons and labels for a medical clinic
- Update CTA button text if applicable

## Validation
- Logo must render correctly on both desktop and mobile
- Navigation links must match actual section IDs in the page
- Phone/WhatsApp click tracking should still work
- No broken links or dead anchors

---

**Test the changes and raise a PR after completion.**
