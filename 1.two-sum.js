/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let temp_map = {};

  for (let i = 0; i < nums.length; ++i) {
    
    let left = target - nums[i];
    if (temp_map[left] !== undefined) {
      return [temp_map[left], i]
    }
    temp_map[nums[i]] = i;
  }
};
// @lc code=end

