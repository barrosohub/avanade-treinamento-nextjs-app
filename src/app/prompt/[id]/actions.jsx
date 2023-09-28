'use server'

import { revalidatePath, revalidateTag } from "next/cache";

export async function editModelPrompt(title, content, id) {
   const response = await fetch(`${process.env.NEXT_PUBLIC_URL_BASE}/api/prompt`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        title,
        content,
      }),
    });
    const promptData = await response.json();
    revalidateTag('prompt');
    revalidatePath('/');
    return promptData || null;
  }