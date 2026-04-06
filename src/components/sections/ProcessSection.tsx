import FadeIn from "@/components/ui/FadeIn";

const steps = ["Free DevOps Audit", "Architecture Design", "Implementation", "Handover & Support"];

export default function ProcessSection() {
  return (
    <section id="process" className="py-24">
      <div className="section-shell">
        <FadeIn>
          <h2 className="section-title">Our Process</h2>
          <p className="section-lead">Simple, fast, and execution-first from audit to handover.</p>
        </FadeIn>
        <div className="relative mt-12 space-y-5 before:absolute before:bottom-4 before:left-4 before:top-4 before:w-px before:bg-gradient-to-b before:from-blue-400/70 before:to-violet-400/70 md:before:left-1/2 md:before:-translate-x-1/2">
          {steps.map((step, index) => (
            <FadeIn key={step} delay={index * 0.08}>
              <div className="relative md:w-[calc(50%-1.25rem)] md:first:mr-auto md:even:ml-auto">
                <span className="absolute -left-0.5 top-8 h-3 w-3 rounded-full border border-blue-300/50 bg-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.85)] md:left-auto md:right-[-1.58rem] md:even:left-[-1.58rem] md:even:right-auto" />
                <div className="glass-card rounded-3xl p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.1em] text-indigo-300">
                    Step {index + 1}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight text-white">{step}</h3>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
