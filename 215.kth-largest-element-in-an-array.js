/*
 * @lc app=leetcode id=215 lang=javascript
 *
 * [215] Kth Largest Element in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  k = nums.length - k;

  function shuffle(array) {
    for(let i = 0; i < array.length; i++) {
      const newIndex = Math.floor(Math.random() * array.length);
      [array[i], array[newIndex]] = [array[newIndex], array[i]];
    }

  }

  function quickSelect(l, r) {
    let pivot = nums[r];
    let p = l;

    for(let i = l; i < r; i++) {
      if(nums[i] <= pivot) {
        [nums[p], nums[i]] = [nums[i], nums[p]];
        p++;
      }
    }
    [nums[p], nums[r]] = [nums[r], nums[p]];

    if(p > k) {
      return quickSelect(l, p - 1);
    } else if(p < k) {
      return quickSelect(p + 1, r);
    } else {
      return nums[p]
    }
  }

  shuffle(nums);
  return quickSelect(0, nums.length - 1)

};


// @lc code=end



/*
不能 sort
使用 quick select 
最差的 case 是 O(N*N) 平均是 O(N)

可以用 shuffle 或是 random 一個 pivot 來避免選到最差解
*/
