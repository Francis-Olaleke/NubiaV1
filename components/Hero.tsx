export default function Hero() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center text-center px-6">

      <p className="mb-6 tracking-[0.4em] text-cyan-400 font-semibold">
        NUBIA V1
      </p>

      <h1 className="text-6xl font-extrabold text-white leading-tight">
        Africa's
        <br />
        <span className="text-cyan-400">
          Personal Financial Intelligence
        </span>
      </h1>

      <p className="mt-8 max-w-3xl text-xl text-slate-300 leading-9">
        Ask Nubia anything about your money.
        <br />
        Understand your spending.
        <br />
        Make smarter financial decisions directly from WhatsApp.
      </p>

      <div className="mt-12 flex gap-6">
        <button className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-slate-950 hover:bg-cyan-400 transition">
          Get Started
        </button>

        <button className="rounded-xl border border-slate-600 px-8 py-4 text-white hover:border-cyan-400 hover:text-cyan-400 transition">
          Learn More
        </button>
      </div>

    </section>
  );
}