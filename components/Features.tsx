import FeatureCard from "./FeatureCard";

export default function Features() {
  return (
    <section className="bg-slate-950 px-6 py-24">

      <div className="mx-auto max-w-7xl">

        <div className="mb-16 text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Why Nubia
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white">
            Your Financial Intelligence,
            <br />
            Always Within Reach
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            Nubia helps you understand your finances, make smarter decisions,
            and build healthier money habits—all through simple conversations.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          <FeatureCard
            icon="💬"
            title="Ask About Your Money"
            description="Get instant answers about budgeting, income, expenses, and your financial questions."
          />

          <FeatureCard
            icon="📊"
            title="Spending Intelligence"
            description="Understand where your money goes with simple insights that help you spend wisely."
          />

          <FeatureCard
            icon="💰"
            title="Savings Coach"
            description="Receive personalised savings plans that fit your income, goals, and lifestyle."
          />

          <FeatureCard
            icon="🤖"
            title="AI Financial Intelligence"
            description="Chat naturally with Nubia on WhatsApp and receive practical financial guidance."
          />

        </div>

      </div>
    </section>
  );
}