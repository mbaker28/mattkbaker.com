import type { Metadata } from "next";
import "@/app/styles/globals.css";
import FloatContainer from "@/components/float-container";
import { ThemeProvider } from "next-themes";
import Script from "next/script";
import NavContainer from "../components/navigation/nav-container";

export const metadata: Metadata = {
  title: "Matthew Baker",
  description: "Matthew Baker's portfolio website",
};

const footerItems = [
  {
    title: 'GitHub',
    href: 'https://github.com/mbaker28',
    icon: 'fa fa-2x fa-github'
  },
  {
    title: 'LinkedIn',
    href: 'https://linkedin.com/in/matthew-baker94',
    icon: 'fa fa-2x fa-linkedin'
  },
  {
    title: 'Email',
    href: 'mailto:mattbakerk@gmail.com',
    icon: 'fa fa-2x fa-envelope'
  }
];

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
        <Script src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`} />
      </head>
      <body
        className={`antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <FloatContainer />
          <main className="wrap">
            <NavContainer />
            <div className="content">
              {children}
            </div>
          </main>
          <footer
            className="w-full text-center text-[1.6rem] leading-8 mb-4"
          >
            <section className="container flex flex-col">
              <div>
                <ul
                  className="list-none mt-12 mr-0 mb-4 mr-0 p-0"
                >
                  {footerItems.map((item) => {
                    return (
                      <li key={item.title} className="inline-block relative">
                        <a
                          href={item.href}
                          title={item.title}
                          className="text-[color:var(--fg-color)] uppercase ml-4 mr-4 text-[1.4rem] md:text-[1.6rem] hover:text-[color:var(--link-color)] focus:text-[color:var(--link-color)]"
                        >
                          <i className={item.icon}></i>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div>
                &copy; {new Date().getFullYear()} Matthew Baker
              </div>
            </section>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
