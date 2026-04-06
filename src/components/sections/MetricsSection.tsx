import FadeIn from "@/components/ui/FadeIn";

const metrics = [
  { value: "2 Weeks", label: "Average Kubernetes rollout" },
  { value: "99.95%", label: "Production uptime target" },
  { value: "30%+", label: "Infra cost optimization" },
  { value: "<15 min", label: "Incident response baseline" }
];

export default function MetricsSection() {
  return (
    <section id="metrics" className="py-24">
      <div className="section-shell">
        <FadeIn>
          <h2 className="section-title">Outcomes That Matter</h2>
          <p className="section-lead">We optimize for reliability, speed, and business impact.</p>
        </FadeIn>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <FadeIn key={metric.label} delay={index * 0.07}>
              <div className="glass-card rounded-2xl p-6 text-center">
                <p className="text-3xl font-semibold tracking-tight text-white">{metric.value}</p>
                <p className="mt-2 text-sm text-slate-300">{metric.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
