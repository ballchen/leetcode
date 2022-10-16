/*
 * @lc app=leetcode id=297 lang=javascript
 *
 * [297] Serialize and Deserialize Binary Tree
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
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
 var serialize = function(root) {
  if(!root) return '';
  let res = [];
  let array = [root];

  while(array.length) {
    let node = array.shift();

    if(node == null) {
      res.push('null');
      continue;
    }

    res.push(node.val);
    array.push(node.left);
    array.push(node.right);
  }

  for(let i = res.length - 1; i >= 0; i--) {
    if(res[i] === 'null') {
      res.splice(i, 1);
    } else {
      break;
    }
  }

  return res.toString();
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  if(!data) {
    return null;
  }


  let array = data.split(',');

  let root = new TreeNode(parseInt(array[0]));
  let queue = [root];

  let i = 1;
  while(i < array.length) {
    let parent = queue.shift();
    if(array[i] !== 'null') {
      let newNode = new TreeNode(parseInt(array[i]))
      parent.left = newNode;
      queue.push(newNode);
    }
    i++;
    if(array[i] !== 'null' && i !== array.length) {
      let newNode = new TreeNode(parseInt(array[i]))
      parent.right = newNode;
      queue.push(newNode);
    }

    i++;
  }

  

  return root;
}


/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

