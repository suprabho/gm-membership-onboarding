import type { Icon } from "@phosphor-icons/react";
import {
  Books,
  ChalkboardTeacher,
  Hammer,
  Certificate,
} from "@phosphor-icons/react/dist/ssr";

export interface ValueProp {
  id: string;
  title: string;
  description: string;
  icon: Icon;
}

/**
 * Four feature tiles for the landing page. Wording follows the deck's
 * outcomes-led, number-paired voice.
 */
export const valueProps: ValueProp[] = [
  {
    id: "library",
    title: "A Full ESG Library",
    description:
      "GRI, SASB, CDP, TCFD, BRSR, DJSI and CBAM — covered end-to-end, not in fragments. One subscription, the whole map.",
    icon: Books,
  },
  {
    id: "experts",
    title: "Expert-led, Never Generic",
    description:
      "Every track is taught by practitioners who file disclosures, advise boards, and audit assurance — not theorists.",
    icon: ChalkboardTeacher,
  },
  {
    id: "handson",
    title: "Hands-on, Not Slide-deep",
    description:
      "Frameworks are pointless without practice. Every module ships with assignments, mock reports, and feedback.",
    icon: Hammer,
  },
  {
    id: "certification",
    title: "Certifications That Count",
    description:
      "Verified credentials hiring managers recognize, with capstone work you can put in front of recruiters.",
    icon: Certificate,
  },
];
