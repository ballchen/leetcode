/*
 * @lc app=leetcode id=145 lang=javascript
 *
 * [145] Binary Tree Postorder Traversal
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
var postorderTraversal = function(root) {
  if(!root) {
    return []
  }

  const stack = [];
  const output = [];

  stack.push(root);
  
  while(stack.length) {
    const node = stack.pop();
    if(node.left) stack.push(node.left);
    if(node.right) stack.push(node.right);
    output.push(node.val);
  }

  return output.reverse();
};
// @lc code=end

