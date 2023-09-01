"use client";

import { technologies } from "@/constants/technologies";
import Technology from "./technology";
import { useEffect, useState } from "react";
import { Roboto_Mono } from "next/font/google";
import { ChevronLeft, ChevronRight, X } from "react-feather";
import useMediaQuery, { breakpoints } from "@/lib/useMediaQuery";
import Image from "next/image";
import Button from "../../_ui/button";
import DetailsModal from "./details-modal";
const roboto = Roboto_Mono({ subsets: ["latin"] });

export default function Technologies() {
  const sm = useMediaQuery(breakpoints.sm);
  const md = useMediaQuery(breakpoints.md);

  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselOffset, setCarouselOffset] = useState(0);
  const [underlineOffset, setUnderlineOffset] = useState(0);
  const [underlineWidth, setUnderlineWidth] = useState(0);

  useEffect(() => {
    sm && setOpen(false);
  }, [sm]);

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
    <>
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
                      setUnderlineWidth(width);
                    }}
                    onClick={() => setActiveIndex(index)}
                  />
                ))}
                <div
                  className="absolute translate-y-20 h-px bg-black transition-translate duration-200 dark:bg-white"
                  style={{ width: underlineWidth, translate: underlineOffset }}
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
            <div className="carousel flex flex-row justify-center mb-4 md:hidden">
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
            <Button onClick={() => setOpen(true)}>Details</Button>
          </div>
        )}
      </div>

      {open && (
        <DetailsModal
          tech={technologies[activeIndex]}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
