var MyQueue = function () {
  this.q1 = [];
  this.q2 = [];
};

MyQueue.prototype.push = function (x) {
  this.q1.push(x);
};

MyQueue.prototype.pop = function () {
  let len = this.q1.length;

  for (let i = 0; i < len - 1; i++) {
    this.q2.push(this.q1.pop());
  }

  let ans = this.q1.pop();

  let temp = this.q1;
  this.q1 = this.q2;
  this.q2 = temp;

  return ans;
};

MyQueue.prototype.peek = function () {
  let len = this.q1.length;

  for (let i = 0; i < len - 1; i++) {
    this.q2.push(this.q1.shift());
  }

  // front element
  let ans = this.q2[0];

  // move last element also
  this.q2.push(this.q1.shift());

  let temp = this.q1;
  this.q1 = this.q2;
  this.q2 = temp;

  return ans;
};

MyQueue.prototype.empty = function () {
  return this.q1.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
