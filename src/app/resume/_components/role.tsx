"use client";

import { Roboto_Mono } from "next/font/google";
import { ChevronRight } from "react-feather";
const roboto = Roboto_Mono({ subsets: ["latin"] });

interface RoleProps {
  title: string;
  company: string;
  website: string;
  startDate: string;
  endDate: string;
  bulletPoints: string[];
}

export default function Role(props: RoleProps) {
  return (
    <div className={`${roboto.className} role flex flex-col mb-20`}>
      <div className="role-header flex flex-col mb-4">
        <div className="role-description flex items-baseline text-xl cursor-default">
          {`${props.title} at `}
          <a
            href={props.website}
            className="job-link ml-4 mr-2"
            target="_blank"
          >
            <span className="font-semibold after:block after:content-[''] after:relative after:bottom-0 after:left-0 after:bg-black after:h-0.5 after:w-0 after:duration-200 hover:after:w-full dark:after:bg-white">
              {props.company}
            </span>
          </a>
        </div>
        <div className="date-range flex cursor-default">
          {props.startDate} - {props.endDate}
        </div>
      </div>
      {props.bulletPoints.map((description, index) => (
        <div
          key={index}
          className="group bullet-point flex flex-row justify-start mb-2"
        >
          <div>
            <ChevronRight className="transition-transform group-hover:translate-x-2" />
          </div>
          <span className="ml-2 cursor-default">{description}</span>
        </div>
      ))}
    </div>
  );
}
