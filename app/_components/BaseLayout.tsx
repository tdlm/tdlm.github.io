"use client";

import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";
import { ShrinkingHeader } from "./ShrinkingHeader";
import { ThemeProvider } from "@/components/theme-provider";
import LightToggle from "./LightToggle";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  children?: React.ReactNode;
};

export const BaseLayout = ({ children }: Props) => {
  return (
    <body className={`${inter.className} min-h-screen bg-white dark:bg-black`}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <ShrinkingHeader>
          <Link className="border-b-0 text-2xl font-bold" href="/">
            Scott{" "}
            <Image
              className="p-0 m-0 inline"
              src="/favicon-32x32.png"
              alt="W"
              height={32}
              width={32}
            />
            eaver
          </Link>
          <div>
            <Link
              className="text-base border-b-0 font-medium hover:text-gray-300 px-4"
              href="/blog/"
            >
              Blog
            </Link>
            <LightToggle />
          </div>
        </ShrinkingHeader>

        {children}

        <footer className="bg-white text-center text-black py-4 dark:bg-black dark:text-white">
          <p>✨ Scott Weaver &copy; 2024 ✨</p>
        </footer>
      </ThemeProvider>
    </body>
  );
};
