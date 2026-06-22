export default function Footer() {
  return (
    <footer className="bg-navy border-t border-indigo-900/20 px-6 md:px-16 py-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-xs text-slate-500">
          © 2026 Ferdinand Esteves ·{' '}
          Built with{' '}
          <span className="text-indigo-500">♥</span>{' '}
          in the Philippines
        </p>
        <p className="font-mono text-xs text-slate-500">
          Designed &amp; developed by{' '}
          <span className="text-indigo-400">fe.dev</span>
        </p>
      </div>
    </footer>
  );
}
