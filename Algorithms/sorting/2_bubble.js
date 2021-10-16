/**
 * Time Complexity : O(n * n);
 * Space Complexity : O(n);
 */

let arr = [20, 10, 50, 60, 40, 30, 80, 80, 70, 1];

for (let i = arr.length - 1; i >= 0; i--) {
  for (var j = 0; j < i; j++) {
    if (arr[j] > arr[j + 1]) {
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
}

console.log(arr);
