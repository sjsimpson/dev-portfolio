import { useRef, type MouseEventHandler, useEffect } from "react";
import Link from "next/link";

export default function SideNavLink({
  active,
  href,
  name,
  updateOffset,
  updateWidth,
  onClick,
}: {
  active: boolean;
  href: string;
  name: string;
  updateOffset?: (offset: number) => void;
  updateWidth?: (width: number) => void;
  onClick?: MouseEventHandler;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (active && containerRef.current) {
      if (updateOffset) {
        const offset = containerRef.current.offsetTop;
        updateOffset(offset);
      }

      if (updateWidth) {
        const width = containerRef.current.offsetWidth;
        updateWidth(width);
      }
    }
  }, [active, updateOffset, updateWidth]);

  return (
    <div ref={containerRef} onClick={onClick} className="flex flex-row">
      <Link href={href} className="w-full py-4 px-8">
        {name.toUpperCase()}
      </Link>
    </div>
  );
}
