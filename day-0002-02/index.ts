export function sumTwoSmallestNumbers(numbers: Array<number>): number {
  const sorted = numbers.sort((a, b) => {
    if (a > b) return 1;

    return -1;
  });

  return sorted[0] + sorted[1];
}
