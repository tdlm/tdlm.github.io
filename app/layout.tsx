import type { Metadata } from "next";
import "./globals.css";

import { BaseLayout } from "./_components/BaseLayout";

export const metadata: Metadata = {
  title: "Scott Weaver",
  description: "Scott Weaver, Full Stack Engineer",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="a2aef5ea-b189-47c0-9e59-e3c56da79d60"
        />
      </head>
      <BaseLayout>{children}</BaseLayout>
    </html>
  );
}
