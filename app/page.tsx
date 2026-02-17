import { div } from "motion/react-client";
import Image from "next/image";
import Link from "next/link";
import arro


export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div className="flex flex-col gap-8">
        <div className="space-y-4">
          <h1 className="font-bold text-3xl tracking-light text-primary">Rene Baine</h1>
          <p className="max-w-lg text-secondary">
            I&apos;m a second year computer science student at Trent University. I&apos;m currently working as a graphic designer at IWIP
            {/* Add link to iwip */}
          </p>
        </div>
        <div
          className="flex animate-in gap-3 text-sm"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <Link
            href="https://instagram.com/brianruizy"
            className="flex w-fit items-center rounded-full bg-secondary px-3 py-1 no-underline hover:bg-tertiary"
          >
            Instagram
            <ArrowUpRightIcon className="h-4 w-4 text-tertiary" />
          </Link>
          <Link
            href="https://discord.gg/KhNh8nbw3U"
            className="flex w-fit items-center rounded-full bg-secondary px-3 py-1 no-underline hover:bg-tertiary"
          >
            Discord
            <ArrowUpRightIcon className="h-4 w-4 text-tertiary" />
          </Link>

          <Link
            className="flex w-fit items-center rounded-full bg-secondary px-3 py-1 no-underline hover:bg-tertiary"
            href="mailto:partners@b-r.io"
          >
            Collab
            <ArrowUpRightIcon className="h-4 w-4 text-tertiary" />
          </Link>
        </div>
      </div>
    </div>
  );
}
