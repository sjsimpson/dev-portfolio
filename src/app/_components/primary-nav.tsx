"use client";

import { useMemo, useRef, useState } from "react";
import ThemeToggle from "./theme-toggle";
import { ChevronLeft, Menu } from "react-feather";
import TopNav from "./top-nav";
import SideNav from "./side-nav";
import useMediaQuery, { breakpoints } from "@/lib/useMediaQuery";
import { Roboto_Mono } from "next/font/google";

const roboto = Roboto_Mono({ subsets: ["latin"] });

export default function PrimaryNav() {
  const [open, setOpen] = useState(false);
  const md = useMediaQuery(breakpoints.md);

  return (
    <>
      <div className="fixed inline-flex justify-between min-w-full h-24 px-10 md:px-16 lg:px-24 z-10 text-black dark:text-white transition-[background] duration-100 bg-gray-200 dark:bg-night">
        <div className="flex flex-row gap-8">
          {!md && (
            <div className="flex flex-col justify-center">
              <div
                className="h-10 w-10 p-2 cursor-pointer"
                onClick={() => setOpen(true)}
              >
                <Menu />
              </div>
            </div>
          )}
          <div className="flex flex-col justify-center">
            <div
              className={`${roboto.className} px-4 py-2 text-3xl text-center border border-black dark:border-white`}
            >
              {"sjs.dev"}
            </div>
          </div>
          {md && <ThemeToggle />}
        </div>
        {md && <TopNav />}
      </div>

      {!md && <SideNav open={open} setOpen={setOpen} />}
    </>
  );
}
