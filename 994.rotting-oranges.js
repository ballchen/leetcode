/*
 * @lc app=leetcode id=994 lang=javascript
 *
 * [994] Rotting Oranges
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
  let rottingOranges = [];
  let totalFreshOranges = 0
  let time = 0;

  function isFreshOrange(x, y) {
    try {
      if(grid[x][y] === 1) {
        return true;
      } else {
        return false;
      }
    } catch(error) {
      return false;
    }
  }

  function searchNearBy(x, y) {
    if(isFreshOrange(x-1, y)) {
      grid[x-1][y] = 2;
      rottingOranges.push([x-1, y]);
      totalFreshOranges -= 1;
    }
    if(isFreshOrange(x+1, y)) {
      grid[x+1][y] = 2;
      rottingOranges.push([x+1, y]);
      totalFreshOranges -= 1;
    }
    if(isFreshOrange(x, y-1)) {
      grid[x][y-1] = 2;
      rottingOranges.push([x, y-1]);
      totalFreshOranges -= 1;
    }
    if(isFreshOrange(x, y+1)) {
      grid[x][y+1] = 2;
      rottingOranges.push([x, y+1]);
      totalFreshOranges -= 1;
    }
  }

  for(let i = 0; i < grid.length; i++) {
    for(let j = 0; j < grid[i].length; j++) {
      if(grid[i][j] === 2) {
        rottingOranges.push([i, j])
      }

      if(grid[i][j] === 1) {
        totalFreshOranges += 1;
      }
    }
  }
  
  if(totalFreshOranges === 0) {
    return time;
  }

  let rottingOrangesLength = rottingOranges.length;
  while(rottingOranges.length) {
    for(let k = 0; k < rottingOrangesLength; k++) {
      const [x, y] = rottingOranges.shift();
      

      searchNearBy(x, y)
    }
    time += 1;
    rottingOrangesLength = rottingOranges.length;
    if(totalFreshOranges == 0) {
      break;
    }
  }

  return  totalFreshOranges > 0 ? -1 : time;
};

// @lc code=end

console.log(orangesRotting([[2,1,1],[1,1,0],[0,1,1]]))

/*
應該算是BFS 
用 stack 一次次儲存下一輪的橘子座標
stack 空了

注意有 -1 
[[2,1,1],[0,1,1],[1,0,1]]

var orangesRotting = function(grid) {
  let rottingOranges = [];
  let time = 0;

  function isFreshOrange(x, y) {
    try {
      if(grid[x][y] === 1) {
        return true;
      } else {
        return false;
      }
    } catch(error) {
      return false;
    }
  }

  for(let i = 0; i < grid.length; i++) {
    for(let j = 0; j < grid[i].length; j++) {
      if(grid[i][j] === 2) {
        if(isFreshOrange(i-1, j)) {
          rottingOranges.push([i-1, j]);
        }
        if(isFreshOrange(i+1, j)) {
          rottingOranges.push([i+1, j]);
        }
        if(isFreshOrange(i, j-1)) {
          rottingOranges.push([i, j-1]);
        }
        if(isFreshOrange(i, j+1)) {
          rottingOranges.push([i, j+1]);
        }
        
      }
    }
  }
  
  let rottingOrangesLength = rottingOranges.length;
  while(rottingOranges.length) {
    for(let k = 0; k < rottingOrangesLength; k++) {
      const [x, y] = rottingOranges[k]
      grid[x][y] = 2;
    }
    for(let k = 0; k < rottingOrangesLength; k++) {
      const [x, y] = rottingOranges.shift();

      if(isFreshOrange(x-1, y)) {
        rottingOranges.push([x-1, y]);
      }
      if(isFreshOrange(x+1, y)) {
        rottingOranges.push([x+1, y]);
      }
      if(isFreshOrange(x, y-1)) {
        rottingOranges.push([x, y-1]);
      }
      if(isFreshOrange(x, y+1)) {
        rottingOranges.push([x, y+1]);
      }
    }
    time += 1;
    rottingOrangesLength = rottingOranges.length;
  }

  for(let i = 0; i < grid.length; i++) {
    for(let j = 0; j < grid[i].length; j++) {
      if(grid[i][j] === 1) {
        return -1;
      }
    }
  }

  return time;
};
*/