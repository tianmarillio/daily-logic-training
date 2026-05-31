export function isIsogram(str: string): boolean {
  if (!str) return true;

  const map: Record<string, number> = {};

  for (const char of str) {
    const normalizedChar = char.toLowerCase();

    if (!map[normalizedChar]) {
      map[normalizedChar] = 1;
      continue;
    }

    return false;
  }

  return true;
}
