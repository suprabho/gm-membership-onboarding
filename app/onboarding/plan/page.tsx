"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Check } from "@phosphor-icons/react/dist/ssr";
import { useOnboarding } from "@/lib/store/onboarding";
import { plans, annualSavingsPercent } from "@/lib/data/plans";
import { Badge, Eyebrow } from "@/components/ui/Badge";
import { BottomNav } from "@/components/onboarding/BottomNav";
import { cn } from "@/lib/utils/cn";
import { track } from "@/lib/utils/analytics";

function formatINR(n: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(n);
}

export default function PlanStep() {
  const router = useRouter();
  const { planId, setPlan, billingCycle, setBillingCycle } = useOnboarding();

  const canContinue = !!planId;

  function handleContinue() {
    if (!canContinue) return;
    track("onboarding_step_completed", {
      step: "plan",
      planId,
      billingCycle,
    });
    router.push("/onboarding/checkout");
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
    >
      <Eyebrow tone="white">Membership</Eyebrow>
      <h1 className="font-display mt-8 text-[40px] leading-tight tracking-[-0.02em] text-ink md:text-[56px]">
        Pick your plan.
      </h1>
      <p className="mt-4 text-[17px] leading-relaxed text-gray-700">
        Cancel anytime before your next cycle — no questions, no friction.
      </p>

      {/* Billing cycle toggle */}
      <div
        role="radiogroup"
        aria-label="Billing cycle"
        className="mt-10 inline-flex items-center gap-1 rounded-full border border-gray-200 bg-white p-1"
      >
        {(["monthly", "annual"] as const).map((cycle) => (
          <button
            key={cycle}
            role="radio"
            aria-checked={billingCycle === cycle}
            type="button"
            onClick={() => setBillingCycle(cycle)}
            className={cn(
              "rounded-full px-5 py-2 text-[14px] font-semibold transition-colors",
              billingCycle === cycle
                ? "bg-green-700 text-white"
                : "text-gray-700 hover:text-ink",
            )}
          >
            {cycle === "monthly" ? "Monthly" : "Annual"}
            {cycle === "annual" ? (
              <span
                className={cn(
                  "ml-2 rounded-full px-2 py-0.5 text-[10px] font-bold tracking-wide uppercase",
                  billingCycle === "annual"
                    ? "bg-green-500 text-teal-900"
                    : "bg-green-100 text-green-700",
                )}
              >
                Save {annualSavingsPercent}%
              </span>
            ) : null}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {plans.map((plan) => {
          const isSelected = planId === plan.id;
          const price =
            billingCycle === "annual" ? plan.priceAnnual : plan.priceMonthly;
          return (
            <button
              type="button"
              key={plan.id}
              onClick={() => setPlan(plan.id)}
              aria-pressed={isSelected}
              className={cn(
                "group relative flex flex-col rounded-[20px] border bg-white p-7 text-left transition-[border-color,box-shadow,transform] duration-200",
                "hover:-translate-y-0.5 hover:shadow-lift",
                isSelected
                  ? "border-green-700 shadow-lift"
                  : "border-gray-200 hover:border-green-700",
              )}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-[22px] font-bold text-ink">{plan.name}</h3>
                  <p className="mt-1 text-[14px] text-gray-700">
                    {plan.tagline}
                  </p>
                </div>
                {plan.badge ? <Badge tone="neon">{plan.badge}</Badge> : null}
              </div>

              <div className="mt-5 flex items-baseline gap-2">
                <span className="font-numeral text-[40px] leading-none text-green-700">
                  {formatINR(price)}
                </span>
                <span className="text-[13px] text-gray-500">
                  / month{billingCycle === "annual" ? ", billed yearly" : ""}
                </span>
              </div>

              <ul className="mt-5 space-y-2 border-t border-gray-200 pt-5">
                {plan.features.slice(0, 4).map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-[14px] text-ink"
                  >
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-green-500">
                      <Check
                        size={12}
                        weight="bold"
                        className="text-teal-900"
                      />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </button>
          );
        })}
      </div>

      <BottomNav
        backHref="/onboarding/goals"
        onContinue={handleContinue}
        continueDisabled={!canContinue}
        continueLabel="Continue to Checkout"
      />
    </motion.div>
  );
}
