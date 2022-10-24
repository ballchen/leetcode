/*
 * @lc app=leetcode id=863 lang=javascript
 *
 * [863] All Nodes Distance K in Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function(root, target, k) {
  let res = [];
  function traverse(node, depth) {
    
    if(!node) {
      return;
    }

    if(depth == 0) {
      res.push(node.val);
    }
    traverse(node.left, depth - 1);
    traverse(node.right, depth - 1);
  
  }
  function findTarget(node, depth) {
    if(!node) return -1;
    if(node.val === target.val) {
      traverse(node, k)
      return depth + 1;
    }
    
    let left = findTarget(node.left, depth);
    let right = findTarget(node.right, depth);
    // console.log("node", node.val, left, right, depth);
    if(left >= 0) {
      if(left === k) {
        res.push(node.val);
      } else if(left < k) {
        traverse(node.right, k - left - 1);
      } 
      return left + 1;
    }

    if(right >= 0) {
      if(right === k) {
        res.push(node.val);
      } else if(right < k) {
        traverse(node.left, k - right - 1);
      }
      return right + 1;
    }

    return -1;

  }

  findTarget(root, 0)

  return res;
};
// @lc code=end


/*
我不太想破壞 node 的結構
先 DFS 找到 target，回傳 left right
1. 向下：如果 target 有左樹 or 右樹, 向下 traverse 直到 depth 到 k
2. 向上：因為下層會回傳 left 跟 right 有沒有找到 target 以及 target 離這個 node 多深
        如果在左樹找到並且 k - 深度 >=  0，就要去找右樹 k - 深度 的目標，反之亦然


var distanceK = function(root, target, k) {
  let res = [];
  function traverse(node, depth) {
    
    if(!node) {
      return;
    }

    if(depth == 0) {
      res.push(node.val);
    }
    traverse(node.left, depth - 1);
    traverse(node.right, depth - 1);
  
  }
  function findTarget(node, depth) {
    if(!node) return -1;
    if(node.val === target.val) {
      traverse(node, k)
      return depth + 1;
    }
    
    let left = findTarget(node.left, depth);
    let right = findTarget(node.right, depth);
    // console.log("node", node.val, left, right, depth);
    if(left >= 0) {
      if(left === k) {
        res.push(node.val);
      } else if(left < k) {
        traverse(node.right, k - left - 1);
      } 
      return left + 1;
    }

    if(right >= 0) {
      if(right === k) {
        res.push(node.val);
      } else if(right < k) {
        traverse(node.left, k - right - 1);
      }
      return right + 1;
    }

    return -1;

  }

  findTarget(root, 0)

  return res;
};
*/

