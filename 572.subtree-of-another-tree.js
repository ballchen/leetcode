/*
 * @lc app=leetcode id=572 lang=javascript
 *
 * [572] Subtree of Another Tree
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {

  function isSameTree(node1, node2) {
    if(!node1 && !node2) return true;
    if(!node1 || !node2 || node1.val !== node2.val) {
      return false;
    }
    return (
      isSameTree(node1.left, node2.left) &&
      isSameTree(node1.right, node2.right)
    )
  }

  function dfs(node) {
    if(!node) return false;
    if(node.val === subRoot.val && isSameTree(node, subRoot)) {
      return true;
    }
    return dfs(node.left) || dfs(node.right)
  }

  return dfs(root);
};

// @lc code=end

/*

var isSubtree = function(root, subRoot) {
  // find subRoot Head

  let queue = [root];
  let candidates = []

  function isSameTree(node1, node2) {
      if(!node1 && !node2) {
        return true;
      }
      return (
        (node1 ? node1.val : null) === (node2 ? node2.val : null) &&
        isSameTree((node1 && node1.left), (node2 && node2.left)) && 
        isSameTree((node1 && node1.right), (node2 && node2.right))
      )
  }

  while(queue.length) {
    let len = queue.length;
    for(let i = 0; i < len; ++ i) {
      const node = queue.shift();

      if(node.val == subRoot.val) {
        candidates.push(node);
      }
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }
  }

  if(!candidates.length) return false

  let result = false;
  for(let candidate of candidates) {
    result = result || isSameTree(candidate, subRoot)
  }
    return result
};
*/

