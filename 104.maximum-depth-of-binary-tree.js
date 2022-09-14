/*
 * @lc app=leetcode id=104 lang=javascript
 *
 * [104] Maximum Depth of Binary Tree
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
var maxDepth = function(root) {

  if(!root) return 0;
  let queue = [];
  queue.push(root);
  let depth = 0;

  while(queue.length) {
    const len = queue.length;
    depth ++;
    for(let i = 0; i < len; ++i) {
      const node = queue.shift();
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }
  
  }

  return depth;
};
// @lc code=end


/*
1. 簡單的 recursive 解法
var maxDepth = function(root) {
  if(!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
};

*/

/*
2. 使用 queue 一層一層的加 depth

var maxDepth = function(root) {

  if(!root) return 0;
  let queue = [];
  queue.push(root);
  let depth = 0;

  while(queue.length) {
    const len = queue.length;
    depth ++;
    for(let i = 0; i < len; ++i) {
      const node = queue.shift();
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }
  
  }

  return depth;
};
*/
