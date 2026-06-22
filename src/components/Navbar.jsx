import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy/90 backdrop-blur-xl border-b border-indigo-900/30 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#hero"
          className="font-display font-bold text-lg text-slate-100 tracking-tight hover:text-indigo-400 transition-colors"
        >
          fe<span className="text-indigo-500">.</span>dev
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="font-mono text-[11px] tracking-widest uppercase text-slate-400 hover:text-slate-100 transition-colors duration-200"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hire CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center font-mono text-xs text-indigo-400 border border-indigo-500/50 hover:bg-indigo-500 hover:text-white px-4 py-2 rounded transition-all duration-200"
        >
          hire me
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-slate-400 hover:text-slate-100 transition-colors"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-rounded text-[26px]">
            {menuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden bg-navy-surface border-t border-indigo-900/30 px-6 pb-6 pt-2">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center py-3 font-mono text-xs tracking-widest uppercase text-slate-400 hover:text-slate-100 border-b border-indigo-900/20 last:border-0 transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 block text-center font-mono text-xs text-indigo-400 border border-indigo-500/40 hover:bg-indigo-500 hover:text-white px-4 py-2.5 rounded transition-all duration-200"
          >
            hire me
          </a>
        </div>
      )}
    </nav>
  );
}
