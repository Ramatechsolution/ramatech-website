"use client";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Metrics", href: "#metrics" },
  { label: "FAQ", href: "#faq" }
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-2xl">
      <nav className="section-shell flex h-18 items-center justify-between">
        <a href="#home" className="text-lg font-semibold tracking-tight text-white md:text-xl">
          Ramtech <span className="text-indigo-300">DevOps</span>
        </a>

        <ul className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a className="transition duration-200 hover:text-white" href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="rounded-full border border-indigo-300/30 bg-indigo-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-900/30 transition duration-200 hover:bg-indigo-400"
        >
          Book Audit
        </a>
      </nav>
    </header>
  );
}
