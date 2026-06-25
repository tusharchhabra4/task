import Image from "next/image";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export default function Sidebar({ form, currentStep }) {
  return (
    <aside className="relative overflow-hidden rounded-xl lg:w-72">
      <Image
        src={STRAPI_URL + form.sidebarimage.url}
        alt={form.sidebarimage.alternativeText}
        width={274}
        height={568}
        className="h-full w-full object-cover"
      />

      <div className="absolute left-8 top-8 space-y-8">
        {form.steps.map((step) => (
          <div key={step.stepNumber} className="flex items-center gap-4">
            <div
              className={`flex h-9 w-9 items-center justify-center rounded-full border font-bold
                ${
                  currentStep === Number(step.stepNumber)
                    ? "bg-sky-200 text-slate-900"
                    : "border-white text-white"
                }`}
            >
              {step.stepNumber}
            </div>

            <div className="hidden lg:block">
              <p className="text-xs uppercase text-blue-200">
                Step {step.stepNumber}
              </p>

              <p className="text-sm font-bold tracking-wider text-white">
                {step.sidebarTitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}