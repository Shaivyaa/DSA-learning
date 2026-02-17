// Write a function that returns count of digit in numbers

// two corner cases are there one is if num is 0, then if num is -ve

function countDigit(num) {
  if (num === 0) return 1;

  num = Math.abs(num);
  let count = 0;
  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }
  console.log(count);
}

countDigit(256);
