export function calculateRisk(balance: number) {
  if (balance > 100) {
    return {
      score: 92,
      status: "Low Risk",
      message: "Healthy wallet with significant assets.",
    };
  }

  if (balance > 10) {
    return {
      score: 68,
      status: "Medium Risk",
      message: "Normal wallet activity detected.",
    };
  }

  return {
    score: 35,
    status: "High Risk",
    message: "Low balance or inactive wallet.",
  };
}
