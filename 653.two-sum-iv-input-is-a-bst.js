/*
 * @lc app=leetcode id=653 lang=javascript
 *
 * [653] Two Sum IV - Input is a BST
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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
  let set = new Set()
  function traverse(node) {
      if(!node) return false;
      if(set.has(node.val)) {
          return true;
      }
      set.add((k - node.val))

      return traverse(node.left) || traverse(node.right)
  }

  return traverse(root);

};
// @lc code=end

/*
普通的 dfs traverse

var findTarget = function(root, k) {
  let map = {}
  function traverse(node) {
      if(!node) return false;
      if(map[node.val]) {
          return true;
      }
      map[k - node.val] = true;
      return traverse(node.left) || traverse(node.right)
  }

  return traverse(root);

};
*/



