/*
 * @lc app=leetcode id=54 lang=javascript
 *
 * [54] Spiral Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function(matrix) {
  let visited = new Set();
  let x = 0;
  let y = 0;
  dir = [1, 0];
  let result = [];
  while(1) {
    result.push(matrix[y][x])
    visited.add(`${x},${y}`)
    if(
      x + dir[0] >= matrix[0].length ||
      x + dir[0] < 0 ||
      y + dir[1] >= matrix.length ||
      y + dir[1] < 0 ||
      visited.has(`${x + dir[0]},${y + dir[1]}`)
    ) {
      if(dir[0] == 1 && dir[1] == 0) {
        dir = [0, 1]
      } else if(dir[0] == 0 && dir[1] == 1) {
        dir = [-1, 0]
      } else if(dir[0] == -1 && dir[1] == 0) {
        dir = [0, -1]
      } else if(dir[0] == 0 && dir[1] == -1) {
        dir = [1, 0]
      }

      if(
        x + dir[0] >= matrix[0].length ||
        x + dir[0] < 0 ||
        y + dir[1] >= matrix.length ||
        y + dir[1] < 0 ||
        visited.has(`${x + dir[0]},${y + dir[1]}`)
      ) {
        break;
      }   
    }


    x += dir[0];
    y += dir[1];

  }

  return result;
  
};
// console.log(
// spiralOrder([[1,2,3],[4,5,6],[7,8,9]])
// )
// @lc code=end

