import FadeIn from "@/components/ui/FadeIn";

export default function HeroSection() {
  return (
    <section id="home" className="pb-28 pt-20 md:pb-32 md:pt-28">
      <div className="section-shell grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <FadeIn>
          <span className="inline-flex rounded-full border border-indigo-300/30 bg-indigo-400/10 px-4 py-1.5 text-xs font-semibold tracking-[0.12em] text-indigo-200">
            Kubernetes for Startups
          </span>
          <h1 className="mt-7 text-4xl font-semibold leading-[1.06] tracking-tight text-white md:text-6xl">
            Deploy{" "}
            <span className="gradient-text">Production-Ready Kubernetes</span> in 2 Weeks - Without
            the Headache
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 md:text-lg">
            We help startups build scalable, secure infrastructure using Kubernetes, CI/CD, and cloud
            best practices.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex rounded-full border border-blue-300/25 bg-gradient-to-r from-blue-500 to-violet-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-900/35 transition duration-200 hover:scale-[1.02]"
            >
              Book Free DevOps Audit
            </a>
            <a
              href="#services"
              className="inline-flex rounded-full border border-white/20 bg-white/5 px-7 py-3 text-sm font-semibold text-slate-100 transition duration-200 hover:border-white/40 hover:bg-white/10"
            >
              View Services
            </a>
          </div>
          <p className="mt-5 text-sm text-slate-400">Trusted by early-stage SaaS teams</p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="glass-card rounded-3xl p-6 backdrop-blur-xl md:p-8">
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium uppercase tracking-[0.1em] text-blue-200">
                Infra Preview
              </p>
              <span className="rounded-full border border-emerald-300/30 bg-emerald-400/10 px-2.5 py-1 text-xs text-emerald-200">
                healthy
              </span>
            </div>
            <div className="mt-5 rounded-2xl border border-white/10 bg-slate-950/70 p-4">
              <pre className="overflow-x-auto text-xs leading-relaxed text-slate-300">
{`cluster: prod-eu
nodes: 3 (autoscale 3-12)
deploy:
  api:
    replicas: 4
    strategy: rolling
ci_cd:
  provider: github-actions
  checks: test, security-scan, deploy`}
              </pre>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs">
              <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-slate-200">
                Uptime 99.95%
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-slate-200">
                MTTR &lt; 15m
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-slate-200">
                Cost -28%
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
