export const CATEGORY_SLUGS: Record<string, string> = {
  "Hero": "hero-section-design",
  "Testimonials": "testimonial-section-design",
  "Feature": "feature-section-design",
  "Call to actions": "cta-section-design",
  "Footer": "footer-section-design",
  "Blog": "blog-section-design",
  "Navbar": "navbar-design",
  "Pricing": "pricing-section-design",
  "Logo": "logo-section-design",
  "FAQs": "faq-section-design",
  "Team": "team-section-design",
  "Contact": "contact-section-design",
  "Works": "portfolio-section-design",
};

export const getCategorySlug = (categoryName: string): string => {
  return CATEGORY_SLUGS[categoryName] || categoryName.toLowerCase().replace(/\s+/g, '-');
};

export const getCategoryName = (slug: string): string => {
  const entry = Object.entries(CATEGORY_SLUGS).find(([_, s]) => s === slug);
  return entry ? entry[0] : slug;
};
