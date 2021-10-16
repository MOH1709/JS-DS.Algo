/**
 * Time Complexity : O(n+k);
 * Space Complexity : O(max);
 */

let arr = [2, 4, 9, 4, 8, 7, 6, 3, 1];

// calculate max from the array
let max = Math.max(...arr);

// initialize anew array of "max + 1" length, with 0's
let countArr = new Array(max + 1).fill(0);

// storing number of count the number present in array, at that index
arr.forEach((data) => countArr[data]++);

// storing cumulative sum of each element
for (let i = 1; i < countArr.length; i++) {
  countArr[i] += countArr[i - 1];
}

let res = [];
arr.forEach((data) => {
  let i = countArr[data] - 1;
  res[i] = data;

  while (i > 0 && (res[i - 1] === undefined || res[i] < res[i - 1])) {
    i--;
    res[i] = data;
  }
});

console.log(res);
