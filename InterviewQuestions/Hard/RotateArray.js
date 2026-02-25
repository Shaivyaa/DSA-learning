let nums = [1, 2, 3, 4, 5];
let k = 2;

function rotate(nums, k) {
  k = k % nums.length;

  const lastPart = nums.slice(-k);
  const firstPart = nums.slice(0, nums.length - k);

  return [...lastPart, ...firstPart];
}

let res = rotate(nums, k);
console.log(res);
