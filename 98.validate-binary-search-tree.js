/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98] Validate Binary Search Tree
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
 * @return {boolean}
 */
var isValidBST = function(root) {

  function dfs(node, minLeft, maxRight) {
    if(!node) {
      return true;
    }
  
    if(node.val >= maxRight || node.val <= minLeft) {
      return false;
    }
  
    return dfs(node.left, minLeft, node.val) && dfs(node.right, node.val, maxRight);
  }

  return dfs(root, -Infinity, Infinity);
  
};
// @lc code=end

/*
詳解
注意可能會要處理 node 相等的 case
https://leetcode.com/problems/validate-binary-search-tree/discuss/783930/Easy-to-understand-2-lines-solution!-O(n)-with-Examples-and-Explanation-JavaScript
*/

