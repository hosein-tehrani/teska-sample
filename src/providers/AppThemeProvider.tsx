import { ThemeProvider, CssBaseline } from "@mui/material";
import { useEffect, useMemo } from "react";
import type { ReactNode } from "react";

import { useAppStore } from "@/store/appStore";
import { getTheme } from "@/theme/theme";

interface Props {
  children: ReactNode;
}

export default function AppThemeProvider({
  children,
}: Props) {
  const mode = useAppStore((state) => state.theme);

  const theme = useMemo(
    () => getTheme(mode),
    [mode]
  );

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-bs-theme",
      mode
    );
  }, [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {children}
    </ThemeProvider>
  );
}