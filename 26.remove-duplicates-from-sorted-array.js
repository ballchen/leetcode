/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let a_pivot = 0;

  for(let i = 1; i < nums.length; i++) {
    if(nums[i] > nums[a_pivot]) {
      a_pivot += 1;
      nums[a_pivot] = nums[i];
    }
  }

  for(let i = a_pivot + 1; i < nums.length; i++) {
    nums[i] = '_'
  }

  return a_pivot + 1;

};
// @lc code=end

