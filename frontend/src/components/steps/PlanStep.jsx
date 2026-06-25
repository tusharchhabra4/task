"use client";

import Navigation from "../Navigation";
import { useFormContext } from "@/context/FormContext";

export default function PlanStep({ step, navigation, form }) {
  const {
    billing,
    setBilling,
    selectedPlan,
    setSelectedPlan,
    nextStep,
    previousStep,
  } = useFormContext();

  function submit(e) {
    e.preventDefault();

    if (!selectedPlan) {
      return;
    }

    nextStep();
  }

  return (
    <form onSubmit={submit} className="mt-10">
      {/* Plans */}
      <div className="grid gap-4 md:grid-cols-3">
        {step.plans.map((plan) => {
          const isSelected = selectedPlan?.id === plan.id;

          const price =
            billing === "monthly"
              ? plan.MonthlyPrice
              : plan.YearlyPrice;

          const suffix =
            billing === "monthly"
              ? form.monthlyPriceSuffix
              : form.yearlyPriceSuffix;

          return (
            <button
              key={plan.id}
              type="button"
              onClick={() => setSelectedPlan(plan)}
              className={`rounded-xl border p-4 text-left transition-all duration-200

              ${
                isSelected
                  ? "border-blue-600 bg-blue-50"
                  : "border-slate-300 hover:border-blue-600"
              }`}
            >
              <img
                src={
                  process.env.NEXT_PUBLIC_STRAPI_URL +
                  plan.icon.url
                }
                alt={plan.title}
                className="mb-12 h-10 w-10"
              />

              <h3 className="font-bold text-blue-950">
                {plan.title}
              </h3>

              <p className="mt-1 text-slate-500">
                ${price}
                {suffix}
              </p>

              {billing === "yearly" && (
                <p className="mt-2 text-sm text-blue-950">
                  {plan.OfferText}
                </p>
              )}
            </button>
          );
        })}
      </div>

      {/* Billing Toggle */}

      <div className="mt-8 flex items-center justify-center gap-6 rounded-xl bg-slate-100 py-4">
        <span
          className={`font-medium transition

          ${
            billing === "monthly"
              ? "text-blue-950"
              : "text-slate-500"
          }`}
        >
          {form.monthlyLabel}
        </span>

        <button
          type="button"
          onClick={() =>
            setBilling((prev) =>
              prev === "monthly" ? "yearly" : "monthly"
            )
          }
          className="relative h-6 w-12 rounded-full bg-blue-950"
        >
          <div
            className={`absolute top-1 h-4 w-4 rounded-full bg-white transition-all duration-300

            ${
              billing === "monthly"
                ? "left-1"
                : "left-7"
            }`}
          />
        </button>

        <span
          className={`font-medium transition

          ${
            billing === "yearly"
              ? "text-blue-950"
              : "text-slate-500"
          }`}
        >
          {form.yearlyLabel}
        </span>
      </div>

      <Navigation
        navigation={navigation}
        onBack={previousStep}
        onNext={submit}
        onConfirm={() => {}}
      />
    </form>
  );
}