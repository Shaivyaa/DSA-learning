let str = ["h", "e", "l", "l", "o"];

// let str1 = str.split("")
// console.log(str1)

// let str2 = str1.reverse();
// console.log(str2)

// How to swap
// a = 10
// b = 20
// aCopy = a;
// a = b;
// b = aCopy;

function reverseStr(str) {
  let len = str.length;
  let halfLen = Math.floor(len / 2);

  for (let i = 0; i < halfLen; i++) {
    let temp = str[i];
    str[i] = str[len - 1 - i];
    str[len - 1 - i] = temp;
  }
  console.log(str);
}
