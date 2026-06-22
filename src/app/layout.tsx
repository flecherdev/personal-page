import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ezequiel Freire — Full Stack Engineer",
    template: "%s | Ezequiel Freire"
  },
  description: "Full Stack Engineer especializado en React, Next.js, Node.js, PostgreSQL e iOS. Construyo productos digitales end-to-end.",
  openGraph: {
    title: "Ezequiel Freire — Full Stack Engineer",
    description: "Full Stack Engineer especializado en React, Next.js, Node.js, PostgreSQL e iOS.",
    url: "https://personal-page-peach-zeta.vercel.app",
    siteName: "Ezequiel Freire",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ezequiel Freire — Full Stack Engineer",
    description: "Full Stack Engineer especializado en React, Next.js, Node.js, PostgreSQL e iOS.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

      </body>
    </html>
  );
}
