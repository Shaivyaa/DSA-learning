let s = "(()())  (())  (()(()))";

function removeOuterMostParantheses(s) {
  let stack = [];
  let ans = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(s[i]);
      let len = stack.length;
      console.log(len, "first");
      if (len > 1) {
        ans = ans + s[i];
      }
    } else {
      let len = stack.length;
      console.log(len);
      if (len > 1) {
        ans = ans + s[i];
      }
      stack.pop();
    }
  }
  return ans;
}

let res = removeOuterMostParantheses(s);
console.log(res);
