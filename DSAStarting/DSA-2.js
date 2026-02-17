// Write a function that returns the number of negative numbers in an array.

let arr = [4, -2, 0, 8, 40, -10, -5, -6];

function countNegatives(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}

const result = countNegatives(arr);
console.log(result);
