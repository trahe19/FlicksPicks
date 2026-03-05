import './globals.css'
import { Orbitron, Oswald } from 'next/font/google'

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['500', '700'],
})

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['500', '700'],
})

export const metadata = {
  title: "FlicksPicks",
  description: "The Fantasy Film League Platform",

  icons: {
    icon: "/fp-icon.png",
  },

  openGraph: {
    title: "FlicksPicks",
    description: "The Fantasy Film League Platform",
    images: [
      {
        url: "https://flickspicks.com/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    images: ["https://flickspicks.com/og-image.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  )
}
