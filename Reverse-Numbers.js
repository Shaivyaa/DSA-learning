// Reverse the numbers

function countDigit(num) {
  let numCopy = num;
  num = Math.abs(num);
  let reverse = 0;
  while (num > 0) {
    let last = num % 10;
    reverse = 10 * reverse + last;
    num = Math.floor(num / 10);
  }
  let limit = Math.pow(2, 31);
  if (reverse < -limit || reverse > limit) console.log(0);
  const res = numCopy < 0 ? -reverse : reverse;
  console.log(res);
}

countDigit(12345);

// To get last digit => num % 10
// To remove last digit => num / 10
