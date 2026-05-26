import { Quotes } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/marketing/Container";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import { StatBand } from "@/components/marketing/StatBand";
import { testimonials } from "@/lib/data/testimonials";

export function SocialProof() {
  return (
    <section className="bg-white py-24 md:py-28">
      <Container width="wide">
        <SectionHeader
          label="Traction"
          title={
            <>
              Practitioners across India and beyond,{" "}
              <span className="text-green-700">building real ESG capability</span>.
            </>
          }
          description="The community is the platform — and it shows up in the disclosure work, the placements, and the conversations our learners have with their boards."
        />

        <StatBand
          className="mt-16"
          stats={[
            { number: "3,000+", caption: "Active Students" },
            { number: "6,900+", caption: "Hours of lectures delivered" },
            { number: "60%", caption: "Reduction in Reporting time" },
            { number: "12+", caption: "Countries represented" },
          ]}
        />

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-[20px] border border-gray-200 bg-white p-8"
            >
              <Quotes
                size={28}
                weight="fill"
                className="text-green-500"
                aria-hidden
              />
              <blockquote className="mt-5 flex-1 text-[17px] leading-relaxed text-ink">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-gray-200 pt-4">
                <p className="text-[15px] font-bold text-ink">{t.name}</p>
                <p className="text-[14px] text-gray-700">
                  {t.role}, {t.company}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Students-from row — partner logos with the deck's flat-rect eyebrow */}
        <div className="mt-16 border-t border-gray-200 pt-12">
          <div className="mb-8 flex items-center gap-3">
            <span className="gm-eyebrow inline-block bg-white px-[18px] py-[10px] text-green-700 border border-black/[0.06]">
              Students From
            </span>
          </div>
          <div className="grid grid-cols-3 items-center gap-x-12 gap-y-8 sm:grid-cols-3 md:grid-cols-3">
            {[
              { src: "/brand/partner-amazon.png", name: "Amazon" },
              { src: "/brand/partner-kpmg.png", name: "KPMG" },
              { src: "/brand/partner-hm.png", name: "H&M" },
            ].map((logo) => (
              <div
                key={logo.name}
                className="flex items-center justify-center"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-10 w-auto object-contain opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0 md:h-12"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
