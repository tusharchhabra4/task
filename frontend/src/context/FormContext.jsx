"use client";

import { createContext, useContext, useState } from "react";

const FormContext = createContext();

export function FormProvider({ children }) {
  const [currentStep, setCurrentStep] = useState(1);
  const goToStep = (step) => {
    setCurrentStep(step);
  };

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 5));

  const previousStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const [formData, setFormData] = useState({});

  const [billing, setBilling] = useState("monthly");

  const [selectedPlan, setSelectedPlan] = useState(null);

  const [selectedAddons, setSelectedAddons] = useState([]);
  const toggleAddon = (addon) => {
    setSelectedAddons((prev) => {
      const exists = prev.find((item) => item.id === addon.id);

      if (exists) {
        return prev.filter((item) => item.id !== addon.id);
      }

      return [...prev, addon];
    });
  };

  return (
    <FormContext.Provider
      value={{
        currentStep,

        nextStep,
        previousStep,
        goToStep,

        formData,
        setFormData,

        billing,
        setBilling,

        selectedPlan,
        setSelectedPlan,

        selectedAddons,
        setSelectedAddons,
        toggleAddon,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export function useFormContext() {
  return useContext(FormContext);
}
