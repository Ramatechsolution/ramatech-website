import FadeIn from "@/components/ui/FadeIn";

export default function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="section-shell">
        <FadeIn>
          <h2 className="section-title">About Us</h2>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
            We are a focused team of 3 DevOps engineers with expertise in Kubernetes, Cloud
            Architecture, and SRE. We build practical, production-grade systems for fast-moving
            startups.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
