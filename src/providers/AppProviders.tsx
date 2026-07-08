import type { ReactNode } from "react";
import AppThemeProvider from "./AppThemeProvider";
import AppLanguageProvider from "./AppLanguageProvider";

interface Props {
  children: ReactNode;
}

export default function AppProviders({ children }: Props) {
  return (
    <AppLanguageProvider>
      <AppThemeProvider>{children}</AppThemeProvider>
    </AppLanguageProvider>
  );
}
