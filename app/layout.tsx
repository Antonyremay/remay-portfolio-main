import type React from "react"
import type { Metadata } from "next"
import { Work_Sans, Open_Sans } from "next/font/google"
import "./globals.css"

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
})

export const metadata: Metadata = {
  title: "Antony Remane - Computer Science Portfolio",
  description:
    "Computer Science graduate from Stella Mary's College - showcasing projects, technical skills, and hands-on experience in data science, data analytics, and software development",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${workSans.variable} ${openSans.variable} antialiased`}>
      <body>{children}</body>
    </html>
  )
}
