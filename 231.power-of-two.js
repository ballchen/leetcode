/*
 * @lc app=leetcode id=231 lang=javascript
 *
 * [231] Power of Two
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  return n <= 0 ? false : !(n & (n-1)) 
};
// @lc code=end


/*
如果 N 是 2 進位
bitwise 一定是 1000000 (1 後面接 n 個 0)
n-1 一定是 0 111111111 (0 後面接 n 個 1)
這時候 n & (n-1) 就會是 false
*/