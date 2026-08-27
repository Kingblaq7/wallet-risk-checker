"use client";

import { useState } from "react";
import { CHAINS } from "@/lib/chains";
import Loader from "./Loader";
import RiskCard from "./RiskCard";

export default function WalletForm() {
  const [address, setAddress] = useState("");
  const [chain, setChain] = useState("1");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function analyzeWallet() {
    try {
      setLoading(true);
      setResult(null);

      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          address,
          chain,
        }),
      });

      const data = await response.json();

      setResult(data);

    } catch (error) {
      setResult({
        error: "Something went wrong",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      <input
        className="w-full rounded-lg bg-zinc-900 p-4 text-white"
        placeholder="Enter wallet address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <select
        className="w-full rounded-lg bg-zinc-900 p-4 text-white"
        value={chain}
        onChange={(e) => setChain(e.target.value)}
      >
        {CHAINS.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>

     <button
  onClick={analyzeWallet}
  className="w-full rounded-lg bg-green-500 p-4 font-bold text-black"
>
  Analyze Wallet
</button>

      {loading && <Loader />}

      {result?.risk && <RiskCard risk={result.risk} />}
    </div>
  );
}
