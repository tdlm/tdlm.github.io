import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Blog",
    description: "Some thoughts about things.",
};

export default function Blog() {
    return (
        <main className="max-w-4xl mx-auto mt-8 px-4 sm:px-6 lg:px-8">
            <section className="mb-12">
                <h1 className="text-3xl font-bold">Blog</h1>
                <h2 className="text-xl font-semibold text-gray-600"></h2>
            </section>
            <section className="mb-12">
                <Image className="mx-auto" src="under-construction.gif" alt="Under Construction" width={325} height={400} />
            </section>
        </main>
    );
}
