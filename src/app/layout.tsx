import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cuchas Dev",
  description: "Danilo Cucharro Portfolio",
};

const jetBrainsMonoFont = JetBrains_Mono({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jetBrainsMonoFont.className}>
      <body className="bg-black-800 antialiased">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="background.png"
          alt="background image"
          className="absolute -z-10 w-full blur-xl h-dvw"
        />
        {children}
      </body>
    </html>
  );
}
