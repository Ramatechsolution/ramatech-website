import FadeIn from "@/components/ui/FadeIn";

const services = [
  {
    icon: "K8",
    title: "Kubernetes Setup (2 Weeks)",
    description: "Production-ready cluster, networking, ingress, autoscaling, and deployment standards."
  },
  {
    icon: "CI",
    title: "DevOps Foundation",
    description: "CI/CD, observability, IaC baseline, and release workflows for fast product iteration."
  },
  {
    icon: "CL",
    title: "Cloud Setup & Optimization",
    description: "Cloud architecture, right-sizing, security hardening, and cost optimization practices."
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24">
      <div className="section-shell">
        <FadeIn>
          <h2 className="section-title">Services</h2>
          <p className="section-lead">
            Everything you need to ship and scale infrastructure with confidence.
          </p>
        </FadeIn>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 0.08}>
              <article className="glass-card h-full rounded-3xl p-7 transition duration-300 hover:-translate-y-1.5 hover:border-violet-300/45 hover:shadow-[0_22px_65px_rgba(99,102,241,0.25)]">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-blue-300/30 bg-gradient-to-br from-blue-500/30 to-violet-500/30 text-xs font-bold tracking-wide text-blue-100">
                  {service.icon}
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-white">{service.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-300">{service.description}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
