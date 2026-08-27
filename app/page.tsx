import Header from "@/components/Header";
import WalletForm from "@/components/WalletForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      <section className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-4xl font-bold text-center">
          Wallet Risk Checker
        </h1>

        <p className="mt-4 text-center text-gray-400">
          Analyze crypto wallets across multiple blockchains and check risk levels.
        </p>

        <div className="mt-10">
          <WalletForm />
        </div>
      </section>
    </main>
  );
}
