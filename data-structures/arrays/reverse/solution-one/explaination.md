# Reverse Array - Using a New Array

This approach creates a new array and fills it with the elements of the original array in reverse order.

## Code Implementation:
```typescript
function reverseArray(a: number[]): number[] {
  let n = [];
  for (let i = a.length - 1; i >= 0; i--) {
    n.push(a[i]);
  }
  return n;
}
