const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;

export async function fetchWalletData(
  address: string,
  chain: string
) {
  const response = await fetch(
    `https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        jsonrpc: "2.0",
        method: "eth_getBalance",
        params: [address, "latest"],
        id: 1,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Unable to fetch wallet");
  }

  return response.json();
}
