/*
 * @lc app=leetcode id=111 lang=javascript
 *
 * [111] Minimum Depth of Binary Tree
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
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  if(!root) return 0;
  if(!root.left) return minDepth(root.right) + 1;
  if(!root.right) return minDepth(root.left) + 1;
  return Math.min(minDepth(root.right), minDepth(root.left)) + 1;
};
// @lc code=end


/*
注意要是 leaf 才算是底 也就是 left 跟 right 都沒有
*/