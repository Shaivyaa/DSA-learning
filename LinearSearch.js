function searchNum(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      return i;
    }
  }
  return "not found";
}

let result = searchNum([2, 1, 5, 3, 4, 7], 4);
console.log(result);
