/*
 * @lc app=leetcode id=137 lang=javascript
 *
 * [137] Single Number II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
  let map = new Map();
  for(let num of nums) {
      if(!map.has(num)) {
          map.set(num, 1);
      } else if(map.get(num) == 1) {
          map.set(num, map.get(num) + 1)
      } else if(map.get(num) == 2) {
          map.delete(num)
      }
  }
  
  const iterator = map.keys()

  return iterator.next().value
};
// @lc code=end

