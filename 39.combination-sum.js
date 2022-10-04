/*
 * @lc app=leetcode id=39 lang=javascript
 *
 * [39] Combination Sum
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  let results = [];

  for (let i = 0; i < candidates.length; i++) {
    const candidate = candidates[i];
    if(target === candidate) {
      results.push([candidate]);
    }
    let childTarget = target - candidate;
    if(childTarget > 0) {
      const childResults = combinationSum(candidates.slice(i), childTarget);
      for(let childResult of childResults) {
        results.push([candidate , ...childResult]);
      }
    }
  }
  return results;
};

// @lc code=end

