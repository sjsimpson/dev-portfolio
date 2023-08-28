"use client";

import { technologies } from "@/constants/technologies";
import Technology from "./technology";
import { useState } from "react";
import { Roboto_Mono } from "next/font/google";
const roboto = Roboto_Mono({ subsets: ["latin"] });

export default function Technologies() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className="technologies flex flex-col">
      <div className="header flex flex-col mb-5">
        <div className="flex flex-row gap-4 items-center justify-center">
          {technologies.map((tech, index) => (
            <Technology
              key={tech.icon}
              active={index === activeIndex}
              tech={tech}
              onClick={(e) => {
                console.log(index);
                e.preventDefault;
                setActiveIndex(index);
              }}
            />
          ))}
        </div>
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
