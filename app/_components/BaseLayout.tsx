"use client";

import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";
import { ShrinkingHeader } from "./ShrinkingHeader";
import { useEffect, useRef } from "react";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  children?: React.ReactNode;
};

export const BaseLayout = ({ children }: Props) => {
  return (
    <body className={`${inter.className} min-h-screen bg-white`}>
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
        </div>
      </ShrinkingHeader>

      {children}

      <footer className="bg-blue-900 text-center text-white py-4">
        <p>Scott Weaver © 2024</p>
      </footer>
    </body>
  );
};
