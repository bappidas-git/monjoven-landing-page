# Batch 18: Mobile Navigation & Bottom Bar Polish

## Objective
Fine-tune the mobile navigation bottom bar and drawer for the medical clinic context, ensuring all mobile interactions are optimized for lead conversion.

## Files to Modify

### 1. `src/components/common/MobileNavigation/MobileNavigation.jsx`

Update the mobile bottom navigation bar items:

**Navigation Items (typically 4-5 items):**
1. **Call** - Icon: `mdi:phone` - Action: Direct call to `+91 8011002870`
2. **WhatsApp** - Icon: `mdi:whatsapp` - Action: Open WhatsApp link
3. **Book Now** - Icon: `mdi:calendar-plus` - Action: Open lead form drawer (primary CTA, highlighted)
4. **Menu** - Icon: `mdi:menu` - Action: Open mobile drawer

**Label Updates:**
- "Enquire" -> "Book Now" or "Consult"
- Any generic labels should be medical-context appropriate

**WhatsApp Link:**
```
https://api.whatsapp.com/send?phone=919127062599&text=Hi%2C%20I%20would%20like%20to%20book%20a%20consultation
```

### 2. `src/components/common/MobileNavigation/MobileNavigation.module.css`
- Update hardcoded colors to brand palette
- Ensure the "Book Now" CTA stands out (use accent color)
- Keep the layout, position, and z-index intact

### 3. `src/components/common/MobileDrawer/MobileDrawer.jsx`

**Drawer Content Updates:**
- Logo: Already updated in Batch 03 (verify it's correct)
- Menu items: Already updated in Batch 03 (verify)

**Contact Section in Drawer:**
Update the bottom contact area:
- Phone: "+91 8011002870" with call icon
- WhatsApp: "+91 9127062599" with WhatsApp icon
- Email: "dr@monjoven.com"

**CTA in Drawer:**
- Button text: "Book Free Consultation"
- Action: Close drawer and open lead form drawer

### 4. `src/components/common/MobileDrawer/MobileDrawer.module.css`
- Update hardcoded colors to brand palette
- Keep drawer mechanics (swipe, animation) intact

## Design Notes
- The mobile bottom bar is critical for lead conversion on mobile
- "Book Now" should be the most visually prominent action
- WhatsApp is a preferred communication channel in India - make it easily accessible
- The call button should use `tel:` protocol for one-tap calling

## Validation
- Bottom navigation bar appears only on mobile
- All buttons trigger correct actions (call, WhatsApp, form, menu)
- Mobile drawer opens and closes smoothly (swipe gestures)
- Drawer links navigate to correct sections
- Phone and WhatsApp links work on mobile devices
- No visual overlap with page content

---

**Test the changes and raise a PR after completion.**
