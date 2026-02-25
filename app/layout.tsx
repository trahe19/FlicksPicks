import './globals.css'
import { Plaster, Monoton } from 'next/font/google'

const plaster = Plaster({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-plaster'
})

const monoton = Monoton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-monoton'
})

export const metadata = {
  title: "FlicksPicks",
  description: "The World's First Fantasy Film League Platform.",
  icons: {
    icon: '/fp-logo.png', // replace after upload
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${plaster.variable} ${monoton.variable} bg-black text-white`}>
        {children}
      </body>
    </html>
  )
}
