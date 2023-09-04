"use client";

import { useThemeStore } from "@/stores/theme";
import useHydratedStore from "@/lib/useHydratedStore";

export default function ThemeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useHydratedStore(useThemeStore, (state) => state.theme);

  return (
    <div className={theme}>
      <div className=" text-black transition-[background] duration-100 dark:text-white bg-gray-200 dark:bg-night">
        {children}
      </div>
    </div>
  );
}
