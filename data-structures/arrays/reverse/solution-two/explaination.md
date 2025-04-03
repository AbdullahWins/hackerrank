# Reverse Array - In-Place with Two Pointers

This approach reverses an array in-place using two pointers, `l` and `r`, that swap elements from both ends of the array until they meet.

## Code Implementation:
```typescript
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
