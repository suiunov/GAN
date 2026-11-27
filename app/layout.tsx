import type { Metadata } from "next";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LineFloating from "@/components/LineFloating";

export const metadata: Metadata = {
  title: "Mosaic Atelier · 馬賽克工藝坊",
  description: "Handmade mosaic art in Taiwan · 台灣手工馬賽克藝術",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&family=Inter:wght@400;500;600&family=Noto+Sans+TC:wght@400;500;700&family=Noto+Serif+TC:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <I18nProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <LineFloating />
        </I18nProvider>
      </body>
    </html>
  );
}
