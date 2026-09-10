import { site } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    email: site.email,
    telephone: site.phone,
    slogan: site.taglines.philosophy,
    description:
      "AI-driven fractional marketing for retail, ecommerce, and brands that need senior strategy and content without a 10-person department.",
    areaServed: ["Singapore", "Southeast Asia"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Singapore",
      addressCountry: "SG",
    },
    sameAs: [
      site.social.linkedin,
      site.social.instagram,
      site.social.facebook,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
