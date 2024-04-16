import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import Link from "next/link";

type Props = {
  className?: string;
};

export const Introduction = ({ className = "" }: Props) => {
  return (
    <Tabs defaultValue="short" className={cn("w-full", className)}>
      <TabsList>
        <TabsTrigger value="short">Short</TabsTrigger>
        <TabsTrigger value="long">Long</TabsTrigger>
      </TabsList>
      <TabsContent className="flex flex-col gap-4" value="short">
        <p>
          Hi there! My name is Scott. I'm a Full Stack Engineer at CTI, building{" "}
          <Link href="https://www.gobankingrates.com" rel="nofollow">
            GOBankingRates.com
          </Link>
          . I enjoy working with a variety of technologies and languages, but
          most of all I enjoy working with Next.js/React and WordPress. In fact,
          this site is built using Next.js!
        </p>
        <p>Thanks for stopping by!</p>
      </TabsContent>
      <TabsContent className="flex flex-col gap-4" value="long">
        <p>
          Hello! My name is Scott. I'm a Full Stack Software Engineer working at
          ConsumerTrack, focused primarily on building{" "}
          <Link href="https://www.gobankingrates.com" rel="nofollow">
            GOBankingRates.com
          </Link>
          , a financial news website built on WordPress. Before this, I worked
          at ShaerThis, Disney, USA Today, Human Made, Vocativ, Deloitte and
          Oakley.
        </p>
        <p>Yoink.</p>
      </TabsContent>
    </Tabs>
  );
};
