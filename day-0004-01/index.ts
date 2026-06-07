export function isValidIP(str: string): boolean {
  const octets = str.split(".");

  if (octets.length !== 4) {
    return false;
  }

  for (const octet of octets) {
    if (!octet.length) {
      return false;
    }

    if (octet.length > 1 && octet[0] === "0") {
      return false;
    }

    for (const char of octet) {
      if (!char?.trim() || isNaN(Number(char))) {
        return false;
      }
    }

    const num = Number(octet);

    if (isNaN(num) || num < 0 || num > 255) {
      return false;
    }
  }

  return true;
}
