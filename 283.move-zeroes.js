/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let pointer = 0;
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] != 0) {
      [nums[pointer], nums[i]] = [nums[i], nums[pointer]];
      pointer ++;
    }
  }

  return nums;
};
// @lc code=end

/*
var moveZeroes = function(nums) {
  let len = nums.length;
  let pivot = 0;

  while(pivot < len) {
    if(nums[pivot] === 0) {
      nums.push(nums.splice(pivot, 1));
    } else {
      pivot ++
    }
    
  }
    
  
  return nums;
};
*/

/*
用一個 pointer 指著 0
*/

