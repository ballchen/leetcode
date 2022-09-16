/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
  let queue = [root.left, root.right];
  while(queue.length > 0) {
    let left = queue.shift()
    let right = queue.shift()
    if(left === null && right === null) {
      continue;
    }
    if(left === null || right === null) {
      return false;
    }
    if(left.val !== right.val) {
      return false;
    }
    queue.push(left.left, right.right);
    queue.push(left.right,right.left);
  }

  return true;
  
};
// @lc code=end


/*
1. 選其中一child樹先 mirror，然後比較 兩樹 是否一樣
var isSymmetric = function(root) {

  function mirror(node) {
    if(!node) return;
    mirror(node.left);
    mirror(node.right);
    [node.left, node.right] = [node.right, node.left];
  }

  function isSameTree(node1, node2) {
    if(!node1 && !node2) {
      return true;
    }
    return (
      ((node1 ? node1.val: null) === (node2 ? node2.val : null)) &&
      isSameTree(node1.left, node2.left) && 
      isSameTree(node1.right, node2.right)
    )
  }

  mirror(root.right);

  return isSameTree(root.left, root.right);

};

*/

/*
var isSymmetric = function(root) {
  if(!root) return true;
  function isLeftRightSymmetric(left, right) {
    if(left === null && right === null) {
      return true;
    }
    if(left === null || right === null ) {
      return false;
    }

    if(left.val !== right.val) {
      return false;
    }



    const isLLRRSymmetric = isLeftRightSymmetric(left.left, right.right);
    const isLRRLSymmetric = isLeftRightSymmetric(left.right, right.left);
    return isLLRRSymmetric && isLRRLSymmetric;
  }

  return isLeftRightSymmetric(root.left, root.right);
  
};
*/
