let str = "hello";
// Output: "olleh"

// Method 1
function ReverseString(str) {
  let newStr = str.split("");
  let result = [];
  for (let i = newStr.length - 1; i >= 0; i--) {
    if (i >= 0) {
      result.push(newStr[i]);
    }
  }
  return result.join(",");
}

let res = ReverseString(str);
console.log(res);

// Method 2
function reverseString(str) {
  return str.split("").reverse().join("");
}
