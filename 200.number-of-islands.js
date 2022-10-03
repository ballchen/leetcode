/*
 * @lc app=leetcode id=200 lang=javascript
 *
 * [200] Number of Islands
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
  function traverse(x, y) {
    if(grid[x][y] === '0') {
      return;
    }

    grid[x][y] = '0';
    
    if(x+1 <= grid.length - 1) {
      traverse(x+1, y);
    }

    if(x - 1 >= 0) {
      traverse(x-1, y)
    }

    if(y+1 <= grid[x].length - 1) {
      traverse(x, y+1)
    }

    if(y - 1 >= 0) {
      traverse(x, y-1)
    }

    
  }

  let islands = 0;

  for(let i = 0; i < grid.length; ++i) {
    for(let j = 0; j < grid[i].length; ++j) {
      if(grid[i][j] === '1') {
        islands += 1;
        traverse(i, j);
      }
    }
  }

  return islands;
};
// @lc code=end


/*
遇到1 traverse 直到 遇到 0, 走過的全都補 0 以免重複
*/