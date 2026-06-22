import { useScrollFade } from '../hooks/useScrollFade';
import { LIVE_PROJECTS, OTHER_PROJECTS } from '../data/portfolio';


function HoverBar() {
  return (
    <span className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-teal-400
      opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-xl" />
  );
}

function LiveBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.1em] uppercase
      bg-teal-400/10 border border-teal-400/30 text-teal-400 rounded-full px-2.5 py-0.5 mb-4">
      {/* Pulsing dot */}
      <span className="relative flex h-1.5 w-1.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-60" />
        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-teal-400" />
      </span>
      Live Site
    </span>
  );
}

function SectionDivider({ label }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="font-mono text-[10.5px] tracking-[0.12em] uppercase text-slate-500 whitespace-nowrap">
        {label}
      </span>
      <span className="flex-1 h-px bg-indigo-900/40" />
    </div>
  );
}

export default function Projects() {
  const { ref, isVisible } = useScrollFade();

  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-16 bg-navy-surface border-t border-indigo-900/20"
    >
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-700 ease-out
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          {/* Header */}
          <p className="font-mono text-[11px] text-teal-400 tracking-[0.14em] uppercase mb-3 flex items-center gap-2">
            Projects
            <span className="h-px w-10 bg-teal-400 block" />
          </p>
          <h2 className="font-display font-bold text-4xl text-slate-100 tracking-tight mb-3">
            Things I've built
          </h2>
          <p className="text-slate-400 max-w-lg mb-10 leading-relaxed text-[0.95rem]">
            Client work and personal projects — each one solving a real problem.
          </p>

          {/* ── Live Sites ── */}
          <SectionDivider label="Live Websites" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            {LIVE_PROJECTS.map((p, i) => (
              <div
                key={p.id}
                className="group relative bg-navy-card border border-indigo-900/30 rounded-2xl overflow-hidden
                  hover:border-indigo-500/40 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/40
                  transition-all duration-300"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <HoverBar />

                {/* Browser preview */}
                <div className={`bg-gradient-to-br ${p.previewGradient} p-4`}>
                  <div className="rounded-xl overflow-hidden border border-white/8 shadow-xl">
                    {/* Chrome bar */}
                    <div className="bg-gray-800/80 px-4 py-2.5 flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/70 block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70 block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/70 block" />
                      <div className="ml-3 bg-gray-700/60 rounded px-3 py-0.5 flex-1">
                        <span className="font-mono text-[10px] text-slate-400 truncate block">
                          {p.previewLabel}
                        </span>
                      </div>
                    </div>
                    {/* Preview body */}
                    <div className="h-36 flex flex-col items-center justify-center gap-2.5 bg-black/20">
                      <span className={`material-symbols-rounded text-5xl ${p.previewAccent}`}>
                        {p.previewIcon}
                      </span>
                      <p className={`font-display font-semibold text-sm ${p.previewNameColor}`}>
                        {p.title}
                      </p>
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`font-mono text-[10px] ${p.previewAccent} hover:opacity-80 transition-opacity`}
                      >
                        {p.previewLabel} ↗
                      </a>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <LiveBadge />

                  <span className="flex items-center gap-1.5 font-mono text-[10.5px] text-teal-400
                    tracking-widest uppercase mb-3">
                    <span className="material-symbols-rounded text-[13px]">public</span>
                    {p.type}
                  </span>

                  <h3 className="font-display font-bold text-xl text-slate-100 tracking-tight mb-2">
                    {p.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5">
                    {p.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {p.tech.map((t) => (
                      <span key={t}
                        className="font-mono text-[10px] bg-indigo-500/10 text-indigo-400
                          border border-indigo-500/22 px-2.5 py-0.5 rounded">
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-sm font-semibold
                      text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    <span className="material-symbols-rounded text-[15px]">open_in_new</span>
                    Visit Live Site
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* ── Other Projects ── */}
          <SectionDivider label="Other Projects" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {OTHER_PROJECTS.map(({ id, type, title, desc, tech, link }, i) => (
              <div
                key={id}
                className="group relative bg-navy-card border border-indigo-900/30 rounded-xl p-6
                  hover:border-indigo-500/40 hover:-translate-y-1 transition-all duration-200 overflow-hidden"
                style={{ animationDelay: `${(i + 2) * 100}ms` }}
              >
                <HoverBar />

                {/* Faint number */}
                <span className="absolute top-4 right-5 font-display font-bold text-4xl
                  text-indigo-500/8 leading-none select-none pointer-events-none">
                  {id}
                </span>

                <p className="font-mono text-[10.5px] text-teal-400 tracking-widest uppercase mb-3">
                  {type}
                </p>
                <h3 className="font-display font-bold text-lg text-slate-100 tracking-tight mb-2">
                  {title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  {desc}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {tech.map((t) => (
                    <span key={t}
                      className="font-mono text-[10px] bg-indigo-500/10 text-indigo-400
                        border border-indigo-500/20 px-2 py-0.5 rounded">
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={link}
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold
                    text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  <span className="material-symbols-rounded text-[14px]">arrow_forward</span>
                  View Project
                </a>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}