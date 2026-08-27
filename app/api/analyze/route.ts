import { NextResponse } from "next/server";
import { fetchWalletData } from "@/lib/moralis";
import { calculateRisk } from "@/lib/riskEngine";

export async function POST(req: Request) {
  try {
    const { address, chain } = await req.json();

    if (!address || !chain) {
      return NextResponse.json(
        { error: "Wallet address and chain are required" },
        { status: 400 }
      );
    }

    const walletData = await fetchWalletData(address, chain);

    const balance = Number(walletData.balance) / 10 ** 18;

    const risk = calculateRisk(balance);

    return NextResponse.json({
      address,
      chain,
      balance,
      risk,
    });

  } catch (error) {
    return NextResponse.json(
      { error: "Unable to analyze wallet" },
      { status: 500 }
    );
  }
}
