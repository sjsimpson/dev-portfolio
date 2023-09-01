"use client";

import { useMemo, useRef, useState } from "react";
import ThemeToggle from "./theme-toggle";
import { ChevronLeft, Menu } from "react-feather";
import TopNav from "./top-nav";
import SideNav from "./side-nav";
import useMediaQuery, { breakpoints } from "@/lib/useMediaQuery";

export default function PrimaryNav() {
  const [open, setOpen] = useState(false);
  const md = useMediaQuery(breakpoints.md);

  return (
    <>
      <div className="fixed inline-flex justify-between min-w-full h-24 px-10 md:px-16 lg:px-24 pb-4 z-10 text-black dark:text-white bg-gray-200 dark:bg-night">
        <div className="flex flex-row gap-8">
          {!md && (
            <div className="flex flex-col justify-end">
              <div
                className="h-10 w-10 p-2 cursor-pointer"
                onClick={() => setOpen(true)}
              >
                <Menu />
              </div>
            </div>
          )}
          <div className="flex flex-col justify-end">
            <div className="h-20 w-20 text-center">LOGO</div>
          </div>
          {md && <ThemeToggle />}
        </div>
        {md && <TopNav />}
      </div>

      {!md && <SideNav open={open} setOpen={setOpen} />}
    </>
  );
}
