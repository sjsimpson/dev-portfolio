import { useMemo, useEffect, useState } from "react";
import { ChevronLeft } from "react-feather";
import { usePathname } from "next/navigation";
import { links } from "@/constants/nav-links";
import SideNavLink from "./side-nav-link";
import ThemeToggle from "./theme-toggle";
import { Roboto_Mono } from "next/font/google";

const roboto = Roboto_Mono({ subsets: ["latin"] });

export default function SideNav({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const pathname = usePathname();

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [width, setWidth] = useState(0);
  const [top, setTop] = useState(0);

  useEffect(() => {
    const rootPath = pathname.split("/")[1];
    const index = links.findIndex(
      (link) => link.href.slice(1, link.href.length) === rootPath,
    );
    setActiveIndex(index);
  }, [pathname]);

  const offset = useMemo(() => {
    if (open) {
      return 0;
    }
    return -360;
  }, [open]);

  return (
    <>
      <div
        className="fixed flex flex-col justify-between h-screen w-80 p-10 bg-gray-200 dark:bg-night transition-[left] duration-100 ease-out z-50"
        style={{ left: offset }}
      >
        <div className="flex flex-col gap-10">
          <div
            className="header h-12 w-12 p-3 cursor-pointer"
            onClick={() => setOpen(false)}
          >
            <ChevronLeft />
          </div>

          <div className={`relative flex flex-col gap-2 ${roboto.className}`}>
            {links.map((link, index) => (
              <SideNavLink
                key={link + index.toString()}
                active={index === activeIndex}
                href={link.href}
                name={link.name}
                updateOffset={(offset) => setTop(offset)}
                updateWidth={(width) => setWidth(width)}
                onClick={() => {
                  setActiveIndex(index);
                  setOpen(false);
                }}
              />
            ))}
            {activeIndex !== null && (
              <div
                className="absolute h-14 border border-black dark:border-white"
                style={{ top, width }}
              />
            )}
          </div>
        </div>

        <div className="flex flex-row justify-center">
          <ThemeToggle />
        </div>
      </div>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="modal-background fixed h-screen w-screen bg-[rgba(0,0,0,0.12)] z-40"
        />
      )}
    </>
  );
}
