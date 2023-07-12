import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from '../../components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sunfolio',
  description: "this is lasun's portfolio",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </head>
      <body  className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
