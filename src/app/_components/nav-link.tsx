"use client";

import Link from "next/link";
import { Roboto_Mono } from "next/font/google";

const roboto = Roboto_Mono({ subsets: ["latin"] });

interface LinkProps {
  name: string;
  href: string;
}

export default function NavLink(props: LinkProps) {
  return (
    <div className="flex justify-center w-24 cursor-pointer hover:font-semibold">
      <Link
        className="flex justify-center py-2 px-4 w-24 select-none"
        href={props.href}
      >
        <span className={roboto.className}>{props.name.toUpperCase()}</span>
      </Link>
    </div>
  );
}
