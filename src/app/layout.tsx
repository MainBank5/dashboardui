import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar/navbar";
import ModeToggle from "@/components/theme/Themeswitcher";
import { ThemeProvider } from "@/components/theme/Themeprovider";
const fontSans = FontSans({ subsets: ["latin"], variable:"--font-sans", });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('font-sans antialiased flex', fontSans.variable)}>
        <ThemeProvider 
         attribute="class"
         defaultTheme="system"
         enableSystem
         disableTransitionOnChange
        >
        <nav><Navbar/></nav>
        <main className="relative w-full">
          <div className="pt-6">
            <div className="absolute right-0"><ModeToggle/></div>
            {children}
          </div>
        </main>
        </ThemeProvider>
      </body>
    </html>
  );
}




