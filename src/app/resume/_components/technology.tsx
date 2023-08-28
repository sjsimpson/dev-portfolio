import Image from "next/image";
import { MouseEventHandler, useEffect, useRef } from "react";

import { ChevronDown } from "react-feather";

export default function Technology({
  active,
  tech,
  updateUnderline,
  onClick,
}: {
  active: boolean;
  tech: Technology;
  updateUnderline: (width: number, offset: number) => void;
  onClick: MouseEventHandler;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (active && containerRef.current) {
      const offset = containerRef.current.offsetLeft;
      const width = containerRef.current.offsetWidth;
      updateUnderline(width, offset);
    }
  }, [active, updateUnderline]);

  return (
    <div
      ref={containerRef}
      className="tech-item group relative flex flex-row px-3 py-3 items-center  cursor-pointer z-10"
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
