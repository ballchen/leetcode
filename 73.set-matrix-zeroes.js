/*
 * @lc app=leetcode id=73 lang=javascript
 *
 * [73] Set Matrix Zeroes
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  let processRows = new Set();
  let processCols = new Set();

  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[0].length; j++) {
      if(matrix[i][j] === 0) {

        if(!processRows.has(i)) {
          processRows.add(i);
        }
        if(!processCols.has(j)) {
          processCols.add(j);
        }
      }
    }
  }

  processRows.forEach(row => {
    for(let i = 0; i < matrix[0].length; i++) {
      matrix[row][i] = 0;
    }
  });
  processCols.forEach(col => {
    for(let i = 0; i < matrix.length; i++) {
      matrix[i][col] = 0;
    }
  });
};

// @lc code=end

