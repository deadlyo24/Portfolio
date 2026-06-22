import { useEffect, useState } from 'react';
import { STACK_PILLS } from '../data/portfolio';

const FULL_NAME = 'Ferdinand Esteves';

export default function Hero() {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;

    const delay = setTimeout(() => {
      const tick = setInterval(() => {
        i++;

        setDisplayed(FULL_NAME.slice(0, i));

        if (i >= FULL_NAME.length) {
          clearInterval(tick);
          setDone(true);
        }
      }, 70);

      return () => clearInterval(tick);
    }, 400);

    return () => clearTimeout(delay);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden px-5 sm:px-8 lg:px-12 pt-28 pb-20"
    >
      {/* Background Effects */}
      <div className="absolute -top-52 -right-52 w-[700px] h-[700px] rounded-full bg-indigo-600/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-24 items-center">

        {/* RIGHT SIDE IMAGE FIRST ON MOBILE */}
        <div className="flex justify-center order-first lg:order-last">

          <div className="relative">

            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/40 via-purple-500/30 to-cyan-500/30 blur-3xl rounded-full animate-pulse" />

            {/* Outer Ring */}
            <div className="absolute inset-[-18px] rounded-full border border-indigo-500/20 animate-spin-slow" />

            {/* Main Image */}
            <div
              className="
              relative
              w-[260px]
              h-[260px]
              sm:w-[320px]
              sm:h-[320px]
              md:w-[380px]
              md:h-[380px]
              rounded-full
              overflow-hidden
              border
              border-indigo-500/30
              bg-slate-900/60
              backdrop-blur-xl
              shadow-[0_0_90px_rgba(99,102,241,.25)]
              "
            >
              <img
                src="https://res.cloudinary.com/dxhtxxssr/image/upload/v1782148098/b3c82ba2-6da1-457b-8fff-6f00f8b08392_bmopik.png"
                alt="Ferdinand Esteves"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Status Badge */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-slate-900/90 backdrop-blur-xl border border-teal-400/20 px-4 py-2 rounded-full">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400" />
                </span>

                <span className="font-mono text-xs text-teal-400">
                  Available for work
                </span>
              </div>
            </div>

            {/* Floating Tech Tags */}
            <div className="absolute -top-3 right-0 px-4 py-2 rounded-full bg-slate-900/90 border border-indigo-500/30 backdrop-blur-xl animate-float">
              <span className="text-xs font-mono text-indigo-400">
                React
              </span>
            </div>

            <div
              className="absolute left-0 bottom-14 px-4 py-2 rounded-full bg-slate-900/90 border border-cyan-500/30 backdrop-blur-xl animate-float"
              style={{ animationDelay: '1s' }}
            >
              <span className="text-xs font-mono text-cyan-400">
                Supabase
              </span>
            </div>

            <div
              className="absolute -left-10 top-20 px-4 py-2 rounded-full bg-slate-900/90 border border-purple-500/30 backdrop-blur-xl animate-float"
              style={{ animationDelay: '2s' }}
            >
              <span className="text-xs font-mono text-purple-400">
                Telerik MVC
              </span>
            </div>

            <div
              className="absolute -right-6 bottom-24 px-4 py-2 rounded-full bg-slate-900/90 border border-teal-500/30 backdrop-blur-xl animate-float"
              style={{ animationDelay: '3s' }}
            >
              <span className="text-xs font-mono text-teal-400">
                MSSQL
              </span>
            </div>
          </div>
        </div>

        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left">

          {/* Availability */}
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-8">
            <span className="w-8 h-px bg-teal-400"></span>

            <p className="font-mono text-xs tracking-[0.15em] uppercase text-teal-400">
              Available for opportunities
            </p>
          </div>

          {/* Name */}
          <h1 className="font-display font-black leading-[0.95] tracking-tight text-slate-100 mb-4">

            <span
              className="
              block
              text-[3rem]
              sm:text-[4rem]
              md:text-[5rem]
              xl:text-[6rem]
              "
            >
              {displayed}
            </span>

            <span
              className={`inline-block w-[4px] bg-indigo-500 ml-2 ${
                done ? 'animate-pulse' : ''
              }`}
              style={{ height: '0.9em' }}
            />
          </h1>

          {/* Role */}
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-indigo-400 mb-6">
            Full Stack Developer
          </p>

          {/* Description */}
          <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10">
            Building enterprise systems with
            <span className="text-white font-medium">
              {' '}VB.NET & Telerik MVC
            </span>
            , and crafting modern web applications using
            <span className="text-white font-medium">
              {' '}React, PERN Stack, and Supabase
            </span>.
            From database design and stored procedures to polished user
            interfaces and scalable deployments.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

            <a
              href="#projects"
              className="
              group
              inline-flex
              justify-center
              items-center
              gap-2
              px-7
              py-4
              rounded-2xl
              bg-gradient-to-r
              from-indigo-600
              to-purple-600
              text-white
              font-semibold
              shadow-xl
              hover:scale-105
              transition-all
              duration-300
              "
            >
              <span className="material-symbols-rounded">
                folder_open
              </span>
              View My Work
            </a>

            <a
              href="#contact"
              className="
              inline-flex
              justify-center
              items-center
              gap-2
              px-7
              py-4
              rounded-2xl
              border
              border-slate-700
              bg-slate-900/50
              backdrop-blur-xl
              text-slate-200
              hover:border-indigo-500
              hover:bg-slate-800/50
              transition-all
              duration-300
              "
            >
              <span className="material-symbols-rounded">
                mail
              </span>
              Get in Touch
            </a>
          </div>

          {/* Stack Pills */}
          <div className="mt-12">

            <p className="font-mono text-xs text-slate-500 uppercase tracking-[0.2em] mb-4">
              Tech Stack
            </p>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">

              {STACK_PILLS.map((pill) => (
                <span
                  key={pill}
                  className="
                  px-4
                  py-2
                  rounded-full
                  bg-slate-900/60
                  backdrop-blur-lg
                  border
                  border-indigo-500/20
                  text-indigo-300
                  text-xs
                  font-mono
                  hover:scale-105
                  hover:border-indigo-500/50
                  transition-all
                  duration-300
                  "
                >
                  {pill}
                </span>
              ))}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}