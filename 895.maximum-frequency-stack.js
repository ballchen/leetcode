/*
 * @lc app=leetcode id=895 lang=javascript
 *
 * [895] Maximum Frequency Stack
 */

// @lc code=start

var FreqStack = function() {
  this.count = new Map();
  this.stack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function(val) {
  if(!this.count.has(val)) {
    this.count.set(val, 0);
  }
  this.count.set(val, this.count.get(val) + 1);
  const valFreq = this.count.get(val);
  if(!this.stack[valFreq - 1]) {
    this.stack.push([]);
  }
  this.stack[valFreq - 1].push(val)
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {

  let elem = this.stack[this.stack.length - 1].pop();
  if(this.stack[this.stack.length - 1].length == 0) {
    this.stack.pop();
  }
  this.count.set(elem, this.count.get(elem) - 1);

  return elem;
};

/** 
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */
// @lc code=end




/*
multiple stack
*/