import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      TDLM
      <Link href="/test">Test</Link>
    </main>
  );
}
