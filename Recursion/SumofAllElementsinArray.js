// sum of all elements in an array

let arr = [5, 4, 3, 2, 1];

function sum(i) {
  // let add = 0;

  // for(let i=0;i<arr.length;i++) {
  //     add = add + arr[i]
  // }

  // return add

  if (i === 0) return arr[i];

  return arr[i] + sum(i - 1);
}

console.log(sum(arr.length - 1));
