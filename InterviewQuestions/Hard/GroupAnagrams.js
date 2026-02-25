let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

function groupAnagrams(strs) {
  const map = {};

  for (let word of strs) {
    const sorted = word.split("").sort().join("");

    if (!map[sorted]) {
      map[sorted] = [];
    }

    map[sorted].push(word);
  }

  return Object.values(map);
}

let res = groupAnagrams(strs);
console.log(res);
