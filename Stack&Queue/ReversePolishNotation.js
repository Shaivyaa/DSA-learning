let s = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"];

// 10 6 (9 + 3) -11 * / * 17 + 5 +
// 10 6 ((9 + 3) * -11) / * 17 + 5 +
// 10 (6 / ((9 + 3) * -11)) * 17 + 5 +
// 10 * (6 / ((9 + 3) * -11)) 17 + 5 +
// 10 * (6 / ((9 + 3) * -11)) + 17 5 +
// 10 * (6 / ((9 + 3) * -11)) + 17 + 5
// 10 * (6 / 12 * -11) + 22
// 10 * (6 / -132) + 22
// 10 * 0 + 22
// 0 + 22
// 22

function reversePolishNotation(s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (["+", "-", "*", "/"].includes(s[i])) {
      //   if(s[i] === "+" || s[i] === "-" || s[i] === "*" || s[i] === "/"){  - approach 2
      let a = stack.pop();
      let b = stack.pop();
      let result = eval(`${b} ${s[i]} ${a}`);
      stack.push(Math.trunc(result));
    } else {
      Number(stack.push(s[i]));
    }
  }
  return stack.pop();
}

let res = reversePolishNotation(s);
console.log(res);

// Approach 2

function reversePolishNotation(s) {
  let stack = [];

  let map = {
    "+": (a, b) => b + a,
    "-": (a, b) => b - a,
    "*": (a, b) => b * a,
    "/": (a, b) => Math.trunc(b / a),
  };
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      //   if(s[i] === "+" || s[i] === "-" || s[i] === "*" || s[i] === "/"){
      let a = stack.pop();
      let b = stack.pop();
      let result = map[s[i]](Number(a), Number(b));
      stack.push(result);
    } else {
      Number(stack.push(s[i]));
    }
  }
  return stack.pop();
}

let res1 = reversePolishNotation(s);
console.log(res1);
