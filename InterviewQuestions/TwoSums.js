// Find indices of two numbers that add up to target.

(nums = [2, 11, 15, 66, 8, 7]), (target = 9);
// Output: [0,1]

function TwoSums(nums, target) {
  let n = nums.length;
  let result;
  for (let i = 0; i < n; i++) {
    for (let j = 1; j < n; j++) {
      if (nums[i] + nums[j] === target) {
        result = [i, j];
      }
    }
  }
  return result;
}

let res = TwoSums(nums, target);
console.log(res);
