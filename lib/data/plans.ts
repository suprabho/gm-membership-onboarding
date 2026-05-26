/**
 * Subscription plans for GM Academy. Pricing is placeholder.
 *
 * TODO[Pricing]: replace `priceMonthly` / `priceAnnual` and feature list
 * with real plan structure from product. Annual encodes the 20% discount —
 * keep `annualSavingsPercent` in sync if the numbers move.
 */

export interface Plan {
  id: string;
  name: string;
  tagline: string;
  priceMonthly: number;
  priceAnnual: number;
  badge?: string;
  features: string[];
  ctaLabel: string;
  highlight?: boolean;
}

export const plans: Plan[] = [
  {
    id: "learner",
    name: "Learner",
    tagline: "For students and self-starters entering ESG.",
    priceMonthly: 999,
    priceAnnual: 799,
    features: [
      "Self-paced foundations track",
      "GRI, SASB and CDP starter modules",
      "Monthly live Q&A with mentors",
      "Active community access",
      "Standard completion certificate",
    ],
    ctaLabel: "Start as a Learner",
  },
  {
    id: "professional",
    name: "Professional",
    tagline: "For working professionals serious about ESG outcomes.",
    priceMonthly: 2499,
    priceAnnual: 1999,
    badge: "Most Popular",
    highlight: true,
    features: [
      "Everything in Learner",
      "Full library — GRI, SASB, CDP, TCFD, BRSR, DJSI",
      "Hands-on capstone projects with feedback",
      "Live coaching with sector experts",
      "AI Copilot for disclosure drafting",
      "Verified certification on completion",
    ],
    ctaLabel: "Go Professional",
  },
];

export const annualSavingsPercent = 20;
