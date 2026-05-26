let s = " ";

// approach 1
function validPalindrome(s) {
  s = s.toLowerCase();

  let filterStr = "";
  let revStr = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i].match(/[a-z0-9]/i)) {
      filterStr = filterStr + s[i];
      revStr = s[i] + revStr;
    }
  }
  if (filterStr === revStr) {
    return true;
  } else {
    return false;
  }
}

let res = validPalindrome(s);
console.log(res);

// approach 2
var isPalindrome = function (s) {
  if (s === " ") return true;
  let newStr = s
    .split(" ")
    .join("")
    .trim(" ")
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase();
  let left = 0;
  let right = newStr.length - 1;

  while (left < right) {
    if (newStr[left] !== newStr[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};
