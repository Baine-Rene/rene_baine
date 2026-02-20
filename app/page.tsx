import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import profile from "@/public/Profile.png";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div className="flex flex-col gap-8">
        <div className="space-y-4">
          <Image src={profile} width={170} height={170} alt="profile image" />
          <h1 className="animate-in font-semibold text-3xl tracking-light text-primary">
            René Baine
          </h1>
          <p className="max-w-lg text-zinc-400">
            I&apos;m a second year computer science student at Trent University.
            I&apos;m currently working as a graphic designer at IWIP.
          </p>
        </div>
        <div
          className="flex animate-in gap-3 text-sm"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <Link
            href="https://instagram.com/brianruizy"
            className="flex w-fit items-center rounded-full bg-neutral-800 px-3 py-1 no-underline hover:bg-neutral-900"
          >
            LinkedIn
          </Link>
          <Link
            href="https://discord.gg/KhNh8nbw3U"
            className="flex w-fit items-center rounded-full bg-neutral-800 px-3 py-1 no-underline hover:bg-neutral-900"
          >
            Instagram
          </Link>
          <Link
            href=""
            className="flex w-fit items-center rounded-full bg-neutral-800 px-3 py-1 no-underline hover:bg-neutral-900"
          >
            Twitter
          </Link>
        </div>
      </div>

      {/* Projects */}
      <div
        className="flex animate-in flex-col gap-8"
        style={{ "--index": 4 } as React.CSSProperties}
      >
        <p className="font-semibold tracking-tight text-neutral-500">Projects</p>
        {/* <ProjectList projects={projects} /> */}
      </div>

      <div
        className="flex animate-in flex-col gap-8"
        style={{ "--index": 4 } as React.CSSProperties}
      >
        <div className="space-y-4">
          <Link
            className="group flex items-center gap-2 tracking-tight font-semibold text-neutral-500 no-underline"
            href="/blog"
          >
            Blog
            <ArrowUpRightIcon className="h-5 w-5 text-tertiary transition-all group-hover:text-primary" />
          </Link>
          <p className="max-w-lg text-zinc-400 text-pretty">
            I occasionally write about programming, productivity, and more.
            I&apos;m trying to learn about more technology as I go.
          </p>
        </div>
      </div>
    </div>
  );
}