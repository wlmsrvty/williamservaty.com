import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Roboto } from 'next/font/google'
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
 

export const metadata: Metadata = {
  title: "Servaty",
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
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
