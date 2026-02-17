// To calculate sum of all numbers
// n=5 [which the last number]
// so we will have numbers from 0-5 [0,1,2,3,4,5] sum=n(n+1)/2
// [4,0,1,2,5]

// num =  [4,0,1,2,5]
// totalSum = 15
// numSum = 12
// missingNumber = totalSum - numSum
//               = 15 -12
//               = 3

let num = [4, 0, 1, 2, 5];

function missingNumber(num) {
  let n = num.length;
  // console.log(n)

  let totalSum = (n * (n + 1)) / 2;
  // console.log(totalSum)
  let numSum = 0;
  for (let i = 0; i < num.length; i++) {
    numSum = numSum + num[i];
    // console.log(numSum ,"kk")
  }

  let missingNum = totalSum - numSum;
  return missingNum;
}

let res = missingNumber(num);
console.log(res);
