"use client";

import Header from "@/components/Header";
import WalletForm from "@/components/WalletForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <div className="max-w-4xl mx-auto px-6 py-10">
        <WalletForm />
      </div>
    </main>
  );
}
