/*
 * @lc app=leetcode id=144 lang=javascript
 *
 * [144] Binary Tree Preorder Traversal
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
var preorderTraversal = function(root) {
  const stack = [];
  const output = [];

  if(!root) {
    return [];
  }

  stack.push(root);

  while(stack.length) {
    const node = stack.pop();
    output.push(node.val);
    if(node.right) {
      stack.push(node.right);
    }
    if(node.left) {
      stack.push(node.left);
    }
  }

  return output;
};
// @lc code=end

