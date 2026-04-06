"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

// ─── Types ───────────────────────────────────────────────────────────────────
interface Service {
  id: string;
  code: string;
  title: string;
  tagline: string;
  description: string;
  outcomes: string[];
  tools: string[];
}

interface FAQ {
  q: string;
  a: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────
const SERVICES: Service[] = [
  {
    id: "observability",
    code: "01",
    title: "Observability & Monitoring",
    tagline: "See everything. Miss nothing.",
    description:
      "Full-stack observability for cloud-native systems — metrics, logs, traces, and AI-powered anomaly detection that finds issues before your users do.",
    outcomes: [
      "VictoriaMetrics & Grafana stack setup",
      "AI anomaly detection (VMAnomaly)",
      "Custom alerting — Warning / Critical thresholds",
      "Incident response runbooks",
      "New Relic APM integration",
      "SLO/SLA dashboards",
    ],
    tools: ["VictoriaMetrics", "Grafana", "New Relic", "Prometheus", "ELK Stack"],
  },
  {
    id: "openshift",
    code: "02",
    title: "OpenShift & Kubernetes",
    tagline: "Enterprise containers, production-grade.",
    description:
      "Red Hat OpenShift and Kubernetes platform engineering — from cluster setup to multi-tenant workloads, GitOps, and day-2 operations.",
    outcomes: [
      "OpenShift cluster setup & hardening",
      "Multi-tenant namespace architecture",
      "ArgoCD GitOps pipelines",
      "RBAC & security policies",
      "Helm chart development",
      "Autoscaling & resource optimization",
    ],
    tools: ["OpenShift", "Kubernetes", "ArgoCD", "Helm", "Tekton"],
  },
  {
    id: "devops",
    code: "03",
    title: "DevOps & CI/CD",
    tagline: "Ship faster. Break nothing.",
    description:
      "End-to-end DevOps transformation — CI/CD pipelines, Infrastructure as Code, and automated release workflows that let your team deploy with confidence.",
    outcomes: [
      "GitHub Actions / Jenkins pipelines",
      "Terraform & Pulumi IaC",
      "Docker & container optimization",
      "Automated security scanning",
      "Blue/green & canary deployments",
      "Cost optimization audits",
    ],
    tools: ["GitHub Actions", "Terraform", "Docker", "Jenkins", "AWS/GCP/Azure"],
  },
  {
    id: "sap",
    code: "04",
    title: "SAP Integration",
    tagline: "Enterprise systems, modernized.",
    description:
      "SAP implementation, integration, and cloud migration — connecting your enterprise data to modern cloud-native infrastructure without disruption.",
    outcomes: [
      "SAP S/4HANA implementation",
      "SAP-to-cloud integration design",
      "API & middleware connectivity",
      "Data migration & validation",
      "Performance tuning",
      "Ongoing support & optimization",
    ],
    tools: ["SAP S/4HANA", "SAP BTP", "REST APIs", "Azure Integration", "ABAP"],
  },
];

const FAQS: FAQ[] = [
  {
    q: "How do 4 specialists deliver enterprise-grade work?",
    a: "Each of us is an active practitioner in our domain — employed at enterprise companies doing exactly this work every day. We take on select consulting engagements and use AI-assisted workflows to deliver in days what traditional agencies take weeks to complete. You get senior expertise without agency overhead.",
  },
  {
    q: "Do you work with startups or only enterprise clients?",
    a: "Both. For startups, we right-size the architecture so you stay lean today but scale tomorrow. For enterprises, we bring the same patterns we run internally at scale. The engagement model adapts — the quality doesn't.",
  },
  {
    q: "How does your AI-assisted delivery actually work?",
    a: "Our AI systems handle scaffolding, documentation, and pattern generation. Our engineers handle architecture decisions, security, client-specific customization, and quality review. This means faster delivery and lower cost — without sacrificing the senior judgment that makes infrastructure actually reliable.",
  },
  {
    q: "What happens after implementation?",
    a: "You receive full handover documentation, runbooks, and architecture decision records. We offer ongoing monitoring retainers where our AI monitoring agent handles L1 incidents automatically and our engineers handle L2/L3 escalations. Nothing falls through the cracks.",
  },
  {
    q: "Which cloud providers do you support?",
    a: "AWS, GCP, and Azure — and hybrid/on-premise setups. We design for your current reality, not a theoretical ideal. If you're locked into a provider, we optimize within it. If you're choosing, we help you pick based on cost, compliance, and team familiarity.",
  },
  {
    q: "How do we start?",
    a: "Book a free 30-minute technical audit. We'll review your current setup, identify the highest-impact gaps, and give you a concrete roadmap — regardless of whether you hire us. No sales pitch, just an honest technical assessment.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Free technical audit",
    detail: "30-minute call. We review your current stack and identify the top 3 highest-impact improvements. No sales pitch.",
  },
  {
    step: "02",
    title: "Architecture design",
    detail: "We design the solution architecture, tooling decisions, and delivery timeline. You own the design doc regardless.",
  },
  {
    step: "03",
    title: "AI-accelerated build",
    detail: "Our agents scaffold, our engineers customize and validate. Typical engagement: 1–4 weeks depending on scope.",
  },
  {
    step: "04",
    title: "Handover + support",
    detail: "Full docs, runbooks, and knowledge transfer. Optional ongoing monitoring retainer with AI-assisted L1 response.",
  },
];

const METRICS = [
  { value: "2 weeks", label: "Average delivery timeline" },
  { value: "99.95%", label: "Production uptime target" },
  { value: "30%+", label: "Infrastructure cost reduction" },
  { value: "<15 min", label: "Incident response baseline" },
];

const DOMAINS = ["Observability", "OpenShift", "DevOps & CI/CD", "SAP Integration"];

// ─── JSON-LD Schema ───────────────────────────────────────────────────────────
const SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://ramatech.co.in/#org",
      name: "RamaTech Solution",
      url: "https://ramatech.co.in",
      description:
        "AI-powered infrastructure consulting — Observability, OpenShift, DevOps, and SAP Integration for startups and enterprises.",
      sameAs: [
        "https://www.linkedin.com/company/observablesystems/",
        "https://github.com/Ramatechsolution",
      ],
      knowsAbout: [
        "Kubernetes",
        "OpenShift",
        "DevOps",
        "Observability",
        "VictoriaMetrics",
        "Grafana",
        "SAP",
        "CI/CD",
        "Terraform",
        "Prometheus",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://ramatech.co.in/#service",
      name: "RamaTech Solution",
      url: "https://ramatech.co.in",
      serviceType: [
        "DevOps Consulting",
        "Kubernetes Setup",
        "Observability Engineering",
        "OpenShift Consulting",
        "SAP Integration",
        "CI/CD Automation",
      ],
      areaServed: "Worldwide",
      provider: { "@id": "https://ramatech.co.in/#org" },
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

// ─── Hooks ───────────────────────────────────────────────────────────────────
function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <AnimatedSection delay={index * 0.08}>
      <div
        className={`service-card ${open ? "service-card--open" : ""}`}
        onClick={() => setOpen((o) => !o)}
      >
        <div className="service-card__header">
          <span className="service-card__code">{service.code}</span>
          <div className="service-card__titles">
            <h3 className="service-card__title">{service.title}</h3>
            <p className="service-card__tagline">{service.tagline}</p>
          </div>
          <span className="service-card__toggle">{open ? "−" : "+"}</span>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="service-card__body"
          >
            <p className="service-card__desc">{service.description}</p>
            <div className="service-card__grid">
              <div>
                <p className="service-card__label">Deliverables</p>
                <ul className="service-card__list">
                  {service.outcomes.map((o) => (
                    <li key={o}>{o}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="service-card__label">Tools & platforms</p>
                <div className="service-card__tools">
                  {service.tools.map((t) => (
                    <span key={t} className="tool-pill">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </AnimatedSection>
  );
}

function FAQItem({ faq, index }: { faq: FAQ; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <AnimatedSection delay={index * 0.06}>
      <div className={`faq-item ${open ? "faq-item--open" : ""}`} onClick={() => setOpen((o) => !o)}>
        <div className="faq-item__q">
          <span>{faq.q}</span>
          <span className="faq-item__icon">{open ? "−" : "+"}</span>
        </div>
        {open && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.35 }}
            className="faq-item__a"
          >
            {faq.a}
          </motion.p>
        )}
      </div>
    </AnimatedSection>
  );
}

function TerminalBlock() {
  const lines = [
    { t: 0, text: "$ ramatech audit --target production", cls: "term-cmd" },
    { t: 400, text: "→ Scanning observability gaps...", cls: "term-info" },
    { t: 900, text: "→ Analyzing CI/CD efficiency...", cls: "term-info" },
    { t: 1400, text: "→ Checking OpenShift health...", cls: "term-info" },
    { t: 1900, text: "✓ 3 critical improvements identified", cls: "term-success" },
    { t: 2300, text: "✓ Estimated cost saving: 31%", cls: "term-success" },
    { t: 2700, text: "✓ Delivery timeline: 12 days", cls: "term-success" },
    { t: 3100, text: "→ Generating architecture proposal...", cls: "term-info" },
    { t: 3600, text: "✓ Report ready. Book audit to receive it.", cls: "term-accent" },
  ];

  const [visible, setVisible] = useState<number[]>([]);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    lines.forEach((l, i) => {
      setTimeout(() => setVisible((v) => [...v, i]), l.t);
    });
  }, [inView]);

  return (
    <div ref={ref} className="terminal">
      <div className="terminal__bar">
        <span className="terminal__dot terminal__dot--red" />
        <span className="terminal__dot terminal__dot--yellow" />
        <span className="terminal__dot terminal__dot--green" />
        <span className="terminal__title">ramatech-cli</span>
      </div>
      <div className="terminal__body">
        {lines.map((l, i) =>
          visible.includes(i) ? (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className={`terminal__line ${l.cls}`}
            >
              {l.text}
            </motion.div>
          ) : null
        )}
        {visible.length > 0 && visible.length < lines.length && (
          <span className="terminal__cursor" />
        )}
      </div>
    </div>
  );
}

function MetricCard({ value, label, index }: { value: string; label: string; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <AnimatedSection delay={index * 0.1}>
      <div ref={ref} className="metric-card">
        <div className="metric-card__value">{value}</div>
        <div className="metric-card__label">{label}</div>
      </div>
    </AnimatedSection>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function Home() {
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
      />

      {/* Scroll progress bar */}
      <motion.div className="scroll-progress" style={{ width: progressWidth }} />

      {/* ── Navbar ── */}
      <header className="navbar">
        <div className="navbar__inner">
          <a href="#home" className="navbar__brand">
            Rama<span>Tech</span>
          </a>

          <nav className="navbar__links">
            {["Services", "Process", "Metrics", "FAQ"].map((n) => (
              <a key={n} href={`#${n.toLowerCase()}`} className="navbar__link">
                {n}
              </a>
            ))}
          </nav>

          <a href="#contact" className="btn btn--primary navbar__cta">
            Book Free Audit
          </a>

          <button
            className="navbar__hamburger"
            onClick={() => setMobileMenuOpen((o) => !o)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="navbar__mobile"
          >
            {["Services", "Process", "Metrics", "FAQ"].map((n) => (
              <a
                key={n}
                href={`#${n.toLowerCase()}`}
                className="navbar__mobile-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {n}
              </a>
            ))}
            <a href="#contact" className="btn btn--primary" onClick={() => setMobileMenuOpen(false)}>
              Book Free Audit
            </a>
          </motion.div>
        )}
      </header>

      <main>
        {/* ── Hero ── */}
        <section id="home" className="hero">
          <div className="hero__grid-bg" aria-hidden />

          <div className="container hero__inner">
            <div className="hero__left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="hero__badge"
              >
                <span className="hero__badge-dot" />
                AI-accelerated infrastructure consulting
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="hero__headline"
              >
                AI-Powered DevOps &amp;
                <br />
                <span className="hero__headline--accent">Cloud Infrastructure</span>
                <br />
                Consulting
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="hero__sub"
              >
                4 active enterprise specialists in Observability, OpenShift, DevOps, and SAP —
                delivering production-ready infrastructure worldwide using AI-accelerated workflows.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.38 }}
                className="hero__ctas"
              >
                <a href="#contact" className="btn btn--primary btn--lg">
                  Book Free Audit
                </a>
                <a href="#services" className="btn btn--ghost btn--lg">
                  Explore Services
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.55 }}
                className="hero__domains"
              >
                {DOMAINS.map((d) => (
                  <span key={d} className="hero__domain-pill">{d}</span>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="hero__right"
            >
              <TerminalBlock />
            </motion.div>
          </div>
        </section>

        {/* ── Metrics ── */}
        <section id="metrics" className="section section--dark">
          <div className="container">
            <AnimatedSection>
              <p className="section__eyebrow">Outcomes that matter</p>
              <h2 className="section__title">Built for reliability, speed, and business impact</h2>
            </AnimatedSection>
            <div className="metrics-grid">
              {METRICS.map((m, i) => (
                <MetricCard key={m.label} value={m.value} label={m.label} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Services ── */}
        <section id="services" className="section">
          <div className="container">
            <AnimatedSection>
              <p className="section__eyebrow">What we build</p>
              <h2 className="section__title">
                Four domains. One team. <br />Complete infrastructure coverage.
              </h2>
              <p className="section__sub">
                Click any service to see exactly what we deliver, what tools we use, and what
                outcomes you can expect.
              </p>
            </AnimatedSection>

            <div className="services-list">
              {SERVICES.map((s, i) => (
                <ServiceCard key={s.id} service={s} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ── How We Work ── */}
        <section className="section section--tinted">
          <div className="container">
            <AnimatedSection>
              <p className="section__eyebrow">Our AI-first model</p>
              <h2 className="section__title">How we deliver faster without cutting corners</h2>
              <p className="section__sub">
                Our AI systems handle scaffolding, documentation, and pattern generation. Our
                engineers handle architecture decisions, security review, and client-specific
                customization. Senior judgment at the speed of automation.
              </p>
            </AnimatedSection>

            <div className="ai-model-grid">
              {[
                { label: "AI handles", items: ["Code scaffolding", "Runbook generation", "Alert rule templates", "Documentation drafts", "L1 incident classification"] },
                { label: "Engineers handle", items: ["Architecture decisions", "Security & compliance", "Client customization", "Quality validation", "L2/L3 escalations"] },
              ].map((col) => (
                <AnimatedSection key={col.label}>
                  <div className={`ai-model-col ${col.label === "Engineers handle" ? "ai-model-col--human" : "ai-model-col--ai"}`}>
                    <p className="ai-model-col__label">{col.label}</p>
                    <ul className="ai-model-col__list">
                      {col.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── Process ── */}
        <section id="process" className="section">
          <div className="container">
            <AnimatedSection>
              <p className="section__eyebrow">Engagement model</p>
              <h2 className="section__title">From audit to production in 4 steps</h2>
            </AnimatedSection>

            <div className="process-grid">
              {PROCESS.map((p, i) => (
                <AnimatedSection key={p.step} delay={i * 0.1}>
                  <div className="process-card">
                    <span className="process-card__step">{p.step}</span>
                    <h3 className="process-card__title">{p.title}</h3>
                    <p className="process-card__detail">{p.detail}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── Who We Work With ── */}
        <section className="section section--dark">
          <div className="container">
            <AnimatedSection>
              <p className="section__eyebrow">Who we work with</p>
              <h2 className="section__title">Built for teams that move fast</h2>
            </AnimatedSection>

            <div className="audience-grid">
              {[
                { title: "Scaling startups", desc: "You've outgrown your initial infra. We build the foundation that takes you to Series B and beyond without emergency rewrites." },
                { title: "Enterprise teams", desc: "Internal teams that need specialized expertise — Observability, OpenShift, SAP — without a 6-month hiring process." },
                { title: "SaaS founders", desc: "Reliability and cost efficiency are existential. We build infra that scales with your MRR, not against it." },
                { title: "Platform engineers", desc: "You know what needs to be done. We execute it faster, with AI-assisted delivery and senior review at every step." },
              ].map((a, i) => (
                <AnimatedSection key={a.title} delay={i * 0.08}>
                  <div className="audience-card">
                    <h3 className="audience-card__title">{a.title}</h3>
                    <p className="audience-card__desc">{a.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" className="section">
          <div className="container container--narrow">
            <AnimatedSection>
              <p className="section__eyebrow">Common questions</p>
              <h2 className="section__title">Everything you need to know before we talk</h2>
            </AnimatedSection>

            <div className="faq-list">
              {FAQS.map((f, i) => (
                <FAQItem key={i} faq={f} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA / Contact ── */}
        <section id="contact" className="section section--cta">
          <div className="container container--narrow">
            <AnimatedSection>
              <div className="cta-block">
                <p className="section__eyebrow cta-block__eyebrow">Start here</p>
                <h2 className="cta-block__title">
                  Get a free technical audit — no strings attached
                </h2>
                <p className="cta-block__sub">
                  30 minutes. We review your current setup, identify the top 3 highest-impact
                  improvements, and give you a concrete roadmap. You keep the report regardless of
                  what you decide next.
                </p>
                <div className="cta-block__actions">
                  <a
                    href="mailto:info@ramatech.co.in"
                    className="btn btn--primary btn--lg"
                  >
                    Book Free Audit →
                  </a>
                  <a
                    href="https://www.linkedin.com/company/observablesystems/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--ghost btn--lg"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
                <p className="cta-block__note">
                  Typical response within 4 hours · No commitment required
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="container footer__inner">
          <div className="footer__brand">
            <span className="navbar__brand">Rama<span>Tech</span></span>
            <p className="footer__tagline">
              AI-powered infrastructure consulting — Observability · OpenShift · DevOps · SAP
            </p>
          </div>
          <div className="footer__links">
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#faq">FAQ</a>
            <a href="mailto:hello@ramatech.co.in">Contact</a>
          </div>
          <p className="footer__copy">
            © {new Date().getFullYear()} RamaTech Solution · ramatech.co.in
          </p>
        </div>
      </footer>
    </>
  );
}