import { revalidatePath } from "next/cache";
import RegisterControls from "./register_controls";

export async function createNewModelPrompt(title, content) {
  "use server";
  const fetchPrompt = await fetch(
    `${process.env.NEXT_PUBLIC_URL_BASE}/api/prompt`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
      }),
    }
  );
  const prompt = await fetchPrompt.json();
  revalidatePath("/");
  return prompt;
}

export default async function PromptTextArea() {
  return (
    <div className="bg-base-200 p-4 rounded-2xl">
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <label className="label">
            <span className="label-text text-base">
              Crie abaixo seu modelo de prompt
            </span>
          </label>
        </div>
        <RegisterControls createNewModelPrompt={createNewModelPrompt} />
      </div>
    </div>
  );
}
