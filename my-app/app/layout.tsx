import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Digilab — Bio-Acoustic Intelligence",
  description:
    "We decode bio-acoustic signals using proprietary neural networks to map, monitor, and protect ecosystem biodiversity in real-time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-neutral-50 text-neutral-900 bg-grain selection:bg-neutral-900 selection:text-white dark:bg-neutral-950 dark:text-neutral-50 dark:selection:bg-white dark:selection:text-neutral-900 transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
