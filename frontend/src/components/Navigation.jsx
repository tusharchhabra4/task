"use client";

import { useFormContext } from "@/context/FormContext";

export default function Navigation({
  navigation,
  onBack,
  onNext,
  onConfirm,
}) {
  const { currentStep } = useFormContext();

  const totalSteps = 4;

  return (
    <div className="mt-12 flex items-center justify-between">
      {/* Previous Button */}
      {currentStep > 1 ? (
        <button
          type="button"
          onClick={onBack}
          className="font-medium text-slate-500 transition hover:text-blue-950"
        >
          {navigation.previousText}
        </button>
      ) : (
        <div />
      )}

      {/* Next / Confirm */}
      {currentStep === totalSteps ? (
        <button
          type="button"
          onClick={onConfirm}
          className="rounded-lg bg-purple-600 px-6 py-3 font-medium text-white transition hover:bg-purple-500"
        >
          {navigation.confirmText}
        </button>
      ) : (
        <button
          type="submit"
          onClick={onNext}
          className="rounded-lg bg-blue-950 px-6 py-3 font-medium text-white transition hover:bg-blue-900"
        >
          {navigation.nextText}
        </button>
      )}
    </div>
  );
}