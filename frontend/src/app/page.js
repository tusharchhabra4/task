import { getForm } from "@/lib/getForm";
import MultiStepForm from "@/components/MultiStepForm";

export default async function Home() {
  const form = await getForm();

  return (
    <main className="min-h-screen bg-[#eef5ff] flex items-center justify-center p-4">
      <MultiStepForm form={form} />
    </main>
  );
}