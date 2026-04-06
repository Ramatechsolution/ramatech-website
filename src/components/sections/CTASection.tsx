import FadeIn from "@/components/ui/FadeIn";

export default function CTASection() {
  return (
    <section id="contact" className="py-24">
      <div className="section-shell rounded-3xl border border-indigo-300/20 bg-gradient-to-r from-blue-600/30 via-violet-500/25 to-cyan-500/25 p-8 shadow-[0_30px_90px_rgba(37,99,235,0.35)] md:p-12">
        <FadeIn>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Book Free DevOps Audit
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-100 md:text-base">
            Get a practical roadmap for shipping secure, scalable infrastructure in 2 weeks.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex rounded-full border border-white/70 bg-white px-7 py-3 text-sm font-semibold text-slate-900 transition duration-200 hover:scale-[1.03] hover:bg-slate-100"
          >
            Book Free DevOps Audit
          </a>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-10">
          <div className="rounded-2xl border border-dashed border-white/30 bg-slate-950/50 p-8 text-center backdrop-blur">
            <p className="text-sm font-medium uppercase tracking-[0.08em] text-indigo-200">
              Calendly Embed Placeholder
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Replace this with your Calendly embed snippet to capture bookings directly.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
