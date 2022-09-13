/*
 * @lc app=leetcode id=278 lang=javascript
 *
 * [278] First Bad Version
 */

// @lc code=start
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    let high = n;
    let low = 0;
    
    while(high > low) {
      let pivot = Math.floor((high + low) / 2);
      const result = isBadVersion(pivot);
      if(result) {
        high = pivot;
      } else {
        low = pivot + 1;     
      }
    }

    return high
  };
};
// @lc code=end

