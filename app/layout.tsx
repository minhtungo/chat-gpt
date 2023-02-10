import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head />
      <body className='flex bg-[#1a1a1a] '>
        <div className='flex-1'>{children}</div>
      </body>
    </html>
  );
}
