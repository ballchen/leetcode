/*
 * @lc app=leetcode id=78 lang=javascript
 *
 * [78] Subsets
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const results = [[]];
  for (let i = 0; i < nums.length; i++) {
    let subResults = [];
    for(let result of results) {
      subResults.push([...result, nums[i]])
    }
    results.push(...subResults);
  }
  return results;
};

subsets([1,2,3])
// @lc code=end

