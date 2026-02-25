import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Danilo Cucharro",
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
      <body
        className="bg-black-800 antialiased
        relative
        before:content-['']
        before:fixed
        before:inset-0
        before:-z-10
        before:bg-[url('/background.png')]
        before:bg-cover
        before:bg-center
        before:bg-no-repeat
        before:blur-lg"
      >
        {children}
      </body>
    </html>
  );
}
