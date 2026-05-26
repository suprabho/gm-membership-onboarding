import type { Icon } from "@phosphor-icons/react";
import {
  UsersThree,
  Books,
  Sparkle,
} from "@phosphor-icons/react/dist/ssr";

export interface IntroCard {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  bullets: string[];
  icon: Icon;
}

export const introCards: IntroCard[] = [
  {
    id: "who",
    eyebrow: "Who it's for",
    title: "Built for the next generation of ESG talent.",
    body: "Students, working professionals, and business leaders who want sustainability fluency without the fluff.",
    bullets: [
      "Students aiming for a recruiter-ready CV",
      "Mid-career pros pivoting into ESG",
      "Founders & leaders shaping their first ESG program",
    ],
    icon: UsersThree,
  },
  {
    id: "what",
    eyebrow: "What you get",
    title: "Frameworks, projects, mentors — all in one place.",
    body: "Green Mentor Academy bundles courses, live sessions, and hands-on tools that map to how real ESG teams actually work.",
    bullets: [
      "GRI, CDP, BRSR and TCFD, taught practically",
      "Project work you can put on your portfolio",
      "ESG tools training that hiring teams ask for",
    ],
    icon: Books,
  },
  {
    id: "why",
    eyebrow: "Why Pro",
    title: "Pro unlocks the parts that move careers.",
    body: "A subscription gets you the full library plus the community and mentorship that turn knowledge into outcomes.",
    bullets: [
      "All courses + fortnightly live Q&A",
      "Private WhatsApp community for members",
      "ESG jobs hunt + monthly LinkedIn batch",
    ],
    icon: Sparkle,
  },
];
