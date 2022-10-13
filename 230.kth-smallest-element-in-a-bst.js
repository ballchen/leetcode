/*
 * @lc app=leetcode id=230 lang=javascript
 *
 * [230] Kth Smallest Element in a BST
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
 * @return {number}
 */
var kthSmallest = function(root, k) {
  let cur = root;
  let stack = [];
  while(cur || stack.length) {
    while(cur) {
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack.pop();
    k--;
    if(k == 0) {
      return cur.val;
    }

    cur = cur.right;
  }
};
// @lc code=end

/*
recursive solution
var kthSmallest = function(root, k) {
  let pivot = 0;
  let target = null;
  function traverse(node) {
    if(!node) {
      return;
    }

    traverse(node.left);

    if(pivot == k ) {
      return;
    }
    pivot += 1;
    target = node.val;

    traverse(node.right);
  }
  traverse(root);

  return target;
};
*/


