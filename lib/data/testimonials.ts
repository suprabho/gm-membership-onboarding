/**
 * Testimonials and trust logos.
 *
 * TODO[Marketing]: replace with real attributed quotes once consented.
 */

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "I came in confused by the alphabet soup of frameworks. I left running our first BRSR submission — and getting promoted for it.",
    name: "Aanya Mehra",
    role: "Sustainability Lead",
    company: "a Mumbai-listed manufacturer",
  },
  {
    quote:
      "The capstone forced me to write a real climate disclosure. That artefact got me my first ESG consulting role at a Big-4.",
    name: "Karan Iyer",
    role: "Senior Associate, ESG Advisory",
    company: "Big-4 advisory",
  },
  {
    quote:
      "Practical, fast, and honest about what frameworks can and cannot do. We onboarded our whole reporting team through it.",
    name: "Priya Subramanian",
    role: "Chief Sustainability Officer",
    company: "a Bengaluru fintech",
  },
];

export const trustStrip = {
  headline: "Powered by India's biggest ESG Community",
  subline:
    "From IIT undergraduates to CSOs at listed companies — building the same muscle, faster.",
};
