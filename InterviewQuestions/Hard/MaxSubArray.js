// Input: [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6 (subarray [4,-1,2,1])

// Method 1
function maxSubArray(nums) {
  let maxSum = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    let currentSum = 0;

    for (let j = i; j < nums.length; j++) {
      currentSum += nums[j];
      maxSum = Math.max(maxSum, currentSum);
    }
  }

  return maxSum;
}

// Method 2
function maxSubArray(nums) {
  let max = nums[0];
  let curr = nums[0];

  for (let i = 1; i < nums.length; i++) {
    curr = Math.max(nums[i], curr + nums[i]);
    max = Math.max(max, curr);
  }
  return max;
}
