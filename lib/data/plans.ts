/**
 * Subscription plan for GM Academy.
 *
 * v2: collapsed to a single membership tier sold in two billing cycles
 * (monthly / annual). The `plans` array stays as an array of one — keeping
 * the data shape lets the existing `.map` consumers (PricingSnapshot,
 * checkout summary) work unchanged, and leaves the door open for adding
 * tiers later without restructuring.
 *
 * TODO[Pricing]: confirm `priceMonthly` / `priceAnnual`. Annual encodes the
 * 20% discount — keep `annualSavingsPercent` in sync if the numbers move.
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
    id: "membership",
    name: "GM Academy Membership",
    tagline: "One subscription. The whole ESG library, capstones and coaching.",
    priceMonthly: 2499,
    priceAnnual: 1999,
    highlight: true,
    features: [
      "Full library — GRI, SASB, CDP, TCFD, BRSR, DJSI",
      "Self-paced foundations + advanced tracks",
      "Hands-on capstone projects with feedback",
      "Live coaching with sector experts",
      "Monthly community Q&A with mentors",
      "AI Copilot for disclosure drafting",
      "Verified certification on completion",
    ],
    ctaLabel: "Start membership",
  },
];

export const annualSavingsPercent = 20;
