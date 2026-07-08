export function formatDay(
  date: string,
  locale: string,
): string {
  return new Date(date).toLocaleDateString(locale, {
    weekday: "short",
  });
}