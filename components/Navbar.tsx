export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6">
      <h1 className="text-2xl font-bold text-cyan-400">
        NUBIA
      </h1>

      <div className="space-x-8 text-slate-300">
        <a href="#">Features</a>
        <a href="#">How it Works</a>
        <a href="#">About</a>
      </div>

      <button className="rounded-lg bg-cyan-500 px-5 py-2 font-semibold text-slate-950 hover:bg-cyan-400 transition">
        Get Started
      </button>
    </nav>
  );
}