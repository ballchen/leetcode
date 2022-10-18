/*
 * @lc app=leetcode id=189 lang=javascript
 *
 * [189] Rotate Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  let len = nums.length;
  k = k % len;

  function reverseNumsArray(l, r) {
    while(l < r) {
      [nums[l], nums[r]] = [nums[r], nums[l]];
      l++;
      r--;
    }
  }
  reverseNumsArray(0, len - 1);
  reverseNumsArray(0, k - 1);
  reverseNumsArray(k, len - 1)

};
// @lc code=end

/*

NeetCode 漂亮解 inplace o(n)
https://www.youtube.com/watch?v=BHr381Guz3Y

*/

/*

var rotate = function(nums, k) {
  let len = nums.length;
  k = k % len;
  let left = nums.splice(len - k, k);
  nums.unshift(...left);
};
*/

