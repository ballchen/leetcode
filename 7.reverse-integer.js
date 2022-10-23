/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let sign = 1;
  let absX = Math.abs(x);
  let result = 0
  let MAX_LIMIT = 214748364; //Math.pow(2, 31) /10
  let MIN_LIMIT = -214748364;
  if(x < 0) {
    sign = -1;
  }

  while(absX) {
    if(sign > 0 && result > MAX_LIMIT) {
      return 0;
    }
    if(sign < 0 && result * sign < MIN_LIMIT) {
      console.log(result);
      return 0;
    }
    let mod = absX % 10;
    absX = Math.floor(absX / 10);
    result = 10 * result + mod
  }

  return result * sign;
};

// @lc code=end

