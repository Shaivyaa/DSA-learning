let nums = [3, 2, 1, 5, 3, 4, 8, 3];
let val = 3;

function removeElements(nums, val) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[x] = nums[i];
      x = x + 1;
    }
  }
  return x;
}

const result = removeElements(nums, val);
console.log(result);
