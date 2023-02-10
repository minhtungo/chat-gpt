'use client';

import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import { useSession } from 'next-auth/react';
import { useState } from 'react';

type Props = {
  chatId: string;
};

const ChatInput = ({ chatId }: Props) => {
  const [prompt, setPrompt] = useState('');
  const { data: session } = useSession();

  return (
    <div className='bg-gray-700/30 text-gray-400 rounded-lg text-sm'>
      <form action='' className='p-4 space-x-5 flex'>
        <input
          className='bg-transparent focus:outline-none flex-1 disabled:cursor-not-allowed disabled:opacity-50'
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          type='text'
          placeholder='Type your message here...'
          disabled={!session}
        />
        <button
          type='submit'
          disabled={!prompt || !session}
          className='cursor-pointer disabled:cursor-not-allowed disabled:opacity-50'
        >
          <PaperAirplaneIcon className='h-5 w-5 -rotate-45 hover:text-blue-500' />
        </button>
      </form>
      <div></div>
    </div>
  );
};
export default ChatInput;
