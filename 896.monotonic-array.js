/*
 * @lc app=leetcode id=896 lang=javascript
 *
 * [896] Monotonic Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var isMonotonic = function(nums) {
  if(nums.length === 1 || nums.length ===2) {
    return true;
  }
  let checkFunc = (a, b) => {return a <= b};
  if(nums[0] > nums[nums.length - 1]) {
    checkFunc = (a, b) => {return a >= b};
  }  
  
  for(let i = 1; i < nums.length; i ++) {
    if(!checkFunc(nums[i - 1], nums[i])) {
      return false;
    }
  }

  return true;
};
// @lc code=end


