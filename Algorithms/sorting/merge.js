function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);

  let right = arr.splice(mid, arr.length);
  return merge(mergeSort(arr), mergeSort(right));

  function merge(left, right) {
    let arr = [];

    // Break out of loop if any one of the array gets empty
    while (left.length && right.length) {
      arr.push(left[0] < right[0] ? left.shift() : right.shift());
    }

    return [...arr, ...left, ...right];
  }
}

let arr = [2, 4, 8, 6, 1, 3, 5, 7, 9];

console.log(mergeSort(arr));
