import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast"
import SessionProvider from "@components/SessionProvider"
import { getServerSession } from 'next-auth'
import { authOptions } from "@config/authOptions"
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "UNI-LAB",
  description: "Your reliable Lab manager",
};

export default async function RootLayout({ children }) {

    const session = await getServerSession(authOptions)
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
      <SessionProvider session={session}>
        {children}
        <Toaster position={"top-right"} />
      </SessionProvider>
      </body>
    </html>
  )
}
