"use client";

import Image from "next/image";
import { MouseEventHandler, useState } from "react";

import { Roboto_Mono } from "next/font/google";
import { ChevronDown } from "react-feather";
const roboto = Roboto_Mono({ subsets: ["latin"] });

export default function Technology({
  active,
  tech,
  onClick,
}: {
  active: boolean;
  tech: Technology;
  onClick: MouseEventHandler;
}) {
  const border = active ? "border border-b-black dark:border-b-white" : "";

  return (
    <div
      className={`relative group flex flex-row px-3 py-3 items-center border border-transparent cursor-pointer z-10 ${border}`}
      onClick={onClick}
    >
      <ChevronDown className="absolute -top-7 left-[26px] invisible transition-all duration-100 group-hover:visible group-hover:-top-5 z-20" />
      <Image
        className="dark:invert select-none pointer-events-none"
        src={tech.icon}
        alt={tech.alt}
        width={48}
        height={48}
        priority
      />
    </div>
  );
}
