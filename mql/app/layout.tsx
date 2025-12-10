import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MQL — Proxy Gateway for AI API Providers",
  description:
    "Wrap OpenAI, Anthropic, and other LLM providers with usage limits, cost tracking, content filters, and team management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-neutral-50 text-neutral-900 bg-grain selection:bg-amber-200 selection:text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50 dark:selection:bg-amber-400 dark:selection:text-neutral-900 transition-colors duration-300 normal-case`}
      >
        {children}
      </body>
    </html>
  );
}
