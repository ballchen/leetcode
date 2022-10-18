/*
 * @lc app=leetcode id=224 lang=javascript
 *
 * [224] Basic Calculator
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  let stack = [];
  let output = 0;
  let cur = 0;
  let sign = 1;

  function isDigit(ch) {
    return /[0-9]+/.test(ch);
  }

  function isOperator(ch) {
    return ch === '+' || ch === '-';
  }

  for(let i = 0; i < s.length; i++) {
    let ch = s[i];
    
    if(isDigit(ch)) {
      cur = (cur*10 + parseInt(ch))
    } else if(isOperator(ch)) {
      output += (cur * sign);
      cur = 0;
      if(ch == '-'){
        sign = -1;
      } else if(ch == '+') {
        sign = 1;
      }
    } else if(ch == '(') {
      stack.push(output);
      stack.push(sign);
      output = 0;
      sign = 1;
    } else if(ch == ')') {
      output += (cur * sign)
      let savedSign = stack.pop();
      let savedOutput = stack.pop();
      output *= savedSign;
      output += savedOutput;
      cur = 0;
    }
  }
  return output + (cur * sign);
};
// @lc code=end


