// For binary search firstly we will sort the array then we will take first element as left and
// last element as right and from that(L + R) / 2 we will fin middle element.Then we will check
// if middle element is equal to target or not, if it is equal to target then we will return index of
//  middle element but if it's not then we will check if target is > or < middle element if target > middle element
//  then we will again assign L to middle index + 1 and right will be same and then repeat the same process to
// find index of target element or if target < middle element then L will be same and right will be middle index - 1
// and then repeat the process

let arr = [-1, 0, 3, 5, 9, 12];
let target = 0;

function binarySearch(arr, target) {
  let Left;
  let Right;
  Left = 0;
  Right = arr.length - 1;
  while (Right >= Left) {
    let middle = Math.floor((Left + Right) / 2);
    if (target === arr[middle]) {
      return middle;
    } else if (target > arr[middle]) {
      Left = middle + 1;
    } else {
      Right = middle - 1;
    }
  }
  return -1;
}

let res = binarySearch(arr, target);
console.log(res);
