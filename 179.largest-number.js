/*
 * @lc app=leetcode id=179 lang=javascript
 *
 * [179] Largest Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string}
 */
 var largestNumber = function(nums) {
  nums.sort((a, b) => {
    let ba = b.toString() + a.toString();
    let ab = a.toString() + b.toString();
    return ba - ab
  })
  

  return nums.join("") || '0'

};
// @lc code=end



