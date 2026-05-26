let s = "foo";
let t = "bar";

function isIsomorphic(s, t) {
  if (s.length !== t.length) return false;

  let map1 = {};
  let map2 = {};

  for (let i = 0; i < s.length; i++) {
    if (!map1[s[i]] && !map2[t[i]]) {
      map1[s[i]] = t[i];
      map2[t[i]] = s[i];
    } else if (map2[t[i]] !== s[i] || map1[s[i]] !== t[i]) {
      return false;
    }
  }

  return true;
}

let res = isIsomorphic(s, t);
console.log(res);
