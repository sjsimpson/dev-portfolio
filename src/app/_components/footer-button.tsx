"use client";

import Image from "next/image";
import { Roboto_Mono } from "next/font/google";

const roboto = Roboto_Mono({ subsets: ["latin"] });

export default function FooterButton({
  href,
  src,
  name,
}: {
  href: string;
  src: string;
  name: string;
}) {
  return (
    <a
      href={href}
      target={"_blank"}
      className="flex align-middle h-14 pt-4 pr-8 pb-4 pl-6 no-underline border border-black dark:border-white cursor-pointer hover:shadow-[2px_2px_black] hover:-translate-x-0.5 hover:-translate-y-0.5 dark:hover:shadow-[2px_2px_white] dark:hover:-translate-x-0.5 dark:hover:-translate-y-0.5"
    >
      <span className="flex align-middle h-6 w-6 mr-4">
        <Image
          className="dark:invert"
          src={src}
          alt={name}
          height={24}
          width={24}
          priority
        />
      </span>
      <span className={`link-text ${roboto.className}`}>{name}</span>
    </a>
  );
}
