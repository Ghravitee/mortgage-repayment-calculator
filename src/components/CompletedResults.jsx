/* eslint-disable react/prop-types */
export default function CompletedResults({ mortgage }) {
  return (
    <article className="bg-Slate-900 text-white px-6 lg:px-10 py-8 flex flex-col main-500 lg:rounded-bl-[5rem] lg:rounded-r-[1rem]">
      <h1 className="text-2xl main-700 mb-4">Your Results</h1>
      <p className="text-left text-Slate-500 font-semibold text-[1.1rem]">
        Your results are shown based on the information you provided. To adjust
        the results, edit the form and click &quot;calculate repayments&quot;
        again.
      </p>

      <div className="bg-[hsl(201,56%,11%)] border-t-4 border-t-Lime rounded-md mt-4 p-4">
        <h3 className="t font-semibold mb-2 text-Slate-500">
          Your monthly repayments
        </h3>
        <p className="text-Lime text-[3rem] main-700">
          €{mortgage.monthlyPayment}
        </p>

        <hr className="h-[1px] w-full bg-Slate-900 my-4" />

        <h2 className="mt-6 mb-2 text-Slate-300">
          Total you&apos;ll repay over the term
        </h2>
        <p className="text-white text-2xl font-semibold">
          €{mortgage.totalRepayment}
        </p>
      </div>
    </article>
  );
}
