let s = "anagram";
let t = "nagaramm";

function validAnagrams(s, t) {
  if (s.length !== t.length) return false;

  let res1, res2;
  res1 = s.split("").sort().join("");
  res2 = t.split("").sort().join("");

  if (res1 === res2) return true;
}

let res = validAnagrams(s, t);
console.log(res);
