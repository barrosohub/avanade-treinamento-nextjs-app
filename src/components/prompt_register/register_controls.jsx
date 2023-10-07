'use client';

import { useState } from 'react';

import { CheckIcon } from "@heroicons/react/24/outline";

export default function RegisterControls(
    {createNewModelPrompt}
){

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); 
        createNewModelPrompt(title, content);
        setTitle('');
        setContent('');
    }

    return(
        <>
        <form onSubmit={handleSubmit} className='flex flex-col'>
         <input
          type="text"
          placeholder="Digite o título do prompt (ex: Novos Recursos do Typescript)"
          className="input input-bordered w-12/12 my-2 text-base placeholder-gray-500"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="textarea textarea-bordered my-2 textarea-md text-base placeholder-gray-500"
          placeholder="Digite o modelo de prompt (ex: Gere uma lista dos recursos mais novos do Typescript...)"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div className="flex justify-end">
          <button
            className="btn btn-primary normal-case font-normal text-base my-2"
            type='submit'
          >
            <CheckIcon className="h-5 w-5" /> Cadastrar Modelo
          </button>
        </div>
        </form>
        </>
    )
}
