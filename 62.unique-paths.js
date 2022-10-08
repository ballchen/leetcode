/*
 * @lc app=leetcode id=62 lang=javascript
 *
 * [62] Unique Paths
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  const dp = new Map();
  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      if (i === 0 || j === 0) {
        dp.set(`${i},${j}`, 1);
      } else {
        dp.set(`${i},${j}`, dp.get(`${i-1},${j}`) + dp.get(`${i},${j-1}`))
      }
    }
  }
  return dp.get(`${m-1},${n-1}`);
};

// @lc code=end

