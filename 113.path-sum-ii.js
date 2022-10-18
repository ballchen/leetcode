/*
 * @lc app=leetcode id=113 lang=javascript
 *
 * [113] Path Sum II
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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
  if(!root) {
    return [];
  }
  if(!root.left && !root.right) {
    if(root.val == targetSum) {
      return [[root.val]];
    } else {
      return [];
    }
  }
  let leftRes = [];
  let rightRes = [];
  if(root.left) {
    leftRes = pathSum(root.left, targetSum - root.val);
  } 
  if(root.right) {
    rightRes = pathSum(root.right, targetSum - root.val);
  }

  let res = [];

  for(let child of [...leftRes, ...rightRes]) {
    child.unshift(root.val);
    res.push(child);
  }

  return res;
  
};
// @lc code=end

