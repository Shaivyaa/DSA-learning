let s = "52";
// op = 5

function largestOddinString(s) {
  let n = s.length - 1;
  console.log(n);
  while (n >= 0) {
    if (Number(s[n] % 2 === 1)) {
      return s.substring(0, n + 1);
    }
    --n;
  }
  return "";
}

let res = largestOddinString(s);
console.log(res);
