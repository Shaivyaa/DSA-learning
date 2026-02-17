let n = 16;

function powerOfTwo(n) {
  if (n === 1) return 1;
  if (n < 1 || n % 2 !== 0) return false;

  if (powerOfTwo(n / 2)) return true;
}

let res = powerOfTwo(n);
console.log(res);
