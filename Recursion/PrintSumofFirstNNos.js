// print sum of first n numbers

function sum(n) {
  if (n === 0) return 0;

  return n + sum(n - 1);
}

let n = 5;
let res = sum(n);
console.log(res);
