/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function(nums1, m, nums2, n) {
  if(!nums2.length) return nums1;
  let p1 = m - 1;
  let p2 = n - 1;
  let p = m + n - 1;
  while(p2 >= 0) {
    if(nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1];
      p1 --;
    } else {
      nums1[p] = nums2[p2];
      p2 --;
    }
    p --;
  }
};

// merge([1,2,3,0,0,0], 3, [2,5,6], 3)
// merge([1,0,0,0], 1, [2,5,6], 3)
// merge([2,0], 1, [1], 1)
// merge([2], 1, [], 0)

// @lc code=end


/*----------------------------------------------------------------

var merge = function(nums1, m, nums2, n) {
  if(!nums2.length) return nums1;
  let p1 = m - 1;
  let p2 = n - 1;
  let p = m + n - 1;
  do {
    if (p1 < 0) {
      nums1[p] = nums2[p2--]
    } else if(p2 < 0) {
      nums1[p] = nums1[p1--]
    } else {
      if(nums1[p1] > nums2[p2]) {
        nums1[p] = nums1[p1--];
      } else {
        nums1[p] = nums2[p2--];
      } 
    }
    
    p--
  } while(p >= 0 && (p1 >= 0 || p2 >= 0))
};

*/
