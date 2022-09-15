/*
 * @lc app=leetcode id=258 lang=javascript
 *
 * [258] Add Digits
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  while(num >= 10) {
    let n = num % 10;
    num = parseInt(num / 10) + n;
  }

  return num;
};
// @lc code=end

