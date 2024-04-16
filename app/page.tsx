"use client";

import Link from "next/link";
import { Introduction } from "./_components/Introduction";
import { PageSection } from "./_components/PageSection";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto mt-8 px-4 sm:px-6 lg:px-8">
      <PageSection
        className="mb-4"
        title={{ text: "Hi, I'm Scott" }}
        subtitle="Full Stack Software Engineer"
      />

      <section className="flex flex-row flex-wrap gap-4 mb-8 md:md-4">
        <Link
          className="border-b-green-600"
          href="https://github.com/tdlm"
          target="_blank"
        >
          github
        </Link>
        <Link href="https://twitter.com/turtleofdeath" target="_blank">
          twitter
        </Link>
        <Link
          className="border-b-red-600"
          href="https://www.linkedin.com/in/scottmw"
        >
          linkedin
        </Link>
        <Link className="border-b-green-600" href="/blog">
          blog
        </Link>
        <Link
          href="http://stackexchange.com/users/1098787/tdlm?tab=accounts"
          target="_blank"
        >
          stack exchange
        </Link>
      </section>

      <Introduction className="mb-12" />
    </main>
  );
}
