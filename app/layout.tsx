import './globals.css'
import { EB_Garamond } from 'next/font/google'

const ebGaramond = EB_Garamond({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-eb-garamond',
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata = {
  title: 'Channdavel',
  description: 'Channdavel&apos;s personal website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={ebGaramond.variable}>
      <body className="font-eb-garamond">
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