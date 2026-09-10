export const site = {
  name: "Tagtin",
  legalName: "Tagtin Pte Ltd",
  url: "https://tagtin.com",
  locale: "en_SG",
  email: "hello@tagtin.com",
  phone: "+65 8123 4900",
  phoneHref: "tel:+6581234900",
  whatsapp: "https://wa.me/6581234900",
  location: "Singapore",
  taglines: {
    philosophy: "Story-led. AI-driven. Human always.",
    system: "Attract. Engage. Retain.",
    offer: "Fractional marketing. Full storytelling.",
    closer: "Targeted grabbing. Real engagement.",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/tagtin",
    instagram: "https://www.instagram.com/tagtin.sg/",
    facebook: "https://www.facebook.com/tagtin.sg",
  },
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/fractional-marketing", label: "Fractional Marketing" },
  { href: "/studio", label: "Tagtin Studio" },
  { href: "/work", label: "Work" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
] as const;

export const sprintHref = "/contact";

export function pageTitle(title?: string) {
  return title ? `${title} | Tagtin` : "Tagtin | AI-Driven Fractional Marketing for Retail & Brands";
}
