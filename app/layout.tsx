import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { preferenceScript } from "@/lib/preferences";
import { PageTexture } from "@/components/page-texture";

const aspekta = localFont({
  src: [
    { path: "./fonts/Aspekta-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Aspekta-600.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-aspekta", display: "swap",
});
const inter = Inter({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-inter", display: "swap" });
export const metadata: Metadata = {
  title: "Darli Barreto — Software & Full Stack Developer",
  description: "Analista de Software y Full Stack Developer en Trujillo, Perú. React, Next.js, Python y experiencias web 3D.",
};
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" suppressHydrationWarning data-theme="dark" data-motion="running" className={`${aspekta.variable} ${inter.variable} antialiased [color-scheme:dark] [--canvas:#080a09] [--surface:#101311] [--ink:#f5f5f0] [--accent:#ff825f] data-[theme=light]:[color-scheme:light] data-[theme=light]:[--canvas:#f3f0e8] data-[theme=light]:[--surface:#e4e2da] data-[theme=light]:[--ink:#17221e] data-[theme=light]:[--accent:#b3381b] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`}>
      <head><Script id="portfolio-preferences" strategy="beforeInteractive">{preferenceScript}</Script></head>
      <body
        className={`${inter.className} bg-(--canvas) text-(--ink) [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [&_*]:[scrollbar-width:none] [&_*::-webkit-scrollbar]:hidden selection:bg-[#ff4b2b] selection:text-(--ink) has-[dialog[open]]:overflow-hidden [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-offset-7 [&_a:focus-visible]:outline-(--accent) [&_button:focus-visible]:outline-2 [&_button:focus-visible]:outline-offset-7 [&_button:focus-visible]:outline-(--accent)`}
      >
        {children}
        <PageTexture />
      </body>
    </html>
  );
}
