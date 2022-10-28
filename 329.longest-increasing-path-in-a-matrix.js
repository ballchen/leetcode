/*
 * @lc app=leetcode id=329 lang=javascript
 *
 * [329] Longest Increasing Path in a Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
  let dp = new Array(matrix.length);
  let max = 1;
  for(let k = 0; k< dp.length; k ++) {
    dp[k] = new Array(matrix[0].length).fill(1);
  }
  console.log(dp)
  let nodes = [];
  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[0].length; j++) {
      nodes.push({
        pos: [i, j],
        val: matrix[i][j],
      })

    }
  }
  

  nodes.sort((a, b) => {
    return a.val - b.val
  })
  console.log(nodes)

  for(let node of nodes) {
    let [i, j] = node.pos;
    if(
      i + 1 < matrix.length &&
      matrix[i + 1][j] > matrix[i][j]
    ) {
      dp[i + 1][j] = Math.max(1 + dp[i][j], dp[i+1][j]);
      max = Math.max(max, dp[i + 1][j])
    }
    if(
      i - 1 >= 0 &&
      matrix[i - 1][j] > matrix[i][j]
    ) {
      dp[i - 1][j] = Math.max(1 + dp[i][j], dp[i-1][j]);
      max = Math.max(max, dp[i - 1][j])
    }
    if(
      j + 1 < matrix[0].length &&
      matrix[i][j+1] > matrix[i][j]
    ) {
      dp[i][j+1] = Math.max(1 + dp[i][j], dp[i][j+1]);
      max = Math.max(max, dp[i][j+1])
    }
    if(
      j - 1 >= 0 &&
      matrix[i][j-1] > matrix[i][j]
    ) {
      dp[i][j-1] = Math.max(1 + dp[i][j], dp[i][j-1]);
      max = Math.max(max, dp[i][j-1])
    }
  }
  console.log(dp, max)
  return max;
  
};
// @lc code=end

longestIncreasingPath([[9,9,4],[6,6,8],[2,1,1]]);

