/*
 * @lc app=leetcode id=33 lang=javascript
 *
 * [33] Search in Rotated Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while(left <= right) {
    let mid = Math.floor((left + right) / 2);
    
    if (nums[mid] === target) {
      return mid;
    }

    //切一半 一定有一半是 sorted array, 看 target 有沒有在那個 sorted array 中，沒的話把另一邊繼續切一半
    if(nums[mid] >= nums[left]) {
      // if left is sorted
      if(nums[mid] >= target && nums[left] <= target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } 
    
    else {
      //if right is sorted
      if(nums[mid] <= target && nums[right] >= target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
  
};
// @lc code=end

search([4,5,6,7, 1, 2, 3], 2);

/*
應該是 some how 用 binary search 達成
1. 想法 先 search 一次找到轉折點 index 把 array 歸位，再 search 一次找到 target




*/
