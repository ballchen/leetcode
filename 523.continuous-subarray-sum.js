/*
 * @lc app=leetcode id=523 lang=javascript
 *
 * [523] Continuous Subarray Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
  if(nums.length < 2) {
    return false;
  }
  let sums = [0];
  let sum = 0;
  let indexes = new Map();
  indexes.set(0, 0);
  for(let i = 0; i < nums.length; i ++) {
    nums[i] = nums[i] % k;
    sum += nums[i];
    sum = sum % k;
    if(indexes.has(sum) && (i + 1 - indexes.get(sum)) > 1) {
      return true;
    } 
    if(!indexes.has(sum)) {
      indexes.set(sum, i+1)
    }
    
    sums.push(sum)
  }
  // console.log(nums);
  // console.log(sums);
  return false;
};
// @lc code=end

