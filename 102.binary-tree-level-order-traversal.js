/*
 * @lc app=leetcode id=102 lang=javascript
 *
 * [102] Binary Tree Level Order Traversal
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

/*
  // recursive method : passing level to recursive function;
  var levelOrder = function(root) {
  const output = []
  if(!root) return [];
  function traverse(node, level) {
    if(!node) return;
    if(output[level] === undefined) {
      output[level] = [];
    }

    output[level].push(node.val);

    traverse(node.left, level + 1);
    traverse(node.right, level + 1);
  }
    
  traverse(root, 0);
  return output;
};
*/



var levelOrder = function(root) {
  const output = []
  if(!root) return [];
  let level = 0;
  let queue = [];
  queue.push(root);

  while(queue.length > 0) {
    let level_queue = [...queue]
    queue = []

    while(level_queue.length > 0) {
      const node = level_queue.shift();

      if(!node) continue;

      if(output[level] === undefined) {
        output[level] = [];
      }
      output[level].push(node.val);
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }


    level += 1;
  }

  return output;
};
// @lc code=end

/*
Challenge: try doing this in bfs way

BFS 
Use two while
首先從 root 開始，先把 root 推進 mother queue
第一個 while 把 mother queue 的 nodes 推進 level queue
進到第二個 while 一個一個 dequeue 處理 level queue 裡的 node，並把該 node 的下一個 level 的 child 推到 mother queue 


記得用 shift
*/

/* 
Recursive 
var levelOrder = function(root) {
    let results = [];
    function dfs(node, level) {
        if(!node) return;
        if(!results[level]) {
            results.push([]);
        }
        results[level].push(node.val);
        dfs(node.left, level + 1);
        dfs(node.right, level + 1);
    }
    
    dfs(root, 0)
    
    return results;
};
*/


