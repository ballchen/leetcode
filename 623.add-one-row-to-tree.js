/*
 * @lc app=leetcode id=623 lang=javascript
 *
 * [623] Add One Row to Tree
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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function(root, val, depth) {
  if(depth == 1) return new TreeNode(val, root, null);
  if(depth == 2) {
    root.left = new TreeNode(val, root.left, null);
    root.right = new TreeNode(val, null, root.right);
  } else {
    if(root.left) {
      root.left = addOneRow(root.left, val, depth - 1);
    }
    if(root.right) {
      root.right = addOneRow(root.right, val, depth - 1)
    }
  }
  return root;
};
// @lc code=end


/*
BFS solution

var addOneRow = function(root, val, depth) {
  if(depth == 1) {
    let newRoot = new TreeNode(val, root);
    return newRoot;
  }

  let arr = [root];
  let curDep = 1;
  let arrLength = arr.length;
  while(arr.length && (curDep < depth - 1)) {
    for(let i = 0; i < arrLength; i ++) {
      const node = arr.shift();
      if(node.left) {
        arr.push(node.left);
      }
      if(node.right) {
        arr.push(node.right);
      }
    }
    arrLength = arr.length;
    curDep += 1;
  }
  console.log(arr)
  
  
  for(let i = 0; i < arr.length; i++) {
    const node = arr[i];
    console.log(node)
    let newLeft = new TreeNode(val);
    let newRight = new TreeNode(val)
    newLeft.left = node.left;
    newRight.right = node.right;
    node.left = newLeft;
    node.right = newRight;

  }
  return root;
};
*/


/*
結果 recursive 超簡單 記得 depth -1
*/


