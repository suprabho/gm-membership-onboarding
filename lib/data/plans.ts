/**
 * Plus Essential — the single Greenmentor Plus subscription. The v3 reframe
 * collapsed the two-tier (Learner / Professional) model into one plan with
 * a monthly and an annual billing option; the annual adds Career Services.
 *
 * Numbers shown to users:
 *   ₹4,000 / month  (monthly billing)
 *   ₹44,000 / year  (annual billing — ~8% saving + Career Services)
 */

export interface Plan {
  id: string;
  name: string;
  tagline: string;
  /** Per-month price if user pays monthly. */
  priceMonthly: number;
  /** Per-month price when paid annually (annualTotal / 12, rounded). */
  priceAnnual: number;
  /** Total billed at purchase time for the annual cycle. */
  annualTotal: number;
  badge?: string;
  features: string[];
  ctaLabel: string;
  highlight?: boolean;
}

const monthlyFeatures = [
  "Full course library — 8 courses, all included",
  "Bi-weekly live Q&A with practitioners",
  "40,000+ learner WhatsApp community",
  "Weekly industry insights & case studies",
  "Curated ESG jobs community access",
];

export const plans: Plan[] = [
  {
    id: "plus-monthly",
    name: "Plus Essential — Monthly",
    tagline: "Everything you need, billed every month. Cancel anytime.",
    priceMonthly: 4000,
    priceAnnual: 4000,
    annualTotal: 48000,
    features: monthlyFeatures,
    ctaLabel: "Start for ₹4,000 / month",
  },
  {
    id: "plus-annual",
    name: "Plus Essential — Annual",
    tagline:
      "Everything in monthly, plus personalised Career Services. Best value.",
    priceMonthly: 4000,
    priceAnnual: Math.round(44000 / 12),
    annualTotal: 44000,
    badge: "Best value",
    highlight: true,
    features: [
      ...monthlyFeatures,
      "Personalised career guidance & resume review",
      "Two months free vs. paying monthly",
    ],
    ctaLabel: "Get the Annual plan — ₹44,000",
  },
];

export const annualSavingsPercent = 8;
