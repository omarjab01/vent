import './globals.css'
import { Inter } from 'next/font/google'
import Sidebar from '@/app/components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='flex flex-row w-screen h-screen bg-black p-4 gap-4'>
          <Sidebar />
          <main className='w-full h-full rounded-xl text-white flex flex-col justify-center items-center'>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
