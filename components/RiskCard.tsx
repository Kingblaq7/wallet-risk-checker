export default function RiskCard({ risk }: { risk: any }) {
  return (
    <div className="rounded-xl bg-zinc-900 p-6">
      <h2 className="text-2xl font-bold">
        Risk Score: {risk.score}/100
      </h2>

      <p className="mt-3 text-green-400">
        Status: {risk.status}
      </p>

      <p className="mt-2 text-gray-400">
        {risk.message}
      </p>
    </div>
  );
}
