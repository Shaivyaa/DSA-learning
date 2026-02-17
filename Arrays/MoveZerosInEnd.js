let num = [0, 0, 0, 0];

function moveZero(num) {
  let x = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[i] !== 0) {
      num[x] = num[i];
      x++;
    }
  }

  // Fill remaining elements with 0
  for (let i = x; i < num.length; i++) {
    num[i] = 0;
  }

  return num;
}

let res = moveZero(num);
console.log(res);
