/*
 * @lc app=leetcode id=226 lang=javascript
 *
 * [226] Invert Binary Tree
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
  const stack = [root];

  while(stack.length > 0) {
    const node = stack.pop();
    if(!node) continue;
    
    const temp = node.left;
    node.left = node.right
    node.right = temp;

    if(node.right) stack.push(node.right);
    if(node.left) stack.push(node.left);
    
  }

  return root;
  
};
// @lc code=end

