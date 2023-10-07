import PromptCard from "./prompt_card";

import { getPromptList } from "./actions";

export default async function PromptCardsList() {

  const prompts = await getPromptList();
 
  return (
    <div className="mb-20">
      <h2 className="text-xl mt-8 mb-4">Meus Prompts</h2>
      <div className="grid grid-cols-2 gap-4">
        {
          prompts.length > 0 ? prompts.map((prompt) => (
            <PromptCard
              key={prompt.id}
              id={prompt.id}
              title={prompt.title}
              content={prompt.content}
            />
          )) : (
            <p className="text-sm text-gray-500">Nenhum prompt encontrado.</p>
          )
        }
      </div>
    </div>
  );
}
