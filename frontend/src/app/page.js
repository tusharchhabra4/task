import { getForm } from "@/lib/getForm";
import MultiStepForm from "@/components/MultiStepForm";

export default async function Home() {
  const form = await getForm();

  return (
    <main className="min-h-screen bg-[#eef5ff] lg:flex lg:items-center lg:justify-center lg:p-6">
      <MultiStepForm form={form} />
    </main>
  );
}
