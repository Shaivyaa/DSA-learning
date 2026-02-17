function starPrint(n) {
  for (let i = 5; i > 0; i--) {
    let row = " ";
    for (let j = 1; j <= i; j++) {
      row = row + j;
    }
    console.log(row);
  }
}

starPrint(5);
