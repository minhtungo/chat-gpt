'use client';

import { db } from '@/firebase';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import { FormEvent, useState } from 'react';
import { toast } from 'react-hot-toast';

type Props = {
  chatId: string;
};

const ChatInput = ({ chatId }: Props) => {
  const [prompt, setPrompt] = useState('');
  const { data: session } = useSession();

  const model = 'davinci';

  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!prompt) return;

    const input = prompt.trim();
    setPrompt('');

    const message: Message = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avatar:
          session?.user?.image! ||
          `https://ui-avatars.com/api/?name=${session?.user?.name}`,
      },
    };

    await addDoc(
      collection(
        db,
        'users',
        session?.user?.email!,
        'chats',
        chatId,
        'messages'
      ),
      message
    );

    const notification = toast.loading('ChatGPT is thinking...');

    await fetch('/api/askQuestion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: input,
        chatId,
        model,
        session,
      }),
    });

    toast.success('Chat GPT has responded!', {
      id: notification,
    });
  };

  return (
    <div className='bg-gray-700/30 text-gray-400 rounded-lg text-sm'>
      <form onSubmit={sendMessage} action='' className='p-4 space-x-5 flex'>
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