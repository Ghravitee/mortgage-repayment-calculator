import img from "../assets/images/illustration-empty.svg";

export default function EmptyResults() {
  return (
    <article className="bg-Slate-900 text-white px-6 py-8 flex flex-col justify-center items-center lg:rounded-bl-[5rem] lg:rounded-r-[1rem]">
      <img src={img} alt="no results yet" />
      <h1 className="text-2xl font-bold mb-4">Results shown here</h1>
      <p className="text-center text-Slate-500">
        Complete the form and click “calculate repayments” to see what your
        monthly repayments would be.
      </p>
    </article>
  );
}
