/*
 * @lc app=leetcode id=202 lang=javascript
 *
 * [202] Happy Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let sum = 0;
  let visited = new Set();
  while(1) {
    if(n === 1) {
      return true;
    }
    // 如果有出現 cycle 的話 就 false;
    if(visited.has(n)) {
      return false;
    } else {
      visited.add(n);
    }

    sum = 0;
    while(n !== 0) {
      sum += (n % 10) * (n % 10);
      n = parseInt( n / 10 )
    }

    n = sum;
  }
};


// @lc code=end

/*

false 的情況會是 cycle 所以要用 visited 去紀錄有沒有遇過
*/

