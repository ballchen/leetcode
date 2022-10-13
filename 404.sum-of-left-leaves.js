/*
 * @lc app=leetcode id=404 lang=javascript
 *
 * [404] Sum of Left Leaves
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
 var sumOfLeftLeaves = function(root) {
  let sum = 0
  function traverse(node, dir = 'root') {
      if(!node.left && !node.right) {
          if(dir == 'left') {
              sum += node.val;
          }
          return;
      }

      if(node.left) {
          traverse(node.left, 'left');
      }
      if(node.right) {
          traverse(node.right, 'right');
      }
  }

  traverse(root);
  return sum;
};
// @lc code=end

