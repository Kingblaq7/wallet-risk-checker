export const MORALIS_API = "https://deep-index.moralis.io/api/v2.2";

export async function fetchWalletData(address: string, chain: string) {
  const res = await fetch(
    `${MORALIS_API}/${address}/balance?chain=${chain}`,
    {
      headers: {
        "X-API-Key": process.env.MORALIS_API_KEY || "",
      },
    }
  );

  if (!res.ok) {
    throw new Error("Unable to fetch wallet.");
  }

  return res.json();
}
