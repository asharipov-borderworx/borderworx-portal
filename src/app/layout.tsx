import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Chatbot from '@/components/Chatbot'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BorderWorx Logistics - Global Freight & Supply Chain Solutions',
  description: 'Professional logistics and freight forwarding services. We deliver your goods safely and efficiently worldwide with our comprehensive supply chain solutions.',
  keywords: 'logistics, freight forwarding, supply chain, shipping, cargo, transportation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
