let n = 2;
let pick = 1;

function guessHigherOrLower(n) {
  let left = 1;
  let right = n;

  while (left <= right) {
    let middle = left + Math.floor((right - left) / 2);
    let res = guess(middle);
    if (res === 0) {
      return middle;
    } else if (res < 0) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1;
}

let res = guessHigherOrLower(n, pick);
console.log(res);
