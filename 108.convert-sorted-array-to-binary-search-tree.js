/*
 * @lc app=leetcode id=108 lang=javascript
 *
 * [108] Convert Sorted Array to Binary Search Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {

  function arrayToTree(start, end) {
    if(start > end) {
      return null;
    }
    let mid = parseInt((start + end) / 2);
    const root = new TreeNode(nums[mid]);
    root.left = arrayToTree(start, mid - 1)
    root.right = arrayToTree(mid + 1, end)

    return root;
  }
  
  return arrayToTree(0, nums.length - 1);

};
// @lc code=end

/*
加速方法 不要 slice array 傳 index 就好
slice 也有複雜度
*/

