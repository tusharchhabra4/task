"use client";

import Sidebar from "./Sidebar";

import PersonalStep from "./steps/PersonalStep";
import PlanStep from "./steps/PlanStep";

import { FormProvider, useFormContext } from "@/context/FormContext";
import AddonStep from "./steps/AddonStep";
import SummaryStep from "./steps/SummaryStep";

function FormContent({ form }) {
  const { currentStep } = useFormContext();

  return (
    <div className="w-full max-w-6xl rounded-2xl bg-white p-4 shadow-xl lg:flex">
      {/* Sidebar */}
      <Sidebar form={form} currentStep={currentStep} />

      {/* Main Content */}
      <section className="flex flex-1 flex-col px-8 py-10">
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-blue-950">
            {form.steps[currentStep - 1].title}
          </h1>

          <p className="mt-2 text-slate-500">
            {form.steps[currentStep - 1].subtitle}
          </p>

          <div className="mt-10">
            {currentStep === 1 && (
              <PersonalStep step={form.steps[0]} navigation={form.navigation} />
            )}

            {currentStep === 2 && (
              <PlanStep
                step={form.steps[1]}
                navigation={form.navigation}
                form={form}
              />
            )}

            {currentStep === 3 && (
              <AddonStep
                step={form.steps[2]}
                navigation={form.navigation}
                form={form}
              />
            )}

            {currentStep === 4 && (
  <SummaryStep
    navigation={form.navigation}
    form={form}
  />
)}

            {/* Step 5 */}
            {currentStep === 5 && (
              <div className="mt-10 text-center text-slate-500">
                Success Step Coming Next...
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default function MultiStepForm({ form }) {
  return (
    <FormProvider>
      <FormContent form={form} />
    </FormProvider>
  );
}
