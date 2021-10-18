function quickSort(arr = []) {
  (function main(arr = [], first = 0, last = arr.length - 1) {
    // base case
    if (first >= last) return;

    let pivot = getPivot(arr, first, last);

    main(arr, first, pivot - 1);
    main(arr, pivot + 1, last);
  })(arr);

  function getPivot(arr, start, end) {
    let pivot = start;

    while (start < end) {
      while (arr[start] <= arr[pivot]) start++;
      while (arr[end] > arr[pivot]) end--;

      if (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
      }
    }

    [arr[pivot], arr[end]] = [arr[end], arr[pivot]];

    return end;
  }
}

let arr = [3, 4, 9, 5, 2, 3, 2, 1, 7, 6, 8];

quickSort(arr);
console.log(arr);
