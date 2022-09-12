/*
 * @lc app=leetcode id=110 lang=javascript
 *
 * [110] Balanced Binary Tree
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
var isBalanced = function(root) {


  function traverse(node) {
    if(!node) {
      return [0, true];
    }
    const depth = 1;
    const [leftTreeDepth, isLeftBalanced] = traverse(node.left);
    const [rightTreeDepth, isRightBalanced] = traverse(node.right);

    return [
      depth + Math.max(leftTreeDepth, rightTreeDepth), 
      (Math.abs(rightTreeDepth - leftTreeDepth) <= 1) && isLeftBalanced && isRightBalanced
    ];
    
  }

  const result = traverse(root);
  return result[1];
};
// @lc code=end

/*
更精妙的解法 使用 Infinity 來代表 is not Balanced, 這樣就不用回傳 depth + isBalanced 


  function dfs(node) {
    if(!node) return 0;
    let leftTreeDepth = 1 + dfs(node.left);
    let rightTreeDepth = 1 + dfs(node.right);
    if(Math.abs(leftTreeDepth - rightTreeDepth) > 1) {
      return Infinity;
    }

    return Math.max(leftTreeDepth, rightTreeDepth); 
  }

  return dfs(root)==Infinity?false:true;

*/

