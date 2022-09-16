/*
 * @lc app=leetcode id=977 lang=javascript
 *
 * [977] Squares of a Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  const result = new Array(nums.length);
  let left = 0;
  let right = nums.length - 1;
  for(let i = nums.length - 1; i >= 0; i--) {
    if(Math.abs(nums[right]) > Math.abs(nums[left])) {
      result[i] = nums[right] ** 2;
      right -- 
    } else {
      result[i] = nums[left] ** 2;
      left ++
    }
  }
  return result;
};
// @lc code=end

