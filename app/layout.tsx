import type { Metadata } from "next";
import Link from 'next/link';
import "./globals.css";

export const metadata: Metadata = {
  title: "What's Poppin!",
  description: "News website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
    <nav className="p-4 bg-black">
      <div className="container mx-auto flex justify-between items-center font-courier">
        <div className="hidden md:flex space-x-4 text-white">
          <Link href="/"> Home </Link>
          <Link href="/news_today"> Today </Link>
          <Link href="/news"> News </Link>
          {/* <Link href="/stocks"> Stocks </Link> */}
          <Link href="/contact"> Contact </Link>
        </div>
        <div className="flex-1 flex justify-end pr-5 font-courier">
          <h1 className="text-white text-5xl text-bold">What&apos;s Poppin?</h1>
        </div>
      </div>
    </nav>
        {children}
      </body>
    </html>
  );
}