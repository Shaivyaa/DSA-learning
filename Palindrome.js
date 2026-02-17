// An int is a palindrome when it reads same from forward and backwards

function countDigit(num) {
  if (num < 0) console.log(false);
  let numCopy = num;
  let reverse = 0;
  while (num > 0) {
    let rem = num % 10;
    reverse = 10 * reverse + rem;
    num = Math.floor(num / 10);
  }
  if (reverse === numCopy) {
    console.log("true");
  } else {
    console.log("false");
  }
}

countDigit(-121);
