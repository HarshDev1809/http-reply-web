import type { Metadata } from "next";
import { Ubuntu, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "http-reply | Standardized HTTP responses for Node.js",
  description: "A lightweight, flexible Node.js utility for standardizing HTTP responses in Express, Fastify, or custom server frameworks.",
  keywords: [
    "http-reply",
    "Node.js",
    "Express",
    "Fastify",
    "HTTP responses",
    "standardized API",
    "JSON response",
    "API development",
    "npm package",
    "Harsh Dev",
  ],
  authors: [{ name: "Harsh Dev" }],
  openGraph: {
    title: "http-reply | Standardized HTTP responses for Node.js",
    description: "Standardize your Node.js API responses with ease.",
    url: "https://http-reply.devbydev.in", // Adjust if needed
    siteName: "http-reply",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "http-reply | Standardized HTTP responses for Node.js",
    description: "Standardize your Node.js API responses with ease.",
    creator: "@HarshDev1809",
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
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${ubuntu.variable} ${geistMono.variable} min-h-screen bg-background font-sans antialiased`}
      >
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
