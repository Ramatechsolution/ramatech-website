import FadeIn from "@/components/ui/FadeIn";

const reasons = ["Fast delivery", "Production-ready", "Security-first", "Cost optimization"];

export default function WhyChooseUsSection() {
  return (
    <section className="py-24">
      <div className="section-shell">
        <FadeIn>
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-lead">
            Enterprise-grade practices delivered with startup speed and clarity.
          </p>
        </FadeIn>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <FadeIn key={reason} delay={index * 0.07}>
              <div className="glass-card rounded-2xl p-5 text-center text-sm font-medium text-slate-200">
                {reason}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
