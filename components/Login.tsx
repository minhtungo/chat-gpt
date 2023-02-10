'use client';

import { signIn } from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc';
import Image from 'next/image';

const Login = () => {
  return (
    <div className='bg-black h-screen flex flex-col items-center justify-center text-center w-full text-gray-50'>
      <h2 className='text-3xl'>Chat GPT</h2>
      <button
        onClick={() => signIn('google')}
        className='font-semibold text-lg px-4 py-2 bg-gray-700/40 rounded-lg mt-6 hover:bg-gray-700/30 duration-200 transition-all ease-in-out flex flex-row items-center gap-2'
      >
        <FcGoogle /> Sign In with Google
      </button>
    </div>
  );
};
export default Login;
