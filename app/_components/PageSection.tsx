"use client";

import { cn } from "@/lib/utils";

type Props = {
    className?: string;
    title: {
        text: string;
    };
    subtitle?: string;
    children?: React.ReactNode;
}

export const PageSection = ({ className = "", title, subtitle = "", children }: Props) => {
    return (
        <section className={cn("mb-12", className)}>
            <h3 className="text-2xl font-semibold pb-2">{title.text}</h3>
            {subtitle && <h2 className="text-xl font-semibold text-green-600">{subtitle}</h2>}
            {children}
        </section>
    );
}