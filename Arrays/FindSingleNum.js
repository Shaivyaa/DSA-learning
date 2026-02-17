// num = [4,1,2,1,2]
// hash = {
//     "4" : 1,
//     "1" : 2,
//     "2" : 2
// }

// --------------------------------------

// 1st approach
let num = [2, 2, 1];

function findSingleNumber(num) {
  let hash = {};

  for (let i = 0; i < num.length; i++) {
    if (!hash[num[i]]) {
      hash[num[i]] = 1;
    } else {
      hash[num[i]]++;
    }
  }

  for (let i = 0; i < num.length; i++) {
    if (hash[num[i]] === 1) {
      return num[i];
    }
  }
}

let res = findSingleNumber(num);
console.log(res);

// --------------------------------------

// 2nd approach
// using XOR (used when we have to eliminate duplicates)

// a (XOR) 0 = a
// a (XOR) a = 0

// eg1 -  1 1 0
//   0 0 0
//   1 1 0

// eg2 - 1 1 0
//   1 1 0
//   0 0 0

let num1 = [4, 1, 2, 2, 1];

function findSingleNumber(num1) {
  let xor = 0;

  for (let i = 0; i < num1.length; i++) {
    xor = xor ^ num1[i];
  }
  return xor;
}

let res1 = findSingleNumber(num1);
console.log(res1);
