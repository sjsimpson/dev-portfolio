"use client";
import Button from "@/app/_ui/button";
import Image from "next/image";
import { Globe } from "react-feather";

export default function Project({
  name,
  description,
  image,
  url,
  github,
  npm,
}: {
  name: string;
  description: React.ReactNode;
  image: { src: string; alt: string };
  url?: string;
  github?: string;
  npm?: string;
}) {
  return (
    <div className="flex flex-col gap-8">
      <h3 className="text-2xl font-bold tracking-wide">{name}</h3>
      <div className="flex flex-row gap-8">
        <div className="hidden md:flex p-4 h-fit border border-black dark:border-white shrink-0">
          <Image src={image.src} alt={image.alt} width={200} height={200} />
        </div>
        <div className="flex flex-col items-start gap-8">
          <div>{description}</div>
          <div className="flex flex-row gap-4 justify-center">
            {url && (
              <a
                href={url}
                className="relative flex flex-row py-2 gap-2 transition-transform duration-100 after:block after:content-[''] after:absolute after:bottom-0 after:left-0 after:bg-black after:h-0.5 after:min-w-0 after:transition-[min-width] after:duration-200 hover:after:min-w-full dark:after:bg-white"
              >
                <Image
                  className="dark:invert"
                  src={"/globe.png"}
                  alt={`Go to ${name}'s website`}
                  height={24}
                  width={24}
                />
                <span>Website</span>
              </a>
            )}
            {npm && (
              <a
                href={url}
                className="relative flex flex-row py-2 gap-2 transition-transform duration-100 after:block after:content-[''] after:absolute after:bottom-0 after:left-0 after:bg-black after:h-0.5 after:min-w-0 after:transition-[min-width] after:duration-200 hover:after:min-w-full dark:after:bg-white"
              >
                <Image
                  className="dark:invert"
                  src={"/npm.svg"}
                  alt={`Go to ${name}'s npm repository`}
                  height={24}
                  width={24}
                />
                <span>NPM</span>
              </a>
            )}
            {github && (
              <a
                href={github}
                className="relative flex flex-row py-2 gap-2 transition-transform duration-100 after:block after:content-[''] after:absolute after:bottom-0 after:left-0 after:bg-black after:h-0.5 after:min-w-0 after:transition-[min-width] after:duration-100 hover:after:min-w-full dark:after:bg-white"
              >
                <Image
                  className="dark:invert"
                  src={"/github.svg"}
                  alt={`Go to ${name}'s Github`}
                  height={24}
                  width={24}
                />
                <span>Github</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
