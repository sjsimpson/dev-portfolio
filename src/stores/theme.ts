import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeState {
  theme: "dark" | "light";
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: "light",
      toggleTheme: () =>
        set({
          theme: get().theme === "light" ? "dark" : "light",
        }),
    }),
    {
      name: "theme-storage",
    },
  ),
);

export const selectors = {
  theme: (state: ThemeState) => state.theme,
  toggleTheme: (state: ThemeState) => state.toggleTheme,
};
