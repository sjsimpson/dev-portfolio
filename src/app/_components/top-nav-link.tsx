"use client";

import Link from "next/link";
import { Roboto_Mono } from "next/font/google";

const roboto = Roboto_Mono({ subsets: ["latin"] });

export default function TopNavLink({
  name,
  href,
}: {
  name: string;
  href: string;
}) {
  return (
    <div className="flex justify-center w-24 cursor-pointer hover:font-semibold">
      <Link
        className="flex justify-center py-2 px-4 w-24 select-none"
        href={href}
      >
        <span className={roboto.className}>{name.toUpperCase()}</span>
      </Link>
    </div>
  );
}
