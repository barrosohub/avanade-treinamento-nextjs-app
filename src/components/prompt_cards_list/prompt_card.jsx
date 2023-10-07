'use client';

import Link from "next/link";
import {
  ClipboardDocumentIcon,
  PencilSquareIcon,
  TrashIcon,
  ShieldExclamationIcon,
} from "@heroicons/react/24/outline";

import { textLimiter, toastDefaultTimeoutInMS } from "@/utils/utils";
import { useCallback, useState, useRef, useEffect } from "react";
import { deletePrompt } from "@/components/prompt_cards_list/actions";

const Toaster = ({title}) => {
  return (
    <div className="toast toast-top">
      <div className="alert alert-success">
        <span>Prompt <b>{title}</b> foi deletado com sucesso!</span>
      </div>
    </div>
  );
};

export default function PromptCard({ id, title, content }) {
  const [copyMsg, setCopyMsg] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [toaster, setToaster] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCopyContent = useCallback(() => {
    setCopyMsg("Copiado!");
    navigator.clipboard.writeText(content);
    setTimeout(() => {
      setCopyMsg(null);
    }, 2000);
  }, [content]);

   async function handleDeletePrompt(id) {
    deletePrompt(id);
    setIsOpen(false);
    setToaster(true);
    setTimeout(() => {
      setToaster(false);
    }, toastDefaultTimeoutInMS);
 
  }

  const LIMITER_PROMPT_CONTENT = 130;

  return (
    <div key={id} className="card bg-base-200">
      <div className="card-body">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="my-2 text-gray-500">
          {textLimiter(content, LIMITER_PROMPT_CONTENT)}
        </p>
        <div className="flex justify-between items-end card-actions m-0">
          <div
            className="tooltip tooltip-right"
            data-tip={copyMsg ? "Copiado!" : "Copiar"}
            onClick={handleCopyContent}
          >
            <button className="btn btn-secondary btn-outline btn-sm btn-square">
              <ClipboardDocumentIcon className="h-5 w-5" />
            </button>
          </div>
          <div className="flex gap-2">
            <div className="tooltip tooltip-top" data-tip="Editar">
              <Link
                className="btn btn-success btn-outline btn-sm btn-square"
                href={`/prompt/${id}`}
              >
                <PencilSquareIcon className="h-5 w-5" />
              </Link>
            </div>
            <div className="tooltip tooltip-top" data-tip="Excluir" ref={ref}>
              <div className="dropdown">
                <button
                  className="btn btn-error btn-outline btn-sm btn-square"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <TrashIcon className="h-5 w-5" />
                </button>
                {isOpen && (
                  <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                      <button
                        onClick={() => {
                          handleDeletePrompt(id);
                        }}
                      >
                        <ShieldExclamationIcon className="h-5 w-5 text-error" />{" "}
                        Confirmar exclusão
                      </button>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {toaster && <Toaster title={title} />}
    </div>
  );
}
