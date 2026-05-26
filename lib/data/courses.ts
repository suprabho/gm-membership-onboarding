import { LEARNYST_COURSES_URL } from "@/lib/learnyst/config";

export type Framework =
  | "GRI"
  | "SASB"
  | "CDP"
  | "TCFD"
  | "BRSR"
  | "DJSI"
  | "CBAM"
  | "Foundations";

export interface Course {
  id: string;
  title: string;
  framework: Framework;
  description: string;
  duration: string;
  level: "Foundation" | "Intermediate" | "Advanced";
  // TODO[Learnyst]: replace with per-course Learnyst URLs once migrated.
  learnystUrl: string;
}

export const courses: Course[] = [
  {
    id: "esg-foundations",
    title: "ESG Foundations",
    framework: "Foundations",
    description:
      "The vocabulary, the actors, the timelines. One week to stop nodding politely in meetings.",
    duration: "6 hours",
    level: "Foundation",
    learnystUrl: `${LEARNYST_COURSES_URL}/esg-foundations`,
  },
  {
    id: "gri-reporting",
    title: "GRI Standards in Practice",
    framework: "GRI",
    description:
      "Material topics, indicator selection, and writing a report that survives external assurance.",
    duration: "12 hours",
    level: "Intermediate",
    learnystUrl: `${LEARNYST_COURSES_URL}/gri-standards`,
  },
  {
    id: "tcfd-climate-risk",
    title: "Climate Risk with TCFD",
    framework: "TCFD",
    description:
      "Scenario analysis, transition risk, and writing climate disclosures boards actually read.",
    duration: "10 hours",
    level: "Intermediate",
    learnystUrl: `${LEARNYST_COURSES_URL}/tcfd-climate-risk`,
  },
  {
    id: "brsr-india",
    title: "BRSR for Indian Listed Entities",
    framework: "BRSR",
    description:
      "Section-by-section walkthrough with examples from real NSE/BSE filings. Built around the Core update.",
    duration: "8 hours",
    level: "Intermediate",
    learnystUrl: `${LEARNYST_COURSES_URL}/brsr-india`,
  },
  {
    id: "cbam-europe",
    title: "CBAM for European Compliance",
    framework: "CBAM",
    description:
      "CBAM scope, embedded emissions, and how to prepare your SME supply chain for the European compliance bar.",
    duration: "9 hours",
    level: "Intermediate",
    learnystUrl: `${LEARNYST_COURSES_URL}/cbam-europe`,
  },
  {
    id: "cdp-disclosure",
    title: "CDP Climate, Water, Forests",
    framework: "CDP",
    description:
      "How CDP scoring works, leadership criteria, and the trap questions that drop scores from A- to B.",
    duration: "9 hours",
    level: "Intermediate",
    learnystUrl: `${LEARNYST_COURSES_URL}/cdp-disclosure`,
  },
];
