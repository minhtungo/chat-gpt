import SideBar from '@/components/SideBar';
import './globals.css';
import { getServerSession } from 'next-auth';

import { authOptions } from '@/pages/api/auth/[...auth]';
import Login from '@/components/Login';
import SessionProvider from '@/components/SessionProvider';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang='en'>
      <head />
      <body className='flex'>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <>
              <div className='bg-[#0d0d0d] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]'>
                <SideBar />
              </div>
              <div className='flex-1 bg-[#1a1a1a]'>{children}</div>
            </>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
