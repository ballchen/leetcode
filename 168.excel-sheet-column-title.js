/*
 * @lc app=leetcode id=168 lang=javascript
 *
 * [168] Excel Sheet Column Title
 */

// @lc code=start
/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
  const letters = '#ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let n = columnNumber;
  let output = ''
  while(n > 0) {
    let letterIndex = n % 26
    let next = parseInt(n / 26)

    
    
    if(letterIndex == 0) {
      letterIndex = 26
      next = next - 1;
    }
    output = `${letters[letterIndex]}${output}`;
    n = next;

  }

  return output
};
// @lc code=end

