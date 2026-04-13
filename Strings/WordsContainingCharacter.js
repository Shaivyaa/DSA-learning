// let words = ["abc", "bcd", "aaaa", "cbc"];
// let x = "a";

function wordContainingCharacter(words, x) {
  let result = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(x)) {
      result.push(i);
    }
  }
  return result;
}

let res = wordContainingCharacter(words, x);
console.log(res);

// approach 2

// let words = ["abc", "bcd", "aaaa", "cbc"];
// let x = "a";

function wordContainingCharacter(words, x) {
  let result = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (words[i][j] === x) {
        result.push(i);
        break;
      }
    }
  }
  return result;
}

let res2 = wordContainingCharacter(words, x);
console.log(res2);
