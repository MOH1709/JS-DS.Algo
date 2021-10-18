let arr = [3, 4, 9, 5, 2, 3, 2, 1, 7, 6, 8];

function mergeSort(arr) {
  // Main function which sort's array
  (function main(arr = [], first = 0, last = arr.length - 1) {
    if (first >= last) return;

    let mid = Math.floor((first + last) / 2);

    main(arr, first, mid);
    main(arr, mid + 1, last);
    merge(arr, first, mid, last);
  })(arr);

  // Function to merge the two sorted array
  function merge(arr, start, mid, end) {
    let left = start,
      right = mid + 1,
      res = [];

    // loop to obtain merged sorted array
    while (left <= mid && right <= end) {
      res.push(arr[left] < arr[right] ? arr[left++] : arr[right++]);
    }

    while (left <= mid) {
      res.push(arr[left++]);
    }

    while (right <= end) {
      res.push(arr[right++]);
    }

    // loop to copy the element of sorted array in original array
    for (let i = start, j = 0; i <= end; ) {
      arr[i++] = res[j++];
    }
  }
}

mergeSort(arr);
console.log(arr);
