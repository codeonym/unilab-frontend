import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "UNI-LAB",
  description: "Your reliable Lab manager",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        {children}
        
        <Toaster position={"top-right"} />
      </body>
    </html>
  )
}
