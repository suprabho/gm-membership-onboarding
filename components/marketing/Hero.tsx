"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/marketing/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Badge";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-teal-900 text-white">
      {/* Wordmark device — the deck's giant outlined `greenmentor` lockup,
          rendered behind body content with color-dodge so it picks up the
          neon tone against the dark teal. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 flex justify-center"
        style={{
          height: "min(48vw, 460px)",
          mixBlendMode: "color-dodge",
          opacity: 0.45,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand/wordmark-outline.svg"
          alt=""
          className="h-full w-auto max-w-none"
        />
      </div>

      <Container width="wide" className="relative z-10 pt-16 pb-24 md:pt-24 md:pb-36">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
          className="max-w-5xl"
        >
          <Eyebrow tone="teal">GM Academy · Greenmentor</Eyebrow>

          <h1 className="font-display mt-8 text-[clamp(48px,8vw,96px)] leading-[1.05] tracking-[-0.02em] text-white">
            World&apos;s First{" "}
            <span className="text-green-500">Community Led</span> ESG{" "}
            <br className="hidden md:block" />
            Data &amp; Learning Platform
          </h1>

          <p className="mt-8 max-w-2xl text-[20px] leading-relaxed text-white/85 md:text-[22px]">
            Powered by India&apos;s biggest ESG community. Self-paced courses,
            expert-led coaching, live sessions and an AI copilot — built with
            practitioners who file disclosures, advise boards and run audits.
          </p>

          <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <Button
              asChild
              variant="accent"
              size="lg"
              iconRight={<ArrowRight size={18} weight="bold" />}
            >
              <Link href="/onboarding/intro">Start Your Journey</Link>
            </Button>
            <Button asChild variant="ghost-dark" size="lg">
              <Link href="/courses">Browse the Library</Link>
            </Button>
          </div>

          {/* Stat band — the deck's signature device, but inline at the bottom
              of the hero so credibility is immediate */}
          <div className="mt-16 grid gap-5 sm:grid-cols-2 sm:max-w-xl">
            <Stat number="3,000+" caption="Active Students" />
            <Stat number="6,900+" caption="Hours of lectures delivered" />
          </div>
        </motion.div>
      </Container>

      {/* Backed-by row — anchored to right of hero on desktop */}
      <div className="relative z-10 border-t border-white/10 bg-teal-900/80">
        <Container width="wide">
          <div className="flex flex-col items-start justify-between gap-4 py-5 sm:flex-row sm:items-center">
            <span className="gm-eyebrow text-green-100">Backed By</span>
            <div className="flex items-center gap-8 opacity-90">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/brand/partner-iimb-nsrcel.png"
                alt="IIMB · NSRCEL"
                className="h-8 w-auto object-contain brightness-0 invert"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/brand/partner-iitb.png"
                alt="IIT-B Innovation Centre"
                className="h-8 w-auto object-contain brightness-0 invert"
              />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

function Stat({ number, caption }: { number: string; caption: string }) {
  return (
    <div>
      <div className="font-numeral text-[56px] leading-none text-white md:text-[64px]">
        {number}
      </div>
      <div className="mt-2 text-[16px] text-green-100">{caption}</div>
    </div>
  );
}
