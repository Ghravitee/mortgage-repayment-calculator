import { useState } from "react";
import calculator from "../assets/images/icon-calculator.svg";

// eslint-disable-next-line react/prop-types
const Form = ({ onCalculateMortgage, onReset }) => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    mortgageAmount: "",
    mortgageTerm: "",
    interestRate: "",
    type: "",
  });

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const fields = ["mortgageAmount", "mortgageTerm", "interestRate", "type"];
      const nextField = fields[fields.indexOf(e.target.name) + 1];
      if (nextField) {
        document.getElementsByName(nextField)[0].focus();
      }
    }
  };

  function resetForm() {
    setFormData({
      mortgageAmount: "",
      mortgageTerm: "",
      interestRate: "",
      type: "",
    });
    setErrors({});
    onReset();
  }

  function validate() {
    const newErrors = {};
    if (!formData.mortgageAmount) {
      newErrors.mortgageAmount = "This field is required";
    }
    if (!formData.mortgageTerm) {
      newErrors.mortgageTerm = "This field is required";
    }
    if (!formData.interestRate) {
      newErrors.interestRate = "This field is required";
    }
    if (!formData.type) {
      newErrors.type = "This field is required";
    }
    return newErrors;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      onCalculateMortgage(
        formData.mortgageAmount,
        formData.mortgageTerm,
        formData.interestRate
      );
    }
  };

  function handleChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <div className="bg-white py-6 px-4 lg:px-8">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-Slate-900 text-[24px] font-bold">
          Mortgage Calculator
        </h1>
        <button
          id="reset"
          type="reset"
          className="text-Slate-700 underline"
          onClick={resetForm}
        >
          Clear All
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="text-Slate-700 font-semibold mb-4">
            Mortgage Amount
          </label>
          <div className="relative mt-1 rounded-md">
            <div className="absolute inset-y-0 left-[1px] flex items-center">
              <span
                className={`px-4 py-3 sm:py-[10px] focus:bg-Lime ${
                  errors.mortgageAmount
                    ? "text-white bg-Red"
                    : "text-Slate-700 bg-Slate-100"
                } font-bold rounded-l-md`}
              >
                €
              </span>
            </div>
            <input
              type="number"
              name="mortgageAmount"
              value={formData.mortgageAmount}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              className={`block w-full pl-12 p-3 sm:text-sm border text-Slate-900 font-bold main-700 focus:border-Lime ${
                errors.mortgageAmount ? "border-Red" : "border-Slate-500"
              } rounded-md focus:outline-none`}
            />
          </div>
          {errors.mortgageAmount && (
            <p className="text-Red">{errors.mortgageAmount}</p>
          )}
        </div>

        <div className="flex lg:flex-row flex-col justify-between">
          <div className="mb-4">
            <label className="text-Slate-700 font-semibold mb-4">
              Mortgage Term
            </label>
            <div className="relative mt-1 rounded-md">
              <div className="absolute inset-y-0 right-[1px] flex items-center">
                <span
                  className={`px-4 py-3 sm:py-[10px] ${
                    errors.mortgageTerm
                      ? "text-white bg-Red"
                      : "text-Slate-700 bg-Slate-100"
                  } font-bold rounded-r-md`}
                >
                  years
                </span>
              </div>
              <input
                type="number"
                name="mortgageTerm"
                value={formData.mortgageTerm}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                className={`block w-full pr-12 p-3 sm:text-sm border text-Slate-900 font-bold main-700 focus:border-Lime ${
                  errors.mortgageTerm ? "border-Red" : "border-Slate-500"
                } rounded-md focus:outline-none`}
              />
            </div>
            {errors.mortgageTerm && (
              <p className="text-Red">{errors.mortgageTerm}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="text-Slate-700 font-semibold mb-4">
              Interest Rate
            </label>
            <div className="relative mt-1 rounded-md">
              <div className="absolute inset-y-0 right-[1px] flex items-center">
                <span
                  className={`px-4 py-3 sm:py-[10px] ${
                    errors.interestRate
                      ? "text-white bg-Red"
                      : "text-Slate-700 bg-Slate-100"
                  } font-bold rounded-r-md`}
                >
                  %
                </span>
              </div>
              <input
                type="number"
                name="interestRate"
                value={formData.interestRate}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                className={`block w-full pr-12 p-3 sm:text-sm border text-Slate-900 font-bold main-700 focus:border-Lime ${
                  errors.interestRate ? "border-Red" : "border-Slate-500"
                } rounded-md focus:outline-none`}
              />
            </div>
            {errors.interestRate && (
              <p className="text-Red">{errors.interestRate}</p>
            )}
          </div>
        </div>

        <div className="mb-4">
          <label className="text-Slate-700 font-semibold mb-8">
            Mortgage Type
          </label>
          <div
            className={`flex items-center p-3 border ${
              formData.type === "repayment" ? "border-Lime" : "border-Slate-500"
            } rounded-md my-4 ${
              formData.type === "repayment" ? "bg-Lime/10" : "transparent"
            }`}
          >
            <div className="grid place-items-center">
              <input
                type="radio"
                name="type"
                value="repayment"
                checked={formData.type === "repayment"}
                onChange={handleChange}
                className={`cursor-pointer col-start-1 row-start-1 h-4 w-4 appearance-none rounded-full border-2 ${
                  formData.type === "repayment"
                    ? "border-Lime"
                    : "transparent border-Slate-900"
                }`}
              />
              <div
                className={`col-start-1 row-start-1 w-2 h-2 rounded-full ${
                  formData.type === "repayment" ? "bg-Lime" : "transparent"
                } `}
              />
            </div>
            <label className="ml-2 text-base font-bold text-Slate-900">
              Repayment
            </label>
          </div>

          <div
            className={`flex items-center p-3 border ${
              formData.type === "interest-only"
                ? "border-Lime"
                : "border-Slate-500"
            } rounded-md my-4 ${
              formData.type === "interest-only" ? "bg-Lime/10" : "transparent"
            }`}
          >
            <div className="grid place-items-center">
              <input
                type="radio"
                name="type"
                onChange={handleChange}
                value="interest-only"
                checked={formData.type === "interest-only"}
                className={`cursor-pointer col-start-1 row-start-1 h-4 w-4 appearance-none rounded-full border-2 ${
                  formData.type === "interest-only"
                    ? "border-Lime"
                    : "transparent border-Slate-900"
                }`}
              />
              <div
                className={`col-start-1 row-start-1 w-2 h-2 rounded-full ${
                  formData.type === "interest-only" ? "bg-Lime" : "transparent"
                } `}
              />
            </div>
            <label className="ml-2 text-base font-bold text-Slate-900">
              Interest Only
            </label>
          </div>
          {errors.type && <p className="text-Red">{errors.type}</p>}
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            className="w-full lg:w-[60%] p-3 bg-Lime hover:bg-Lime/50 rounded-full flex justify-center gap-2 items-center my-4"
          >
            <img src={calculator} alt="calculator" />
            <p className="text-Slate-900 font-bold">Calculate Repayments</p>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
