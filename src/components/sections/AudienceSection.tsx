import FadeIn from "@/components/ui/FadeIn";

const audience = ["Early-stage startups", "SaaS founders", "MVP builders"];

export default function AudienceSection() {
  return (
    <section className="py-24">
      <div className="section-shell">
        <FadeIn>
          <h2 className="section-title">Who We Work With</h2>
          <p className="section-lead">Built for teams that need speed now, not six months from now.</p>
        </FadeIn>
        <div className="mt-12 flex flex-wrap gap-4">
          {audience.map((item, index) => (
            <FadeIn key={item} delay={index * 0.08}>
              <span className="rounded-full border border-white/15 bg-white/8 px-5 py-2.5 text-sm text-slate-200">
                {item}
              </span>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
