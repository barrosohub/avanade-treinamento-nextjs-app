"use server";

import { revalidatePath, revalidateTag } from "next/cache";

export async function deletePrompt(id) {
    const fetchPrompt = await fetch(`${process.env.NEXT_PUBLIC_URL_BASE}/api/prompt`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    });
    
    const prompt = await fetchPrompt.json() ;    
    revalidateTag('prompt');
    revalidatePath('/');
    return prompt;
  }

  export async function getPromptList() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL_BASE}/api/prompt`, {
      next: {
       tags: ["prompt"],
      },
    });
    const promptList = await response.json();
    return promptList.reverse();
}