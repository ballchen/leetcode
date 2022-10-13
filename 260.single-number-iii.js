/*
 * @lc app=leetcode id=260 lang=javascript
 *
 * [260] Single Number III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
  let map = new Map();
  for(let num of nums) {
      if(!map.has(num)) {
          map.set(num, 1);
      } else if(map.get(num) == 1) {
          map.delete(num)
      } 
  }
  
  let results = [];
  map.forEach((value, key) => {
      results.push(key);
  }) 
  
  return results;
};
// @lc code=end

