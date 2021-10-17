function mergeSort(arr) {
  (function main(arr = [], first = 0, last = arr.length - 1) {
    if (first < last) {
      let mid = Math.floor((first + last) / 2);

      main(arr, first, mid);
      main(arr, mid + 1, last);
      merge(arr, first, mid, last);
    }
  })(arr);

  function merge(arr, start, mid, end) {
    let i = start,
      j = mid + 1,
      res = [];

    while (i <= mid && j <= end) {
      res.push(arr[i] < arr[j] ? arr[i++] : arr[j++]);
    }

    while (i <= mid) {
      res.push(arr[i++]);
    }

    while (j <= end) {
      res.push(arr[j++]);
    }

    for (let i = start, j = 0; i <= end; i++, j++) {
      arr[i] = res[j];
    }
  }
}
let arr = [3, 4, 9, 5, 2, 3, 2, 1, 7, 6, 8];

mergeSort(arr);
console.log(arr);
