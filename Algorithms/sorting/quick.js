let arr = [3, 4, 9, 5, 2, 3, 2, 1, 7, 6, 8];

function quickSort(arr = []) {
  // Main function which sort's array
  (function main(arr = [], first = 0, last = arr.length - 1) {
    // base case
    if (first >= last) return;

    let pivot = getPivot(arr, first, last);

    main(arr, first, pivot - 1);
    main(arr, pivot + 1, last);
  })(arr);

  //--------------------------------------------------------------------
  function getPivot(arr, start, end) {
    // assuming pivot position as a start of array
    let pivot = start;

    // Loop for obtaining the position of pivot element in array
    while (start < end) {
      while (arr[start] <= arr[pivot]) start++;
      while (arr[end] > arr[pivot]) end--;

      if (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
      }
    }

    [arr[pivot], arr[end]] = [arr[end], arr[pivot]];

    // returning pivot position
    return end;
  }
}

quickSort(arr);
console.log(arr);
