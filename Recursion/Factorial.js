// factorial
//  5! = 5*4*3*2*1 = 120
//  n! = n*(n-1)*(n-2)...

function factorial(n) {
  if (n === 1) return 1;

  let result;
  result = n * factorial(n - 1);
  return result;
}

let res = factorial(5);
console.log(res);

//  5 * fac(4)
//       4 * fac(3)
//             3 * fac(2)
//                  2 * fac(1)
//                       1
