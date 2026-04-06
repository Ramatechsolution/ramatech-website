import FadeIn from "@/components/ui/FadeIn";

export default function ProofSection() {
  return (
    <section id="proof" className="py-24">
      <div className="section-shell">
        <FadeIn>
          <h2 className="section-title">Proof of Work</h2>
          <p className="section-lead">
            Show outcomes, architecture quality, and delivery consistency.
          </p>
        </FadeIn>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <FadeIn>
            <div className="glass-card rounded-3xl border-dashed border-indigo-300/40 p-8">
              <p className="text-sm font-medium uppercase tracking-[0.08em] text-indigo-200">
                GitHub Projects Placeholder
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                Add links/screenshots of deployment automation, Helm charts, and CI/CD templates.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="glass-card rounded-3xl border-dashed border-indigo-300/40 p-8">
              <p className="text-sm font-medium uppercase tracking-[0.08em] text-indigo-200">
                Architecture Diagram Placeholder
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                Add your reference diagram showing cloud, Kubernetes, ingress, and monitoring flow.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
