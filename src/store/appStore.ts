import { create } from "zustand";

// use zustand persist to save data in localStorage 
import { persist } from "zustand/middleware";

// types
export type ThemeMode = "light" | "dark";
export type Language = "en" | "fa";

interface AppState {
  theme: ThemeMode;
  language: Language;
  username: string;

  toggleTheme: () => void;
  setTheme: (theme: ThemeMode) => void;
  setLanguage: (language: Language) => void;
  setUsername: (username: string) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      theme: "light",
      language: "en",
      username: "",

      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === "light" ? "dark" : "light",
        })),
      setTheme: (theme) =>
        set({
          theme,
        }),
      setLanguage: (language) =>
        set({
          language,
        }),
      setUsername: (username) =>
        set({
          username,
        }),
    }),
    {
      name: "dashboard-settings",
    },
  ),
);
