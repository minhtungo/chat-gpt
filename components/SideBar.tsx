'use client';

import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import NewChat from './NewChat';

const SideBar = () => {
  const { data: session } = useSession();
  return (
    <div className='p-2 flex flex-col h-screen'>
      <div className='flex-1'>
        <div>
          <NewChat />
        </div>
      </div>
      {session && (
        <div className='flex justify-between w-full mx-auto items-center'>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={session.user?.image!}
            alt='Profile picture'
            className='rounded-full h-8 w-8 cursor-pointer hover:opacity-75'
          />
          <div
            onClick={() => signOut()}
            className='flex flex-row items-center mx-auto mb-2 gap-2 px-4 py-2 bg-gray-700/30 rounded-lg cursor-pointer hover:bg-gray-700/20'
          >
            <span className='text-gray-50'>Log out</span>
          </div>
        </div>
      )}
    </div>
  );
};
export default SideBar;
