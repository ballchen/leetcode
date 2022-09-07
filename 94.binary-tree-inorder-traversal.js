/*
 * @lc app=leetcode id=94 lang=javascript
 *
 * [94] Binary Tree Inorder Traversal
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
 * @return {number[]}
 */

function traverse(node) {
  if(!node) return []; 

  return [
    ...traverse(node.left),
    node.val,
    ...traverse(node.right),
  ]
}

var inorderTraversal = function(root) {
  return traverse(root);
};
// @lc code=end

