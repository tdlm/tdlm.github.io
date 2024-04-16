"use client";

import React, { forwardRef } from "react";

type Props = {
  children?: React.ReactNode;
};

export const ShrinkingHeader = forwardRef<any, Props>(({ children }, ref) => {
  return (
    <header className="bg-yellow-300 text-black shadow top-0 sticky">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center py-4">{children}</nav>
      </div>
    </header>
  );
});
