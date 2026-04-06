import FadeIn from "@/components/ui/FadeIn";

const logos = ["LaunchLayer", "ScaleForge", "NovaSaaS", "CloudMint", "SyncPilot"];

const testimonials = [
  {
    quote:
      "RamaTech Solution helped us move from fragile deploys to a clean Kubernetes workflow in less than 2 weeks.",
    author: "Founder, B2B SaaS startup"
  },
  {
    quote:
      "We shipped faster with fewer incidents after adopting their CI/CD and observability setup.",
    author: "CTO, Seed-stage platform"
  }
];

export default function SocialProofSection() {
  return (
    <section id="social-proof" className="py-24">
      <div className="section-shell">
        <FadeIn>
          <h2 className="section-title">Trusted by Product Teams</h2>
          <p className="section-lead">Startup founders choose us when reliability starts blocking growth.</p>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="mt-10 grid grid-cols-2 gap-3 text-center text-sm text-slate-300 sm:grid-cols-3 lg:grid-cols-5">
            {logos.map((logo) => (
              <div key={logo} className="glass-card rounded-xl px-4 py-3 font-medium">
                {logo}
              </div>
            ))}
          </div>
        </FadeIn>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {testimonials.map((item, index) => (
            <FadeIn key={item.author} delay={0.12 + index * 0.08}>
              <div className="glass-card rounded-2xl p-6">
                <p className="text-base leading-relaxed text-slate-200">
                  &quot;{item.quote}&quot;
                </p>
                <p className="mt-4 text-sm text-blue-200">{item.author}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
