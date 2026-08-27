type RiskCardProps = {
  score: number;
  status: string;
  message: string;
};

export default function RiskCard({
  score,
  status,
  message,
}: RiskCardProps) {
  return (
    <div className="mt-8 rounded-xl bg-[#161b22] p-6 border border-gray-800">
      <h2 className="text-xl font-bold text-green-400 mb-4">
        Wallet Risk Report
      </h2>

      <div className="space-y-3">
        <p>
          <span className="font-semibold">Risk Score:</span> {score}/100
        </p>

        <p>
          <span className="font-semibold">Status:</span> {status}
        </p>

        <p>
          <span className="font-semibold">Summary:</span> {message}
        </p>
      </div>
    </div>
  );
}
