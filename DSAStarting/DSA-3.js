// Write a function that returns the largest element in an array

let arr = [4, 2, 0, 800, 40, 90];

function largestNumber(arr) {
  let largestElement = -Infinity || arr[0] || -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestElement) {
      largestElement = arr[i];
    }
  }
  return largestElement;
}

const result = largestNumber(arr);
console.log(result);
