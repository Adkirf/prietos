import type { Metadata } from "next";
import { Roboto, Lato, Open_Sans, Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";

const one = Roboto({
  weight: ['400', '700'],
  subsets: ["latin"],
  display: 'swap',
});

const two = Lato({
  weight: ['400', '700'],
  subsets: ["latin"],
  display: 'swap',
});

const three = Open_Sans({
  subsets: ["latin"],
  display: 'swap',
});

const four = Montserrat({
  subsets: ["latin"],
  display: 'swap',
});

const five = Playfair_Display({
  subsets: ["latin"],
  display: 'swap',
});

// Choose the font you want to use here
const chosenFont = five; // two good

export const metadata: Metadata = {
  title: "Window Renovation and Painting Services",
  description: "Professional window renovation and painting services in Stockholm",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <body className={" bg-black "}>{children}</body>
    </html>
  );
}
