export function loadStorage<T>(
  key: string,
  defaultValue: T
): T {
  try {
    const item = localStorage.getItem(key);

    if (!item) {
      return defaultValue;
    }

    return JSON.parse(item) as T;
  } catch {
    return defaultValue;
  }
}

export function saveStorage<T>(
  key: string,
  value: T
): void {
  localStorage.setItem(
    key,
    JSON.stringify(value)
  );
}

export function removeStorage(
  key: string
): void {
  localStorage.removeItem(key);
}