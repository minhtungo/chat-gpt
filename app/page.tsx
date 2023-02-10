import { BoltIcon, SunIcon } from '@heroicons/react/24/outline';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className='text-gray-50 flex flex-col items-center justify-center h-screen px-2'>
      <h1 className='text-5xl font-bold mb-20'>ChatGPT</h1>

      <div className='flex space-x-2 text-center'>
        <div>
          <div className='flex flex-col items-center justify-center mb-5'>
            <SunIcon className='h-8 w-8 text-yellow-600' />
            <h2>Examples</h2>
          </div>
          <div className='space-y-2'>
            <p className='infoText'>Explain something to me</p>
            <p className='infoText'>Write me a resume</p>
            <p className='infoText'>What is JavaScript?</p>
          </div>
        </div>

        <div>
          <div className='flex flex-col items-center justify-center mb-5'>
            <BoltIcon className='h-8 w-8 text-yellow-600' />
            <h2>Capabilities</h2>
          </div>
          <div className='space-y-2'>
            <p className='infoText'>Explain something to me</p>
            <p className='infoText'>Write me a resume</p>
            <p className='infoText'>What is JavaScript?</p>
          </div>
        </div>

        <div>
          <div className='flex flex-col items-center justify-center mb-5'>
            <SunIcon className='h-8 w-8 text-yellow-600' />
            <h2>Limitations</h2>
          </div>
          <div className='space-y-2'>
            <p className='infoText'>May generate incorrect information</p>
            <p className='infoText'>Write me a resume</p>
            <p className='infoText'>What is JavaScript?</p>
          </div>
        </div>
      </div>
    </main>
  );
}
