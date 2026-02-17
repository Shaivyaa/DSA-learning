// Write a function that searches for an element in an array and return it's index, if the element is not present then just return -1

let arr = [4, 2, 0, 10, 8, 30];

function searchElement(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return i;
    }
  }
  return -1;
}

const result = searchElement(arr, 8);
console.log(result);
