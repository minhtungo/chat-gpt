import SideBar from '@/components/SideBar';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head />
      <body className='flex'>
        <div className='bg-[#0d0d0d] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]'>
          <SideBar />
        </div>
        <div className='flex-1 bg-[#1a1a1a]'>{children}</div>
      </body>
    </html>
  );
}
