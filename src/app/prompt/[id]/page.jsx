"use client";

import { useState, useEffect } from "react";
import { CheckIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { editModelPrompt } from "@/app/prompt/[id]/actions";

async function fetchPromptById(id) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL_BASE}/api/prompt/${id}`
  );
  const promptData = await response.json();
  return promptData || null;
}

export default function SinglePromptPage({ params }) {
  const [titleEdit, setTitleEdit] = useState("");
  const [contentEdit, setContentEdit] = useState("");
  const [promptData, setPromptData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    fetchPromptById(params?.id).then((data) => {
      setPromptData(data);
      setTitleEdit(data?.title || "");
      setContentEdit(data?.content || "");
    });
  }, [params.id]); 

  const handleUpdatePrompt = async () => {
    editModelPrompt(titleEdit, contentEdit, promptData.id);
    router.push("/");
  };

  return (
    <main className="flex-grow p-4 text-base-content w-7/12 mx-auto">
      <div className="bg-base-200 p-4 rounded-2xl">
        <Link className="flex items-center text-accent text-sm py-2" href="/">
          <ArrowLeftIcon className="h-4 w-4" /> Voltar
        </Link>

        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <label htmlFor="promptTitle" className="label">
              <span className="label-text text-base">
                Edite abaixo seu modelo de prompt
              </span>
            </label>
          </div>

          <input
            id="promptTitle"
            type="text"
            placeholder="Digite o título do prompt (ex: Novos Recursos do Typescript)"
            className="input input-bordered w-12/12 my-2 text-base"
            value={titleEdit}
            onChange={(e) => setTitleEdit(e.target.value)}
          />

          <textarea
            className="textarea textarea-bordered my-2 textarea-md text-base"
            placeholder="Digite o modelo de prompt (ex: Gere uma lista dos recursos mais novos do Typescript...)"
            value={contentEdit}
            onChange={(e) => setContentEdit(e.target.value)}
          />

          <div className="flex justify-end">
            <button
              className="btn btn-primary normal-case font-normal text-base my-2"
              onClick={handleUpdatePrompt}
            >
              <CheckIcon className="h-5 w-5" /> Atualizar Modelo
            </button>
          </div>
        </div>        
      </div>
    </main>
  );
}
