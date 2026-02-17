// print from n to 1

function printNos(num) {
  if (num < 1) return;

  console.log(num);
  num = num - 1;
  printNos(num);
}

let a = 10;
printNos(a);
