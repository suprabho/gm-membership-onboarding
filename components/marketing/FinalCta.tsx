import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/marketing/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Badge";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-teal-900 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center opacity-40"
        style={{
          height: "300px",
          mixBlendMode: "color-dodge",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand/wordmark-outline.svg"
          alt=""
          className="h-full w-auto max-w-none"
        />
      </div>

      <Container width="wide" className="relative py-24 md:py-32">
        <div className="max-w-4xl">
          <Eyebrow tone="teal">Get Started</Eyebrow>

          <h2 className="font-display mt-8 text-[40px] leading-tight text-white md:text-[64px]">
            Bridge the ESG skills gap.{" "}
            <span className="text-green-500">Start this week.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-[18px] leading-relaxed text-white/85 md:text-[20px]">
            Five minutes of questions, then onto the library. Affordable for
            Consultants &amp; SMEs.
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
              <Link href="/pricing">See Pricing</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
