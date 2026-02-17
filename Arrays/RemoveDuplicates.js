// Increasing & Sorted - [1,2,4,6,7,10,14]   a[i+1] > a[i]
// Descreasing & Sorted - [14,10,6,4,3,1]    a[i+1] < a[i]
// Non-Descreasing & Sorted - [1,2,3,3,3,4,4,5,8,9]   a[i+1] >= a[i]

let nums = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5];

function removeDuplicates(nums) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[x]) {
      x = x + 1;
      nums[x] = nums[i];
    }
  }
  return x + 1;
}

const result = removeDuplicates(nums);
console.log(result);
