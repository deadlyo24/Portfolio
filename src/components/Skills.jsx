import { useScrollFade } from '../hooks/useScrollFade';
import { SKILLS }        from '../data/portfolio';

export default function Skills() {
  const { ref, isVisible } = useScrollFade();

  return (
    <section
  id="skills"
  className="relative overflow-hidden py-24 px-6 md:px-16 bg-navy border-t border-indigo-900/20"
>
  {/* Background Gradient Drops */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/10 blur-[120px] rounded-full" />
    <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-400/8 blur-[140px] rounded-full" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/5 blur-[180px] rounded-full" />
  </div>
      <div className="relative max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-700 ease-out
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          {/* Header */}
          <p className="font-mono text-[11px] text-teal-400 tracking-[0.14em] uppercase mb-3 flex items-center gap-2">
            Skills
            <span className="h-px w-10 bg-teal-400 block" />
          </p>
          <h2 className="font-display font-bold text-4xl text-slate-100 tracking-tight mb-3">
            What I work with
          </h2>
          <p className="text-slate-400 max-w-lg mb-12 leading-relaxed text-[0.95rem]">
            A breadth of tools applied with depth — enterprise-grade on one side, modern full-stack on the other.
          </p>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SKILLS.map(({ icon, title, tags }) => (
              <div
                key={title}
                className="group bg-navy-card border border-indigo-900/30 rounded-xl p-6
                  hover:border-indigo-500/40 hover:-translate-y-1 transition-all duration-200"
              >
                {/* Google Material Icon */}
                <span className="material-symbols-rounded text-[32px] text-indigo-400 mb-4 block">
                  {icon}
                </span>
                <h3 className="font-display font-semibold text-slate-100 mb-4 text-[0.95rem]">
                  {title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10.5px] bg-slate-800/70 text-slate-400
                        border border-slate-700/50 px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
