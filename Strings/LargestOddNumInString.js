let s = "52";
// op = 5

function largestOddinString(num) {
  let n = s.length - 1;
  while (n >= 0) {
    if (Number(s[n] % 2 === 0)) {
      return s.substing(0, n + 1);
    }
    --n;
  }
  return;
}

let res = largestOddinString(num);
console.log(res);
