let left = [1, 3, 5];
let right = [2, 4, 6];
// Output: [1,2,3,4,5,6]

function mergeSort(left, right) {
  let i = 0;
  let j = 0;
  let result = [];

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  return [...result, ...left.slice(i), ...right.slice(j)];
}

let res = mergeSort(left, right);
console.log(res);
