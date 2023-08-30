import Image from "next/image";
import { MouseEventHandler, useEffect, useRef } from "react";

import { ChevronDown } from "react-feather";

export default function Technology({
  active,
  tech,
  updateOffset,
  updateWidth,
  onClick,
  size = 48,
  useHoverIndicator = false,
}: {
  active: boolean;
  tech: Technology;
  updateOffset?: (offset: number) => void;
  updateWidth?: (width: number) => void;
  onClick?: MouseEventHandler;
  size?: number;
  useHoverIndicator?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (active && containerRef.current) {
      if (updateOffset) {
        const offset = containerRef.current.offsetLeft;
        updateOffset(offset);
      }

      if (updateWidth) {
        const width = containerRef.current.offsetWidth;
        updateWidth(width);
      }
    }
  }, [active, updateOffset, updateWidth]);

  return (
    <div
      ref={containerRef}
      className="tech-item group relative flex flex-row px-3 py-3 items-center cursor-pointer z-10 shrink-0"
      onClick={onClick}
    >
      {useHoverIndicator && (
        <ChevronDown className="absolute -top-7 left-[26px] invisible transition-all duration-100 group-hover:visible group-hover:-top-5 z-20" />
      )}
      <Image
        className="dark:invert select-none pointer-events-none"
        src={tech.icon}
        alt={tech.alt}
        width={size}
        height={size}
        priority
      />
    </div>
  );
}
