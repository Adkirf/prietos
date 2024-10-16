import type { Metadata } from "next";
import "./globals.css";


// Choose the font you want to use here


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
