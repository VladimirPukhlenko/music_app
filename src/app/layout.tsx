import type { Metadata } from "next";
import { Paytone_One } from "next/font/google";
import "./globals.css";
import IsPlayingProvider from "@/context/PlayingContext";
import ActiveStationProvider from "@/context/ActiveStation";

const paytone_one = Paytone_One({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "MelodyMerge",
  description: "MelodyMerge",
  icons: {
    icon: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
    shortcut: "/favicon/apple-touch-icon.png",
  },
  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={paytone_one.className}>
        <ActiveStationProvider>
          <IsPlayingProvider>{children}</IsPlayingProvider>
        </ActiveStationProvider>
      </body>
    </html>
  );
}
