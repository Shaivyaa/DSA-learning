let arr = [-1, 0, 3, 5, 9, 12];
let target = 9;
// Output: 5

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;

    if (target < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}

let res = binarySearch(arr, target);
console.log(res);
