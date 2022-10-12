/*
 * @lc app=leetcode id=590 lang=javascript
 *
 * [590] N-ary Tree Postorder Traversal
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {

  const result = [];
  function traverse(node) {
    if(!node) return null;
    for(let child of node.children) {
      traverse(child);
    }
    result.push(node.val)
  }
  traverse(root);

  return result;
  
};
// @lc code=end

