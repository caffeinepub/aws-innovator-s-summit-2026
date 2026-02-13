export function appendToLocalStorage(key: string, data: any): void {
  const existing = getFromLocalStorage(key);
  existing.push(data);
  localStorage.setItem(key, JSON.stringify(existing));
}

export function getFromLocalStorage(key: string): any[] {
  const stored = localStorage.getItem(key);
  if (!stored) {
    return [];
  }
  try {
    return JSON.parse(stored);
  } catch {
    return [];
  }
}
