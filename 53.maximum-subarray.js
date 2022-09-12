/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let maxEndHere = nums[0];
  let maxGlobal = nums[0];
  for(let i = 1; i < nums.length; ++i) {
    maxEndHere = Math.max(nums[i], maxEndHere + nums[i])
    maxGlobal = Math.max(maxGlobal, maxEndHere);
  }

  return maxGlobal;
};
// @lc code=end

