import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HMPS KeuBank — Kabinet Vistara Dharma",
  description:
    "Vistara berarti luas dan berkembang, Dharma berarti kebenaran dan integritas. Kabinet Vistara Dharma HMPS KeuBank periode 2026.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Instrument+Serif&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex min-h-full flex-col bg-[#070d1f] text-slate-100">
        {children}
      </body>
    </html>
  );
}
