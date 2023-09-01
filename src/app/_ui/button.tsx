"use client";

import Image from "next/image";
import { Roboto_Mono } from "next/font/google";
import { MouseEventHandler } from "react";

const roboto = Roboto_Mono({ subsets: ["latin"] });

export default function Button({
  children,
  onClick,
  image,
}: {
  children: React.ReactNode;
  onClick: MouseEventHandler;
  image?: {
    src: string;
    alt: string;
  };
}) {
  return (
    <div
      onClick={onClick}
      className={`${roboto.className} flex flex-row align-middle h-14 pt-4 pr-8 pb-4 pl-6 gap-4 no-underline border border-black dark:border-white cursor-pointer hover:shadow-[2px_2px_black] hover:-translate-x-0.5 hover:-translate-y-0.5 dark:hover:shadow-[2px_2px_white] dark:hover:-translate-x-0.5 dark:hover:-translate-y-0.5`}
    >
      {image && (
        <span className="flex align-middle h-6 w-6">
          <Image
            className="dark:invert"
            src={image.src}
            alt={image.alt}
            height={24}
            width={24}
            priority
          />
        </span>
      )}
      {children}
    </div>
  );
}
