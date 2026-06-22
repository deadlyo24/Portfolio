import { useScrollFade } from '../hooks/useScrollFade';
import { EXPERIENCE }    from '../data/portfolio';

export default function Experience() {
  const { ref, isVisible } = useScrollFade();

  return (
    <section
      id="experience"
      className="py-24 px-6 md:px-16 bg-navy border-t border-indigo-900/20"
    >
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-700 ease-out
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          {/* Header */}
          <p className="font-mono text-[11px] text-teal-400 tracking-[0.14em] uppercase mb-3 flex items-center gap-2">
            Experience
            <span className="h-px w-10 bg-teal-400 block" />
          </p>
          <h2 className="font-display font-bold text-4xl text-slate-100 tracking-tight mb-12">
            Where I've worked
          </h2>

          {/* Timeline */}
          <div className="max-w-2xl">
            {EXPERIENCE.map(({ years, role, company, desc }, idx) => (
              <div
                key={idx}
                className={`grid gap-6 py-8 ${
                  idx !== EXPERIENCE.length - 1
                    ? 'border-b border-indigo-900/25'
                    : ''
                }`}
                style={{ gridTemplateColumns: '110px 1fr' }}
              >
                {/* Year range */}
                <div className="font-mono text-xs text-slate-500 pt-0.5 leading-relaxed">
                  {years}
                </div>

                {/* Details */}
                <div>
                  <div className="font-display font-semibold text-slate-100 mb-1 leading-snug">
                    {role}
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-indigo-400 mb-3">
                    <span className="material-symbols-rounded text-[14px]">business</span>
                    {company}
                  </div>
                  <p className="text-sm text-slate-400 leading-[1.85]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
