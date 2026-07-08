import { useEffect } from "react";
import type { ReactNode } from "react";
import i18n from "@/i18n";

import { useAppStore } from "@/store/appStore";

interface Props {
  children: ReactNode;
}

export default function AppLanguageProvider({
  children,
}: Props) {
  const language = useAppStore(
    (state) => state.language
  );

  useEffect(() => {
    i18n.changeLanguage(language);

    document.documentElement.lang = language;

    document.documentElement.dir =
      language === "fa" ? "rtl" : "ltr";
  }, [language]);

  return <>{children}</>;
}