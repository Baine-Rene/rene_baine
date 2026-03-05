import Image from "next/image";
import { Metadata } from "next";

import Link from "@/app/components/Link";
import Section from "@/app/components/Section";
import ConnectLinks from "@/app/components/ConnectLinks";
import Workplaces from "@/app/about/components/Workplaces";

import { Funnel_Display } from "next/font/google";
import Greeting from "./components/Greeting";

export const metadata: Metadata = {
  title: "About | Rene Baine",
  description: "",
};

const funnelDisplay = Funnel_Display({ subsets: ["latin"] });

export default async function About() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div>
        <h1 className={`${funnelDisplay.className} font-bold`}>
          About Me
        </h1>
      </div>
      <div className="hidden md:block"></div>
      <div
        className="flex animate-in flex-col gap-16 md:gap-24"
        style={{ "--index": 3 } as React.CSSProperties}
      >
        <Section heading="About" headingAlignment="left">
          <div className="flex flex-col gap-6">
            <p>
              <Greeting /> I&apos;m Rene Baine Originally from Kampala Uganda,
              I&apos;m currently studying computer science at Trent University,
              Peterborough ON.
            </p>
            <p>
              I&apos;m pursuing a Bachelor of Science (Honors) in Computer
              Science with a specialization in Software Engineering, driven by a
              passion for using technology to address real-world challenges. My
              areas of interest include mobile app development, sustainable tech
              innovation, and crafting user-centric digital experiences.
            </p>
            <p>
              I&apos;ve worked on projects that helped non-profit organizations
              elevate their digital presence and connect with audiences through
              impactful, interactive content.
            </p>
          </div>
        </Section>
        <Section heading="Connect" headingAlignment="left">
          <ul className="animated-list grid grow grid-cols-1 gap-3 md:grid-cols-2">
            {ConnectLinks.map((link) => (
              <li className="col-span-1 transition-opacity" key={link.label}>
                <Link
                  href={link.href}
                  className="inline-grid w-full rounded-lg bg-secondary p-4 no-underline transition-opacity "
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{link.icon}</span>
                    {link.label}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="ml-auto h-5 w-5 text-secondary"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
        <Section heading="Work" headingAlignment="left">
          <div className="flex w-full flex-col gap-8">
            <p>
              Here's a few things I've worked on in recent years. I did alot of
              graphic design work.
            </p>
          </div>
        </Section>
      </div>
    </div>
  );
}
