/*
 * @lc app=leetcode id=292 lang=javascript
 *
 * [292] Nim Game
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
 let cache = {
  0: false,
  1: true,
  2: true,
  3: true,
  4: false,
}

var canWinNim = function(n) {
  n = n % 4;
  if(cache[n] === undefined) {
    cache[n] = !canWinNim(n - 1) || !canWinNim(n - 2) || !canWinNim(n - 3);
  }
  console.log(n)
  return cache[n];
};

canWinNim(1348820612)
// @lc code=end

