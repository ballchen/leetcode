/*
 * @lc app=leetcode id=704 lang=javascript
 *
 * [704] Binary Search
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let low = 0
  let high = nums.length - 1;
  let mid;

  while(low <= high) {
    mid = Math.floor((low + high) / 2);

    if(nums[mid] === target) {
      return mid
    } else if(nums[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
  
};
// @lc code=end

