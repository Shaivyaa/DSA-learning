let left = [3, 1, 2, 8];
let right = [5, 4, 7, 6];

// function merge(arr) {
//     if(arr.length <= 1) return arr;

//     let mid = (arr.length)/2
//     let left = arr.slice(0,mid)
//     let right = arr.slice(mid)

//     return mergeSort(left, right)
// }

function mergeSort(left, right) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  return [...result, ...left.slice(i), ...right.slice(j)].sort();
}

let res = mergeSort(left, right);
console.log(res);

// Time Comp: Divide - O(logn) Conquer - O(n)
//          : O(nlogn)  - better than bubble, insertion, selection sort

// Space Comp: O(n)
