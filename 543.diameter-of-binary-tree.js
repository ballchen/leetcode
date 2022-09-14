/*
 * @lc app=leetcode id=543 lang=javascript
 *
 * [543] Diameter of Binary Tree
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
var diameterOfBinaryTree = function(root) {
  let maxDiameter = 0;
  function dfs(node) {
    //return depth
    if(!node) return 0;
    const leftChildDepth = dfs(node.left);
    const rightChildDepth = dfs(node.right);

    const diameterOfThisNode = (leftChildDepth + rightChildDepth);
    const maxDepthOfThisNode = Math.max(leftChildDepth, rightChildDepth);
    
    maxDiameter = Math.max(maxDiameter, diameterOfThisNode);

    return maxDepthOfThisNode + 1;
  }

  dfs(root);

  return maxDiameter;
};
// @lc code=end


/*
1. 使用 dfs. 每個 node 我可以得到 left child 最深 d(node.left) 跟 right child 最深 d(node.right)
如果要轉彎到右樹的話 也就是不再往上 那
a. 這個 node 的 diameter 就是 d(left) + 1 + d(right) + 1
b. 這樣 node 的 最深 是 max(d(node.left), d(node.right)) + 1

所以我把這兩個數據 （max depth & diameter） 一路往上傳
運用 max depth 算出新的 diameter 並跟 max diameter 作比較
*/
