import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ADmyBRAND AI Suite - Transform Your Marketing with AI",
  description: "Revolutionize your marketing strategy with ADmyBRAND AI Suite. Get AI-powered insights, automation, and personalized campaigns that convert. Start your free trial today.",
  keywords: [
    "AI marketing",
    "marketing automation",
    "SaaS platform",
    "digital marketing",
    "AI analytics",
    "marketing tools",
    "campaign optimization",
    "lead generation"
  ],
  authors: [{ name: "ADmyBRAND Team" }],
  creator: "ADmyBRAND",
  publisher: "ADmyBRAND",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://admybrand.ai"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ADmyBRAND AI Suite - Transform Your Marketing with AI",
    description: "Revolutionize your marketing strategy with AI-powered insights, automation, and personalized campaigns that convert.",
    url: "https://admybrand.ai",
    siteName: "ADmyBRAND AI Suite",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ADmyBRAND AI Suite - AI-Powered Marketing Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ADmyBRAND AI Suite - Transform Your Marketing with AI",
    description: "Revolutionize your marketing strategy with AI-powered insights, automation, and personalized campaigns.",
    images: ["/og-image.jpg"],
    creator: "@admybrand",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
