import { createTheme } from "@mui/material";

import type { ThemeMode } from "@/store/appStore";

export const getTheme = (mode: ThemeMode) =>
  createTheme({
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
      fontFamily: "inherit",
    },
  });