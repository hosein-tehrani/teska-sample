import { CacheProvider } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import {  useEffect, useMemo } from "react";
import type { ReactNode } from "react";

import { rtlCache, ltrCache } from "@/theme/cache";
import { getTheme } from "@/theme/theme";
import { useAppStore } from "@/store/appStore";

interface Props {
  children: ReactNode;
}

export default function AppThemeProvider({
  children,
}: Props) {
  const mode = useAppStore((state) => state.theme);
  const language = useAppStore((state) => state.language);

  const theme = useMemo(
    () => getTheme(mode, language),
    [mode, language]
  );

  const cache = language === "fa"
    ? rtlCache
    : ltrCache;

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-bs-theme",
      mode
    );

    document.documentElement.dir =
      language === "fa"
        ? "rtl"
        : "ltr";

    document.documentElement.lang =
      language;
  }, [mode, language]);

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}