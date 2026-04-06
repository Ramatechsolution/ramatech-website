import FadeIn from "@/components/ui/FadeIn";

const faqs = [
  {
    q: "Can you really set up Kubernetes in 2 weeks?",
    a: "Yes. We use a structured delivery playbook covering cluster, CI/CD, observability, and security baseline."
  },
  {
    q: "Do you work with AWS, GCP, and Azure?",
    a: "Yes. We design cloud-native setups across major providers based on your product and cost constraints."
  },
  {
    q: "What happens after implementation?",
    a: "You receive handover docs, runbooks, and support so your team can maintain and scale confidently."
  },
  {
    q: "Is this suitable for MVP-stage startups?",
    a: "Absolutely. We right-size architecture so you stay lean today while being ready for growth tomorrow."
  }
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-24">
      <div className="section-shell">
        <FadeIn>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-lead">Answers to common questions before we start your DevOps sprint.</p>
        </FadeIn>
        <div className="mt-12 space-y-4">
          {faqs.map((item, index) => (
            <FadeIn key={item.q} delay={index * 0.06}>
              <details className="glass-card group rounded-2xl p-5">
                <summary className="cursor-pointer list-none pr-8 text-base font-medium text-white marker:content-none">
                  {item.q}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.a}</p>
              </details>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
