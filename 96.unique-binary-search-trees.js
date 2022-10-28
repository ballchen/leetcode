/*
 * @lc app=leetcode id=96 lang=javascript
 *
 * [96] Unique Binary Search Trees
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
 var numTrees = function(n) {
  let cache = {1: 1, 2: 2};
  function helper(x) {
    if(x <= 1) {
      return 1;
    }
    if(cache[x]) {
      return cache[x];
    }
    let sum = 0;
    //注意這邊的條件
    for(let i = 1; i <= x; i++) {
      // 已 i 當作 root 
      // f(i) = f(x - i) + f(i - 1)
      sum += helper(x - i) * helper(i - 1);
    }
    cache[x] = sum;
    return sum;
  }

  return helper(n)
};

// @lc code=end
console.log(
  'test',
numTrees(10)
)

/*

f(i) = f(x - i) + f(i - 1)

注意 for 迴圈的條件並且加上 cache 去加速

*/

