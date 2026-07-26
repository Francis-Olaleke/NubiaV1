export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
      <section className="max-w-3xl text-center">

        <p className="text-sm uppercase tracking-[0.35em] text-cyan-400 font-semibold">
          Nubia V1
        </p>

        <h1 className="mt-6 text-5xl md:text-7xl font-extrabold leading-tight">
          Africa's
          <span className="block text-cyan-400">
            Personal Financial Intelligence
          </span>
        </h1>

        <p className="mt-8 text-lg md:text-xl text-slate-300 leading-8">
          Ask Nubia anything about your money.
          <br />
          Understand your spending.
          <br />
          Make smarter financial decisions directly from WhatsApp.
        </p>

        <div className="mt-12 flex justify-center gap-4">
          <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-8 py-4 rounded-xl transition">
            Get Started
          </button>

          <button className="border border-slate-600 hover:border-cyan-400 hover:text-cyan-400 px-8 py-4 rounded-xl transition">
            Learn More
          </button>
        </div>

      </section>
    </main>
  );
}