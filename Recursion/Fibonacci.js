let n = 8;

function fib(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let sol;
  sol = fib(n - 1) + fib(n - 2);
  return sol;
}

let res = fib(n);
console.log(res);
