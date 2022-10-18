/*
 * @lc app=leetcode id=48 lang=javascript
 *
 * [48] Rotate Image
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {
  let n = matrix.length;
  for(let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
      if(i == j) {
        break;
      }
    }
  }
  for(let row of matrix) {
    row.reverse();
  }
};
// @lc code=end

