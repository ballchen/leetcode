/*
 * @lc app=leetcode id=79 lang=javascript
 *
 * [79] Word Search
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  let directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];
  for(let i = 0; i < board.length; i++) {
    for(let j = 0; j < board[i].length; j++) {
      if(board[i][j] === word[0]) {
        function find(x, y, str) {
            
          if(!str.length) { 
            return true;
          }
          if(
            !(x < board[0].length &&
            y < board.length &&
            x >= 0 &&
            y >= 0)
          ) {
            return false;
          }

          if(board[y][x] !== str[0]) {
            return false;
          }
          let childFound = false;
          
          let ch = board[y][x];
          board[y][x] = '*'
          for(let dir of directions) {
            childFound = childFound || find(x + dir[0], y + dir[1], str.substring(1));
          }
          board[y][x] = ch;
          
          return childFound;
        }
        if(find(j, i, word)) {
          return true;
        }
        
      }
    }
  }
  return false;
};
// @lc code=end



console.log(
  exist([["a","b"],["c","d"]], 'acdb')
  )


/*
brute force 覺得會暴時間

O(MN * L * dir(4))

var exist = function(board, word) {
  let directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];
  for(let i = 0; i < board.length; i++) {
    for(let j = 0; j < board[i].length; j++) {
      if(board[i][j] === word[0]) {
        function find(x, y, str) {
            
          if(!str.length) { 
            return true;
          }
          if(
            !(x < board[0].length &&
            y < board.length &&
            x >= 0 &&
            y >= 0)
          ) {
            return false;
          }

          if(board[y][x] !== str[0]) {
            return false;
          }
          let childFound = false;
          
          let ch = board[y][x];
          board[y][x] = '*'
          for(let dir of directions) {
            childFound = childFound || find(x + dir[0], y + dir[1], str.substring(1));
          }
          board[y][x] = ch;
          
          return childFound;
        }
        if(find(j, i, word)) {
          return true;
        }
        
      }
    }
  }
  return false;
};
*/