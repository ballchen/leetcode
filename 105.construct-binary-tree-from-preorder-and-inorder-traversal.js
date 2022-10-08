/*
 * @lc app=leetcode id=105 lang=javascript
 *
 * [105] Construct Binary Tree from Preorder and Inorder Traversal
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if(!preorder.length) return null;
  if(preorder.length === 1) return new TreeNode(preorder[0], null, null);
  let root = new TreeNode(preorder[0], null, null);

  let rootIndexInInorder = inorder.indexOf(root.val);
  let leftInorder = inorder.slice(0, rootIndexInInorder);
  let rightInorder = inorder.slice(rootIndexInInorder + 1, inorder.length);


  let leftPreorder = preorder.slice(1, 1 + leftInorder.length);
  let rightPreorder = preorder.slice(1 + leftInorder.length, preorder.length);

  root.left = buildTree(leftPreorder, leftInorder);
  root.right = buildTree(rightPreorder, rightInorder);

  return root;
};
// @lc code=end

/*
1. root 一定是 preorder[0]
2. root.left 一定是 preorder[1]
3. 定位出 inorder 的 root 就可以把 inorder array 切成 left right inorder arrays
4. 因為 preorder 的 length 跟 inorder 的 length 一樣 所以我可以把 preorder 也切成兩半
5. 然後就可以遞迴
*/
