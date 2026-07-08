import type { TFunction } from "i18next";

export const getGreeting = (t: TFunction): string => {
  const hour = new Date().getHours();

  if (hour < 12) {
    return t("home.goodMorning");
  }

  if (hour < 18) {
    return t("home.goodAfternoon");
  }

  return t("home.goodEvening");
};