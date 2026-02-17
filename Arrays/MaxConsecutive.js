let num = [1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0];

function maxConsecutive(num) {
  let currentCount = 0;
  let maxCount = 0;

  for (let i = 0; i < num.length; i++) {
    if (num[i] === 1) {
      currentCount++;
    } else {
      if (currentCount > maxCount) {
        maxCount = currentCount;
        currentCount = 0;
      }
    }
  }
  return Math.max(maxCount, currentCount);
}

let res = maxConsecutive(num);
console.log(res);
