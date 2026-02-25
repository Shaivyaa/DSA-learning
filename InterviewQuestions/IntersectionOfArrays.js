let nums1 = [10, 20, 30];
let nums2 = [30, 40, 50, 10];
// Output: [10,30]
// Common in both arrays

function intersectionOfArray(nums1, nums2) {
  let result = [];
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j] && !result.includes(nums1[i])) {
        result.push(nums1[i]);
      }
    }
  }
  return result;
}

let res = intersectionOfArray(nums1, nums2);
console.log(res);
