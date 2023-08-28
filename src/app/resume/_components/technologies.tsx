"use client";

import { technologies } from "@/constants/technologies";
import Technology from "./technology";
import { useState } from "react";
import { Roboto_Mono } from "next/font/google";
const roboto = Roboto_Mono({ subsets: ["latin"] });

export default function Technologies() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [offset, setOffset] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);

  return (
    <div className="technologies flex flex-col">
      <div className="header flex flex-col mb-10">
        <div className="relative tech-list flex flex-row gap-4 items-center justify-center">
          {technologies.map((tech, index) => (
            <Technology
              key={tech.icon}
              active={index === activeIndex}
              tech={tech}
              updateUnderline={(width, offset) => {
                setWidth(width);
                setOffset(offset);
              }}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
        <div
          className="absolute translate-y-20 h-px bg-black transition-translate duration-200 dark:bg-white"
          style={{ width, translate: offset }}
        />
      </div>
      <div className={`px-8 ${roboto.className}`}>
        <div className="text-2xl font-bold mb-4">
          {technologies[activeIndex].name}
        </div>
        <div>{technologies[activeIndex].description}</div>
      </div>
    </div>
  );
}
