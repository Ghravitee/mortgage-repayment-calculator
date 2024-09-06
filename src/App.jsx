import CompletedResults from "./components/CompletedResults";
import { calculateLoanPayment } from "./utils/loan";
import { useState } from "react";
import EmptyResults from "./components/EmptyResults";
import Form from "./components/Form";

function App() {
  const [isMortgageCalculated, setIsMortgageCalculated] = useState(false);
  const [mortgage, setMortgage] = useState({
    monthlyPayment: 0,
    totalRepayment: 0,
  });

  function calculateMortgage(amount, term, rate) {
    const mortgageData = calculateLoanPayment(amount, term, rate);
    setMortgage({
      monthlyPayment: mortgageData.monthlyPayment,
      totalRepayment: mortgageData.totalRepayment,
    });
    setIsMortgageCalculated(true);
  }

  function resetValues() {
    setIsMortgageCalculated(false);
  }

  return (
    <main className="main-500 lg:flex justify-center items-center min-h-screen bg-Slate-100 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-[70rem] mx-auto bg-white">
        <Form onCalculateMortgage={calculateMortgage} onReset={resetValues} />
        {isMortgageCalculated ? (
          <CompletedResults mortgage={mortgage} />
        ) : (
          <EmptyResults />
        )}
      </div>
    </main>
  );
}

export default App;
