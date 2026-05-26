let arr = [73, 74, 75, 71, 69, 72, 76, 73];

function dailyTemperature(arr) {
  let stack = [];
  let n = arr.length;
  let ans = Array(n).fill(0);

  stack.push(n - 1);
  ans[n - 1] = 0;

  for (let i = n - 2; i >= 0; i--) {
    while (stack.length) {
      let top = stack[stack.length - 1];

      if (arr[i] >= arr[top]) {
        stack.pop();
      } else {
        ans[i] = top - i;
        break;
      }
    }
    if (!stack.length) {
      ans[i] = 0;
    }
    stack.push(i);
  }
  return ans;
}

let res = dailyTemperature(arr);
console.log(res);
