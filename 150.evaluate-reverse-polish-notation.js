/*
 * @lc app=leetcode id=150 lang=javascript
 *
 * [150] Evaluate Reverse Polish Notation
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  const operations = {
    '+': (a, b) => (parseInt(a) + parseInt(b)),
    '-': (a, b) => (parseInt(a) - parseInt(b)),
    '*': (a, b) => (parseInt(a) * parseInt(b)),
    '/': (a, b) => parseInt((parseInt(a) / parseInt(b)))
  }
  let stack = [];
  for(let n of tokens) {
    if(operations[n]) {
      const b = stack.pop();
      const a = stack.pop();
      const newN = operations[n](parseInt(a), parseInt(b));
      
      stack.push(newN);
      console.log(stack)
    } else {
      stack.push(n)
    }
  }

  return stack.pop();
};
// @lc code=end

/*
注意 / 順序
*/

