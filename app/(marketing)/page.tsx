"use client";

import { useEffect } from "react";
import { Hero } from "@/components/marketing/Hero";
import { AudienceSelector } from "@/components/marketing/AudienceSelector";
import { ValueProps } from "@/components/marketing/ValueProps";
import { CoursePreview } from "@/components/marketing/CoursePreview";
import { PricingSnapshot } from "@/components/marketing/PricingSnapshot";
import { SocialProof } from "@/components/marketing/SocialProof";
import { FaqSection } from "@/components/marketing/FaqSection";
import { FinalCta } from "@/components/marketing/FinalCta";
import { track } from "@/lib/utils/analytics";

export default function LandingPage() {
  useEffect(() => {
    track("landing_viewed");
  }, []);

  return (
    <>
      <Hero />
      <AudienceSelector />
      <ValueProps />
      <CoursePreview />
      <PricingSnapshot />
      <SocialProof />
      <FaqSection limit={6} />
      <FinalCta />
    </>
  );
}
