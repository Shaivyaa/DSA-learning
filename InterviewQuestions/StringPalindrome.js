let str = "cross";
// Output: true

function PalindromeStr(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] === str[right]) {
      left++;
      right--;
      return true;
    } else {
      return false;
    }
  }
}

let res = PalindromeStr(str);
console.log(res);
