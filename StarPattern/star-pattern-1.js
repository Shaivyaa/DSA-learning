function starPrint(n) {
  for (let i = 0; i < n; i++) {
    / *  responsible for rows  */;
    let row = " ";
    for (let j = 0; j < n; j++) {
      / *  responsible for columns  */;
      row = row + "*";
    }
    console.log(row);
  }
}

starPrint(5);
