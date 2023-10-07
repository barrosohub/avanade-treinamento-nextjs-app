import { currentYear } from "@/utils/utils";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full p-4 shadow-xl bg-base-100 text-base-content text-center text-sm">
      &copy; Prompt Manager {currentYear}. Todos os direitos reservados.
    </footer>
  );
}
