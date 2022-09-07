/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let new_array_pivot = 0;
  for (let i = 0; i < nums.length; ++i) {
    nums[new_array_pivot] = nums[i]
    if(nums[i] !== val) {
      new_array_pivot += 1;
    }
  }
  return new_array_pivot;
};
// @lc code=end

/*
為了要達到 O(1) 的 memory use
需要把原本的 input array 當作新的用
設定一個 pivot 代表 return array 的 length
iterate input array 一次
如果 nums(i) 不等於 val ，new_array_pivot increase by 1 然後 nums(new_array_pivot) = nums(i)
這樣可以在一次 iteration 就把新的 array 做出來
*/


