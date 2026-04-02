import React from 'react'
import './globals.css'
import { ThemeProvider } from 'next-themes'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <main>
            <div className="container py-20">{children}</div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
