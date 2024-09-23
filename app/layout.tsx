import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  title: 'My Next.js App',
  description: 'Created with Next.js App Router using Inter font',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <header>
          {/* Add your header content here */}
        </header>
        <main>{children}</main>
        <footer>
          {/* Add your footer content here */}
        </footer>
      </body>
    </html>
  )
}