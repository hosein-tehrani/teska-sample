import type { TFunction } from "i18next";

export function getWeatherDescription(
  code: number,
  t: TFunction,
): string {
  if (code === 0) {
    return t("weather.status.clear");
  }

  if ([1, 2].includes(code)) {
    return t("weather.status.partlyCloudy");
  }

  if (code === 3) {
    return t("weather.status.cloudy");
  }

  if ([45, 48].includes(code)) {
    return t("weather.status.fog");
  }

  if (
    (code >= 51 && code <= 67) ||
    (code >= 80 && code <= 82)
  ) {
    return t("weather.status.rain");
  }

  if (
    (code >= 71 && code <= 77) ||
    (code >= 85 && code <= 86)
  ) {
    return t("weather.status.snow");
  }

  if (code >= 95) {
    return t("weather.status.thunderstorm");
  }

  return t("weather.status.unknown");
}