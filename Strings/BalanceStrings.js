let s = "RLRRRLLRLL";
// a balance string is a string which has equal number of R and L that is R === L

function balanceStrings(s) {
  let balance = 0;
  let L = 0;
  let R = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "R") {
      R++;
    } else {
      L++;
    }
    if (L === R) {
      balance++;
      L = 0;
      R = 0;
    }
  }
  return balance;
}

let res = balanceStrings(s);
console.log(res);

// Approach 2

function balanceStrings(s) {
  let balance = 0;
  let temp = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "R") {
      temp++;
    } else {
      temp--;
    }
    if (temp === 0) {
      balance++;
    }
  }
  return balance;
}

let res1 = balanceStrings(s);
console.log(res1);
