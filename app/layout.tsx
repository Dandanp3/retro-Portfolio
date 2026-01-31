import React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Press_Start_2P } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geistSans = Geist({ subsets: ["latin"], variable: "--font-sans"})
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })
const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Daniel | Portfolio",
  description: "Portfolio pessoal de Daniel - Desenvolvedor Backend",
  icons: {
    icon: [
      {
        url: "/pokeball_ico.png"
      },
      {
        url: "/pokeball_ico.png"
      },
      {
        url: "/pokeball_ico.png"
      }
    ],
    apple: "/pokeball_ico.png"

  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} ${pressStart2P.variable} font-sans antialised`}>
        {children}
        <Analytics/>
      </body>
    </html>
  )
}


