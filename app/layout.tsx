
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/NavBar/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Biz cleaning Service Ltd",
  description: "We offer a wide range of cleaning services.",
  keywords: "Residential-cleaning,industrial-cleaning,eco-friendly-cleaning,commercial-cleaning,specialized-cleaning",
  authors: [{ name: "Biz cleaning", url: "@bizcleaning" }],
  robots: "index, follow",
  //viewport: "width=device-width, initial-scale=1.0",
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
