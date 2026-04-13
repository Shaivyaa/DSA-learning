// Approach 1st

// let str = "luffy is still joyboy";

function lengthOfLastWord(str) {
  let newstr = str.trim().split(" ");
  console.log(newstr);
  for (let i = newstr.length - 1; i < newstr.length; i++) {
    console.log(newstr[i].length);
  }
}

let res = lengthOfLastWord(str);
console.log(res);

// Approach 2

// let str = "  fly me to the moon   ";

function lengthOfLastWord(str) {
  let n = str.length - 1;
  while (n >= 0) {
    if (str[n] === " ") {
      n--;
    } else {
      break;
    }
  }

  let count = 0;
  while (n >= 0) {
    if (str[n] !== " ") {
      n--;
      count++;
    } else {
      break;
    }
  }

  console.log(count, "okkk");
}

let result = lengthOfLastWord(str);
console.log(result);

// Approach 3

let str = "  fly me to the moon   ";

function lengthOfLastWord(str) {
  let n = str.length - 1;
  while (n >= 0) {
    if (str[n] !== " ") {
      break;
    }
    n--;
  }

  let count = 0;
  while (n >= 0) {
    if (str[n] === " ") {
      break;
    }
    n--;
    count++;
  }

  console.log(count, "okkk");
}

let res3 = lengthOfLastWord(str);
console.log(res3);

// approach 4

let str4 = "  fly me to the moon   ";

function lengthOfLastWord(str) {
  let count = 0;
  let n = str.length - 1;
  while (n >= 0) {
    if (str[n] !== " ") {
      count++;
    } else if (count > 0) {
      break;
    }
    n--;
  }
  return count;
}

let res4 = lengthOfLastWord(str);
console.log(res3);
