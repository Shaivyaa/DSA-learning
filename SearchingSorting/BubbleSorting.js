// sorted and ascending
// For eg: If I have n = 4 then in first iteration i will iterate for n-1 times that is 3 times
// in second interation i will iterate for n-2 times that is 2 times
// in 3 iteration i will iterate for n-1 times that is 1 time

// For eg: n=10
//         -> 9 times
//         -> 8 times
//            .... so on

// After first iteration i will bubble up largest element in the end

// Time Complexity of Bubble sort is n^2 == O(n^2) which is not good complexity it is worst case complexity

let arr = [5, 2, 4, 1];
// above arr iteration will be n-1 3 times and in all 3 times first will have n-1, 2nd will be n-2, third will be n-3

function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let isSwapped = false;
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let k = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = k;

        isSwapped = true;
      }
    }
    if (!isSwapped) break;
  }
  return arr;
}

let res = bubbleSort(arr);
console.log(res);
