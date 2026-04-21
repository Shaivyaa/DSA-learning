let jewels = "aA";
let stones = "aAAbbbb";

// Method 1
function jewelsStones(jewels, stones) {
  let count = 0;
  for (let i = 0; i < stones.length; i++) {
    if (jewels.includes(stones[i])) {
      count++;
    }
  }
  return count;
}

let res = jewelsStones(jewels, stones);
console.log(res);

// Method 2
function jewelsStones(jewels, stones) {
  let count = 0;
  for (let i = 0; i < stones.length; i++) {
    for (let j = 0; j < jewels.length; j++) {
      if (jewels[j] === stones[i]) {
        count++;
        break;
      }
    }
  }
  return count;
}

let res1 = jewelsStones(jewels, stones);
console.log(res1);

// Method 3
function jewelsStones(jewels, stones) {
  let jSet = new Set();

  for (let i = 0; i < jewels.length; i++) {
    jSet.add(jewels[i]);
  }

  let count = 0;
  for (let i = 0; i < stones.length; i++) {
    if (jSet.has(stones[i])) {
      count++;
    }
  }
  return count;
}

let res3 = jewelsStones(jewels, stones);
console.log(res3);
