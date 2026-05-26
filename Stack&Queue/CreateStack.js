let stack = [];

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack);

stack.pop();
stack.push(4);
stack.push(5);
stack.push(6);
stack.push(7);

console.log(stack);

let top = stack[stack.length - 1];
console.log(top);

stack[3]; /* Invalid stack operation only use in array */
