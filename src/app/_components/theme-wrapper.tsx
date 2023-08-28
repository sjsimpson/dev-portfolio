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
      <div className=" text-black transition-all dark:text-white bg-gradient-to-b from-gray-200 to-white dark:from-gray-900 dark:to-gray-900">
        {children}
      </div>
    </div>
  );
}
