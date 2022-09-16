/*
 * @lc app=leetcode id=338 lang=javascript
 *
 * [338] Counting Bits
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
  let results = [0]
  for(let i = 1; i <= n; i++) {
    results.push(results[parseInt(i / 2)] + i%2)
  }
  return results;
};

// @lc code=end

/*
TC: n log n 
var countBits = function(n) {
  let results = []
  function countOne(l) {
    let numsOfOne = 0;
    while(l > 0) {
      const digit  = l % 2
      if(digit === 1) numsOfOne += 1;
      l = parseInt(l / 2)
    }
    return numsOfOne;
  }

  for(let i = 0; i <= n; i++) {
    results.push(countOne(i))
  }
  return results
};
*/

/*
假設 x = 6 = 110 那 2x = 6*2 12  = 1100 (多向右shift 一個零) 那 1 的數量就會相同
那13 = 6*2 + 1 = 1100 + 1 , 就等於 6 時 1 的數量 + 1 個 1

f(x) = f(x/2) + isOdd ? 1 : 0
*/