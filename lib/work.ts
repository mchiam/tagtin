export type CaseStudy = {
  slug: string;
  brand: string;
  title: string;
  summary: string;
  problem: string;
  story: string;
  aiAssist?: string;
  result: string;
  notes?: string;
  tags: string[];
};

export const cases: CaseStudy[] = [
  {
    slug: "pokemon-fairprice",
    brand: "Pokémon",
    title: "Living with Pokémon",
    summary:
      "A FairPrice loyalty collection that treated Pokémon as part of daily life — then earned the coverage and sell-through to match.",
    problem:
      "A mass-retail collection had to land with families, not just fans. Awareness without sell-through would have been an expensive souvenir.",
    story:
      "Live with the characters. The campaign made Pokémon feel like they belonged in Singapore homes — a collection you redeem because it fits the week, not because it shouts.",
    aiAssist:
      "Human-led story, PR, and retail activation. AI was not the lever on this campaign; the same story platform is now faster to extend with Tagtin’s content engine.",
    result:
      "Published results: S$557K PR value across print, online, and social; +86% social followers and +152% engagement; 89% sell-through in 90 days.",
    tags: ["Retail activation", "Content", "Influencer", "Social"],
  },
  {
    slug: "disney-princess-enchanted-living",
    brand: "Disney",
    title: "Disney Princess Enchanted Living",
    summary:
      "A FairPrice exclusive that had to feel like a collection with a point of view — not another princess SKU drop.",
    problem:
      "Licensed retail lives or dies on whether shoppers can see themselves in the story. A 90-day sell-through window left little room for vague brand theatre.",
    story:
      "Enchanted living, not costume. The work put the collection into real households — media, social, and in-store — so the products felt useful, not ornamental.",
    aiAssist:
      "Crafted as a full campaign system: story, media event, social, and retail. Production today would run through the same human brief, with AI accelerating variants — not replacing the idea.",
    result:
      "Published results: S$437K PR value; +45% social followers during the campaign; 82% sell-through in 90 days.",
    tags: ["Retail activation", "Brand story", "Influencer", "Social"],
  },
  {
    slug: "robinsons-online",
    brand: "Robinsons",
    title: "Robinsons Online",
    summary:
      "Department-store ecommerce that had to win visits, baskets, and subscribers — not just a prettier homepage.",
    problem:
      "Online retail was being asked to carry growth. Traffic without conversion, and email without opens, would not have paid for the work.",
    story:
      "Treat the site like a store with a voice. Content, CRM, and social were built as one shopping conversation — useful, specific, and timed to how people actually buy.",
    result:
      "Published results over 12 months: more than 2 million visits and 1.4 million shoppers; average transaction value +17.28% and conversion +1.5%; EDM open rates +40% and subscribers +15%; Facebook +23% and Instagram +37%.",
    tags: ["Content strategy", "Ecommerce", "Email", "Social"],
  },
  {
    slug: "hello-kitty-blooming-bonds",
    brand: "Hello Kitty",
    title: "Sanrio Characters: Blooming Bonds",
    summary:
      "A FairPrice × Sanrio moment — PR launch and influencer work in partnership with Axxel Marketing — built around affection, not noise.",
    problem:
      "Character retail can slide into decoration. The brief needed a campaign people would talk about and a collection they would actually redeem.",
    story:
      "Blooming bonds: friendship as the plot, not the caption. Coverage, creators, and store energy were lined up around one emotional idea.",
    aiAssist:
      "Story and partnerships first. AI assist is optional on work like this — useful for cutdowns and variants once the narrative is locked.",
    result:
      "Directional: a complete launch arc across PR, influencers, and store activation. Specific performance figures are not published here.",
    tags: ["PR", "Influencer", "Retail activation"],
  },
];

export const homeTeasers = cases.slice(0, 3);
