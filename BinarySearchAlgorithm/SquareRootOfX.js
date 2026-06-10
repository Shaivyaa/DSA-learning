// Not related to this question but if i need to find middle value then I can do this thing
// middle = left+((right-left)/2)
// instead of middle = Math.floor((left + right) / 2) because in this case number can overflow

let x = 30;

function squareRoot(x) {
  if (x < 2) return x;

  let left = 2;
  let right = Math.floor(x / 2);
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (x === middle ** 2) {
      return middle;
    } else if (x < middle ** 2) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return right;
}

let res = squareRoot(x);
console.log(res);
