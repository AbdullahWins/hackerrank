function reverseArray(a: number[]): number[] {
  let l = 0;
  let r = a.length - 1;
  while (l < r) {
    let t = a[l];
    a[l] = a[r];
    a[r] = t;

    l++;
    r--;
  }
  return a;
}
