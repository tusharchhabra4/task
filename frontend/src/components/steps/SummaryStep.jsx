"use client";

import Navigation from "../Navigation";
import { useFormContext } from "@/context/FormContext";

export default function SummaryStep({ navigation, form }) {
  const {
  billing,
  selectedPlan,
  selectedAddons,
  previousStep,
  nextStep,
  goToStep,
} = useFormContext();

  if (!selectedPlan) return null;

  const planPrice =
    billing === "monthly"
      ? selectedPlan.MonthlyPrice
      : selectedPlan.YearlyPrice;

  const addonsTotal = selectedAddons.reduce((total, addon) => {
    return (
      total +
      (billing === "monthly"
        ? addon.MonthlyPrice
        : addon.YearlyPrice)
    );
  }, 0);

  const total = planPrice + addonsTotal;

  const suffix =
    billing === "monthly"
      ? form.monthlyPriceSuffix
      : form.yearlyPriceSuffix;

  const totalLabel =
    billing === "monthly"
      ? form.monthlySuffix
      : form.yearlySuffix;

  function confirm(e) {
    e.preventDefault();
    nextStep();
  }

  return (
    <form onSubmit={confirm} className="mt-10">
      <div className="rounded-xl bg-slate-100 p-6">
        {/* Selected Plan */}

        <div className="flex items-center justify-between border-b pb-6">
          <div>
            <h3 className="font-bold text-blue-950">
              {selectedPlan.title} (
              {billing === "monthly"
                ? form.monthlyLabel
                : form.yearlyLabel}
              )
            </h3>

            <button
              type="button"
              onClick={() => goToStep(2)}
              className="mt-1 text-sm text-slate-500 underline"
            >
              {navigation.changeText}
            </button>
          </div>

          <p className="font-bold text-blue-950">
            ${planPrice}
            {suffix}
          </p>
        </div>

        {/* Addons */}

        <div className="mt-5 space-y-4">
          {selectedAddons.map((addon) => {
            const addonPrice =
              billing === "monthly"
                ? addon.MonthlyPrice
                : addon.YearlyPrice;

            return (
              <div
                key={addon.id}
                className="flex justify-between"
              >
                <p className="text-slate-500">
                  {addon.title}
                </p>

                <p className="text-blue-950">
                  +${addonPrice}
                  {suffix}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Total */}

      <div className="mt-8 flex items-center justify-between px-6">
        <p className="text-slate-500">
          {form.totalLabel} ({totalLabel})
        </p>

        <p className="text-2xl font-bold text-purple-600">
          +${total}
          {suffix}
        </p>
      </div>

      <Navigation
        navigation={navigation}
        onBack={previousStep}
        onNext={() => {}}
        onConfirm={confirm}
      />
    </form>
  );
}