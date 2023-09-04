import { useMemo } from "react";
import { usePathname } from "next/navigation";
import TopNavLink from "./top-nav-link";
import { links } from "@/constants/nav-links";

export default function TopNav() {
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

  return (
    <div className="flex flex-col justify-center">
      <div className="relative flex">
        <div
          className="absolute flex w-24 h-full border border-solid border-black dark:border-white transition-all ease-out duration-200 pointer-events-none"
          style={position}
        />
        {links.map((link) => (
          <TopNavLink key={link.href} href={link.href} name={link.name} />
        ))}
      </div>
    </div>
  );
}
