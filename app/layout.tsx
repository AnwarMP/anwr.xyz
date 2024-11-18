import "./globals.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/app/components/ThemeProvider";
import Navigation from "@/app/components/Navigation";

export const metadata: Metadata = {
  metadataBase: new URL("https://anwr.xyz"),
  title: {
    default: "Anwar Mujeeb | Software Engineer",
    template: "%s | Anwar Mujeeb"
  },
  description: "Software Engineer specializing in machine learning and full-stack development. Previously at Google and ST Microelectronics.",
  icons: {
    icon: [
      { url: "/logo/favicon.ico" },
      { url: "/logo/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/logo/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/logo/android-chrome-192x192.png", type: "image/png", sizes: "192x192" },
      { url: "/logo/android-chrome-512x512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/logo/apple-touch-icon.png", type: "image/png", sizes: "180x180" }
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/logo/safari-pinned-tab.svg",
      },
    ],
  },
  manifest: "/logo/site.webmanifest",
  openGraph: {
    title: "Anwar Mujeeb | Software Engineer",
    description: "Software Engineer specializing in machine learning and full-stack development. Previously at Google and ST Microelectronics.",
    url: "https://anwr.xyz",
    siteName: "Anwar Mujeeb",
    locale: "en_US",
    type: "website",
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
  twitter: {
    title: "Anwar Mujeeb",
    card: "summary_large_image",
  },
  // verification: {
  //   google: "your-google-verification-code",
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="width-full bg-contrast text-primary antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navigation />
          <div className="mx-auto max-w-[700px] px-6 pb-24 pt-16 md:px-6 md:pb-44 md:pt-20">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}