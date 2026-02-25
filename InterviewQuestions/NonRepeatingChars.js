let str = "aabbcdde";
// Output: "c"
//  [ "a", "a", "b", "b", "c", "d", "d", "e"]

function nonRepeatingCharacters(str) {
  for (let i = 0; i < str.length; i++) {
    let count = 0;
    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j]) {
        count++;
      }
    }
    if (count === 1) {
      return str[i];
    }
  }
  return null;
}

let res = nonRepeatingCharacters(str);
console.log(res);
