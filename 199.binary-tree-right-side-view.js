/*
 * @lc app=leetcode id=199 lang=javascript
 *
 * [199] Binary Tree Right Side View
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
 * @return {number[]}
 */
var rightSideView = function(root) {
  var res = [],i = 0;
  function preOrderWrap(node,i){
      var index = i;
      var preOrder = function(n){
          if(n){
              res[index++] = n.val;
              preOrderWrap(node.left, index);
              preOrderWrap(node.right, index);
          }  
      }
      preOrder(node ,i)
  }
  preOrderWrap(root,0);
  return res;
};
// @lc code=end

/*
recursive


*/

/*
BFS 每次都只處理 arr 的最後一個
if(!root) return [];
  let arr = [root];
  let arrLength = arr.length;
  let res = [];

  while(arr.length > 0) {
    let rightestNode = arr[arrLength - 1];
    res.push(rightestNode.val);

    for(let i = 0; i < arrLength; i++){
      const node = arr.shift();
      if(node.left) {
        arr.push(node.left);
      }
      if(node.right) {
        arr.push(node.right);
      }
    }

    arrLength = arr.length;
  }

  return res;
*/