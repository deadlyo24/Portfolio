import { useScrollFade } from '../hooks/useScrollFade';
import { ABOUT_STATS } from '../data/portfolio';

export default function About() {
  const { ref, isVisible } = useScrollFade();

  return (
    <section
      id="about"
      className="relative py-24 sm:py-28 px-5 sm:px-8 lg:px-12 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 blur-3xl rounded-full" />

      <div
        ref={ref}
        className={`max-w-7xl mx-auto relative z-10 transition-all duration-700 ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <p className="font-mono text-teal-400 text-xs tracking-[0.2em] uppercase mb-3">
            About Me
          </p>

          <h2 className="text-4xl md:text-6xl font-black text-white">
            Developer
            <span className="text-indigo-400"> Command Center</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-[400px_1fr] gap-10 lg:gap-16">

          {/* LEFT PANEL */}
          <div className="relative">

            {/* Glow */}
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-cyan-500/20 blur-2xl" />

            <div className="relative bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-[2rem] overflow-hidden">

              {/* Image */}
              <div className="relative h-[420px]">
                <img
                  src="https://res.cloudinary.com/dxhtxxssr/image/upload/v1782148872/b541c1bc-1317-4c92-bbd3-780248200323-removebg-preview_wlyih2.png"
                  alt="Ferdinand Esteves"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6">
                  <h3 className="text-white font-bold text-2xl">
                    Ferdinand Esteves
                  </h3>

                  <p className="text-indigo-400 text-sm mt-1">
                    Full Stack Developer
                  </p>
                </div>
              </div>

              {/* Availability */}
              <div className="p-6 border-t border-slate-800">

                <div className="flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-400" />
                  </span>

                  <span className="font-mono text-sm text-teal-400">
                    Available for opportunities
                  </span>
                </div>

              </div>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div>

            {/* Terminal */}
            <div className="bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden mb-8">

              <div className="flex gap-2 px-5 py-4 border-b border-slate-800">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
              </div>

              <div className="p-6 font-mono text-sm md:text-base">

                <p className="text-teal-400 mb-4">
                  &gt; whoami
                </p>

                <p className="text-slate-300 leading-relaxed mb-6">
                  Enterprise developer based in Manaoag, Pangasinan,
                  Philippines.
                </p>

                <p className="text-teal-400 mb-4">
                  &gt; current_stack
                </p>

                <p className="text-slate-300 leading-relaxed mb-6">
                  Telerik MVC, ASP.NET MVC, VB.NET, MSSQL,
                  React, PERN Stack, Supabase.
                </p>

                <p className="text-teal-400 mb-4">
                  &gt; philosophy
                </p>

                <p className="text-slate-300 leading-relaxed">
                  Build systems that scale, databases that stay fast,
                  and interfaces that users actually enjoy using.
                </p>

              </div>
            </div>

            {/* Stats */}
            <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">

              {ABOUT_STATS.map(({ number, label }) => (
                <div
                  key={label}
                  className="
                    group
                    bg-slate-900/50
                    backdrop-blur-xl
                    border
                    border-slate-800
                    rounded-2xl
                    p-5
                    hover:border-indigo-500/50
                    hover:-translate-y-1
                    transition-all
                  "
                >
                  <h3 className="text-3xl font-black text-indigo-400 mb-2">
                    {number}
                  </h3>

                  <p className="text-slate-500 text-sm">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            {/* Timeline */}
            <div className="mt-10 border-l border-indigo-500/30 pl-6 space-y-8">

              <div>
                <p className="text-indigo-400 font-mono text-xs mb-2">
                  ENTERPRISE DEVELOPMENT
                </p>

                <p className="text-slate-300">
                  Telerik MVC, VB.NET, MSSQL,
                  Stored Procedures, Triggers, Linked Servers.
                </p>
              </div>

              <div>
                <p className="text-cyan-400 font-mono text-xs mb-2">
                  MODERN WEB
                </p>

                <p className="text-slate-300">
                  React, PERN Stack, Supabase,
                  API Design and Cloud Applications.
                </p>
              </div>

              <div>
                <p className="text-purple-400 font-mono text-xs mb-2">
                  DESIGN APPROACH
                </p>

                <p className="text-slate-300">
                  Performance-first architecture,
                  clean UI patterns, maintainable code.
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}