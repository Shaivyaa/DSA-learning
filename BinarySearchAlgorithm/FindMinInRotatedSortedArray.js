let arr = [4, 5, 6, 7, 0, 1, 2, 3];

function findMinInRotatedSortedArray(arr) {
  let l = 0;
  let r = arr.length - 1;

  while (l <= r) {
    // if array is sorted
    if (arr[l] < arr[r]) {
      return arr[l];
    }

    let m = l + Math.floor((r - l) / 2);
    if (arr[m] < arr[m - 1]) {
      return arr[m];
    }

    // if left half is not sorted
    if (arr[l] > arr[m]) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }

  if (l == r) {
    return l;
  }
}

let res = findMinInRotatedSortedArray(arr);
console.log(res);
