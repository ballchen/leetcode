/*
 * @lc app=leetcode id=257 lang=javascript
 *
 * [257] Binary Tree Paths
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  let leafs = [];
  
  function dfs(node, path) {

    path += `${!path.length ? "" : "->"}${node.val}`;
    if(!node.left && !node.right) {
      leafs.push(path);
      return;
    }
    if(node.left) {
      dfs(node.left, path);
    }
    if(node.right) {
      dfs(node.right, path);
    }
    
  }
  dfs(root, "");
  return leafs;
};
// @lc code=end

/*
使用陣列的話要想辦法解決共用記憶體空間的問題，可能要處理 deepclone 的問題 但太麻煩直接用 string 比較簡單
*/

