// used when array is not sorted

let arr = [5, 9, 7, 4, 6, 8, 1, 3, 2];

function linear(arr = [], target) {
  return arr.reduce((init, data, i) => {
    return data === target ? i : init;
  }, -1);
}

console.log(linear(arr, 2));
