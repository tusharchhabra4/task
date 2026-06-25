"use client";

import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { generateSchema } from "@/lib/validation";
import { useFormContext } from "@/context/FormContext";

import Navigation from "../Navigation";

export default function PersonalStep({ step, navigation }) {
  const {
    formData,
    setFormData,
    nextStep,
} = useFormContext();

  const schema = useMemo(
    () => generateSchema(step.fields),
    [step.fields]
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: formData,
  });

  function submit(data) {
  setFormData(data);
  nextStep();
}

  return (
    <form onSubmit={handleSubmit(submit)} className="mt-10">
      <div className="space-y-6">
        {step.fields.map((field) => (
          <div key={field.id}>
            <div className="mb-2 flex items-center justify-between">
              <label
                htmlFor={field.name}
                className="text-sm font-medium text-blue-950"
              >
                {field.label}
              </label>

              {errors[field.name] && (
                <span className="text-sm font-medium text-red-500">
                  {errors[field.name].message}
                </span>
              )}
            </div>

            <input
              id={field.name}
              type={field.type === "phone" ? "tel" : field.type}
              placeholder={field.placeholder}
              {...register(field.name)}
              className={`w-full rounded-lg border px-4 py-3 text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 ${
                errors[field.name]
                  ? "border-red-500"
                  : "border-slate-300 focus:border-blue-600"
              }`}
            />
          </div>
        ))}
      </div>

      <Navigation
    navigation={navigation}
    onBack={() => {}}
    onNext={handleSubmit(submit)}
    onConfirm={() => {}}
/>
    </form>
  );
}