import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: {
    default: "Fynboens Mobil Klargøring | Mobil bilrens & damprens på Fyn",
    template: "%s | Fynboens Mobil Klargøring",
  },
  description:
    "Professionel mobil bilrens og damprens på Fyn. Vi kommer til dig – privat og erhverv. Book nemt online og få din bil som ny igen.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="da" className={`${inter.variable} ${archivo.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
