let s = "successes";

function FrequentVowelConsonant(s) {
  let map = {};

  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) {
      map[s[i]] = 1;
    } else {
      map[s[i]]++;
    }
  }

  // above will create map like this
  // map = {s=4, u=1, c=2, e=2}

  let vowels = ["a", "e", "i", "o", "u"];
  let maxVowel = 0;
  let maxConsonant = 0;

  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      if (map[s[i]] > maxVowel) {
        maxVowel = map[s[i]];
      }
    } else {
      if (map[s[i]] > maxConsonant) {
        maxConsonant = map[s[i]];
      }
    }
  }
  return maxVowel + maxConsonant;
}

let res = FrequentVowelConsonant(s);
console.log(res);
