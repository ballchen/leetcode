/*
 * @lc app=leetcode id=414 lang=javascript
 *
 * [414] Third Maximum Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  nums = Array.from(new Set(nums));

  if(nums.length < 3) {
    return Math.max(...nums);
  }

  let max = -Infinity;
  let second = -Infinity;
  let third = -Infinity;

  for(let i = 0; i < nums.length; i++) {
    if(nums[i] < second && nums[i] > third) {
      third = nums[i];
    }

    if(nums[i] < max && nums[i] > second) {
      third = second;
      second = nums[i];
    }

    if(nums[i] > max) {
      second = max;
      third = max;
      max = nums[i];
    }
  }
  return third;

};
// @lc code=end

