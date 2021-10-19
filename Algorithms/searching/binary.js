let arr = [10, 20, 30, 40, 50, 60, 70, 80];

function binary(arr = [], target) {
  let l = 0,
    r = arr.length - 1;

  while (l <= r) {
    var mid = Math.floor((l + r) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      r = mid - 1;
    } else l = mid + 1;
  }

  return -1;
}

console.log(binary(arr, 30));
