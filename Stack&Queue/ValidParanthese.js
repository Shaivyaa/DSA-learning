let s = "([])";

function validParanthese(s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
    } else {
      let top = stack.pop();
      if (
        !top ||
        (top === "[" && s[i] !== "]") ||
        (top === "{" && s[i] !== "}") ||
        (top === "(" && s[i] !== ")")
      )
        return false;
    }
  }
  return stack.length === 0;
}

let res = validParanthese(s);
console.log(res);

// Approach 2

let s1 = "([)";

function validParanthese(s) {
  let stack = [];

  let map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let i = 0; i < s1.length; i++) {
    if (map[s1[i]]) {
      stack.push(s1[i]);
    } else {
      let top = stack.pop();
      if (!top || s1[i] !== map[top]) return false;
    }
  }
  return stack.length === 0;
}

let res1 = validParanthese(s);
console.log(res1);
