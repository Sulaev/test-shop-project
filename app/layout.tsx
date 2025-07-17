'use client'

import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AnimatePresence mode="wait">
          <div key={pathname} className="relative">
            <header className="absolute top-4 left-1/2 -translate-x-1/2 z-30">
              <div className="
                px-6 py-2 rounded-xl
                backdrop-blur-md
                bg-white/10
                border border-white/30
                shadow-lg
                transition-all duration-500
              ">
                <h1 className={`
                  text-xl md:text-2xl font-bold tracking-widest
                  bg-gradient-to-r from-gray-300 to-white
                  text-transparent bg-clip-text
                  drop-shadow-sm
                `}>
                  TEST-SHOP
                </h1>
              </div>
            </header>
            {children}
          </div>
        </AnimatePresence>
      </body>
    </html>
  )
}
