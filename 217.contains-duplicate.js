/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let last = null;
  nums.sort();
  for(let num of nums) {
    if(last === num) {
      return true
    } 
    last = num;
  }
  return false;
};
// @lc code=end

/*
1. 先 sort 再 iterate , time complexity = O(NlogN) mem O(1)

var containsDuplicate = function(nums) {
  let last = null;
  nums.sort();
  for(let num of nums) {
    if(last === num) {
      return true
    } 
    last = num;
  }
  return false;
};

2. 用一個 hashmap 去記出現的數字 time complexity O(N) mem O(N)

var containsDuplicate = function(nums) {
  const count = {};
  for(let num of nums) {
    if(count[num]) {
      return true;
    } else {
      count[num] = 1;
    }
  }
  return false;
};
*/

