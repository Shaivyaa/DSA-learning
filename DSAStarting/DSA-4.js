// Write a function that returns the smallest element in an array

let arr = [4, 2, 0, 800, 40, 90];

function smallestNumber(arr) {
  let smallestElement = Infinity || arr[0] || -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallestElement) {
      smallestElement = arr[i];
    }
  }
  return smallestElement;
}

const result = smallestNumber(arr);
console.log(result);
