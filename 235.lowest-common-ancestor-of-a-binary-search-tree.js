/*
 * @lc app=leetcode id=235 lang=javascript
 *
 * [235] Lowest Common Ancestor of a Binary Search Tree
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  while(root) {
    if(root.val > p.val && root.val > q.val) {
      root = root.left;
    } else if(root.val < p.val && root.val < q.val) {
      root = root.right;
    } else {
      break;
    }

  }

  return root;
};
// @lc code=end


/*

var lowestCommonAncestor = function(root, p, q) {
  let same_nodes = [];
  function traverse(node, targetP, targetQ) {
    
    if(!node) return [false, false];
    const isPThisNode = node.val === targetP.val;
    const isQThisNode = node.val === targetQ.val;

    const [foundPInLeft, foundQInLeft] = traverse(node.left, targetP, targetQ);
    const [foundPInRight, foundQInRight] = traverse(node.right, targetP, targetQ);

    const foundP = (foundPInLeft || foundPInRight || isPThisNode);
    const foundQ = (foundQInLeft || foundQInRight || isQThisNode);

    if(foundP && foundQ) {
      same_nodes.push(node);
    }
    
    return [foundP, foundQ];
  }

  traverse(root, p, q);

  return same_nodes[0];
};
*/
/*

我這個寫法是一般的 tree 的都可以用
但是這題要用到 bst 的特性
*/

