let arr = [4, 5, 6, 7, 0, 1, 2];
let target = 0;

function searchInSortedArray(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let middle = left + Math.floor((right - left) / 2);
    if (target === arr[middle]) {
      return middle;
    }
    if (arr[left] < arr[middle]) {
      if (target < arr[middle] && target >= arr[left]) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    } else {
      if (target > arr[middle] && target <= arr[right]) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
  }
  return -1;
}

let res = searchInSortedArray(arr, target);
console.log(res);
