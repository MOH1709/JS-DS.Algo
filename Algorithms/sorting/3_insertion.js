/**
 * Time Complexity : O(n * n);
 * Space Complexity : O(n);
 */

let arr = [20, 10, 50, 60, 40, 30, 80, 80, 70, 1];

for (let i = 1; i < arr.length; i++) {
  var j = i;

  while (j > 0 && arr[j] < arr[j - 1]) {
    [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
    j--;
  }
}

console.log(arr);
