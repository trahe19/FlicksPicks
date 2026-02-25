import './globals.css'
import { Bebas_Neue, Anton } from 'next/font/google'

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bebas',
})

const anton = Anton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-anton',
})

export const metadata = {
  title: "FlicksPicks",
  description: "The World's First Fantasy Film League Platform.",
  icons: {
    icon: [{ url: "/fp-icon.png", sizes: "32x32", type: "image/png" }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${bebas.variable} ${anton.variable} bg-black text-white`}>
        {children}
      </body>
    </html>
  )
}
