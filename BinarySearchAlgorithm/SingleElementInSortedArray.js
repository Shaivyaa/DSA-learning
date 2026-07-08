let arr = [1, 1, 3, 3, 4, 5, 5];

function singleNonDuplicate(arr) {
  let l = 0;
  let r = arr.length - 1;

  while (l <= r) {
    let m = l + Math.floor((r - l) / 2);
    if (arr[m] === arr[m - 1]) {
      let leftCount = m - 1 - l;
      if (leftCount % 2 === 1) {
        r = m - 2;
      } else {
        l = m + 1;
      }
    } else if (arr[m] === arr[m + 1]) {
      let leftCount = m - l;
      if (leftCount % 2 === 1) {
        r = m - 1;
      } else {
        l = m + 2;
      }
    } else {
      return arr[m];
    }
  }
}

let res = singleNonDuplicate(arr);
console.log(res);
