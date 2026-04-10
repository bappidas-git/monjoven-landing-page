# Batch 02: Brand Color Theme Update

## Objective
Update the color scheme across the application to match Monjoven's medical/clinical branding. The palette should convey trust, professionalism, and clinical expertise.

## Brand Color Palette for Monjoven

Based on the Monjoven website, use a medical-professional color scheme:

- **Primary Dark (Deep Blue)**: `#1A5276` (Professional medical blue - replaces `#2D3561`)
- **Secondary/Accent (Gold/Teal)**: `#148F77` (Medical teal-green - replaces `#2EC4B6`)
- **Accent Warm (CTA Orange)**: `#E74C3C` (Warm red for CTAs - replaces `#FF6B35`)
- **Light Accent Background**: `#E8F6F3` (Soft teal tint - replaces `#E0F7F5`)
- **Text Dark**: `#1B2631` (Deep dark text - replaces `#1B2A4A`)

## Files to Modify

### 1. `src/styles/variables.css`
Replace all color values systematically:

**Primary Colors:**
- `--primary-dark`: `#1A5276`
- `--primary-dark-alt`: `#1F6F96`
- `--primary-dark-light`: `#2980B9`
- `--primary-dark-lighter`: `#5DADE2`

**Accent Colors (Teal):**
- `--accent-gold`: `#148F77`
- `--accent-gold-light`: `#1ABC9C`
- `--accent-gold-dark`: `#0E6655`
- `--accent-gold-hover`: `#17A589`
- Update all gradients to use the new teal values

**Accent Orange (CTA):**
- `--accent-orange`: `#E74C3C`
- `--accent-orange-light`: `#EC7063`
- `--accent-orange-dark`: `#C0392B`

**Card Backgrounds:**
- `--card-yellow`: `#E8F6F3`

**Shadow Colors:**
- Update `--shadow-gold` to use `rgba(20, 143, 119, 0.3)`
- Update button shadows to match new accent

**Overlay Colors:**
- Update overlay rgba values to use the new primary `#1A5276` base

### 2. `src/theme/muiTheme.js`
Update the `colors` object:

```javascript
primary: {
  main: '#1A5276',
  light: '#2980B9',
  dark: '#154360',
  contrastText: '#FFFFFF',
},
secondary: {
  main: '#148F77',
  light: '#1ABC9C',
  dark: '#0E6655',
  contrastText: '#FFFFFF',
},
orange: {
  main: '#E74C3C',
  light: '#EC7063',
  dark: '#C0392B',
  // ... full scale
},
```

- Update `navy` colors to match new primary palette
- Update `iconColors` to complement the new scheme
- Update `background.dark` to `#1A5276`
- Update all `orangeShadow` references to new accent teal
- Update the scroll progress bar, CircularProgress, and BackToTop button colors in hardcoded values

### 3. `src/App.jsx` (hardcoded color references only)
Search for hardcoded hex colors (`#2EC4B6`, `#2D3561`, `#FF6B35`, etc.) and replace with the new palette. Look for:
- `SectionLoader` component colors
- `ScrollProgressIndicator` gradient
- `BackToTopButton` background color
- `ErrorBoundary` button color

## Important Notes
- DO NOT modify any layout, spacing, typography sizes, or component structure
- Only change color values, gradients, and shadow colors
- Ensure all hover states, active states, and focus states use appropriate shades
- Verify color contrast meets WCAG AA standards (especially text on colored backgrounds)

---

**Test the changes and raise a PR after completion.**
