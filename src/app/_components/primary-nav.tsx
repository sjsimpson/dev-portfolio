"use client";

import NavLink from "./nav-link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { links } from "@/constants/nav-links";
import { selectors, useThemeStore } from "@/stores/theme";

export default function PrimaryNav() {
  const toggleTheme = useThemeStore(selectors.toggleTheme);

  const pathname = usePathname();

  const position = useMemo(() => {
    const rootPath = pathname.split("/")[1];
    const index = links.findIndex(
      (link) => link.href.slice(1, link.href.length) === rootPath,
    );

    if (index !== -1) {
      return { left: `${96 * index}px` };
    }

    return { left: "0px" };
  }, [pathname]);

  const handleToggleTheme = () => {
    toggleTheme();
  };

  return (
    <div
      className={`fixed inline-flex justify-between w-full h-20 px-24 z-100 text-black dark:text-white`}
    >
      <div className="flex flex-row">
        <div className="h-20 w-16 bg-primary" />
        <div
          className="p-4 hover:bg-red-300 cursor-pointer"
          onClick={handleToggleTheme}
        >
          LIGHT
        </div>
        <div
          className="p-4 hover:bg-red-300 cursor-pointer"
          onClick={handleToggleTheme}
        >
          DARK
        </div>
      </div>
      <div className="flex flex-col justify-end">
        <div className="relative flex">
          <div
            className={`absolute flex w-24 h-full border border-solid border-black dark:border-white transition-all ease-out duration-200 pointer-events-none`}
            style={position}
          />
          {links.map((link) => (
            <NavLink key={link.href} href={link.href} name={link.name} />
          ))}
        </div>
      </div>
    </div>
  );
}
