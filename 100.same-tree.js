/*
 * @lc app=leetcode id=100 lang=javascript
 *
 * [100] Same Tree
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

function traverse(node1, node2) {
  if(!node1 && !node2) {
    return true;
  }
  return (
    (node1 ? node1.val : null) === (node2 ? node2.val : null) &&
    traverse((node1 && node1.left), (node2 && node2.left)) && 
    traverse((node1 && node1.right), (node2 && node2.right))
  )
}

var isSameTree = function(p, q) {
  return traverse(p, q);
};
// @lc code=end

