"use client";

import { technologies } from "@/constants/technologies";
import Technology from "./technology";
import { useState } from "react";
import { Roboto_Mono } from "next/font/google";
import { ChevronLeft, ChevronRight, ChevronsLeft } from "react-feather";
import useMediaQuery, { breakpoints } from "@/lib/useMediaQuery";
import Image from "next/image";
const roboto = Roboto_Mono({ subsets: ["latin"] });

export default function Technologies() {
  const sm = useMediaQuery(breakpoints.sm);
  const md = useMediaQuery(breakpoints.md);

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [carouselOffset, setCarouselOffset] = useState<number>(0);
  const [underlineOffset, setUnderlineOffset] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);

  const handleShiftLeft = (e: any) => {
    e.preventDefault();
    activeIndex > 0
      ? setActiveIndex(activeIndex - 1)
      : setActiveIndex(technologies.length - 1);
  };

  const handleShiftRight = (e: any) => {
    e.preventDefault();
    activeIndex < technologies.length - 1
      ? setActiveIndex(activeIndex + 1)
      : setActiveIndex(0);
  };

  return (
    <div className="technologies flex flex-col">
      {md && (
        <>
          <div className="header items-center mb-10 flex flex-col">
            <div className="tech-list relative flex flex-row w-fit gap-4">
              {technologies.map((tech, index) => (
                <Technology
                  key={tech.icon}
                  active={index === activeIndex}
                  tech={tech}
                  useHoverIndicator
                  updateOffset={(offset) => {
                    setUnderlineOffset(offset);
                  }}
                  updateWidth={(width) => {
                    setWidth(width);
                  }}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
              <div
                className="absolute translate-y-20 h-px bg-black transition-translate duration-200 dark:bg-white"
                style={{ width, translate: underlineOffset }}
              />
            </div>
          </div>
        </>
      )}
      {sm ? (
        <div className="flex flex-row justify-center">
          <div
            className="group flex flex-col px-4 justify-center cursor-pointer"
            onClick={handleShiftLeft}
          >
            <ChevronLeft className="md:transition-transform md:duration-100 md:group-hover:-translate-x-2" />
          </div>
          <div className={`px-2 ${roboto.className}`}>
            <div className="flex flex-row align-middle gap-4 text-2xl font-bold mb-4">
              <div>{technologies[activeIndex].name}</div>
              <Image
                className="dark:invert select-none pointer-events-none"
                src={technologies[activeIndex].icon}
                alt={technologies[activeIndex].alt}
                width={32}
                height={32}
                priority
              />
            </div>
            <div className="description lg:h-48">
              {technologies[activeIndex].description}
            </div>
          </div>
          <div
            className="group flex flex-col px-4 justify-center cursor-pointer"
            onClick={handleShiftRight}
          >
            <ChevronRight className="transition-transform duration-100 group-hover:translate-x-2" />
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <div className="carousel flex flex-row justify-center md:hidden">
            <div
              className="flex flex-col px-4 justify-center cursor-pointer"
              onClick={handleShiftLeft}
            >
              <ChevronLeft />
            </div>
            <div className="carousel-window overflow-hidden h-[152px] w-[152px]">
              <div
                className="relative carousel-content flex flex-row transition-translate duration-200"
                style={{ translate: -carouselOffset }}
              >
                {technologies.map((tech, index) => (
                  <Technology
                    key={`${tech} + ${index}`}
                    active={activeIndex === index}
                    tech={tech}
                    size={128}
                    updateOffset={(offset) => {
                      setCarouselOffset(offset);
                    }}
                  />
                ))}
              </div>
            </div>
            <div
              className="flex flex-col px-4 justify-center cursor-pointer"
              onClick={handleShiftRight}
            >
              <ChevronRight />
            </div>
          </div>
          <div>Details</div>
        </div>
      )}
    </div>
  );
}
