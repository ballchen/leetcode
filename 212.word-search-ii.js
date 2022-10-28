/*
 * @lc app=leetcode id=212 lang=javascript
 *
 * [212] Word Search II
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
 class TrieNode {
  constructor() {
    this.children = new Map();
    this.wordEnd = false;
  }
}

var findWords = function(board, words) {
  let root = new TrieNode();
  let res = [];
  let visited = new Set();
  let MAX_ROW = board.length;
  let MAX_COL = board[0].length;
  let directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0]
  ]
  
  for(let word of words) {
    let node = root;
    for(let c of word) {
      if(!node.children.has(c)) {
        node.children.set(c, new TrieNode())
        
      }
      node = node.children.get(c);
    }
    node.wordEnd = true;
  }

  function search(node, s , row, col) {
    
    if(
      row < 0 || col < 0 ||
      row >= MAX_ROW || col >= MAX_COL ||
      visited.has(`${row},${col}`) ||
      !node ||
      !node.children.has(board[row][col])
    ) {
      return;
    }

    // console.log( s, row, col, board[row][col])

    node = node.children.get(board[row][col]);
    s = `${s}${board[row][col]}`
    
    visited.add(`${row},${col}`)
    

    if(node.wordEnd) {
      res.push(s);
    }

    // console.log('next', board[row][col],  node.children.get(board[row][col]))
    for(let direction of directions) {
      let nextRow = row + direction[0];
      let nextCol = col + direction[1];
      search(node, s, nextRow, nextCol);
    }

    visited.delete(`${row},${col}`)
  }


  for(let i = 0 ; i < board.length; i++) {
    for(let j = 0; j < board[0].length; j++) {
      search(root, '' , i ,j)
    }
  }

  return res;
};
// @lc code=end



console.log(
  findWords(
    [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]],
    ["oath","pea","eat","rain"]
  )
)