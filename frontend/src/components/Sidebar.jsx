import Image from "next/image";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export default function Sidebar({ form, currentStep }) {
  return (
    <aside className="relative overflow-hidden lg:w-72">
      {/* Desktop Sidebar */}
      <Image
        src={STRAPI_URL + form.sidebarimage.url}
        alt={form.sidebarimage.alternativeText}
        width={274}
        height={568}
        className="hidden h-full w-full rounded-xl object-cover lg:block"
      />

      {/* Mobile Sidebar */}
      <Image
        src={STRAPI_URL + form.sidebarimage2.url}
        alt={form.sidebarimage2.alternativeText}
        width={375}
        height={172}
        className="block h-44 w-full object-cover lg:hidden rounded-xl"
      />

      {/* Step Indicators */}
      <div className="absolute left-1/2 top-8 flex -translate-x-1/2 gap-4 lg:left-8 lg:top-8 lg:block lg:translate-x-0 lg:space-y-8">
        {form.steps.map((step) => (
          <div key={step.stepNumber} className="flex items-center gap-4">
            <div
              className={`flex h-9 w-9 items-center justify-center rounded-full border font-bold ${
                currentStep === Number(step.stepNumber)
                  ? "bg-sky-200 text-slate-900"
                  : "border-white text-white"
              }`}
            >
              {step.stepNumber}
            </div>

            <div className="hidden lg:block">
              <p className="text-xs uppercase text-blue-200">
                {step.stepLabel} {step.stepNumber}
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
