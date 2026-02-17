// let nums1 = [1, 2, 3, 0, 0, 0];
// let nums2 = [2, 5, 6];
// let n = 3;
// let m = 3;

// 1st Approach

function mergeSort(nums1, n, nums2, m) {
  let numsCopy = nums1.slice(0, m);
  // console.log(numsCopy)

  let p1 = 0;
  let p2 = 0;

  for (let i = 0; i < m + n; i++) {
    if (p2 >= n || (p1 < m && nums1[p1] < nums2[p2])) {
      nums1[i] = numsCopy[p1];
      p1++;
    } else {
      nums1[i] = nums2[p2];
      p2++;
    }
  }
  return nums1;
}

let res1 = mergeSort(nums1, n, nums2, m);
console.log(res1);

// 2nd Approach

// let nums1 = [1, 2, 3, 0, 0, 0];
// let nums2 = [2, 5, 6];
// let n = 3;
// let m = 3;

function mergeSort(nums1, n, nums2, m) {
  let p1 = m - 1;
  let p2 = n - 1;

  for (let i = m + n - 1; i >= 0; i--) {
    if (p2 < 0) break;

    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[i] = nums1[p1];
      p1--;
    } else {
      nums1[i] = nums2[p2];
      p2--;
    }
  }
  return nums1;
}

let res2 = mergeSort(nums1, n, nums2, m);
console.log(res2);
