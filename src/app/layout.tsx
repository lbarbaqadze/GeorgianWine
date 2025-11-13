import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Georgian Wine | Discover the Taste of Georgia",
  description:
    "Explore the finest Georgian wines, traditional winemaking, and authentic flavors from the heart of the Caucasus.",
  keywords: [
    "Georgian wine",
    "wine from Georgia",
    "Qvevri wine",
    "traditional wine",
    "Georgian vineyards",
    "ქართული ღვინო",
    "ღვინის ტრადიციები",
  ],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Georgian Wine | Discover Authentic Georgian Wines",
    description:
      "Taste the spirit of Georgia. Explore our unique wines, crafted with ancient Qvevri traditions.",
    siteName: "Georgian Wine",
    images: [
      {
        url: "https://lbarbaqadze.github.io/GeorgianWine/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Georgian Wine — Traditional Qvevri",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
