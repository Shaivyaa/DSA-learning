function starPrint(n) {
  for (let i = 0; i < n; i++) {
    let row = " ";
    let switchh = 1;
    for (let j = 0; j <= i; j++) {
      row = row + switchh;
      if (switchh === 1) {
        switchh = 0;
      } else {
        switchh = 1;
      }
    }
    console.log(row);
  }
}

starPrint(5);
