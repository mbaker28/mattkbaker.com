import type { Metadata } from "next";
import "@/app/styles/globals.css";
import FloatContainer from "@/app/ui/float-container";
import { ThemeProvider } from "next-themes";
import Script from "next/script";
import NavContainer from "./ui/navigation/nav-container";

export const metadata: Metadata = {
  title: "Matthew Baker",
  description: "Matthew Baker's portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 128 128%22><text y=%221.2em%22 font-size=%2296%22>⚫️</text></svg>" />
        <Script src="https://kit.fontawesome.com/2736e4c60a.js" crossOrigin="anonymous" />
      </head>
      <body
        className={`antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <FloatContainer />
          <main className="wrap">
            <NavContainer />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
