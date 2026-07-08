let nums = [5, 7, 7, 8, 8, 10];
let target = 8;

// Approach 1
function searchRange(nums, target) {
  let l = 0;
  let r = nums.length - 1;
  let ans = [-1, -1];

  while (l < r) {
    let m = l + Math.floor((r - l) / 2);
    if (nums[m] < target) {
      l = m + 1;
    } else {
      r = m;
    }
  }

  if (nums[l] === target) {
    ans[0] = l;
  }

  l = 0;
  r = nums.length - 1;

  while (l < r) {
    let m = l + Math.ceil((r - l) / 2);
    if (nums[m] > target) {
      r = m - 1;
    } else {
      l = m;
    }
  }

  if (nums[l] === target) {
    ans[1] = l;
  }

  return ans;
}

let res = searchRange(nums, target);
console.log(res);

// Approach 2

function searchRange(nums, target) {
  let l = 0;
  let r = nums.length - 1;
  let ans = [-1, -1];

  while (l <= r) {
    let m = l + Math.floor((r - l) / 2);
    if (nums[m] === target) {
      ans[0] = m;
      r = m - 1;
    } else if (nums[m] < target) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }

  l = 0;
  r = nums.length - 1;

  while (l <= r) {
    let m = l + Math.floor((r - l) / 2);
    if (nums[m] === target) {
      ans[1] = m;
      l = m + 1;
    } else if (nums[m] < target) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }

  return ans;
}

let res2 = searchRange(nums, target);
console.log(res2);
