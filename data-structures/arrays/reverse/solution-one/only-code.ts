function reverseArray(a: number[]): number[] {
  let n = [];
  for (let i = a.length - 1; i >= 0; i--) {
    n.push(a[i]);
  }
  return n;
}
