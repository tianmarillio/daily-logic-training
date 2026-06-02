export function divisors(n: number) {
  let count = 0;

  for (let i = 0; i < n; i++) {
    const divisor = i + 1;

    if (n % divisor === 0) {
      count++;
    }
  }

  return count;
}
