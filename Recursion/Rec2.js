// print from 1 to n

function printNos(num) {
  if (num === 11) return;

  console.log(num);
  num = num + 1;
  printNos(num);
}

let a = 1;
printNos(a);
