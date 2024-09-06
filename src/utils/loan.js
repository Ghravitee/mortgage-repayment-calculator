export function calculateLoanPayment(principal, termInYears, annualRate) {
  const months = termInYears * 12;
  const monthlyRate = annualRate / 12 / 100;

  // Monthly payment calculation
  const monthlyPayment =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1);

  // Total repayment
  const totalRepayment = monthlyPayment * months;

  return {
    monthlyPayment: monthlyPayment.toFixed(2), // Round to 2 decimal places
    totalRepayment: totalRepayment.toFixed(2),
  };
}
