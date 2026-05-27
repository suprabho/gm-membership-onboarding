"use client";

import { useState } from "react";
import { Plus, Minus } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/marketing/Container";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import {
  topHiringCompanies,
  moreHiringCompanies,
  type HiringCompany,
} from "@/lib/data/hiring-companies";
import { track } from "@/lib/utils/analytics";
import { cn } from "@/lib/utils/cn";

/** A single company logo on a white tile, rendered in its natural brand colours. */
function LogoTile({ company }: { company: HiringCompany }) {
  return (
    <span className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-5 py-3">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={company.logo}
        alt={company.name}
        loading="lazy"
        className={cn("h-7 w-auto object-contain md:h-8", company.className)}
      />
    </span>
  );
}

/**
 * "Where our learners go" — the prominent hiring companies always visible as a
 * natural-colour logo wall, plus a progressive-disclosure long tail expandable
 * inline. Scoped to companies we hold a logo for (see hiring-companies.ts).
 */
export function HiringCompanies() {
  const [open, setOpen] = useState(false);
  const moreCount = moreHiringCompanies.length;

  return (
    <section className="bg-white py-24 md:py-28">
      <Container width="wide">
        <SectionHeader
          label="Where our learners go"
          title={
            <>
              Position yourself for ESG roles at{" "}
              <span className="text-green-700">
                India&apos;s leading organisations.
              </span>
            </>
          }
          description="The firms hiring through our community span Indian conglomerates, Big-4 advisories, and global energy & climate players."
        />

        <div className="mt-14 rounded-[20px] border border-gray-200 bg-section-fade p-6 md:p-8">
          <p className="gm-eyebrow text-green-700">Top hiring companies</p>
          <div className="mt-4 flex flex-wrap items-center gap-2.5">
            {topHiringCompanies.map((co) => (
              <LogoTile key={co.name} company={co} />
            ))}
          </div>

          {open ? (
            <div className="mt-2.5 flex flex-wrap items-center gap-2.5">
              {moreHiringCompanies.map((co) => (
                <LogoTile key={co.name} company={co} />
              ))}
            </div>
          ) : null}

          <button
            type="button"
            onClick={() => {
              const next = !open;
              setOpen(next);
              if (next) track("hiring_companies_expanded");
            }}
            className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-green-500/60 px-4 py-1.5 text-[13px] font-semibold text-green-700 transition-colors hover:bg-green-100"
          >
            {open ? (
              <>
                <Minus size={14} weight="bold" /> Show less
              </>
            ) : (
              <>
                <Plus size={14} weight="bold" /> See {moreCount} more companies
              </>
            )}
          </button>
        </div>
      </Container>
    </section>
  );
}
