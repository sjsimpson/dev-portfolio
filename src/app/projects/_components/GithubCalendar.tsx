"use client";

import { breakpoints } from "@/constants/breakpoints";
import useMediaQuery from "@/lib/useMediaQuery";
import GitHubCalendar from "react-github-calendar";

interface Activity {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export default function GithubCalendar() {
  const sm = useMediaQuery(breakpoints.sm);
  const md = useMediaQuery(breakpoints.md);
  const lg = useMediaQuery(breakpoints.lg);

  const dynamicDataTransform = (contributions: Activity[]) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    let shownMonths = 12;

    if (!md) {
      shownMonths = 6;
    }
    if (!sm) {
      shownMonths = 4;
    }

    return contributions.filter((activity) => {
      const date = new Date(activity.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };
  return (
    <div className="px-12 py-10 bg-white border border-black dark:border-white dark:bg-nightlight">
      <GitHubCalendar
        username="sjsimpson"
        {...(!lg ? { transformData: dynamicDataTransform } : {})}
        {...{ hideTotalCount: !md }}
      />
    </div>
  );
}
