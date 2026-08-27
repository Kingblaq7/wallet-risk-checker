"use client";

import { useState } from "react";

export default function WalletForm() {
  const [address, setAddress] = useState("");
  const [chain, setChain] = useState("Ethereum");

  const handleAnalyze = () => {
    alert(`Analyzing ${address} on ${chain}...`);
  };

  return (
    <div className="bg-[#161b22] p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6">
        Multi-Chain Wallet Risk Checker
      </h2>

      <input
        type="text"
        placeholder="Enter wallet address..."
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="w-full p-3 rounded-lg bg-[#0d1117] border border-gray-700 mb-4 text-white"
      />

      <select
        value={chain}
        onChange={(e) => setChain(e.target.value)}
        className="w-full p-3 rounded-lg bg-[#0d1117] border border-gray-700 mb-6 text-white"
      >
        <option>Ethereum</option>
        <option>BNB Chain</option>
        <option>Polygon</option>
        <option>Arbitrum</option>
        <option>Optimism</option>
        <option>Base</option>
        <option>Avalanche</option>
      </select>

      <button
        onClick={handleAnalyze}
        className="w-full bg-green-500 hover:bg-green-600 text-black font-bold py-3 rounded-lg"
      >
        Analyze Wallet
      </button>
    </div>
  );
}
