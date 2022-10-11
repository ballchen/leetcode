/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if(x === 1) {
      return 1;
  }
  if(x === 0) {
      return 0;
  }

  let left = 1;
  let right = x;
  while(left <= right) {
      let mid = parseInt((left + right) / 2);
      if(mid * mid === x) {
        return mid;
      }
      if(mid * mid < x) {
        left = mid + 1;
      }
      if(mid * mid > x) {
        right = mid - 1;
      }
  }

  return right;
  
};

// @lc code=end

/*
直接用 for 去找會太慢，需要使用 binary search
*/

