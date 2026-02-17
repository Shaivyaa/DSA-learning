// sum of all odd elements in an array

let arr = [5, 4, 3, 2, 1];

function sum(i) {
  let isOdd = arr[i] % 2 !== 0;
  if (i === 0) {
    return isOdd ? arr[i] : 0;
  }

  return (isOdd ? arr[i] : 0) + sum(i - 1);
}

console.log(sum(arr.length - 1));
