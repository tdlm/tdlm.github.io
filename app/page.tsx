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
        <Link href="https://youtube.com/@seescottdev" target="_blank">
          youtube
        </Link>
        <Link
          href="http://stackexchange.com/users/1098787/tdlm?tab=accounts"
          target="_blank"
        >
          stack exchange
        </Link>
        <Link
          href="https://bsky.app/profile/seescottdev.bsky.social"
          target="_blank"
        >
          blue sky
        </Link>
      </section>

      <Introduction className="mb-12" />

      <PageSection title={{ text: "Things I've made" }}>
        <ul className="flex flex-col gap-4 pt-2">
          <li>
            <Link className="font-semibold" href="https://tdlm.github.io/hatch/">
              Hatch
            </Link>
            <p className="pt-1 text-gray-600 dark:text-gray-400">
              A cozy post-apocalyptic bunker incremental game. Play it in your
              browser.
            </p>
          </li>
          <li>
            <Link
              className="font-semibold"
              href="https://tdlm.github.io/winterkill/"
            >
              Winterkill
            </Link>
            <p className="pt-1 text-gray-600 dark:text-gray-400">
              A first-person winter survival and hunting game in a snowy
              valley. Play it in your browser.
            </p>
          </li>
        </ul>
      </PageSection>
    </main>
  );
}
