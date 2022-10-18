/*
 * @lc app=leetcode id=349 lang=javascript
 *
 * [349] Intersection of Two Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersection = function(nums1, nums2) {
  let a = nums1;
  let b = nums2;
  let set = new Set();
  let result = [];

  if(a.length > b.length) {
    [a, b] = [b, a];
  }
  
  for(let n of b) {
    set.add(n);
  }

  for(let n of a) {
    if(set.has(n)) {
      result.push(n);
      set.delete(n);
    }
  }

  return result;
};
// @lc code=end

