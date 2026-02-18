let arr = [4, 9, 1, 0, 2];
let k = 2;

function linearSearch(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === k) {
      return i;
    }
  }
}

let res = linearSearch(arr, k);
console.log(res);
