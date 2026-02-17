function starPrint(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    //   adding empty spaces j loop
    for (let j = 0; j < n - (i + 1); j++) {
      row = row + " ";
    }
    //   adding stars in end k loop
    for (let k = 0; k < i + 1; k++) {
      row = row + "*";
    }
    console.log(row);
  }
}

starPrint(5);

//    i. n-(i+1). stars
//    0   4.       1
//    1.   3.      2
//    2.   2.      3
//    3     1     4
//    4.    0.    5
