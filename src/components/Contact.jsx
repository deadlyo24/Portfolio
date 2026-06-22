import { useScrollFade } from '../hooks/useScrollFade';
import { CONTACT_EMAIL, SOCIALS } from '../data/portfolio';

// GitHub SVG icon
function GitHubIcon() {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

// LinkedIn SVG icon
function LinkedInIcon() {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const SOCIAL_ICONS = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
};

export default function Contact() {
  const { ref, isVisible } = useScrollFade();

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 px-6 md:px-16 bg-navy-surface border-t border-indigo-900/20 text-center"
    >
      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Gradient droplets */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="gradient-drop drop-1" />
        <div className="gradient-drop drop-2" />
        <div className="gradient-drop drop-3" />
      </div>

      <div
        ref={ref}
        className={`relative z-10 max-w-lg mx-auto transition-all duration-700 ease-out
          ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          }`}
      >
        {/* Label */}
        <p
          className="font-mono text-[11px] text-teal-400 tracking-[0.14em]
          uppercase mb-3 flex items-center justify-center gap-2"
        >
          Contact
          <span className="h-px w-10 bg-teal-400 block" />
        </p>

        {/* Heading */}
        <h2 className="font-display font-bold text-4xl md:text-5xl text-slate-100 tracking-tight mb-4">
          Let's{' '}
          <span className="bg-gradient-to-r from-indigo-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
            build something.
          </span>
        </h2>

        <p className="text-slate-400 leading-relaxed mb-10 text-[0.95rem]">
          Whether it's an enterprise system, a web application, or a complex
          data problem — I'd love to hear from you.
        </p>

        {/* Email */}
        <div className="relative inline-block mb-12">
          <div
            className="absolute inset-0 scale-150 blur-3xl
            bg-gradient-to-r
            from-indigo-500/20
            via-cyan-400/10
            to-purple-500/20"
          />

          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="relative font-display font-bold text-slate-100
            hover:text-indigo-400 border-b-2 border-indigo-500
            pb-0.5 transition-colors duration-300"
            style={{ fontSize: 'clamp(1rem, 2.8vw, 1.5rem)' }}
          >
            {CONTACT_EMAIL}
          </a>
        </div>

        {/* Socials */}
        <div className="flex justify-center gap-8 flex-wrap">
          {SOCIALS.map(({ label, href }) => {
            const Icon = SOCIAL_ICONS[label];

            return (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2
                  font-mono text-sm text-slate-400
                  hover:text-teal-400
                  transition-all duration-300
                  hover:-translate-y-0.5"
              >
                {Icon && (
                  <span className="transition-transform duration-300 group-hover:scale-110">
                    <Icon />
                  </span>
                )}
                {label}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}