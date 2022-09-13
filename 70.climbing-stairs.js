/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  const savedAnswers = [0, 1, 2];
  if(n === 1 || n === 2) {
    return savedAnswers[n]
  }
  let pivot = 2;
  while(pivot <=  n) {
    pivot = pivot + 1;
    const newAnswer = savedAnswers[pivot - 1] + savedAnswers[pivot - 2];
    savedAnswers.push(newAnswer);
  }

  return savedAnswers[pivot - 1];
};
// @lc code=end


/*
f(1) = 1;
f(2) = 2;
f(n) = f(n-1) + f(n-2);
*/