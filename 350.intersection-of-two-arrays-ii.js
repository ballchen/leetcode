/*
 * @lc app=leetcode id=350 lang=javascript
 *
 * [350] Intersection of Two Arrays II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersect = function(nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  let p1 = 0;
  let p2 = 0;
  let result = [];

  while(p1 < nums1.length && p2 < nums2.length) {
    if(nums1[p1] < nums2[p2]) {
      while(nums1[p1] < nums2[p2] && p1 < nums1.length) {
        p1++;
      }
    } else if(nums2[p2] < nums1[p1]) {
      while(nums2[p2] < nums1[p1] && p2 < nums2.length) {
        p2++;
      }
    } else {
      result.push(nums1[p1]);
      p1++;
      p2++;
    }
    console.log(p1, p2)
  }

  return result;

};


intersect([4,9,5], [9,4,9,8,4])

// @lc code=end

