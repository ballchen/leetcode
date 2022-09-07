/*
 * @lc app=leetcode id=103 lang=javascript
 *
 * [103] Binary Tree Zigzag Level Order Traversal
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  let mother_queue = [root];
  const output = []
  let level = 0;

  while(mother_queue.length > 0) {
    let level_queue = [...mother_queue];
    mother_queue = [];
    while(level_queue.length > 0) {
      const node = level_queue.pop();
      if(!node) continue;
      if(output[level] === undefined) {
        output[level] = [];
      }


      /* if unshift is allowed  */
      /* 

      let level_queue = [...mother_queue];
      mother_queue = [];
      while(level_queue.length > 0) {
        const node = level_queue.shift();
        if(!node) continue;
        if(output[level] === undefined) {
          output[level] = [];
        }
        if(level%2 === 0) {
          output[level].push(node.val)
        } else {
          output[level].unshift(node.val)          
        }
        if(node.left) mother_queue.push(node.left);
        if(node.right) mother_queue.push(node.right);
      }
      */

      

      if(level%2 === 0) {
        output[level].push(node.val)
        if(node.left) mother_queue.push(node.left);
        if(node.right) mother_queue.push(node.right);
        
      } else {
        output[level].push(node.val)
        if(node.right) mother_queue.push(node.right);
        if(node.left) mother_queue.push(node.left);
      }
    }

    level += 1;
  }

  return output;
};
// @lc code=end

/*

What if you can't use unshift

這樣的話不能用 queue 要用 stack 來作
*/

