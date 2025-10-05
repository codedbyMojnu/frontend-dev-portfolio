import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Md. Mojnu Miah | Frontend Engineer (React, Next.js) | Dhaka, Bangladesh",
  description:
    "Results-driven Frontend Engineer with 3+ years of experience building scalable, high-performance web applications using React.js, Redux, and Next.js. Based in Dhaka, Bangladesh.",
  keywords:
    "Frontend Engineer, React Developer, Next.js Developer, JavaScript Developer, TypeScript Developer, Bangladesh Developer, Dhaka Developer, Web Developer, UI Developer, Frontend Developer Bangladesh",
  authors: [{ name: "Md. Mojnu Miah" }],
  creator: "Md. Mojnu Miah",
  publisher: "Md. Mojnu Miah",
  robots: "index, follow",
  openGraph: {
    title: "Md. Mojnu Miah | Frontend Engineer (React, Next.js)",
    description:
      "Results-driven Frontend Engineer with 3+ years of experience building scalable, high-performance web applications using React.js, Redux, and Next.js. Based in Dhaka, Bangladesh.",
    url: "https://your-portfolio-url.com",
    siteName: "Md. Mojnu Miah Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Md. Mojnu Miah | Frontend Engineer (React, Next.js)",
    description:
      "Results-driven Frontend Engineer with 3+ years of experience building scalable, high-performance web applications using React.js, Redux, and Next.js. Based in Dhaka, Bangladesh.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
