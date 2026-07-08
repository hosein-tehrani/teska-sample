import { createTheme } from "@mui/material";

import type { ThemeMode, Language } from "@/store/appStore";

export const getTheme = (mode: ThemeMode, language: Language) =>
  createTheme({
    direction: language === "fa" ? "rtl" : "ltr",
    palette: {
      mode,
      primary: {
        main: "#0d6efd",
      },
    },

    shape: {
      borderRadius: 12,
    },

    typography: {
      fontFamily:
        language === "fa" ? "Vazirmatn, sans-serif" : "Inter, sans-serif",
    },
  });
