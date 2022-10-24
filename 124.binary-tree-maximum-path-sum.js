/*
 * @lc app=leetcode id=124 lang=javascript
 *
 * [124] Binary Tree Maximum Path Sum
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
 var maxPathSum = function(root) {
  let max = -Infinity;
  function maxPathSumToLeaf(node) {
    if(!node) {
      return 0;
    }
    let left = maxPathSumToLeaf(node.left);
    let right = maxPathSumToLeaf(node.right);

    max = Math.max(max, left + right + node.val)

    return Math.max(0, node.val + left, node.val + right)
  }

  maxPathSumToLeaf(root);

  return max;
};
// @lc code=end

