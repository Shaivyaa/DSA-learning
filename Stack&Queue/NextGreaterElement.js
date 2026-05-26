let nums1 = [4, 1, 2];
let nums2 = [1, 3, 4, 2];
// o/p - [-1,3,-1]

function nextGreaterElement(nums1, nums2) {
  let ngeMap = {};
  let stack = [];
  let n = nums2.length;

  stack.push(nums2[n - 1]);
  ngeMap[nums2[n - 1]] = -1;

  for (let i = n - 2; i >= 0; i--) {
    let top = stack[stack.length - 1];
    if (nums2[i] < top) {
      ngeMap[nums2[i]] = top;
    } else {
      while (stack.length) {
        if (stack[stack.length - 1] < nums2[i]) {
          stack.pop();
        } else {
          ngeMap[nums2[i]] = stack[stack.length - 1];
          break;
        }
      }
      if (stack.length === 0) {
        ngeMap[nums2[i]] = -1;
      }
    }
    stack.push(nums2[i]);
  }
  let ans = [];
  for (let i = 0; i < nums1.length; i++) {
    ans.push(ngeMap[nums1[i]]);
  }
  return ans;
}

let res = nextGreaterElement(nums1, nums2);
console.log(res);

// Approach 2

let nums = [1, 5, 0, 3, 4, 9, 2, 6, 8];

function nextGreaterElement(nums) {
  let arr = [...nums, ...nums];
  let n = arr.length;
  let stack = [];
  let ans = Array(n).fill(-1);

  stack.push(arr[n - 1]);

  for (let i = n - 2; i >= 0; i--) {
    while (stack.length) {
      let top = stack[stack.length - 1];
      if (arr[i] < top) {
        ans[i] = top;
        break;
      } else {
        stack.pop();
      }
    }
    stack.push(arr[i]);
  }
  return ans.slice(0, n / 2);
}

let res2 = nextGreaterElement(nums);
console.log(res2);
