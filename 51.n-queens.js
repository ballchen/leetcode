/*
 * @lc app=leetcode id=51 lang=javascript
 *
 * [51] N-Queens
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  let colSet = new Set();
  let diagSet1 = new Set();
  let diagSet2 = new Set();
  
  let board = new Array(n).fill()

  let result = [];

  for(let i = 0; i < n; i ++) {
    board[i] = new Array(n).fill('.');
  }

  function backtrack(row) {
    if(row === n) {      
      result.push(board.slice().map(elem => elem.slice().join('')));
      return;
    }
   

    for(let i = 0; i < n; i ++) {
      if(
        colSet.has(i) ||
        diagSet1.has(row + i) ||
        diagSet2.has(row - i)
      ) {
        continue;
      }
      
    
      colSet.add(i);
      diagSet1.add(row + i);
      diagSet2.add(row - i);
      board[row][i] = 'Q';

      backtrack(row + 1);
      colSet.delete(i);
      diagSet1.delete(row + i);
      diagSet2.delete(row - i);
      board[row][i] = '.';
    }
  }

  backtrack(0);

  return result;
  
};
// @lc code=end



// solveNQueens(2)


/*

要找出對角線跟 x, y 的ID

*/