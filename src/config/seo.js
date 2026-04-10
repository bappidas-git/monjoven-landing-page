/* ============================================
   SEO Configuration
   Central configuration for all SEO-related
   settings, schemas, and page metadata.
   ============================================ */

export const seoConfig = {
  // =========================================
  // Site-level Settings
  // =========================================
  siteName: 'Monjoven',
  siteUrl: 'https://www.monjoven.com',
  defaultTitle: 'Monjoven | Hair Transplant & Cosmetic Surgery in Guwahati',
  titleTemplate: '%s | Monjoven',
  defaultDescription:
    'Monjoven is the first dedicated hair transplant clinic in Northeast India with 12+ years of experience. Expert FUE & FUT hair transplant, cosmetic surgery, and aesthetic treatments in Guwahati, Assam. Consult Dr. Porag Neog today.',
  defaultImage: 'https://www.monjoven.com/og-image.jpg',
  locale: 'en_IN',
  language: 'en',

  // =========================================
  // Organization Details
  // =========================================
  organization: {
    name: 'Monjoven Hair Transplant & Cosmetic Surgery',
    alternateName: 'Monjoven',
    url: 'https://www.monjoven.com',
    logo: 'https://www.monjoven.com/assets/img/logo.png',
    email: 'dr@monjoven.com',
    phone: '+91 8011002870',
    description:
      'Monjoven is Northeast India\'s first dedicated hair transplant clinic, offering advanced FUE & FUT hair restoration, cosmetic surgery, and aesthetic treatments in Guwahati, Assam. Founded by Dr. Porag Neog with over 12 years of experience.',
    address: {
      streetAddress: 'VIP Road, Borbari, Six Mile, Near Pratiksha Hospital',
      addressLocality: 'Guwahati',
      addressRegion: 'Assam',
      postalCode: '',
      addressCountry: 'IN',
    },
    sameAs: [
      'https://www.facebook.com/MONJOVEN/',
      'https://www.instagram.com/monjoven_',
    ],
    founder: {
      name: 'Dr. Porag Neog',
      jobTitle: 'Cosmetic Surgeon & Founder',
    },
    foundingDate: '2012',
  },

  // =========================================
  // Page-specific SEO Settings
  // =========================================
  pages: {
    home: {
      title: 'Monjoven | Hair Transplant & Cosmetic Surgery in Guwahati',
      description:
        'Northeast India\'s first dedicated hair transplant clinic. Advanced FUE & FUT hair restoration, cosmetic surgery, and aesthetic treatments by Dr. Porag Neog in Guwahati, Assam. 12+ years of experience. Book your consultation today.',
      keywords:
        'hair transplant Guwahati, hair transplant Northeast India, FUE hair transplant, FUT hair transplant, cosmetic surgery Guwahati, hair restoration Assam, Dr Porag Neog, Monjoven clinic, hair loss treatment, aesthetic surgery Guwahati, best hair transplant doctor Assam',
    },
    thankYou: {
      title: 'Thank You | Monjoven',
      description: 'Thank you for your enquiry. Our team will contact you shortly.',
      robots: 'noindex, nofollow',
    },
    admin: {
      title: 'Admin | Monjoven',
      robots: 'noindex, nofollow',
    },
  },

  // =========================================
  // FAQ Schema Data
  // =========================================
  faqs: [
    {
      question: 'What is the hair transplant process at Monjoven?',
      answer:
        'The hair transplant process at Monjoven begins with a detailed consultation with Dr. Porag Neog to assess your hair loss pattern and donor area. On the day of the procedure, local anaesthesia is administered, and healthy hair follicles are extracted and transplanted to the thinning or balding areas. The procedure typically takes 6–8 hours depending on the number of grafts. It is minimally invasive with no major downtime.',
    },
    {
      question: 'What is the recovery time after a hair transplant?',
      answer:
        'Most patients can resume normal daily activities within 2–3 days after the procedure. Mild swelling or redness may occur in the first week and subsides quickly. The transplanted hair sheds within 2–4 weeks, which is completely normal. New hair growth begins around 3–4 months, with full results visible in 10–12 months.',
    },
    {
      question: 'What is the difference between FUE and FUT hair transplant?',
      answer:
        'FUE (Follicular Unit Extraction) involves extracting individual hair follicles one by one, leaving tiny dot scars that are virtually invisible. FUT (Follicular Unit Transplantation) involves removing a strip of scalp from the donor area and dissecting it into individual grafts. FUE has a faster recovery time and no linear scar, while FUT can yield a higher number of grafts in a single session. Dr. Porag Neog will recommend the best method based on your specific needs.',
    },
    {
      question: 'How much does a hair transplant cost at Monjoven?',
      answer:
        'The cost of a hair transplant varies depending on the number of grafts required, the technique used (FUE or FUT), and the complexity of the case. We offer a free consultation where Dr. Porag Neog evaluates your condition and provides a detailed cost estimate. Contact us at +91-8011002870 or fill out the enquiry form to book your consultation.',
    },
    {
      question: 'Who is a good candidate for hair transplant surgery?',
      answer:
        'Good candidates for hair transplant surgery include individuals with pattern baldness, receding hairlines, or thinning hair who have sufficient donor hair at the back or sides of the scalp. Both men and women can benefit from the procedure. Candidates should be in good general health. A consultation with Dr. Porag Neog will determine if you are a suitable candidate based on your hair loss stage, donor area density, and overall health.',
    },
  ],

  // =========================================
  // LocalBusiness Schema Settings
  // =========================================
  localBusiness: {
    type: 'MedicalBusiness',
    priceRange: '$$',
    openingHours: {
      days: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '08:00',
      closes: '22:00',
    },
    geo: {
      latitude: '',
      longitude: '',
    },
  },
};
