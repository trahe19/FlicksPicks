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
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
}
    export const metadata = {
  icons: {
    icon: "/icon.png",
    apple: "/apple-touch-icon.png",
  },
};
  )
}
