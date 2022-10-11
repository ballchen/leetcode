/*
 * @lc app=leetcode id=334 lang=javascript
 *
 * [334] Increasing Triplet Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
  if(nums.length < 3) {
      return false;
  }
  let min1 = nums[0];
  let min2 = Infinity;

  for(let num of nums) {
    if(num > min2) {
      return true;
    }
    if(num > min1) {
      min2 = num;
    } else {
      min1 = num
    }
    
  }

  return false;
};


increasingTriplet([1,5,0,4,1,3]);
// @lc code=end

/*
很像 trapping rain water

var increasingTriplet = function(nums) {
  if(nums.length < 3) {
      return false;
  }
  const rightMaxArray = new Array(nums.length).fill(-Infinity);
  const leftMinArray = new Array(nums.length).fill(Infinity);

  let currentMax = -Infinity;
  for(let i = nums.length - 1; i >= 0; --i) {
      currentMax = Math.max(currentMax, nums[i])
      rightMaxArray[i] = currentMax;
  }
  
  let currentMin = Infinity;
  for(let i = 0; i < nums.length; ++i) {
      currentMin = Math.min(currentMin, nums[i])
      leftMinArray[i] = currentMin;
  }

  for(let i = 1; i < nums.length - 1; i++) {
    if(rightMaxArray[i] > nums[i] && leftMinArray[i] < nums[i]) {
      return true;
    }
  }
  return false;
};

*/

