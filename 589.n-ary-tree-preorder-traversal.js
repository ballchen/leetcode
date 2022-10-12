/*
 * @lc app=leetcode id=589 lang=javascript
 *
 * [589] N-ary Tree Preorder Traversal
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
  let result = [];
  function traverse(node) {
    if(!node) {
      return;
    }
    result.push(node.val);
    for(let child of node.children) {
      traverse(child);
    }
  }
  traverse(root);
  return result;
};
// @lc code=end

