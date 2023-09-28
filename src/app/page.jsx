export const dynamic = 'force-dynamic';

import PromptCardsList from "./components/prompt_cards_list";
import PromptTextArea from "./components/prompt_register";

export default function Home() {
  return (
    <div className="h-screen flex flex-col bg-base-100 text-base-content">
      <main className="flex-grow p-4 text-base-content w-7/12 mx-auto">
        <PromptTextArea />
        <PromptCardsList />
      </main>
    </div>
  )
}
