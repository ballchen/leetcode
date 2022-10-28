/*
 * @lc app=leetcode id=662 lang=javascript
 *
 * [662] Maximum Width of Binary Tree
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
 * @return {number}
 */
var widthOfBinaryTree = function(root) {
  if(!root) {
    return 0;
  }
  //node, pos
  const array = [[root, 0]]
  let maxWidth = 0;
  
  while(array.length) {
    let len = array.length;
    let minPos = Infinity;
    let maxPos = 0;
    
    for(let i = 0; i < len; i++) {
      let [node, pos] = array.shift();
      const normalizedIndex = pos - minPos 
      minPos = Math.min(pos, minPos);
      maxPos = Math.max(pos, maxPos);

      if(node.left) {
        array.push([node, normalizedIndex * 2 ]);
      }
      
      if(node.right) {
        array.push([node, normalizedIndex * 2 + 1]);
      }
    }

    let  widthOfThisLevel = maxPos - minPos + 1;

    if(len === 1) {
      widthOfThisLevel = 1;
    }

    maxWidth = Math.max(widthOfThisLevel, maxWidth);
  }

  return maxWidth;
};
// @lc code=end


/*
BFS 會 TLE

var widthOfBinaryTree = function(root) {
  if(!root) {
    return 0;
  }
  let array = [root];
  let str = '';
  let len = array.length;
  let maxWidth = 1;
  while(array.length) {
    let allChildNull = true;

    for(let i = 0; i < len; i ++) {
      let node = array.shift();
      if(node) {
        if(node.left) {
          array.push(node.left);
          str += "o"
          allChildNull = false;
        } else if(i > 0) {
          array.push(new TreeNode());
          str += " "
        }

        if(node.right) {
          array.push(node.right)
          str += "o"
          allChildNull = false;
        } else if(i < len - 1){
          array.push(new TreeNode());
          str += " "
        }
      }
      
    }

    // console.log('str', str, str.trim().length);
    maxWidth = Math.max(maxWidth, str.trim().length);

    if(allChildNull) {
      break;
    }

    len = array.length;
    str = '';

  }

  return maxWidth;
};
*/