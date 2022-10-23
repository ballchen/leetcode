/*
 * @lc app=leetcode id=74 lang=javascript
 *
 * [74] Search a 2D Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  let rowLen = matrix.length;
  let colLen = matrix[0].length;

  if(target < matrix[0][0] || target > matrix[rowLen-1][colLen-1]) {
    return false;
  }

  let l = 0;
  let r = rowLen - 1;
  let targetRow = -1;
  while(l <= r) {
    let mid = Math.floor((l + r) / 2);
    if(matrix[mid][0] === target) {
      return true;
    } else if(matrix[mid][0] > target) {
      r = mid - 1;
    } else {

      if(matrix[mid][colLen - 1] === target) {
        return true;
      } else if(matrix[mid][colLen - 1] > target ) {
        targetRow = mid;
        break;
      } else {
        l = mid + 1;
      }
    }
  }
  if(targetRow === -1) {
    return false
  }


  l = 0;
  r = colLen - 1;
  while(l <= r) {
    console.log(l, r)
    let mid = Math.floor((l + r) / 2);
    if(matrix[targetRow][mid] === target) {
      return true;
    } else if(matrix[targetRow][mid] > target) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }


  return false;

};

// @lc code=end

