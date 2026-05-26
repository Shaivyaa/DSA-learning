let s = "nagaram";
let t = "anagram";

// shuffle the letters and form another word with same letters then it is anagram

function validAnagram(s, t) {
  let top = s.length;
  let bottom = t.length;

  if (top !== bottom) return false;

  let map = {};

  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) {
      map[s[i]] = 1;
    } else {
      map[s[i]]++;
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (!map[t[i]] || map[t[i]] < 0) {
      return false;
    } else {
      map[t[i]]--;
    }
  }

  return true;
}

let res = validAnagram(s, t);
console.log(res);
