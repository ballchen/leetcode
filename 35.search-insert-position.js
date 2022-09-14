/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let high = nums.length - 1;
  let low = 0;
  while(low < high) {
    let pivot = Math.floor((high + low) / 2);
    if(nums[pivot] === target) {
      return pivot;
    }
    if(target > nums[pivot]) {
      low = pivot + 1;
    } else {
      high = pivot;
    }
  }


  if(target > nums[low]) {
    return low + 1
  } else {
    return low
  }

};
// @lc code=end

