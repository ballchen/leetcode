/*
 * @lc app=leetcode id=191 lang=javascript
 *
 * [191] Number of 1 Bits
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  let result = 0;
  while(n > 0) {
    result += n%2;
    n = n >>> 1;
  }

  return result;
};
// @lc code=end


/*
有點偷吃步的作法，轉成 bit string 後每一位數都加起來
var hammingWeight = function(n) {
  let result = 0;
  for(let bit of n.toString(2)) {
    result += parseInt(bit);
  }
  return result;
};
*/

/*
使用 >>> operator
unsigned right operator

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift
也可以 n = parseInt(n/2)
var hammingWeight = function(n) {
  let result = 0;
  while(n > 0) {
    result += n%2;
    n = n >>> 1;
  }

  return result;
};
*/

