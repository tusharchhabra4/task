"use client";

import Navigation from "../Navigation";
import { useFormContext } from "@/context/FormContext";

export default function AddonStep({ step, navigation, form }) {
  const {
    billing,
    selectedAddons,
    toggleAddon,
    nextStep,
    previousStep,
  } = useFormContext();

  function submit(e) {
    e.preventDefault();
    nextStep();
  }

  return (
    <form onSubmit={submit} className="mt-10">
      <div className="space-y-4">
        {step.addons.map((addon) => {
          const checked = selectedAddons.some(
            (item) => item.id === addon.id
          );

          const price =
            billing === "monthly"
              ? addon.MonthlyPrice
              : addon.YearlyPrice;

          const suffix =
            billing === "monthly"
              ? form.monthlyPriceSuffix
              : form.yearlyPriceSuffix;

          return (
            <button
              key={addon.id}
              type="button"
              onClick={() => toggleAddon(addon)}
              className={`flex w-full items-center justify-between rounded-xl border p-5 transition

              ${
                checked
                  ? "border-blue-600 bg-blue-50"
                  : "border-slate-300 hover:border-blue-600"
              }`}
            >
              <div className="flex items-center gap-4">
                <input
                  type="checkbox"
                  checked={checked}
                  readOnly
                  className="h-5 w-5"
                />

                <div className="text-left">
                  <h3 className="font-semibold text-blue-950">
                    {addon.title}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {addon.description}
                  </p>
                </div>
              </div>

              <span className="text-sm font-medium text-purple-600">
                +${price}
                {suffix}
              </span>
            </button>
          );
        })}
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