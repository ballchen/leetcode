/*
 * @lc app=leetcode id=617 lang=javascript
 *
 * [617] Merge Two Binary Trees
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */

function traverse(node1, node2) {
  if(!node1 && !node2) {
    return null;
  }
  const mergedValueOfThisNode = (node1? node1.val : 0) + (node2? node2.val : 0)
  const mergedNode = new TreeNode(
    mergedValueOfThisNode
  )
  mergedNode.left = traverse((node1 ? node1.left : null), (node2 ? node2.left : null));
  mergedNode.right = traverse((node1 ? node1.right : null), (node2 ? node2.right : null));

  return mergedNode;
}

var mergeTrees = function(root1, root2) {
  return traverse(root1, root2);
};
// @lc code=end

