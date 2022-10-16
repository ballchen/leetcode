/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
  let total = nums1.length + nums2.length;
  let half = parseInt(total / 2);
  let A = nums1;
  let B = nums2;

  if(A.length > B.length) {
    [A, B] = [B, A];
  }

  let left = 0;
  let right = A.length - 1;

  while(true) {
    
    let i = Math.floor((left + right) / 2);
    let j = half - i - 2;
    // B
    // 0 1 2 3 4 5
    //     *
    //     l r

    // A
    // 0 1 2 3
    //   *
    //   l r

    let ALeft = (i >= 0) ? A[i] : -Infinity;
    let ARight = (i + 1 <= A.length - 1) ? A[i + 1] : Infinity;
    let BLeft = (j >= 0) ? B[j]: -Infinity;
    let BRight = (j + 1 <= B.length - 1) ? B[j+1] : Infinity;

    if(ALeft <= BRight && ARight >= BLeft) {
      // return midian
      if(total % 2 == 1) {
        return Math.min(ARight, BRight);
      } else {
        return (Math.max(ALeft, BLeft) + Math.min(ARight, BRight)) / 2;
      }
    } else if(ALeft > BRight) {
      right = i - 1;
    } else if(BLeft > ARight) {
      left = i + 1
    }
  }
};

// console.log(
// findMedianSortedArrays([1,3], [2])
// )

// @lc code=end

/*

 var findMedianSortedArrays = function(nums1, nums2) {
  let totalLength = nums1.length + nums2.length;
  let mid = Math.floor((totalLength - 1) / 2);
  
  for(let i = 0; i < nums1.length; i ++) {
      let index = bSearch(nums1[i], nums2);
      nums2.splice(index, 0, nums1[i]);        
  }


  if(totalLength % 2 == 0) {
      return (nums2[mid] + nums2[mid + 1]) / 2
  }

  return nums2[mid];

  function bSearch(target, array) {
    let left = 0;
    let right = array.length - 1;
    let mid = -1;
    while(left <= right) {
      mid = parseInt((left + right) / 2);
      if(array[mid] == target) {
        return mid
      } else if (array[mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
        
    }

    if(target > array[mid]) {
      return mid + 1;
    }
    return mid;
  }
};
*/

