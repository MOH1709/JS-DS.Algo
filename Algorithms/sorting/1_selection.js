/**
 * Time Complexity : O(n * n);
 * Space Complexity : O(n);
 */

let arr = [20, 10, 50, 60, 40, 30, 80, 80, 70];

let n = arr.length - 1;
for (let i = 0; i < n; i++) {
  var min = i,
    j = i;

  while (j < arr.length) {
    if (arr[j] < arr[min]) {
      min = j;
    }
    j++;
  }

  [arr[i], arr[min]] = [arr[min], arr[i]];
}

console.log(arr);
