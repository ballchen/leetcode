/*
 * @lc app=leetcode id=232 lang=javascript
 *
 * [232] Implement Queue using Stacks
 */

// @lc code=start

var MyQueue = function() {
  this.stack = [];
  this.stackTemp = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  while(this.stack.length > 0) {
    this.stackTemp.push(this.stack.pop())
  }
  this.stack.push(x);
  while(this.stackTemp.length > 0) {
    this.stack.push(this.stackTemp.pop());
  }
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  return this.stack.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  return this.stack[this.stack.length - 1]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return !this.stack.length
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

/* 
 Js 的 array push 跟 pop ＝ stack

 arr = [2]
 arr.push(1) => [2, 1] // stack.push
 arr.pop() => 1, [2]  // stack pop
 First In Last out

 
*/
