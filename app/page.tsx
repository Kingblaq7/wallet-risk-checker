import Header from "@/components/Header";
import WalletForm from "@/components/WalletForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070707] text-white">
      <Header />

      <section className="mx-auto max-w-6xl px-6 py-24">

        {/* Hero */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
            Next-generation wallet intelligence platform
          </div>

          <h1 className="mt-8 text-5xl font-bold tracking-tight md:text-7xl">
            Understand every wallet.
            <br />
            <span className="text-gray-400">
              Before you trust it.
            </span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Analyze crypto wallets across multiple blockchains,
            discover risk signals, and make smarter Web3 decisions
            from one simple dashboard.
          </p>

        </div>


        {/* Scanner */}
        <div className="mt-20 rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-2xl backdrop-blur-xl md:p-12">

          <div className="mb-8">
            <h2 className="text-3xl font-semibold">
              Wallet Analyzer
            </h2>

            <p className="mt-2 text-gray-400">
              Enter a wallet address to generate a security report.
            </p>
          </div>

          <WalletForm />

        </div>


        {/* Trust cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">

          <Card
            title="Multi-chain"
            text="Monitor wallets across popular blockchain networks."
          />

          <Card
            title="Risk Intelligence"
            text="Turn blockchain activity into simple security insights."
          />

          <Card
            title="Real-time"
            text="Fast wallet analysis built for Web3 users."
          />

        </div>


      </section>
    </main>
  );
}


function Card({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">

      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 text-gray-400">
        {text}
      </p>

    </div>
  );
}
