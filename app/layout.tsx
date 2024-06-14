import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Roboto } from 'next/font/google'
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
 

export const metadata: Metadata = {
  title: "William Servaty",
  description: "William Servaty personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
