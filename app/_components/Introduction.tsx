import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import Link from "next/link";

type Props = {
  className?: string;
};

export const Introduction = ({ className = "" }: Props) => {
  return (
    <Tabs defaultValue="short" className={cn("w-full", className)}>
      <TabsList className="bg-white dark:bg-black">
        <TabsTrigger
          className="data-[state=active]:border-2 data-[state=active]:border-blue-500 data-[state=active]:text-blue-500"
          value="short"
        >
          Short
        </TabsTrigger>
        <TabsTrigger
          className="data-[state=active]:border-2 data-[state=active]:border-green-500 data-[state=active]:text-green-500"
          value="long"
        >
          Long
        </TabsTrigger>
      </TabsList>
      <TabsContent className="" value="short">
        <section className="flex flex-col gap-4 pt-4">
          <p>
            Hi there! My name is Scott. I'm a Full Stack Engineer at CTI,
            building{" "}
            <Link
              href="https://www.gobankingrates.com"
              rel="nofollow"
              target="_blank"
            >
              GOBankingRates.com
            </Link>
            . I enjoy working with a variety of technologies and languages, but
            most of all I enjoy working with Next.js/React and WordPress. In
            fact,{" "}
            <Link
              href="https://github.com/tdlm/tdlm.github.io"
              rel="nofollow"
              target="_blank"
            >
              this site
            </Link>{" "}
            is built using Next.js!
          </p>
          <p>Thanks for stopping by!</p>
        </section>
      </TabsContent>
      <TabsContent className="" value="long">
        <section className="flex flex-col gap-4 pt-4">
          <p>
            Hello! My name is Scott. I'm a Full Stack Software Engineer working
            at ConsumerTrack, focused primarily on building{" "}
            <Link
              href="https://www.gobankingrates.com"
              rel="nofollow"
              target="_blank"
            >
              GOBankingRates.com
            </Link>
            , a financial news website built on WordPress. Additionally, I've
            worked at ShareThis, Disney, USA Today, Human Made, Vocativ,
            Deloitte and Ray-ban.
          </p>
          <p>
            Although I work primarily with PHP/React in WordPress, I've also
            worked with a variety of other languages: Python, Ruby, Perl, Bash
            and others. I love{" "}
            <Link
              href="https://www.typescriptlang.org"
              rel="nofollow"
              target="_blank"
            >
              TypeScript
            </Link>
            . I love{" "}
            <Link href="https://tailwindcss.com" rel="nofollow" target="_blank">
              Tailwind
            </Link>
            . I've worked with various database systems in addition to MySQL,
            such as Postgres, MongoDB, Redis and Memcached.
          </p>
          <p>
            I am also a happily-married husband, dad to three cool kids and we
            also have an awesome dog named Milo. We all live in Orange County,
            California.
          </p>
          <p>
            In my spare time, I like to code, build things, produce videos and
            even play video games.
          </p>
        </section>
      </TabsContent>
    </Tabs>
  );
};
