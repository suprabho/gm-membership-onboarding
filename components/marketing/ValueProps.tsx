import { Container } from "@/components/marketing/Container";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { valueProps } from "@/lib/data/value-props";

export function ValueProps() {
  return (
    <section className="bg-white py-24 md:py-28">
      <Container width="wide">
        <SectionHeader
          label="Solution"
          title={
            <>
              An ESG education built for{" "}
              <span className="text-green-700">outcomes</span>, not lectures.
            </>
          }
          description="Practical curriculum, taught by practitioners. Every track ships with hands-on capstones reviewed by people who actually file disclosures."
        />

        {/* Category pills — the deck's "feature chip" device */}
        <div className="mt-10 flex flex-wrap gap-3">
          {["Self Paced", "Expert Led Learning", "Live Coaching", "Active Community", "Job Simulation", "AI Copilot", "Compliance Training"].map((cat) => (
            <Badge key={cat} tone="mint">{cat}</Badge>
          ))}
        </div>

        <ul className="mt-14 grid gap-px overflow-hidden rounded-[20px] border border-gray-200 bg-gray-200 sm:grid-cols-2">
          {valueProps.map((vp) => {
            const Icon = vp.icon;
            return (
              <li
                key={vp.id}
                className="bg-white p-10 transition-colors hover:bg-gray-50"
              >
                <div className="grid size-12 place-items-center rounded-full border-[2.5px] border-green-500 bg-white">
                  <div className="size-6 rounded-full bg-green-500" />
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <Icon size={22} className="text-green-700" aria-hidden weight="duotone" />
                  <h3 className="text-[22px] font-bold leading-tight text-ink">
                    {vp.title}
                  </h3>
                </div>
                <p className="mt-3 text-[16px] leading-relaxed text-gray-700">
                  {vp.description}
                </p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
