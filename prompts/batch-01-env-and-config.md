# Batch 01: Environment & Core Configuration Setup

## Objective
Set up the foundational environment variables and core configuration for Monjoven Hair Transplant & Cosmetic Surgery Clinic.

## Files to Modify

### 1. `.env` (copy from `.env.example` if not configured)
Update all environment variables with Monjoven business info:

```env
REACT_APP_NAME="Monjoven"
REACT_APP_PROJECT_NAME="Monjoven - Hair Transplant & Cosmetic Surgery"
REACT_APP_DEVELOPER_NAME="Monjoven Clinic"
REACT_APP_PROJECT_LOCATION="Guwahati, Assam"

REACT_APP_SALES_PHONE="+91-8011002870"
REACT_APP_WHATSAPP_NUMBER="+919127062599"
REACT_APP_SALES_EMAIL="dr@monjoven.com"
REACT_APP_SUPPORT_EMAIL="monjoven@gmail.com"

REACT_APP_OFFICE_ADDRESS="VIP Road, Borbari, Six Mile, Near Pratiksha Hospital, Guwahati, Assam"

REACT_APP_FACEBOOK_URL="https://www.facebook.com/MONJOVEN/"
REACT_APP_INSTAGRAM_URL="https://www.instagram.com/monjoven_"
```

### 2. `src/config/seo.js`
Update the full SEO configuration:
- `siteName`: "Monjoven"
- `siteUrl`: "https://www.monjoven.com"
- `defaultTitle`: "Monjoven | Hair Transplant & Cosmetic Surgery in Guwahati"
- `defaultDescription`: Craft a compelling meta description about Monjoven being the first dedicated hair transplant clinic in Northeast India with 12+ years of experience.
- `locale`: "en_IN"
- Organization details: Name, address (VIP Road, Borbari, Six Mile, Guwahati, Assam), phone (+91 8011002870), email (dr@monjoven.com)
- `logo`: "https://www.monjoven.com/assets/img/logo.png"
- `founder.name`: "Dr. Porag Neog"
- `founder.jobTitle`: "Cosmetic Surgeon & Founder"
- `foundingDate`: "2012"
- `sameAs`: Add Facebook and Instagram URLs
- `localBusiness.type`: "MedicalBusiness"
- Update `pages.home` with Monjoven-specific title/description/keywords targeting hair transplant, cosmetic surgery, Guwahati, Northeast India
- Update `faqs` with medical procedure FAQs (hair transplant process, recovery time, FUE vs FUT, pricing consultation, who is a good candidate)

### 3. `src/data/locationData.js`
Update with Monjoven clinic details:
- `name`: "Monjoven Hair Transplant & Cosmetic Surgery"
- `address`: "VIP Road, Borbari, Six Mile, Near Pratiksha Hospital, Guwahati, Assam"
- `city`: "Guwahati"
- `state`: "Assam"
- `phone`: "+918011002870"
- `phoneDisplay`: "+91-8011002870"
- `email`: "dr@monjoven.com"
- `whatsapp`: "919127062599"
- `website`: "www.monjoven.com"
- `mapUrl`: Use a placeholder "https://placehold.co/800x400/1A5276/FFFFFF?text=Monjoven+Clinic+Location+Map"
- `nearbyAreas`: Relevant Guwahati areas (Six Mile, Zoo Road, Ganeshguri, Dispur, Chandmari, Paltan Bazaar, Maligaon, Jalukbari, Beltola, Kahilipara, Narengi, Basistha, Lokhra, Khanapara, Hatigaon)
- `servingStates`: ["Assam", "Meghalaya", "Nagaland", "Manipur", "Mizoram", "Tripura", "Arunachal Pradesh", "Sikkim"]

## Validation
- Ensure all placeholder/TODO values are replaced
- Phone numbers and emails must be consistent across files
- No lorem ipsum text should remain in these files

---

**Test the changes and raise a PR after completion.**
